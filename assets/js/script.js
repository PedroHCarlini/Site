console.log("Calculando orçamento");


//Manipulção do DOM
//console.log (document.querySelector("#qtde").value)

document.querySelector("#qtde").addEventListener("change", calcularOrcamento)
document.querySelector("#js").addEventListener("change", calcularOrcamento)
document.querySelector("#layout_sim").addEventListener("change", calcularOrcamento)
document.querySelector("#prazo").addEventListener("change", calcularOrcamento)


function calcularOrcamento(){
   let preco = qtde.value *2200
   
   if (js.checked) preco = preco * 2

   if(layout_sim.checked) preco += 5000

   
   let taxaDeUrgencia = preco *(1.1 - prazo.value *0.1)
   preco += taxaDeUrgencia
   
   label_prazo.innerHTML = `Prazo (${prazo.value}  anos)`

   output.innerHTML = "R$" + preco.toFixed(2)

   
}