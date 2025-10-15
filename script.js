document.addEventListener("DOMContentLoaded", () => {
    (function () {
        let playing = false;
        let timer = 0;
        let timeInterval;
        let turnCount = 0;
        let matchedCards = 0;

        function startGame(cardAmount) {
            timer = 0;
            turnCount = 0;
            matchedCards = 0;
            updateTimer();
            clearInterval(timeInterval);
            timeInterval = setInterval(updateTimer, 1000);
            createCards(cardAmount);
            shuffleCards();
            updateTurnCount();
        }

        function updateTimer() {
            const timerText = document.getElementById("timer");
            timer++;
            timerText.textContent = timer;
        }

        function stopGame(option) {
            clearInterval(timeInterval);
            if (option == 1) {
                const cardsContainer = document.querySelector('.cards_container');
                cardsContainer.innerHTML = '';
            }
            playing = false;
        }

        function createCards(cardAmount) {
            const cardsContainer = document.querySelector('.cards_container');
            cardsContainer.innerHTML = '';

            const cardValues = Array.from({ length: cardAmount / 2 }, (_, i) => i + 1);
            const allValues = [...cardValues, ...cardValues];

            allValues.forEach(value => {
                const card = document.createElement('div');
                card.classList.add('card');
                card.dataset.value = value;

                const cardInner = document.createElement('div');
                cardInner.classList.add('card-inner');

                const cardFront = document.createElement('div');
                cardFront.classList.add('card-front');
                cardFront.textContent = value;

                const cardBack = document.createElement('div');
                cardBack.classList.add('card-back');
                cardBack.textContent = '?';

                cardInner.appendChild(cardFront);
                cardInner.appendChild(cardBack);
                card.appendChild(cardInner);
                card.addEventListener('click', flipCard);

                cardsContainer.appendChild(card);
            });
        }

        function shuffleCards() {
            const cardsContainer = document.querySelector('.cards_container');
            const cards = Array.from(cardsContainer.querySelectorAll('.card'));
            cards.sort(() => Math.random() - 0.5);
            cards.forEach(card => cardsContainer.appendChild(card));
        }

        function flipCard() {
            const flippedCards = getFlippedCards();

            if (flippedCards.length >= 2 || this.classList.contains('flipped')) return;

            this.classList.add('flipped');

            const newFlippedCards = [...flippedCards, this];

            if (newFlippedCards.length === 2) {
                turnCount++;
                updateTurnCount();
                checkForMatch(newFlippedCards);
            } else {
                setFlippedCards(newFlippedCards);
            }
        }

        function checkForMatch(flippedCards) {
            const [card1, card2] = flippedCards;
            if (card1.dataset.value === card2.dataset.value) {
                setTimeout(() => {
                    card1.querySelector('.card-front').classList.add("green");
                    card2.querySelector('.card-front').classList.add("green");
                    setTimeout(() => {
                        card1.classList.add("matched");
                        card2.classList.add("matched");
                        matchedCards += 2;
                        setFlippedCards([]);
                        if (matchedCards === document.querySelectorAll('.card').length) {
                            stopGame(0);
                            alert(`¡Felicidades! Has completado el juego en ${turnCount} turnos y ${timer} segundos.`);
                        }
                    }, 1000);
                }, 1000);
            } else {
                setTimeout(() => {
                    card1.classList.remove('flipped');
                    card2.classList.remove('flipped');
                    setFlippedCards([]);
                }, 2000);
            }
        }

        function updateTurnCount() {
            const turnCountText = document.getElementById('turn-count');
            turnCountText.textContent = turnCount;
        }

        function getFlippedCards() {
            return Array.from(document.querySelectorAll('.card.flipped')).filter(card => !card.classList.contains('matched'));
        }

        function setFlippedCards(flippedCards) {
            document.querySelectorAll('.card.flipped').forEach(card => {
                if (!flippedCards.includes(card)) {
                    card.classList.remove('flipped');
                }
            });
            flippedCards.forEach(card => {
                if (!card.classList.contains('flipped')) {
                    card.classList.add('flipped');
                }
            });
        }

        const cardButtons = document.getElementsByClassName("btn_option");
        const playButton = document.getElementById("play_button");
        const restartButton = document.getElementById("restart_button");

        Array.from(cardButtons).forEach(button => {
            button.addEventListener("mouseenter", () => {
                button.classList.add("hover");
            });
            button.addEventListener("mouseleave", () => {
                button.classList.remove("hover");
            });
            button.addEventListener("click", () => {
                Array.from(cardButtons).forEach(btn => {
                    btn.classList.remove("active");
                });
                button.classList.add("active");
            });
        });

        playButton.addEventListener("click", () => {
            const activeButton = document.querySelector(".btn_option.active");

            if (activeButton == null && playing == false) {
                alert("Debes seleccionar la cantidad de cartas.");
            } else if (playing == false) {
                activeButton.classList.remove("active");
                const numberOfCards = parseInt(activeButton.id.split('-')[1], 10);
                playing = true;
                startGame(numberOfCards);
            } else if (playing == true) {
                alert("Juego en proceso.");
                activeButton.classList.remove("active");
            }
        });

        restartButton.addEventListener("click", () => {
            if (playing == true) {
                const answer = confirm("Estas seguro de reiniciar el juego actual?");
                if (answer) {
                    stopGame(1);
                }
            } else {
                alert("No hay juego en proceso.");
            }
        });

    })();
});

