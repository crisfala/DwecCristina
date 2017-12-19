/* autor: cristina falagan
 * fecha:03/11/2017
 * proyecto:Supuesto2
 * contiene:
 */
//definicion variable global
var caracterMayuscula=0;
var caracteresArea="";
var cuentaCaracteres=0;
var estadoSHIFT=false;
var teclaPunto=false;
var teclaNumerico=true;
var misTeclasNombre=[
    "idQ","idW","idE","idR","idT","idY","idU","idI","idO","idP",
    "idA","idS","idD","idF","idG","idH","idJ","idK","idL","idNN",
    "idZ","idX","idC","idV","idB","idN","idM"
    
];
var misTeclasValor=[
    "Q","W","E","R","T","Y","U","I","O","P",
    "A","S","D","F","G","H","J","K","L","NN",
    "Z","X","C","V","B","N","M"

];
var misTeclasNumericas=[
   "1","2","3","4","5","6","7","8","9","0",
    "@","#","€","%","&","-","+","(",")","/",
     "=\<","*","'",":",";","!","?"];
//para recorrer;
//for each(i in misteclasNombre){
// misTeclasNombre[i].value=misteclasValores[i];
/*function escribirCaracter1(letra){
  areaEscritura.value+=letra;
 
}*/

//area de escritura
function escribirCaracter(letra){
    /*caracteresArea+=letra;
    areaEscritura.value=caracteresArea;
    cuentaCaracteres+=1;
    verCaracteres();*/
   switch(letra){
    case "ENTER":{
        enter();
        break;
    }
    case "BORRAR":{
       if(caracterMayuscula===0){
        tecladoMayuscula();
        teclaPunto=true;
        }else{
            caracterMayuscula--;
        }
        borrar();
        break;
    }
    case ".":{
        caracteresArea+=letra;
        areaEscritura.value=caracteresArea;
        cuentaCaracteres++;
        verCaracteres();
        tecladoMayuscula();
        teclaPunto=true;
        caracterMayuscula=0;
        if(teclaNumerico){
         tecladoMayuscula();
         teclaPunto=true;
        }
        break;
   }
   
   default:{
    caracteresArea+=letra;
    areaEscritura.value=caracteresArea;
    cuentaCaracteres+=1;
    verCaracteres();
    if(teclaPunto){
        teclaPunto=false;
        tecladoMinuscula();
   
    }else{
      caracterMayuscula++;
    }
   }
}

}

function verCaracteres(){
  //  let objEscribe=document.getElementById("numeroCaracter");
  //  objEscribe.innerHTML=cuentaCaracteres;
   document.getElementById("numeroCaracter").innerHTML="caracteres: "+cuentaCaracteres;
}


/*function tecladoMayusculas(){
    idQ.value="Q";
    idW.value="W";
    idE.value="E";
    idR.value="R";
    idT.value="T";
    idY.value="Y";
    idU.value="U";
    idI.value="I";
    idO.value="O";
    idP.value="P";
    estadoSHIFT=true;
    for( var i of misTeclasNombre){
        misTeclasNombre[i].value.toUpperCase();
    }
}*/

/*function tecladoMin(){
    idQ.value="q";
    idW.value="w";
    idE.value="e";
    idR.value="r";
    idT.value="t";
    idY.value="y";
    idU.value="u";
    idI.value="i";
    idO.value="o";
    idP.value="p";
    estadoSHIFT=false;
    for( var i of misTeclasNombre){
        misTeclasNombre[i].value.toLowerCase();
    }
}*/



function cargarValoresTeclas(){
    con=0;
    for(  i of misTeclasNombre){
       document.getElementById(i).value=misTeclasValor[con];
       con+=1;
    }
}

function tecladoMayuscula(){
    estadoSHIFT=false;
    for(  i of misTeclasNombre){
        document.getElementById(i).value=document.getElementById(i).value.toUpperCase();
    }
}

function tecladoMinuscula(){
    estadoSHIFT=true;
   console.log("estoy en mayusculas");
    for(  i of misTeclasNombre){
        document.getElementById(i).value=document.getElementById(i).value.toLowerCase();
    }
}
function estadoMasMin(){
   console.log("comprobar estado");
    if(estadoSHIFT){
         tecladoMayuscula();
     } else{
        tecladoMinuscula();
        
    }
}
function borrar(){
    if(cuentaCaracteres>0) {
        cuentaCaracteres--;
        
        caracteresArea = caracteresArea.substring(0,caracteresArea.length - 1);
        areaEscritura.value=caracteresArea;
        
        verCaracteres();
        
    }

}
function enter(){
    caracteresArea+="\n";
    cuentaCaracteres++;
    verCaracteres();
}

function visualizar(){
   areaEscritura.value=caracteresArea;
}


function cambioTecladoNumerico(){
    con=0;
    for(  i of misTeclasNombre){
       document.getElementById(i).value=misTeclasNumericas[con];
       con++;
    }
}

function controlCambioTeclado(){ 
   if(teclaNumerico){
      cambioTecladoNumerico();
      teclaNumerico=false;
   } else{
      cargarValoresTeclas();
      teclaNumerico=true;
   }
}
function cargarValoresTeclado(){
   j=0;
   for(i of misTeclasNombre){
      if(teclaNumerico){
         document.getElementById(i).value=misTeclasValor[j];
      }else{
          document.getElementById(i).value=misTeclasNumericas[j];
      }
   }
}

/*switch(paso){
    case "ENTER":{
        enter("/n");
        break;
    }
    case "BORRAR":{
        borrar();
        break;
    }
    case ".":{
        valorVisor+=valor;
        cuentaCaracteres++;
        visualizar();
        tecladoMayuscula();
        break;
   }
   
   default:{ valorVisor+=valor;
    cuentaCaracteres+=1;
    visualizar();
    if(teclaPunto){
        teclaPunto=false;
        tecladoMinuscula();
    }
}
}*/


