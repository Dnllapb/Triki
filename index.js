
//Variables
let turno = 0;
const tablero = [];

///Funcion
const botonPulsado = (e,pos) => {
turno++;
const btn = e.target;

const letra = turno%2 ? 'salmon' : 'black'

btn.style.backgroundColor = letra;
tablero[pos] = letra;

if (gano()) {
    alert('Ganaste ' + letra);
    resetTablero();
}


}
 
const gano = () =>{
    if(tablero [0] == tablero[1] && tablero [0] == tablero[2] && tablero [0])
        {
            return true;
        }
    else if (tablero [3] == tablero[4] && tablero [3] == tablero[6] && tablero [3])
        {
            return true;
        }
    else if (tablero [6] == tablero[7] && tablero [6] == tablero[8] && tablero [6])
       {
            return true;
       }
    else if (tablero [0] == tablero[3] && tablero [0] == tablero[6] && tablero [0])
        {
             return true;
        }

    else if (tablero [1] == tablero[4] && tablero [1] == tablero[7] && tablero [1])
        {
            return true;
        }
    else if (tablero [2] == tablero[4] && tablero [2] == tablero[8] && tablero [2])
        {
            return true;
        }

    else if (tablero [0] == tablero[4] && tablero [0] == tablero[8] && tablero [0])
        {
            return true;
        }
        else if (tablero [2] == tablero[4] && tablero [2] == tablero[6] && tablero [2])
        {
            return true;
        }

     return false;
}

const resetTablero = () => {
    // Resetea el tablero y el turno
    turno = 0;
    for (let i = 0; i < 9; i++) {
        tablero[i] = null;
    }


    document.querySelectorAll('button').forEach(btn => {
        btn.style.backgroundColor = ''; // Restablece el color de fondo
    })

}
document.querySelectorAll('button').forEach(
    (obj,i)=> obj.addEventListener('click',(e) => botonPulsado(e,i)));
