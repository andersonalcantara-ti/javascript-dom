const btn = document.getElementById("soma");
btn.addEventListener("click" , soma);

function soma (){
    const numberOne = Number(document.getElementById("numberOne").value);
    const numberTwo = Number(document.getElementById("numberTwo").value);
    const resultado = (numberOne + numberTwo);

    document.getElementById("resposta").textContent = resultado;
}