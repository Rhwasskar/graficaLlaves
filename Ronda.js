import Lucha from './Lucha';
import Competidor from './competidor';
import Math from 'Math';

class Ronda {
    nombre= null;
    competidores = [];
    luchas = [];



    constructor(listaCompetidores){
        // this.nombre = nombre;
        this.competidores = listaCompetidores;
        this.luchas = [];
        // libre: Competidor = c =>{
        //     if (listaCompetidores%2)
        //         c= listaCompetidores[listaCompetidores.length-1];
        // }
        ganadores : Competidor=[];
        ganadores.length = listaCompetidores%2? Math.trunc(listaCompetidores/2)+1 : listaCompetidores/2;

        if (listaCompetidores.length%2)
            ganadores[0] =listaCompetidores[listaCompetidores.length-1];
    }

    armarPeleas(){
        let a =0;
        for (i=0; i<this.competidores.length/2;i++){
            
            while (this.luchas[i].length<2){
                this.luchas[i].push(this.competidores[a]);
                a++;
            }
        }
    }

    agregarCompetidor(competidor){
        this.competidores.push(competidor)
    }



    
}