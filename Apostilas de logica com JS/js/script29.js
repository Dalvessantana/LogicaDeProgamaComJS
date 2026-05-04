alert ("Jornada de trabalho")

let horasMes = parseFloat(prompt("QUANTAS HORAS FORAM TRABALHADAS NO MÊS : "))

let salarioHora = parseFloat(prompt("QUAL O SEU SALARIO POR HORA"))

let salarioBase = horasMes * salarioHora

if (horasMes > 160 ){
    let horaExtra = horasMes -160
    let valorExtra = horaExtra * salarioHora * 1.5
    let salarioFinal = (160 * salarioHora) + valorExtra
    alert ("O SALARIO FINAL É R$ " + salarioFinal)
    alert(valorExtra)
    alert(salarioBase)
    alert(nome)
}
else{ 
  let nome = "jailson"
  alert("O SEU SALARIO SEM HORA EXTRA É: " + salarioBase) 

}