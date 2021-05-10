var kenethestabien=0;
var pedirperdon=0;

var prompt = require('prompt-sync')();
var laculpaesde = prompt("La culpa es de Esdras?");

if ((laculpaesde==="Si")||(laculpaesde==="si"))
{
    console.log("Si la culpa es de Esdras");
    console.log("Perdon keneth no quise ser hiriente");
}
else if((laculpaesde==="No")||(laculpaesde==="no"))
{
    console.log("La culpa no es de Esdras");
    console.log("Keneth dejate de huecadas Esdras no te hizo nada");
}
else 
{
    console.log("No sabemos de quien es la culpa");
}

//saludos keneth hueco