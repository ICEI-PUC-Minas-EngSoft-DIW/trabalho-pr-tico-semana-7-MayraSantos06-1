let mensagem = " "
let nome = prompt("Seu nome: ");

let renda_mensal = Number(prompt("Sua renda mensal: "));
while (isNaN(renda_mensal)) {
    renda_mensal = Number(prompt("Valor inválido. Digite sua renda mensal novamente: "));   
}      

let qnt_de_despesas = Number(prompt("Quantidade de despesas que serão informadas:(1 a 5)"));
while (isNaN(qnt_de_despesas)) {
    qnt_de_despesas = Number(prompt("Valor inválido. Digite a quantidade de despesas novamente: "));    
}   

if (qnt_de_despesas < 1){
    qnt_de_despesas = 1;
}
else if (qnt_de_despesas > 5){
    qnt_de_despesas = 5;
}
let despesas = 0;

for (let i=1; i <= qnt_de_despesas; i++){
    let valorDespesa = Number(prompt("Valor da despesa: "+ i));
    while (isNaN(valorDespesa)) {
    valorDespesa = Number(prompt("Digite o valor da despesa novamente: "));    
}   
    despesas = valorDespesa + despesas;
}

let sobra = 0;

if (despesas > renda_mensal){
    mensagem = "⚠️ Atenção: você gastou mais do que ganhou";
}
else{
    sobra = (renda_mensal - despesas);

        if (sobra >= (renda_mensal * 0.30)){
    mensagem = "✅ Ótimo: boa margem de sobra.";
}
    else{
    mensagem = " 🙂 Ok: dá para melhorar a sobra";
}
}

console.log("Nome:", nome);
console.log("Renda:", renda_mensal.toFixed(2));
console.log("Total de despesas:", despesas.toFixed(2));
console.log("Sobra:", sobra.toFixed(2));
console.log("Situação:", mensagem);

alert(
"===== RESULTADO FINAL =====\n" +
"Nome: " + nome + "\n" +
"Renda: " + renda_mensal.toFixed(2) + "\n" +
"Total de despesas: " + despesas.toFixed(2) + "\n" +
"Sobra: " + sobra.toFixed(2) + "\n" +
"Situação: " + mensagem
);


