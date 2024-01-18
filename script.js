document.querySelector('#calcular2').addEventListener('click', ()=>{
    const n1= parseInt(document.querySelector('#n11').value);
    let r;
    r = n1+(30*(n1/100))
    document.querySelector('#r2').innerHTML =r;
    document.getElementById('salida').innerHTML='El adicional en total es:';
})