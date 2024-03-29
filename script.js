document.querySelector('#calcular2').addEventListener('click', ()=>{
    const n1= parseInt(document.querySelector('#n11').value);
    if (n1 >= 1000){
    let r;
    r = n1+(150*(n1/1000));   
    document.querySelector('#r2').innerHTML =r;
    document.getElementById('salida').innerHTML='El Costo en total es:';
}
else{
    let r;
    r = n1+(30*(n1/100))
    
    document.querySelector('#r2').innerHTML =r;
    document.getElementById('salida').innerHTML='El Costo en total es:';
}
})
var e = window.onkeydown;
function Enter() {
    if (e.keyCode == 13 && !e.shiftKey) {
        console.log("anduvo")
        e.preventDefault();
        var boton = document.querySelector('#calcular2');
        angular.element(boton).triggerHandler('click');
    }
}


addEventListener("keydown", function(e) {

    if (e.keyCode === 13 && !e.shiftKey) {
        console.log("anduvo")
        e.preventDefault();
        const n1= parseInt(document.querySelector('#n11').value);
    let r;
    r = n1+(30*(n1/100))
    document.querySelector('#r2').innerHTML =r;
    document.getElementById('salida').innerHTML='El Costo en total es:';
    }


})