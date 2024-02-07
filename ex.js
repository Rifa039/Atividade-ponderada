// Notas do aluno
const nota1 = 6;
const nota2 = 6;

// Calculando a média do aluno
const media = (nota1 + nota2) / 2;

// Média necessária para passar
const mediaParaPassar = 6;

// Exibindo as notas e a média
console.log("A primeira nota do aluno é", nota1);
console.log("A segunda nota do aluno é", nota2);
console.log("A média do aluno é", media);

// Verificando se o aluno passou ou reprovou
if (media >= mediaParaPassar) {
    console.log("O aluno passou!");
} else {
    console.log("O aluno reprovou.");
}
