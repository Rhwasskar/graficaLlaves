// //--------------------CLASES ----------------------------------------------------------
class Ronda {
    nombre = null;
    competidores = [];
    luchas = [];
    ganadores = [];
    clase = ['round'];


    constructor(listaCompetidores) {

        this.competidores = listaCompetidores;
        this.luchas = [];
        // libre: Competidor = c =>{
        //     if (listaCompetidores%2)
        //         c= listaCompetidores[listaCompetidores.length-1];
        // }

        // this.ganadores.length = (listaCompetidores.length%2) ? Math.trunc(listaCompetidores/2)+1 : listaCompetidores/2;

    }

    // armarPeleas(){
    //     let a =0;
    //     for (i=0; i<this.competidores.length/2;i++){

    //         while (this.luchas[i].length<2){
    //             this.luchas[i].push(this.competidores[a]);
    //             a++;
    //         }
    //     }
    // }

    agregarCompetidor(competidor) {
        this.competidores.push(competidor)
    }




}

// //--------------------VARIABLES ----------------------------------------------------------
//Objeto con alumnos hardCodeado
inscriptos = [{ "Escuela": "ASOC 3 de FEBRERO CiAT - Anderson Quinteros", "Apellido": "Coria", "Nombre": "Milagros", "Rango_Edad": "Infantil( 10 a 11 años)", "Sexo": "Femenino", "Graduacion": "Kyu_B ( 7°, 6° o 5° Gup) - VERDE", "Participacion": "Formas", "Peso": "Formas", "Ingresado": "Online" }, { "Escuela": "ASOC 3 de FEBRERO CiAT - Anderson Quinteros", "Apellido": "García", "Nombre": "Catalina", "Rango_Edad": "Infantil( 10 a 11 años)", "Sexo": "Femenino", "Graduacion": "Kyu_B ( 7°, 6° o 5° Gup) - VERDE", "Participacion": "Formas", "Peso": "Formas", "Ingresado": "Online" }, { "Escuela": "ASOC 3 de FEBRERO CiAT - Anderson Quinteros", "Apellido": "Llanos García", "Nombre": "Michael", "Rango_Edad": "Juvenil (15 a 17 años)", "Sexo": "Masculino", "Graduacion": "Kyu_B ( 7°, 6° o 5° Gup) - VERDE", "Participacion": "Lucha", "Peso": 67, "Ingresado": "Online" }, { "Escuela": "ASOC 3 de FEBRERO CiAT - Anderson Quinteros", "Apellido": "Marques", "Nombre": "Camila Martina", "Rango_Edad": "Infantil( 10 a 11 años)", "Sexo": "Femenino", "Graduacion": "Kyu_A ( 10°, 9° o 8° Gup) - AMARILLO", "Participacion": "Lucha, Formas", "Peso": 41, "Ingresado": "Online" }, { "Escuela": "ASOC 3 de FEBRERO CiAT - Anderson Quinteros", "Apellido": "Martínez González", "Nombre": "Axel", "Rango_Edad": "Cadete(12 a 14 años)", "Sexo": "Masculino", "Graduacion": "Kyu_B ( 7°, 6° o 5° Gup) - VERDE", "Participacion": "Lucha", "Peso": 65, "Ingresado": "Online" }, { "Escuela": "ASOC 3 de FEBRERO CiAT - Anderson Quinteros", "Apellido": "Martínez Quispe", "Nombre": "Andy Lautaro", "Rango_Edad": "Pre-Competitivo(Hasta 10años)", "Sexo": "Masculino", "Graduacion": "Kyu_B ( 7°, 6° o 5° Gup) - VERDE", "Participacion": "Lucha, Formas", "Peso": 33, "Ingresado": "Online" }, { "Escuela": "ASOC 3 de FEBRERO CiAT - Anderson Quinteros", "Apellido": "Martínez Quispe", "Nombre": "Andy Lautaro", "Rango_Edad": "Pre-Competitivo(Hasta 10años)", "Sexo": "Masculino", "Graduacion": "Kyu_B ( 7°, 6° o 5° Gup) - VERDE", "Participacion": "Lucha, Formas", "Peso": 33, "Ingresado": "Online" }, { "Escuela": "ASOC 3 de FEBRERO CiAT - Anderson Quinteros", "Apellido": "Oxa", "Nombre": "Nahiara Martina", "Rango_Edad": "Infantil( 10 a 11 años)", "Sexo": "Femenino", "Graduacion": "Kyu_A ( 10°, 9° o 8° Gup) - AMARILLO", "Participacion": "Lucha, Formas", "Peso": 33.5, "Ingresado": "Online" }, { "Escuela": "ASOC 3 de FEBRERO CiAT - Anderson Quinteros", "Apellido": "Puma Quispe", "Nombre": "Brady Jeffrey", "Rango_Edad": "Pre-Competitivo(Hasta 10años)", "Sexo": "Masculino", "Graduacion": "Kyu_B ( 7°, 6° o 5° Gup) - VERDE", "Participacion": "Lucha, Formas", "Peso": 50, "Ingresado": "Online" }, { "Escuela": "ASOC 3 de FEBRERO CiAT - Anderson Quinteros", "Apellido": "Rivas Coronel", "Nombre": "Sebastián", "Rango_Edad": "Juvenil (15 a 17 años)", "Sexo": "Masculino", "Graduacion": "Kyu_A ( 10°, 9° o 8° Gup) - AMARILLO", "Participacion": "Lucha", "Peso": 56.5, "Ingresado": "Online" }, { "Escuela": "ASOC 3 de FEBRERO CiAT - Anderson Quinteros", "Apellido": "Saba", "Nombre": "Agustín", "Rango_Edad": "Infantil( 10 a 11 años)", "Sexo": "Masculino", "Graduacion": "Kyu_B ( 7°, 6° o 5° Gup) - VERDE", "Participacion": "Lucha, Formas", "Peso": 52, "Ingresado": "Online" }, { "Escuela": "ASOC 3 de FEBRERO CiAT - Anderson Quinteros", "Apellido": "Saba", "Nombre": "Agustín", "Rango_Edad": "Infantil( 10 a 11 años)", "Sexo": "Masculino", "Graduacion": "Kyu_B ( 7°, 6° o 5° Gup) - VERDE", "Participacion": "Lucha, Formas", "Peso": 52, "Ingresado": "Online" }, { "Escuela": "ASOC 3 de FEBRERO CiAT - Anderson Quinteros", "Apellido": "Salas Descalzo", "Nombre": "Zoe", "Rango_Edad": "Pre-Competitivo(Hasta 10años)", "Sexo": "Femenino", "Graduacion": "Kyu_A ( 10°, 9° o 8° Gup) - AMARILLO", "Participacion": "Lucha", "Peso": 27.5, "Ingresado": "Online" }, { "Escuela": "ASOC 3 de FEBRERO CiAT - Anderson Quinteros", "Apellido": "Schiavo", "Nombre": "María Belén", "Rango_Edad": "Infantil( 10 a 11 años)", "Sexo": "Femenino", "Graduacion": "Kyu_A ( 10°, 9° o 8° Gup) - AMARILLO", "Participacion": "Lucha, Formas", "Peso": 42, "Ingresado": "Online" }, { "Escuela": "ASOC 3 de FEBRERO CiAT - Anderson Quinteros", "Apellido": "Valdez Quispe", "Nombre": "Thiago Benjamín", "Rango_Edad": "Pre-Competitivo(Hasta 10años)", "Sexo": "Masculino", "Graduacion": "Kyu_A ( 10°, 9° o 8° Gup) - AMARILLO", "Participacion": "Lucha, Formas", "Peso": 33, "Ingresado": "Online" }, { "Escuela": "Escuela tkd olimpico melano", "Apellido": "Arias", "Nombre": "Agustina", "Rango_Edad": "Pre-Competitivo(Hasta 10años)", "Sexo": "Femenino", "Graduacion": "Kyu_A ( 10°, 9° o 8° Gup) - AMARILLO", "Participacion": "Lucha", "Peso": 38, "Ingresado": "Online" }, { "Escuela": "Escuela tkd olimpico melano", "Apellido": "Boti", "Nombre": "Santiago", "Rango_Edad": "Infantil( 10 a 11 años)", "Sexo": "Masculino", "Graduacion": "Kyu_C ( 4°, 3° o 2° Gup) - ROJO", "Participacion": "Lucha", "Peso": 62, "Ingresado": "Online" }, { "Escuela": "Escuela tkd olimpico melano", "Apellido": "Freire otero", "Nombre": "Lautaro", "Rango_Edad": "Infantil( 10 a 11 años)", "Sexo": "Masculino", "Graduacion": "Kyu_C ( 4°, 3° o 2° Gup) - ROJO", "Participacion": "Lucha", "Peso": 58, "Ingresado": "Online" }, { "Escuela": "Escuela tkd olimpico melano", "Apellido": "Gagliardi", "Nombre": "Chiara", "Rango_Edad": "Pre-Competitivo(Hasta 10años)", "Sexo": "Femenino", "Graduacion": "Kyu_A ( 10°, 9° o 8° Gup) - AMARILLO", "Participacion": "Lucha", "Peso": 25, "Ingresado": "Online" }, { "Escuela": "Escuela tkd olimpico melano", "Apellido": "Gagliardi", "Nombre": "Gaia", "Rango_Edad": "Pre-Competitivo(Hasta 10años)", "Sexo": "Femenino", "Graduacion": "Kyu_A ( 10°, 9° o 8° Gup) - AMARILLO", "Participacion": "Lucha", "Peso": 20, "Ingresado": "Online" }, { "Escuela": "Escuela tkd olimpico melano", "Apellido": "Gaglione", "Nombre": "Santino", "Rango_Edad": "Pre-Competitivo(Hasta 10años)", "Sexo": "Masculino", "Graduacion": "Kyu_A ( 10°, 9° o 8° Gup) - AMARILLO", "Participacion": "Para-Taekwondo", "Peso": 38, "Ingresado": "Online" }, { "Escuela": "Escuela tkd olimpico melano", "Apellido": "Moyano Márquez", "Nombre": "Angel", "Rango_Edad": "Infantil( 10 a 11 años)", "Sexo": "Masculino", "Graduacion": "Kyu_B ( 7°, 6° o 5° Gup) - VERDE", "Participacion": "Lucha", "Peso": 32, "Ingresado": "Online" }, { "Escuela": "Escuela tkd olimpico melano", "Apellido": "Nicotra", "Nombre": "Joaquín", "Rango_Edad": "Infantil( 10 a 11 años)", "Sexo": "Masculino", "Graduacion": "Kyu_A ( 10°, 9° o 8° Gup) - AMARILLO", "Participacion": "Lucha", "Peso": 28, "Ingresado": "Online" }, { "Escuela": "Escuela tkd olimpico melano", "Apellido": "Picarelli", "Nombre": "Dante", "Rango_Edad": "Infantil( 10 a 11 años)", "Sexo": "Masculino", "Graduacion": "Kyu_B ( 7°, 6° o 5° Gup) - VERDE", "Participacion": "Lucha", "Peso": 31, "Ingresado": "Online" }, { "Escuela": "Los Dragones/tkdMiño-Luis Morales", "Apellido": "Chulian", "Nombre": "Alma", "Rango_Edad": "Pre-Competitivo(Hasta 10años)", "Sexo": "Femenino", "Graduacion": "Kyu_A ( 10°, 9° o 8° Gup) - AMARILLO", "Participacion": "Lucha", "Peso": 45, "Ingresado": "Online" }, { "Escuela": "Los Dragones/tkdMiño-Luis Morales", "Apellido": "Issa", "Nombre": "Maximo", "Rango_Edad": "Juvenil (15 a 17 años)", "Sexo": "Masculino", "Graduacion": "Kyu_A ( 10°, 9° o 8° Gup) - AMARILLO", "Participacion": "Lucha", "Peso": 62, "Ingresado": "Online" }, { "Escuela": "Los Dragones/tkdMiño-Luis Morales", "Apellido": "Morales Gambino", "Nombre": "Uma Celeste", "Rango_Edad": "Pre-Competitivo(Hasta 10años)", "Sexo": "Femenino", "Graduacion": "Kyu_A ( 10°, 9° o 8° Gup) - AMARILLO", "Participacion": "Lucha", "Peso": 22, "Ingresado": "Online" }, { "Escuela": "Los Dragones/tkdMiño-Luis Morales", "Apellido": "Morales Gambino", "Nombre": "Uriel", "Rango_Edad": "Infantil( 10 a 11 años)", "Sexo": "Masculino", "Graduacion": "Kyu_B ( 7°, 6° o 5° Gup) - VERDE", "Participacion": "Lucha, Formas", "Peso": 42, "Ingresado": "Online" }, { "Escuela": "Los Dragones/tkdMiño-Luis Morales", "Apellido": "Navarro", "Nombre": "Candela", "Rango_Edad": "Pre-Competitivo(Hasta 10años)", "Sexo": "Femenino", "Graduacion": "Kyu_A ( 10°, 9° o 8° Gup) - AMARILLO", "Participacion": "Lucha", "Peso": 29, "Ingresado": "Online" }, { "Escuela": "Nam Kwan Lanús- Vila Cristian", "Apellido": "Argañaraz", "Nombre": "Ian", "Rango_Edad": "Pre-Competitivo(Hasta 10años)", "Sexo": "Masculino", "Graduacion": "Kyu_A ( 10°, 9° o 8° Gup) - AMARILLO", "Participacion": "Lucha", "Peso": "PreCompetitivo", "Ingresado": "Online" }, { "Escuela": "Nam Kwan Lanús- Vila Cristian", "Apellido": "Gavilán", "Nombre": "Tiziano", "Rango_Edad": "Infantil( 10 a 11 años)", "Sexo": "Masculino", "Graduacion": "Kyu_B ( 7°, 6° o 5° Gup) - VERDE", "Participacion": "Para-Taekwondo", "Peso": "Para-Taekwondo", "Ingresado": "Online" }, { "Escuela": "Nam Kwan Lanús- Vila Cristian", "Apellido": "Leone", "Nombre": "Santino", "Rango_Edad": "Pre-Competitivo(Hasta 10años)", "Sexo": "Masculino", "Graduacion": "Kyu_A ( 10°, 9° o 8° Gup) - AMARILLO", "Participacion": "Para-Taekwondo", "Peso": "Para-Taekwondo", "Ingresado": "Online" }, { "Escuela": "Nam Kwan Lanús- Vila Cristian", "Apellido": "Milano", "Nombre": "Ignacio", "Rango_Edad": "Pre-Competitivo(Hasta 10años)", "Sexo": "Masculino", "Graduacion": "Kyu_A ( 10°, 9° o 8° Gup) - AMARILLO", "Participacion": "Para-Taekwondo", "Peso": "Para-Taekwondo", "Ingresado": "Online" }, { "Escuela": "Nam Kwan Lanús- Vila Cristian", "Apellido": "Sanchez", "Nombre": "IRIANA", "Rango_Edad": "Cadete(12 a 14 años)", "Sexo": "Femenino", "Graduacion": "Kyu_A ( 10°, 9° o 8° Gup) - AMARILLO", "Participacion": "Lucha", "Peso": 54, "Ingresado": "Online" }, { "Escuela": "Nam Kwan Lanús- Vila Cristian", "Apellido": "Vazquez", "Nombre": "Brisa", "Rango_Edad": "Pre-Competitivo(Hasta 10años)", "Sexo": "Femenino", "Graduacion": "Kyu_A ( 10°, 9° o 8° Gup) - AMARILLO", "Participacion": "Lucha", "Peso": "PreCompetitivo", "Ingresado": "Online" }, { "Escuela": "TOP - Zamora Juan", "Apellido": "Baez", "Nombre": "Nelson Martin", "Rango_Edad": "Cadete(12 a 14 años)", "Sexo": "Masculino", "Graduacion": "Kyu_B ( 7°, 6° o 5° Gup) - VERDE", "Participacion": "Lucha", "Peso": 51, "Ingresado": "Online" }, { "Escuela": "TOP - Zamora Juan", "Apellido": "Celis", "Nombre": "Kevin", "Rango_Edad": "Cadete(12 a 14 años)", "Sexo": "Masculino", "Graduacion": "Kyu_A ( 10°, 9° o 8° Gup) - AMARILLO", "Participacion": "Lucha", "Peso": 44, "Ingresado": "Online" }, { "Escuela": "TOP - Zamora Juan", "Apellido": "Teves", "Nombre": "Cloé", "Rango_Edad": "Cadete(12 a 14 años)", "Sexo": "Femenino", "Graduacion": "Kyu_B ( 7°, 6° o 5° Gup) - VERDE", "Participacion": "Lucha", "Peso": 46, "Ingresado": "Online" }, { "Escuela": "Jose C Paz - Adrian Rojas", "Apellido": "Alini", "Nombre": "Abril", "Rango_Edad": "Juvenil (15 a 17 años)", "Sexo": "Femenino", "Graduacion": "Kyu_C ( 4°, 3° o 2° Gup) - ROJO", "Participacion": "Lucha", "Peso": 58, "Ingresado": "Manual" }, { "Escuela": "Jose C Paz - Adrian Rojas", "Apellido": "Rojas", "Nombre": "Luna", "Rango_Edad": "Juvenil (15 a 17 años)", "Sexo": "Femenino", "Graduacion": "Kyu_A ( 10°, 9° o 8° Gup) - AMARILLO", "Participacion": "Lucha", "Peso": 60.5, "Ingresado": "Manual" }, { "Escuela": "Jose C Paz - Adrian Rojas", "Apellido": "Peralta", "Nombre": "Leandro", "Rango_Edad": "Pre-Competitivo(Hasta 10años)", "Sexo": "Masculino", "Graduacion": "Kyu_B ( 7°, 6° o 5° Gup) - VERDE", "Participacion": "Lucha", "Peso": 27, "Ingresado": "Manual" }, { "Escuela": "Jose C Paz - Adrian Rojas", "Apellido": "Rojas", "Nombre": "Eitan", "Rango_Edad": "Pre-Competitivo(Hasta 10años)", "Sexo": "Masculino", "Graduacion": "Kyu_A ( 10°, 9° o 8° Gup) - AMARILLO", "Participacion": "Lucha", "Peso": 19, "Ingresado": "Manual" }, { "Escuela": "Jose C Paz - Adrian Rojas", "Apellido": "Alini", "Nombre": "Gonzalo", "Rango_Edad": "Pre-Competitivo(Hasta 10años)", "Sexo": "Masculino", "Graduacion": "Kyu_A ( 10°, 9° o 8° Gup) - AMARILLO", "Participacion": "Lucha", "Peso": 33, "Ingresado": "Manual" }, { "Escuela": "Jose C Paz - Adrian Rojas", "Apellido": "Gomez", "Nombre": "Francisco", "Rango_Edad": "Infantil( 10 a 11 años)", "Sexo": "Masculino", "Graduacion": "Dan__", "Participacion": "Lucha", "Peso": 32, "Ingresado": "Manual" }, { "Escuela": "Jose C Paz - Adrian Rojas", "Apellido": "Gomez", "Nombre": "Genaro", "Rango_Edad": "Pre-Competitivo(Hasta 10años)", "Sexo": "Masculino", "Graduacion": "Kyu_C ( 4°, 3° o 2° Gup) - ROJO", "Participacion": "Lucha", "Peso": 25, "Ingresado": "Manual" }, { "Escuela": "Jose C Paz - Adrian Rojas", "Apellido": "Gomez", "Nombre": "Enzo", "Rango_Edad": "Cadete(12 a 14 años)", "Sexo": "Masculino", "Graduacion": "Dan__", "Participacion": "Lucha", "Peso": 53.3, "Ingresado": "Manual" }, { "Escuela": "Asoc 9 de Julio - Jorge Alfredo Charra", "Apellido": "Almonacid", "Nombre": "Berenice", "Rango_Edad": "Cadete(12 a 14 años)", "Sexo": "Femenino", "Graduacion": "Kyu_A ( 10°, 9° o 8° Gup) - AMARILLO", "Participacion": "Lucha", "Peso": 45, "Ingresado": "Manual" }, { "Escuela": "Asoc 9 de Julio - Jorge Alfredo Charra", "Apellido": "Almonacid", "Nombre": "Camila Del Rosario", "Rango_Edad": "Juvenil (15 a 17 años)", "Sexo": "Femenino", "Graduacion": "Dan__", "Participacion": "Lucha", "Peso": 60, "Ingresado": "Manual" }, { "Escuela": "Asoc TKD Ituzaingo -  Jonathan Borda", "Apellido": "Dauz", "Nombre": "Gianluca", "Rango_Edad": "Juvenil (15 a 17 años)", "Sexo": "Masculino", "Graduacion": "Kyu_A ( 10°, 9° o 8° Gup) - AMARILLO", "Participacion": "Lucha", "Peso": 62.5, "Ingresado": "Manual" }, { "Escuela": "Asoc Esteban Echeverría - Alejandra Rojas", "Apellido": "Esquivel", "Nombre": "Uriel", "Rango_Edad": "Pre-Competitivo(Hasta 10años)", "Sexo": "Masculino", "Graduacion": "Kyu_A ( 10°, 9° o 8° Gup) - AMARILLO", "Participacion": "Lucha", "Peso": "Precompetitivo", "Ingresado": "Manual" }, { "Escuela": "Asoc Esteban Echeverría - Alejandra Rojas", "Apellido": "Monteros", "Nombre": "Milena", "Rango_Edad": "Infantil( 10 a 11 años)", "Sexo": "Femenino", "Graduacion": "Kyu_A ( 10°, 9° o 8° Gup) - AMARILLO", "Participacion": "Lucha", "Peso": 31, "Ingresado": "Manual" }, { "Escuela": "Asoc Esteban Echeverría - Alejandra Rojas", "Apellido": "Fabia", "Nombre": "Lionel", "Rango_Edad": "Infantil( 10 a 11 años)", "Sexo": "Masculino", "Graduacion": "Kyu_B ( 7°, 6° o 5° Gup) - VERDE", "Participacion": "Lucha", "Peso": 29, "Ingresado": "Manual" }, { "Escuela": "Asoc Esteban Echeverría - Alejandra Rojas", "Apellido": "Wilian", "Nombre": "Thiago", "Rango_Edad": "Infantil( 10 a 11 años)", "Sexo": "Masculino", "Graduacion": "Kyu_A ( 10°, 9° o 8° Gup) - AMARILLO", "Participacion": "Lucha", "Peso": 41, "Ingresado": "Manual" }, { "Escuela": "Asoc Esteban Echeverría - Alejandra Rojas", "Apellido": "Ojeda", "Nombre": "Dylan", "Rango_Edad": "Juvenil (15 a 17 años)", "Sexo": "Masculino", "Graduacion": "Kyu_A ( 10°, 9° o 8° Gup) - AMARILLO", "Participacion": "Lucha", "Peso": 75, "Ingresado": "Manual" }, { "Escuela": "Um Yang Banfield - Gustavo Verdejo", "Apellido": "Chiesa", "Nombre": "Valentino", "Rango_Edad": "Cadete(12 a 14 años)", "Sexo": "Masculino", "Graduacion": "Kyu_C ( 4°, 3° o 2° Gup) - ROJO", "Participacion": "Lucha, Formas", "Peso": 55, "Ingresado": "Manual" }, { "Escuela": "Um Yang Banfield - Gustavo Verdejo", "Apellido": "Sanscoti", "Nombre": "Lenox", "Rango_Edad": "Cadete(12 a 14 años)", "Sexo": "Masculino", "Graduacion": "Kyu_C ( 4°, 3° o 2° Gup) - ROJO", "Participacion": "Formas", "Peso": "Formas", "Ingresado": "Manual" }, { "Escuela": "Um Yang Banfield - Gustavo Verdejo", "Apellido": "Montes", "Nombre": "Maximo", "Rango_Edad": "Cadete(12 a 14 años)", "Sexo": "Masculino", "Graduacion": "Kyu_C ( 4°, 3° o 2° Gup) - ROJO", "Participacion": "Formas", "Peso": "Formas", "Ingresado": "Manual" }, { "Escuela": "Um Yang Banfield - Gustavo Verdejo", "Apellido": "Montes", "Nombre": "Acuaro", "Rango_Edad": "Pre-Competitivo(Hasta 10años)", "Sexo": "Masculino", "Graduacion": "Kyu_C ( 4°, 3° o 2° Gup) - ROJO", "Participacion": "Lucha, Formas", "Peso": "Precompetitivo", "Ingresado": "Manual" }, { "Escuela": "Um Yang Banfield - Gustavo Verdejo", "Apellido": "Pagano", "Nombre": "Fatima", "Rango_Edad": "Pre-Competitivo(Hasta 10años)", "Sexo": "Femenino", "Graduacion": "Kyu_B ( 7°, 6° o 5° Gup) - VERDE", "Participacion": "Lucha, Formas", "Peso": "Precompetitivo", "Ingresado": "Manual" }, { "Escuela": "Um Yang Banfield - Gustavo Verdejo", "Apellido": "Perrota", "Nombre": "Lautaro", "Rango_Edad": "Pre-Competitivo(Hasta 10años)", "Sexo": "Masculino", "Graduacion": "Kyu_B ( 7°, 6° o 5° Gup) - VERDE", "Participacion": "Lucha", "Peso": "Precompetitivo", "Ingresado": "Manual" }, { "Escuela": "Um Yang Banfield - Gustavo Verdejo", "Apellido": "Alvarez", "Nombre": "Matias", "Rango_Edad": "Pre-Competitivo(Hasta 10años)", "Sexo": "Masculino", "Graduacion": "Kyu_B ( 7°, 6° o 5° Gup) - VERDE", "Participacion": "Lucha", "Peso": "Precompetitivo", "Ingresado": "Manual" }, { "Escuela": "Um Yang Banfield - Gustavo Verdejo", "Apellido": "Magno", "Nombre": "Santiago", "Rango_Edad": "Pre-Competitivo(Hasta 10años)", "Sexo": "Masculino", "Graduacion": "Kyu_A ( 10°, 9° o 8° Gup) - AMARILLO", "Participacion": "Formas", "Peso": "Formas", "Ingresado": "Manual" }, { "Escuela": "In-Nae Taekwondo Social Candia", "Apellido": "Álvarez", "Nombre": "Elian", "Rango_Edad": "Infantil( 10 a 11 años)", "Sexo": "Masculino", "Graduacion": "Kyu_A ( 10°, 9° o 8° Gup) - AMARILLO", "Participacion": "Lucha", "Peso": 38, "Ingresado": "Online" }, { "Escuela": "In-Nae Taekwondo Social Candia", "Apellido": "Blanchard", "Nombre": "Thiago", "Rango_Edad": "Pre-Competitivo(Hasta 10años)", "Sexo": "Masculino", "Graduacion": "Kyu_A ( 10°, 9° o 8° Gup) - AMARILLO", "Participacion": "Lucha", "Peso": "PreCompetitivo", "Ingresado": "Online" }, { "Escuela": "In-Nae Taekwondo Social Candia", "Apellido": "Cisterna", "Nombre": "Fabián", "Rango_Edad": "Cadete(12 a 14 años)", "Sexo": "Masculino", "Graduacion": "Kyu_A ( 10°, 9° o 8° Gup) - AMARILLO", "Participacion": "Para-Taekwondo", "Peso": "Para-Taekwondo", "Ingresado": "Online" }, { "Escuela": "In-Nae Taekwondo Social Candia", "Apellido": "Igarza", "Nombre": "Nahuel", "Rango_Edad": "Pre-Competitivo(Hasta 10años)", "Sexo": "Masculino", "Graduacion": "Kyu_A ( 10°, 9° o 8° Gup) - AMARILLO", "Participacion": "Lucha", "Peso": 40, "Ingresado": "Online" }, { "Escuela": "In-Nae Taekwondo Social Candia", "Apellido": "Larrecochea", "Nombre": "Dante", "Rango_Edad": "Pre-Competitivo(Hasta 10años)", "Sexo": "Masculino", "Graduacion": "Kyu_A ( 10°, 9° o 8° Gup) - AMARILLO", "Participacion": "Lucha", "Peso": 50, "Ingresado": "Online" }, { "Escuela": "In-Nae Taekwondo Social Candia", "Apellido": "Oviedo", "Nombre": "Leonel", "Rango_Edad": "Cadete(12 a 14 años)", "Sexo": "Masculino", "Graduacion": "Kyu_A ( 10°, 9° o 8° Gup) - AMARILLO", "Participacion": "Para-Taekwondo", "Peso": "Para-Taekwondo", "Ingresado": "Online" }, { "Escuela": "In-Nae Taekwondo Social Candia", "Apellido": "Rojas", "Nombre": "Axel", "Rango_Edad": "Cadete(12 a 14 años)", "Sexo": "Masculino", "Graduacion": "Kyu_A ( 10°, 9° o 8° Gup) - AMARILLO", "Participacion": "Lucha", "Peso": 42, "Ingresado": "Online" }, { "Escuela": "In-Nae Taekwondo Social Candia", "Apellido": "Rovira", "Nombre": "Agustín", "Rango_Edad": "Infantil( 10 a 11 años)", "Sexo": "Masculino", "Graduacion": "Kyu_B ( 7°, 6° o 5° Gup) - VERDE", "Participacion": "Lucha", "Peso": 39, "Ingresado": "Online" }, { "Escuela": "In-Nae Taekwondo Social Candia", "Apellido": "Santa Ana", "Nombre": "Ludmila", "Rango_Edad": "Pre-Competitivo(Hasta 10años)", "Sexo": "Femenino", "Graduacion": "Kyu_B ( 7°, 6° o 5° Gup) - VERDE", "Participacion": "Lucha, Formas", "Peso": 29, "Ingresado": "Online" }, { "Escuela": "In-Nae Taekwondo Social Candia", "Apellido": "Vallejos", "Nombre": "Santiago", "Rango_Edad": "Pre-Competitivo(Hasta 10años)", "Sexo": "Masculino", "Graduacion": "Kyu_A ( 10°, 9° o 8° Gup) - AMARILLO", "Participacion": "Lucha", "Peso": 29, "Ingresado": "Online" }, { "Escuela": "In-Nae Taekwondo Social Candia", "Apellido": "Vilte", "Nombre": "Juan", "Rango_Edad": "Infantil( 10 a 11 años)", "Sexo": "Masculino", "Graduacion": "Kyu_A ( 10°, 9° o 8° Gup) - AMARILLO", "Participacion": "Lucha", "Peso": 45, "Ingresado": "Online" }, { "Escuela": "In-Nae Taekwondo Social Candia", "Apellido": "Zanetti", "Nombre": "Diego", "Rango_Edad": "Cadete(12 a 14 años)", "Sexo": "Masculino", "Graduacion": "Kyu_A ( 10°, 9° o 8° Gup) - AMARILLO", "Participacion": "Para-Taekwondo", "Peso": "Para-Taekwondo", "Ingresado": "Online" }, { "Escuela": "In-Nae Taekwondo Social Candia", "Apellido": "Villaroel", "Nombre": "Omar Martin", "Rango_Edad": "Juvenil (15 a 17 años)", "Sexo": "Masculino", "Graduacion": "Kyu_B ( 7°, 6° o 5° Gup) - VERDE", "Participacion": "Lucha, Formas", "Peso": 58, "Ingresado": "Manual" }, { "Escuela": "In-Nae Taekwondo Social Candia", "Apellido": "Cano", "Nombre": "Leandro", "Rango_Edad": "Pre-Competitivo(Hasta 10años)", "Sexo": "Masculino", "Graduacion": "Kyu_B ( 7°, 6° o 5° Gup) - VERDE", "Participacion": "Lucha, Formas", "Peso": 30, "Ingresado": "Manual" }, { "Escuela": "In-Nae Taekwondo Social Candia", "Apellido": "Arguello", "Nombre": "Uriel", "Rango_Edad": "Pre-Competitivo(Hasta 10años)", "Sexo": "Masculino", "Graduacion": "Kyu_A ( 10°, 9° o 8° Gup) - AMARILLO", "Participacion": "Lucha, Formas", "Peso": 56, "Ingresado": "Manual" }, { "Escuela": "In-Nae Taekwondo Social Candia", "Apellido": "Colmar", "Nombre": "Morena", "Rango_Edad": "Pre-Competitivo(Hasta 10años)", "Sexo": "Femenino", "Graduacion": "Kyu_A ( 10°, 9° o 8° Gup) - AMARILLO", "Participacion": "Lucha", "Peso": 31.4, "Ingresado": "Manual" }, { "Escuela": "In-Nae Taekwondo Social Candia", "Apellido": "Delliamea", "Nombre": "Maite Nahiara", "Rango_Edad": "Infantil( 10 a 11 años)", "Sexo": "Femenino", "Graduacion": "Kyu_A ( 10°, 9° o 8° Gup) - AMARILLO", "Participacion": "Lucha, Formas", "Peso": 43, "Ingresado": "Manual" }, { "Escuela": "In-Nae Taekwondo Social Candia", "Apellido": "Colmar", "Nombre": "Tiara Agustina", "Rango_Edad": "Cadete(12 a 14 años)", "Sexo": "Femenino", "Graduacion": "Kyu_A ( 10°, 9° o 8° Gup) - AMARILLO", "Participacion": "Lucha", "Peso": 52, "Ingresado": "Manual" }, { "Escuela": "In-Nae Taekwondo Social Candia", "Apellido": "Arañaraz", "Nombre": "Brisa", "Rango_Edad": "Infantil( 10 a 11 años)", "Sexo": "Femenino", "Graduacion": "Kyu_A ( 10°, 9° o 8° Gup) - AMARILLO", "Participacion": "Lucha", "Peso": 38, "Ingresado": "Manual" }, { "Escuela": "In-Nae Taekwondo Social Candia", "Apellido": "Vivas", "Nombre": "Ian", "Rango_Edad": "Cadete(12 a 14 años)", "Sexo": "Masculino", "Graduacion": "Kyu_A ( 10°, 9° o 8° Gup) - AMARILLO", "Participacion": "Lucha", "Peso": 41.6, "Ingresado": "Manual" }, { "Escuela": "In-Nae Taekwondo Social Candia", "Apellido": "Maximo", "Nombre": "Sosa", "Rango_Edad": "Pre-Competitivo(Hasta 10años)", "Sexo": "Masculino", "Graduacion": "Kyu_A ( 10°, 9° o 8° Gup) - AMARILLO", "Participacion": "Lucha", "Peso": 23.2, "Ingresado": "Manual" }, { "Escuela": "In-Nae Taekwondo Social Candia", "Apellido": "Silvetti", "Nombre": "Lautaro", "Rango_Edad": "Infantil( 10 a 11 años)", "Sexo": "Masculino", "Graduacion": "Kyu_A ( 10°, 9° o 8° Gup) - AMARILLO", "Participacion": "Lucha", "Peso": 32, "Ingresado": "Manual" }, { "Escuela": "In-Nae Taekwondo Social Candia", "Apellido": "Peralta", "Nombre": "Fernanda", "Rango_Edad": "Infantil( 10 a 11 años)", "Sexo": "Femenino", "Graduacion": "Kyu_A ( 10°, 9° o 8° Gup) - AMARILLO", "Participacion": "Lucha", "Peso": 46, "Ingresado": "Manual", "arreglado":"Arregl!" }, { "Escuela": "In-Nae Taekwondo Social Candia", "Apellido": "Caballero", "Nombre": "Luciano", "Rango_Edad": "Juvenil (15 a 17 años)", "Sexo": "Masculino", "Graduacion": "Kyu_A ( 10°, 9° o 8° Gup) - AMARILLO", "Participacion": "Lucha", "Peso": 63, "Ingresado": "Manual" }, { "Escuela": "In-Nae Taekwondo Social Candia", "Apellido": "Acuña", "Nombre": "Alan", "Rango_Edad": "Pre-Competitivo(Hasta 10años)", "Sexo": "Masculino", "Graduacion": "Kyu_A ( 10°, 9° o 8° Gup) - AMARILLO", "Participacion": "Lucha", "Peso": 20, "Ingresado": "Manual" }, { "Escuela": "In-Nae Taekwondo Social Candia", "Apellido": "Torres", "Nombre": "Santiago", "Rango_Edad": "Infantil( 10 a 11 años)", "Sexo": "Masculino", "Graduacion": "Kyu_A ( 10°, 9° o 8° Gup) - AMARILLO", "Participacion": "Lucha", "Peso": 58, "Ingresado": "Manual" }, { "Escuela": "In-Nae Taekwondo Social Candia", "Apellido": "Figueredo", "Nombre": "Santiago", "Rango_Edad": "Infantil( 10 a 11 años)", "Sexo": "Masculino", "Graduacion": "Kyu_A ( 10°, 9° o 8° Gup) - AMARILLO", "Participacion": "Lucha, Formas", "Peso": 44, "Ingresado": "Manual" }, { "Escuela": "In-Nae Taekwondo Social Candia", "Apellido": "Gomez", "Nombre": "Agustin", "Rango_Edad": "Juvenil (15 a 17 años)", "Sexo": "Masculino", "Graduacion": "Kyu_C ( 4°, 3° o 2° Gup) - ROJO", "Participacion": "Lucha", "Peso": 64, "Ingresado": "Manual" }, { "Escuela": "In-Nae Taekwondo Social Candia", "Apellido": "Argañaraz", "Nombre": "Julieta", "Rango_Edad": "Infantil( 10 a 11 años)", "Sexo": "Femenino", "Graduacion": "Kyu_A ( 10°, 9° o 8° Gup) - AMARILLO", "Participacion": "Lucha, Formas", "Peso": 42, "Ingresado": "Manual" }, { "Escuela": "In-Nae Taekwondo Social Candia", "Apellido": "Lemes", "Nombre": "Benjamin", "Rango_Edad": "Pre-Competitivo(Hasta 10años)", "Sexo": "Masculino", "Graduacion": "Kyu_A ( 10°, 9° o 8° Gup) - AMARILLO", "Participacion": "Lucha", "Peso": 30, "Ingresado": "Manual" }, { "Escuela": "In-Nae Taekwondo Social Candia", "Apellido": "Pimentel", "Nombre": "Jazmin", "Rango_Edad": "Pre-Competitivo(Hasta 10años)", "Sexo": "Femenino", "Graduacion": "Kyu_A ( 10°, 9° o 8° Gup) - AMARILLO", "Participacion": "Lucha", "Peso": 27, "Ingresado": "Manual" },{ "Escuela": "Luis Morales", "Apellido": "Jarpa", "Nombre": "Anahi", "Rango_Edad": "Infantil( 10 a 11 años)", "Sexo": "Femenino", "Graduacion": "Kyu_A  - AMARILLO", "Participacion": "Lucha", "Peso":"42" , "Ingresado": "Manual" }]

var listaLlaves = {};
var configSexoPeso = {
    Inf: {
        M: [23, 26, 29, 32, 35, 39, 43, 47, 52, 58, 120],
        F: [23, 26, 29, 32, 35, 39, 43, 47, 52, 58, 120]
    },
    Cad: {
        M: [33, 37, 41, 45, 49, 53, 57, 61, 65],
        F: [29, 33, 37, 41, 44, 47, 51, 55, 59]
    },
    Juv: {
        M: [45, 48, 51, 55, 59, 63, 68, 73, 78],
        F: [42, 44, 46, 49, 52, 55, 59, 63, 68]
    },
    Pre: {
        M: [0, 500],
        F: [0, 500]
    }

}
llavesCategorizadas = {
    Inf: {},
    Cad: {},
    Juv: {},
    Sen: {},
    Pre: {}
}
var divBondi = document.getElementById('principal');
//------BOTONES------------------------------------------
botonInf = document.getElementById('pills-Inf-tab');
botonCad = document.getElementById('pills-Cad-tab');
botonJuv = document.getElementById('pills-Juv-tab');
botonPre = document.getElementById('pills-Pre-tab');
botonLibres = document.getElementById('botonLibres');


botonInf.addEventListener('click', graficarInf);
botonCad.addEventListener('click', graficarCad);
botonJuv.addEventListener('click', graficarJuv);
botonPre.addEventListener('click', graficarPrecom);
botonLibres.addEventListener('click', listarLibres);

function graficarInf() {
    while (divBondi.firstChild) {
        divBondi.removeChild(divBondi.firstChild);
    };
    graficarLlaves(llavesCategorizadas.Inf, divBondi)
    // graficarLlaves(listaLlaves, divBondi);

}
function graficarCad() {
    while (divBondi.firstChild) {
        divBondi.removeChild(divBondi.firstChild);
    };
    graficarLlaves(llavesCategorizadas.Cad, divBondi)

}
function graficarJuv() {
    while (divBondi.firstChild) {
        divBondi.removeChild(divBondi.firstChild);
    };
    graficarLlaves(llavesCategorizadas.Juv, divBondi)

}

function graficarPrecom() {
    menuPrecom = document.getElementById('pills-Pre-tab');
    menuPrecom.textContent = 'Pre-Competitivos';

    while (divBondi.firstChild) {
        divBondi.removeChild(divBondi.firstChild);
    }

    ulPibes = document.createElement('ol')
    totalPreco = 0;

    for (llave in llavesCategorizadas.Pre) {


        llavesCategorizadas.Pre[llave].competidores.forEach( competidor => {
            totalPreco ++;
            nodoPibe = document.createElement('li')
            nodoPibe.index = totalPreco;
            nodoPibe.textContent = competidor.apenom + ' - ' + competidor.Graduacion;
            ulPibes.appendChild(nodoPibe)
            totalPreco ++;
        })

        


    }
    divBondi.appendChild(ulPibes)

    
    menuPrecom.textContent += ('('+totalPreco+')');

}


// == ========= =========  == ========= MAIN  == ========= =========  == ========= ========= 

//armo rondas y Peleas 

listaLlaves = arreglaLlave(inscriptos)
armarLlaves(listaLlaves);
llavesCategorizadas = ordenarListaLlaves(listaLlaves);

// graficarLlaves(listaLlaves, divBondi); //Esto graficaría todo TODO. Quiero hacer que grafique por separado CAD de INF de JUV de SEN



// == ========= =========  == ========= FIN  == ========= =========  == ========= ========= 



//------FUNCIONES INICIALES------------------------------------------

//esto agrega las propiedades de peso
function configPeso(pesoAlumno, catEdad, sexo) {
    if (typeof (pesoAlumno) != 'number')
        console.log(pesoAlumno)
    // console.log('el peso del alumno es:' + pesoAlumno)

    grillaPeso = configSexoPeso[catEdad][sexo];
    // console.log(catEdad,sexo,grillaPeso)


    if (pesoAlumno < grillaPeso[0])
        catPeso = 'hasta ' + grillaPeso[0] + 'Kg';
    if (pesoAlumno > grillaPeso[grillaPeso.length - 1])
        catPeso = 'mas de ' + grillaPeso[grillaPeso.length - 1] + 'Kg';

    for (let i = 0; i < grillaPeso.length; i++) {
        if (pesoAlumno <= grillaPeso[i] && pesoAlumno < grillaPeso[i+1]) {
            catPeso = grillaPeso[i-1] + 'a' + grillaPeso[i] + 'Kg';
            break;
        }
    }

    return catPeso;
}
//Toma el arreglo de Inscriptos, les agrega variables para muestra y los ordena por string de Llave

function arreglaLlave(inscriptos) {
    var noLuchan = []

    inscriptos.forEach(alumno => {        //
        alumno.apenom = alumno.Apellido + ', ' + alumno.Nombre;
        alumno.disciplinas = alumno.Participacion.split(';');
        alumno.cantDisciplinas = alumno.disciplinas.length;

        alumno.catEdad = alumno.Rango_Edad.substring(0, 3);

        alumno.arreglado = '';

        if (alumno.Participacion.includes('Lucha')) {
            alumno.sexo = alumno.Sexo.substring(0, 1);
            if (alumno.catEdad != 'Pre') {
                alumno.catPeso = configPeso(alumno.Peso, alumno.catEdad, alumno.sexo);
            }

            //armo el stringLLAVE
            alumno.stringLlave = alumno.catEdad + '-' + alumno.sexo + '-' + alumno.Graduacion.substring(0, 5) + '-' + alumno.catPeso;

            if (alumno.stringLlave in listaLlaves) {                // Agrego a la Lista
                listaLlaves[alumno.stringLlave].competidores.push(alumno);
            }
            else {
                listaLlaves[alumno.stringLlave] = {};
                listaLlaves[alumno.stringLlave].competidores = [];
                listaLlaves[alumno.stringLlave].competidores.push(alumno);
            }

        } else noLuchan.push(alumno)
    });

    // console.log(noLuchan);
    return listaLlaves
}


//------FUNCIONES ARMADO LLAVES RONDAS Y PELEAS-----------------------------------------------

function armarLlaves(listaLlaves) {
    for (llave in listaLlaves) {
        listaLlaves[llave].rondas = [];   //Es un arreglo de Rondas
        armarRondas(listaLlaves[llave]);
        // armarLuchas(llave);
        // s(llave);
    }

}// ---------------------------------------------

function armarRondas(llave) {
    if (llave.competidores.length > 1) {
        nCompetidores = llave.competidores.length;
        nPeleas = nCompetidores - 1;
        let nRondas = 1 + Math.trunc(Math.log2(nCompetidores - 1))
        llave.rondas.length = [nRondas]  //defino LENGTH de arerglo de RONDAS
        // console.log('com', nCompetidores, '   Rondas', nRondas)

        //-----------------Inicializar Rondas y Luchas------------------

        let i = 0  // representa la primera Ronda.

        for (let c = 0; c < llave.rondas.length; c++) {

            llave.rondas[c] = new Ronda(); //creo una nueva ronda en el arreglo de Rondas de la LLave
            llave.rondas[c].nombre = (c == llave.rondas.length - 1) ? 'Final' : 'Ronda ' + (c + 1); //nombro la Ronda
            if (c == 0) {
                // console.log('PRimerr Ronda! ( ronda 0 )  ')
                if (nCompetidores % 2 != 0)//si el n de competidores es impar, paso el último como Ganador
                    llave.rondas[i].ganadores.push(llave.competidores[llave.competidores.length - 1]);

                llave.rondas[c].luchas.length = (llave.competidores.length - (llave.competidores.length % 2)) / 2; //establezco el numero de luchas de la ronda

            }
            else {  //:::::::PAra todas las demás RONDAS::::
                console.log(llave.rondas[c].nombre + ':');

                const rondaAnterior = llave.rondas[c - 1];

                if (rondaAnterior.luchas.length % 2 > 0) { //si la cant de luchas era impar
                    console.log('  cant Luchas anterior impar')

                    if (rondaAnterior.ganadores[0]) {                //...¿tenía un competidor suelto?
                        console.log('  con compe suelto');
                        // console.log(llave.rondas[c])
                        // llave.rondas[c].competidores.push(llave.rondas[c - 1].ganadores[0])  //lo agrego como competidor primero
                        llave.rondas[c].luchas.length = 1 + (rondaAnterior.luchas.length - (rondaAnterior.luchas.length % 2)) / 2;                                      //y la cantidad de Luchas
                    }
                    else {
                        console.log('  y  sin Compe suelto')

                        llave.rondas[c].luchas.length = (rondaAnterior.luchas.length - (rondaAnterior.luchas.length % 2)) / 2;
                    }

                } else {
                    console.log('Cant luchas anterior Par')
                    if (rondaAnterior.ganadores[0]) {
                        console.log('con Competidor Suelto')
                        // agregar un ganador (u suelto p esta ronda)
                        llave.rondas[c].luchas.length = (rondaAnterior.luchas.length - (rondaAnterior.luchas.length % 2)) / 2;

                    } else {
                        llave.rondas[c].luchas.length = (rondaAnterior.luchas.length - (rondaAnterior.luchas.length % 2)) / 2;
                        console.log('sin competidor Suelto')
                    }
                }

                console.log('   ' + llave.rondas[c].luchas.length + ' Luchas')
            }//Listo. Seteadas Rondas y  CANT Luchas por Ronda.



            for (let a = 0; a < (llave.rondas[c].luchas.length); a++) {
                llave.rondas[c].luchas[a] = []; //creo las luchas vacías
            }
        }

        //Cargo los competidores en la primera Ronda
        llave.rondas[0].competidores = llave.competidores;

        //Lleno las PELEAS para cada RONDA
        for (let a = 0; a < (llave.rondas[i].luchas.length); a++) {
            llave.rondas[i].luchas[a].push(llave.rondas[i].competidores[a * 2]); //agrego el competidor de la ronda a la Lucha (0y1,2y3,4y5)
            llave.rondas[i].luchas[a].push(llave.rondas[i].competidores[a * 2 + 1]);//agrego el competidor consecutivo              
        }

    }//fin if
    else {
        // console.log('libre!')

    }


} // ------------------------------------------


//------funciones para GRAFICAR ------------------------------------------
function graficarLlaves(listaDeLlaves, divBondi) {

    console.log(listaDeLlaves)


    for (llave in listaDeLlaves) {                            //Paso por cada llave

        divLlave = document.createElement('div');
        divLlave.classList.add('div-llave', 'container')

        spanLlave = document.createElement('span');
        spanLlave.id = llave
        spanLlave.classList.add('spanLlave')

        divTituloLlave = document.createElement('div')
        divTituloLlave.classList.add('titulo-llave')

        tituloLlave = document.createElement('h5')
        pLibre = document.createElement('span')

        tituloLlave.textContent = llave;


        divTituloLlave.appendChild(tituloLlave)
        divLlave.appendChild(divTituloLlave)                          //la pongo como subtitulo en el HTML

        if (listaDeLlaves[llave].competidores.length == 1) {             // me fijo si es un libre

            arreglado = listaDeLlaves[llave].competidores[0].arreglado?listaDeLlaves[llave].competidores[0].arreglado:'';

            pLibre.style.color = 'red';
            pLibre.textContent = ' - Libre! -';
            pLibre.textContent += (listaDeLlaves[llave].competidores[0].apenom+
            '('+listaDeLlaves[llave].competidores[0].Peso+')'+
            '('+listaDeLlaves[llave].competidores[0].Escuela.substring(0,9)+')')+
             arreglado;
             console.log(arreglado);
            


        } else {
            pLibre.textContent = '(' + listaDeLlaves[llave].competidores.length + ')';

            listaDeLlaves[llave].rondas.forEach(ronda => {
                const ulRonda = document.createElement('ul')
                let libre = '';
                if (ronda.ganadores[0]) {
                    libre = (ronda.ganadores[0].apenom);
                }

                ulRonda.innerHTML += '<span class="badge badge-secondary text-light">' + '[' + ronda.nombre + ']' + `</span> <div class="badge badge-info"> ${libre}</div>`;
                nRonda = 1 + listaDeLlaves[llave].rondas.indexOf(ronda);
                ulRonda.classList.add('round', 'round-' + nRonda);

                ronda.luchas.forEach(lucha => {

                    fragmento = graficarElementosLucha(lucha);
                    ulRonda.appendChild(fragmento);
                });

                // spanLlave = divBondi;
                spanLlave.appendChild(ulRonda)

            }); // fin forEach Rondas



        }
        hr = document.createElement('hr');


        tituloLlave.innerHTML += (pLibre.innerHTML)
        divLlave.appendChild(spanLlave)
        divBondi.appendChild(divLlave)
        divLlave.appendChild(hr);

    }//fin for llaves
}

function graficarElementosLucha(lucha) {
    competidorArriba = document.createElement('li')
    competidorAbajo = document.createElement('li')
    spacerJuego = document.createElement('li')
    spacerArriba = document.createElement('li')
    spacerAbajo = document.createElement('li')
    // console.log(lucha) COMENTADO

    competidorArriba.textContent = (lucha[0]) ? (lucha[0].apenom + '('+lucha[0].Peso+')') : '...';
    competidorAbajo.textContent = (lucha[1]) ? (lucha[1].apenom+'('+lucha[0].Peso+')') : '...';

    spacerJuego.classList.add('game', 'game-spacer');
    competidorArriba.classList.add('game', 'game-top', 'btn', 'btn-primary', 'btn-sm');

    competidorAbajo.classList.add('game', 'game-bottom', 'btn', 'btn-danger', 'btn-sm');
    spacerArriba.classList.add('spacer');
    spacerAbajo.classList.add('spacer');
    spacerArriba.innerHTML += '&nbsp;';
    spacerAbajo.innerHTML += '&nbsp;';

    fragmento = document.createDocumentFragment()
    fragmento.appendChild(spacerArriba)
    fragmento.appendChild(competidorArriba)
    fragmento.appendChild(spacerJuego)
    fragmento.appendChild(competidorAbajo)
    fragmento.appendChild(spacerAbajo)


    return fragmento;

}
function ordenarListaLlaves(listaDeLlaves) {

    for (llave in listaDeLlaves) {
        llavesCategorizadas[llave.substring(0, 3)][llave] = listaDeLlaves[llave];

    }
    return llavesCategorizadas
}



function listarLibres(listaDeLlaves){
    listaDeLlaves.libres = [];
    for (llave in listaDeLlaves) {
        if (listaDeLlaves[llave].competidores.length ==1)
        {
            listaDeLlaves.libres.push(listaDeLlaves[llave].competidores[0]);
        }
    }

    while (divBondi.firstChild) {               //Vacio el contenedor principal
        divBondi.removeChild(divBondi.firstChild);
    };

    listaDeLlaves.libres.forEach(competidor =>{
        
            divCompetidor = document.createElement('div');
            divCompetidor.innerText = competidor.apenom + ' - ' + competidor.stringLlave;
            divBondi.appendChild(divCompetidor);
            
        
    })


}


