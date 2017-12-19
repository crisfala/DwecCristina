function cargaInicial(){ //carga las funciones, la utilizamos para cargar las funciones al principio de la aplicacion
    editarFormato();
    enlazar();
    mostrarCodigo();   
}

function editarFormato(){ //el texto seleccionado cambia a el boton que escojamos
    var botonNegrita=document.getElementById("botonNegrita"); //variable que seleccion el botonNegrita
    var botonItalic=document.getElementById("botonItalic"); //variable que seleccion el botonItalic
    var botonSubrayado=document.getElementById("botonSubrayado"); //variable que seleccion el botonSubrayado
    
    botonNegrita.onclick=function(){ //al pulsar el  botonNegrita nos cambiara la letra a negrita
        document.execCommand('bold','false',null);
    }
    
    botonItalic.onclick=function(){ //al pulsar el  botonSubrayado nos subraya el texto
        document.execCommand('italic','false',null); 
    }
    
    botonSubrayado.onclick=function(){ //al pulsar el  botonNegrita nos cambiara la letra e negrita
        document.execCommand('underline','false',null); 
    }

}

    
function enlazar(){ //Nos permite añadir un enlace
    var botonEnlace=document.getElementById("botonEnlace"); //seleccionamos el botonEnlace
    botonEnlace.onclick=function(){ //hacemos que nos deje añadir un enlace al hacer click en el botonEnlace
        var direccionUrl=prompt("Escribe la direccion de enlace",'http://'); 
        if(direccionUrl){
            document.execCommand('createlink',false,'direccionUrl');
        }
    }
        
}

function mostrarCodigo(){ //nos muestra el codigo del area de texto
    //Recorre los nodos
    var botonMostrarCodigo=document.getElementById("botonMostrarCodigo");
    botonMostrarCodigo.onclick=function(){
        var codigoArea=document.getElementById("areaEditable").innerHTML;
        codigoArea.replace(/</g,'&lt;');
        codigoArea.replace(/>/g,'&gt;');
        alert(codigoArea);
    }
}


