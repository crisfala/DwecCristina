/* autor:Cris
 * fecha:03/11/2017
 * proyecto: teclado
 */
//definicion variable global
var teclaNumerico=true;
var caracteresArea="";
var cuentaCaracter=0;
var estadoSHIFT=false;
var misTeclasNombre=[
    "idQ","idW","idE","idR","idT","idY","idU","idI","idO","idP",
    "idA","idS","idD","idF","idG","idH","idJ","idK","idL","idNN",
    "idZ","idX","idC","idV","idB","idN","idM"
    
];
var misTeclasValor=[
    "Q","W","E","R","T","Y","U","I","O","P",
    "A","S","D","F","G","H","J","K","L","Ñ",
    "Z","X","C","V","B","N","M"

];

var misTeclasNumericas=["1","2","3","4","5","6","7","8","9","0",
    "@","#","€","%","&","-","+","(",")","/",
    "=\<","*","\"",":",";","!","?"];

function enter(){
    caracteresArea+="\n";
    cuentaCaracter++;
    visualizar();
}
function negrita(){
    areaEscritura=misTeclasNombre.bold();
    visualizar();
}


function escribirCaracter(letra){
    var teclaPunto;
    var caracterMayuscula;
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
            cuentaCaracter++;
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
        case "Ne":{
            negrita();
            break;
        }
        default:{
            caracteresArea+=letra;
            areaEscritura.value=caracteresArea;
            cuentaCaracter+=1;
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

function cargaValoresNumericos(){
    j=0;
    for(i of misTeclasNombre){
	document.getElementById(i).value=misTeclasNumericas[j];
        j++;
    }
}

function controlCambioTeclado(){
    if(teclaNumerico){
        cargaValoresNumericos();
        teclaNumerico=false;
    }else{
        cargaValoresTeclas();
        teclaNumerico=true;
    }  
}

function verCaracteres(){
    let objEscribe=document.getElementById("numeroCaracter");
    objEscribe.innerHTML=cuentaCaracter;
    areaEscritura.value=caracteresArea;
}

//document.getElementById("numeroCaracter").innerHTML="caracteres: "+cuentaCaracter;

function tecladoMayusculas(){
    estadoSHIFT=false;
    for(  i of misTeclasNombre){
        document.getElementById(i).value=document.getElementById(i).value.toUpperCase();
    }
}


function tecladoMin(){
    estadoSHIFT=false;
    for( var i of misTeclasNombre){
        misTeclasNombre[i].value.toLowerCase();
    }
}

function estadoMasMin(){
    if(estadoShift){ //tiene que pasar de minusculas a mayusculas
        tecladoMayuscula();        
    } else{ //tiene que pasar a mayusculas
        tecladoMinuscula();
    }
}

function cargaValoresTeclas(){
    j=0;
    for(i of misTeclasNombre){
     	document.getElementById(i).value=misTeclasValor[j];
        j++;
    }

}

function tecladoMayuscula(){
    estadoSHIFT=false;
    for( var i of misTeclasNombre){
        document.getElementById(i).value=document.getElementById(i).value.toUpperCase();
    }
}

function tecladoMinuscula(){
    estadoSHIFT=true;
    for( var i of misTeclasNombre){
        document.getElementById(i).value=document.getElementById(i).value.toLowerCase();
    }
}

function estadoMasMin(){
    if(estadoSHIFT){ //tiene que pasar de minusculas a mayusculas
        tecladoMayuscula();        
    } else{ //tiene que pasar a mayusculas
        tecladoMinuscula();
    }
}

function borrar(){
     if(cuentaCaracter>0) {
        cuentaCaracter--;
        caracteresArea = caracteresArea.substring(0, caracteresArea.length - 1);
        verCaracteres();
    }
}

function cargaValoresTeclado(){
    j=0;
    for(i of misTeclasNombre){
        if(tecladoNumerico){
            document.getElementById(i).value=misTeclasValor[j];
        } else{
            document.getElementById(i).value=misTeclasNumericas[j];
        }
        j++;
    }
}





