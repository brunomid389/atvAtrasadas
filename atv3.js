// 1. Variável fruta com switch
let fruta = "maçã";

switch(fruta){
    case "maçã":
        console.log("Não vendemos esta fruta aqui");
        break;
    case "kiwi":
        console.log("Estamos com escassez de kiwis");
        break;
    case "melancia":
        console.log("Aqui está, são 3 reais o quilo");
        break;
    default:
        console.log("Erro: fruta inválida");
}

// Testes
fruta = "kiwi";
fruta = "melancia";
fruta = "banana"; // default

// 2. Compra de carro com switch
let carro = "hatch";

switch(carro){
    case "hatch":
        console.log("Compra efetuada com sucesso");
        break;
    case "sedan":
    case "motocicleta":
    case "caminhonete":
        console.log("Tem certeza que não prefere este modelo?");
        break;
    default:
        console.log("Não trabalhamos com este tipo de automóvel aqui");
}

// 3. Operador ternário com variável lógica
let logico = true;
logico ? console.log("Verdadeiro") : console.log("Falso");

// 4. Operador ternário com string
let profissao = "Programador";
profissao === "Programador" ? console.log("Você é um programador") : console.log("Você não é programador");

// 5. Operador ternário com números
let a = 5, b = 10;
a > b ? console.log("a é maior") : console.log("b é maior");

// 6. Função com dois parâmetros
function saudacao(nome, sobrenome){
    console.log(`Olá ${nome} ${sobrenome}, eu sou uma função!`);
}
saudacao("João", "Silva");

// 7. Modelo de e-mail
const destinatario = "usuario@exemplo.com";
const assunto = "Confirmação de cadastro";
const nome = "João";
const linkDeConfirmacao = "http://exemplo.com/confirma";
const corpoDoEmail = `Olá ${nome},<br>Por favor confirme seu cadastro clicando no link abaixo:<br><a href="${linkDeConfirmacao}">Confirmar Cadastro</a>`;
const modeloDeEmail = `
Para: ${destinatario}
Assunto: ${assunto}
${corpoDoEmail}
`;
console.log(modeloDeEmail);

// 8. Quiz com switch
let resposta = "B"; // Supondo que a pergunta tenha alternativas A, B, C
switch(resposta){
    case "A":
        console.log("Resposta incorreta");
        break;
    case "B":
        console.log("Resposta correta!");
        break;
    case "C":
        console.log("Resposta incorreta");
        break;
    default:
        console.log("Opção inválida");
}
