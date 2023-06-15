
const alunos = [
    { nome: 'Alessandro', nota: 8.5 },
    { nome: 'Brenda', nota: 9.8 },
    { nome: 'Bruno', nota: 7.6 },
    { nome: 'Flávio', nota: 4 },
    { nome: 'Ana', nota: 4.8 },
    ];

function alunos2023(aprovados) {
    return alunos.filter(aluno => aluno.nota >= 6);
    }

    function mensagemAprovados() {
        const alunosAprovados = alunos2023();
        const nomesAprovados = alunosAprovados.map(aluno => aluno.nome);
        return `Os alunos aprovados foram: ${nomesAprovados} `;
    }

const alunosAprovados = alunos2023(alunos);
console.log(alunosAprovados);

const mensagemDosAprovados = mensagemAprovados();
console.log(mensagemDosAprovados);

