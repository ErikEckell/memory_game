# 🧠 Memorice Web — Juego de Memoria
### 💻 Proyecto: Memorice (Web)

---

## 🇪🇸 Español

Juego Memorice (memoria/parejas) implementado para ejecutarse en un navegador. El objetivo es encontrar pares iguales volteando dos tarjetas por turno. El jugador busca terminar con la menor cantidad de turnos y en el menor tiempo.

### 🔹 Requisitos del proyecto (cumplidos / a respetar)
- Una **única vista** (un solo archivo `index.html`) que contiene la estructura del juego.
- **Todo el JavaScript debe estar en archivos `.js` separados** (no dentro del HTML) y seguir el **paradigma funcional**.
- **Todo el estilo en archivos `.css`** (sin estilo inline en el HTML).
- Opciones de número de tarjetas: **8, 16, 32**.
- Tarjetas con **colores y figuras** diferenciables.
- Mostrar siempre **tiempo** (segundos) y **cantidad de turnos**.
- Las cartas seleccionadas se mantienen abiertas **2 segundos** antes de voltearlas si no son pareja; durante esos 2s el jugador no puede iniciar otro turno.
- El juego termina cuando no quedan cartas en el tablero.

### 🛠️ Ejecutar
1. Clona el repositorio:
```bash
git clone https://github.com/ErikEckell/memory_game
cd memorice-web
```
2. Abrir `index.html` en un navegador (doble clic o `file://`), o servirlo con un servidor estático simple para evitar restricciones de CORS (opcional):
```bash
# usando Python 3
python -m http.server 8000
# luego abrir http://localhost:8000
```

### ✅ Puntos importantes para la entrega
- Asegúrate que no haya código JS dentro de `index.html` y que el CSS esté sólo en `css/styles.css`.
- El juego debe soportar cambiar entre 8/16/32 tarjetas antes de iniciar una partida.
- Implementar bloqueo de input durante los 2 segundos después de seleccionar dos cartas no coincidentes.
- Mantener un historial mínimo (opcional): mejores tiempos por tamaño de tablero.

### 👥 Autor
**Erik Eckell**  
Estudiante de Ingeniería Civil en Ciencias de la Computación  
Universidad de los Andes  
📫 [epeckell@miuandes.cl](mailto:epeckell@miuandes.cl)

---

## 🇬🇧 English

Memorice (memory/pairs) game implemented to run in a web browser. The goal is to find matching pairs by flipping two cards per turn. The player aims to finish with the fewest turns and in the shortest time.

### 🔹 Project requirements (to follow)
- A **single view** (`index.html`) containing the game structure.
- **All JavaScript must be in separate `.js` files** (no inline JS) and follow the **functional programming paradigm**.
- **All styling in `.css` files** (no inline styles).
- Card count options: **8, 16, 32**.
- Cards must have clearly distinguishable **colors and shapes**.
- Always display **time (seconds)** and **turn count**.
- Selected cards remain face-up for **2 seconds** before flipping back if they do not match; input must be disabled during that time.
- Game ends when there are no cards left.

### 🛠️ Run
Open `index.html` in a browser or serve the folder with a static server:
```bash
python -m http.server 8000
# open http://localhost:8000
```

### ✅ Delivery checklist
- No JS in `index.html`; CSS only in external file(s).
- Game options for 8/16/32 cards available before starting.
- Input locked for 2 seconds after two non-matching selections.
- Time and turns always visible.

### 👥 Author
**Erik Eckell**  
Computer Science Engineering Student  
Universidad de los Andes  
📫 [epeckell@miuandes.cl](mailto:epeckell@miuandes.cl)

