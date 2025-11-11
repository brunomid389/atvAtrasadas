<!DOCTYPE html>
<html lang="pt-br">
<head>
<meta charset="UTF-8">
<title>Exercícios JS</title>
<style>
    .resultado { text-align: center; margin: 10px; font-size: 18px; }
</style>
</head>
<body>

<div id="nomeUser" class="resultado"></div>
<div id="opSoma" class="resultado"></div>
<div id="opMult" class="resultado"></div>
<div id="opDiv" class="resultado"></div>
<div id="opSub" class="resultado"></div>

<script>

// 1. Função que retorna as quatro operações
function operacoes(a, b){
    return {
        soma: a + b,
        sub: a - b,
        mult: a * b,
        div: a / b
    };
}

// 2. Função que exibe nome do usuário em alert, console e write
function mostrarNome(){
    let nome = prompt("Digite seu nome:");
    alert("Nome: " + nome);
    console.log("Nome: " + nome);
    document.write("<p class='resultado'>Nome: " + nome + "</p>");
}

// 3. Função que verifica se pessoa é maior de 18
function verificarIdade(){
    let nascimento = prompt("Digite sua data de nascimento (AAAA-MM-DD):");
    let hoje = new Date();
    let dataNasc = new Date(nascimento);
    let idade = hoje.getFullYear() - dataNasc.getFullYear();
    let m = hoje.getMonth() - dataNasc.getMonth();
    if(m < 0 || (m === 0 && hoje.getDate() < dataNasc.getDate())) idade--;
    if(idade >= 18){
        alert("Maior de 18 anos");
        console.log("Maior de 18 anos");
        document.write("<p class='resultado' style='color:green;'>Maior de 18 anos</p>");
    } else {
        alert("Menor de 18 anos");
        console.log("Menor de 18 anos");
        document.write("<p class='resultado' style='color:red;'>Menor de 18 anos</p>");
    }
}

// 4. Função de notas (aprovado/reprovado/recuperação)
function verificarNotas(){
    let nota1 = parseFloat(prompt("Digite a primeira nota:"));
    let nota2 = parseFloat(prompt("Digite a segunda nota:"));
    let media = (nota1 + nota2)/2;
    let resultado;
    if(media >= 7){
        resultado = "Aprovado";
    } else if(media >= 5){
        resultado = "Recuperação";
    } else {
        resultado = "Reprovado";
    }
    alert("Resultado: " + resultado);
    console.log("Resultado: " + resultado);
    document.write("<p class='resultado'>" + resultado + "</p>");
}

// 5. Função que imprime nome no HTML via getElementById
function imprimirNomeHTML(){
    let nome = prompt("Digite seu nome:");
    let div = document.getElementById("nomeUser");
    div.innerHTML = nome;
    div.style.color = "blue";
}

// 6 e 7. Função operações com input HTML e cores diferentes
function calcularComHTML(){
    let num1 = parseFloat(prompt("Digite o primeiro número:"));
    let num2 = parseFloat(prompt("Digite o segundo número:"));
    let ops = operacoes(num1, num2);

    let cores = {soma:"red", sub:"green", mult:"blue", div:"purple"};

    document.getElementById("opSoma").innerHTML = "Soma: " + ops.soma;
    document.getElementById("opSoma").style.color = cores.soma;

    document.getElementById("opSub").innerHTML = "Subtração: " + ops.sub;
    document.getElementById("opSub").style.color = cores.sub;

    document.getElementById("opMult").innerHTML = "Multiplicação: " + ops.mult;
    document.getElementById("opMult").style.color = cores.mult;

    document.getElementById("opDiv").innerHTML = "Divisão: " + ops.div;
    document.getElementById("opDiv").style.color = cores.div;
}

mostrarNome();
verificarIdade();
verificarNotas();
imprimirNomeHTML();
calcularComHTML();

</script>
</body>
</html>
