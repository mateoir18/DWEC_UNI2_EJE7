
var resultados = new Array();
resultados[0]=["","Ayuntamiento","Polideportivo","Instituto","Mercado","Colegio"];

resultados[1] = new Array(6);
resultados[2] = new Array(6);
resultados[3] = new Array(6);
resultados[4] = new Array(6);

resultados[1][0]="PV";
resultados[2][0]="OV";
resultados[3][0]="VpSI";
resultados[4][0]="UPV";


function generaAleatorioMinMax(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


for(var i=1; i<resultados.length; i++){
    for(var j=1; j<resultados[i].length; j++)
        resultados[i][j]=generaAleatorioMinMax(5,10);
}  

console.table(resultados);
