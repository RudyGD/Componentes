window.addEventListener("load", ()=>{
    iniciarSelector(document.getElementById("producto").value);    
});

var myArray = [];

/*Trato de mostrar solo el primer elemento Default*/
const iniciarSelector = () =>{
    var seleccion = document.getElementById("producto").options[document.getElementById("producto").selectedIndex].text;
    var listaElementos = document.getElementById("producto").options.length
    
    
    

    
    //array que guarda todos los nombres de los elementos del select para hacer un for que solo muestre el seleccionado
    for(let i=0; i< listaElementos; i++){        
        myArray.push(document.getElementById("producto").options[i].text)
    }
    
    
    for(let item in myArray){
        if(seleccion === myArray[item]){
            console.log(myArray[item])
            document.getElementById(myArray[item]).style.display="block";
        }else{
            console.log("Descartes: " + myArray[item])
            document.getElementById(myArray[item]).style.display="none";
            
        }
    }
}


/*Hace display none y display block segun la selección del select*/
window.addEventListener("change", ()=>{
    productos = document.getElementById("producto");
    var selected = productos.options[productos.selectedIndex].text;
    console.log("Producto" + productos);
    
    var productos = document.getElementById(selected);    
    for (let item in myArray){
        if(myArray[item] === myArray[productos])
            document.getElementById(myArray[item]).style.display = "block";
        else
        document.getElementById(myArray[item]).style.display = "none";
    }
    productos.style.display = "block";
})








