// 1. Variáveis A e B
let A = 10;
let B = 20;
console.log(A, B);
console.log(`A = ${A}, B = ${B}`);
alert("A = " + A + ", B = " + B);

// 2. Função de salário
function calcularSalario(salarioBase){
    let salarioComGrat = salarioBase * 1.05;
    let salarioLiquido = salarioComGrat * 0.93;
    return salarioLiquido;
}
let salario = parseFloat(prompt("Digite o salário-base:"));
let resultado = calcularSalario(salario);
console.log(resultado);
console.log(`Salário líquido: ${resultado}`);
alert("Salário líquido: " + resultado);

// 3. Nome e idade
let nome = prompt("Digite seu nome:");
let idade = prompt("Digite sua idade:");
console.log(nome, idade);
console.log(`Nome: ${nome}, Idade: ${idade}`);
alert("Nome: " + nome + ", Idade: " + idade);

// 4. Dois números e operações (sem função)
let x = parseInt(prompt("Digite x:"));
let y = parseInt(prompt("Digite y:"));
console.log(x+y, x*y, x/y, x-y);
console.log(`Soma: ${x+y}, Multiplicação: ${x*y}, Divisão: ${x/y}, Subtração: ${x-y}`);
alert(`Soma: ${x+y}, Multiplicação: ${x*y}, Divisão: ${x/y}, Subtração: ${x-y}`);

// 5. Mesma coisa usando função
function operacoes(a,b){
    return [a+b, a*b, a/b, a-b];
}
let [soma, mult, div, sub] = operacoes(x,y);
console.log(soma, mult, div, sub);
console.log(`Soma: ${soma}, Multiplicação: ${mult}, Divisão: ${div}, Subtração: ${sub}`);
alert(`Soma: ${soma}, Multiplicação: ${mult}, Divisão: ${div}, Subtração: ${sub}`);

// 6. Dados pessoais
let endereco = prompt("Endereço (cidade, estado, CEP):");
let telefone = prompt("Número de telefone:");
let area = prompt("Área de atuação profissional:");
console.log(nome, endereco, telefone, area);
console.log(`Nome: ${nome}, Endereço: ${endereco}, Telefone: ${telefone}, Área: ${area}`);
alert(`Nome: ${nome}, Endereço: ${endereco}, Telefone: ${telefone}, Área: ${area}`);

// 7. Lucro anual
let vendas = parseFloat(prompt("Valor projetado das vendas:"));
let lucro = vendas * 0.23;
console.log(lucro);
console.log(`Lucro esperado: ${lucro}`);
alert("Lucro esperado: " + lucro);

// 8. Maior de 5 números
let numeros = [];
for(let i=0;i<5;i++){
    numeros.push(parseFloat(prompt(`Digite o ${i+1}º número:`)));
}
let maior = Math.max(...numeros);
console.log(maior);
console.log(`Maior número: ${maior}`);
alert("Maior número: " + maior);

// 9. Contar maiores e menores de idade
let idades = prompt("Digite várias idades separadas por espaço:").split(" ").map(Number);
let maiores = idades.filter(i => i >= 18).length;
let menores = idades.filter(i => i < 18).length;
console.log(maiores, menores);
console.log(`Maiores: ${maiores}, Menores: ${menores}`);
alert(`Maiores: ${maiores}, Menores: ${menores}`);

// 10. Função IMC
function calcularIMC(peso, altura){
    return peso / (altura*altura);
}
let peso = parseFloat(prompt("Digite seu peso (kg):"));
let altura = parseFloat(prompt("Digite sua altura (m):"));
let imc = calcularIMC(peso, altura);
console.log(nome, idade, imc);
console.log(`Nome: ${nome}, Idade: ${idade}, IMC: ${imc}`);
alert(`Nome: ${nome}, Idade: ${idade}, IMC: ${imc}`);


