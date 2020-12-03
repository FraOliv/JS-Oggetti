/* js-oggetti-studenti
Istruzioni:
Creare un oggetto che descriva uno studente con le seguenti proprietà: nome, cognome e età. Stampare a schermo attraverso il for in tutte le proprietà.
Creare un array di oggetti di studenti. Ciclare su tutti gli studenti e stampare per ognuno nome e cognome
Dare la possibilità all’utente attraverso 3 prompt di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età. */


/* Creare un oggetto che descriva uno studente con le seguenti proprietà: nome, cognome e età. */

/* 
var Student = {
    "name": "Franco" ,
    "surname": "Volonteri" ,
    "age" : "56"
} */
/* for (var key in Student) {

Stampare a schermo attraverso il for in tutte le proprietà.
  console.log(Student[key])
}
 */

/* Creare un array di oggetti di studenti. Ciclare su tutti gli studenti e stampare per ognuno nome e cognome */

var Students = [
 {
    "name": "Franco" ,
    "surname": "Volonteri" ,
    "age" : "56"
},

 {
    "name": "Franca" ,
    "surname": "Volonte" ,
    "age" : "78"
},

 {
    "name": "Susi" ,
    "surname": "Campio" ,
    "age" : "45"
},

 {
    "name": "Serena" ,
    "surname": "Freegirl" ,
    "age" : "22"
}
]
for (var i = 0; i < Students.length; i++) {
    console.log(Students[i].name, Students[i].surname);
    
}