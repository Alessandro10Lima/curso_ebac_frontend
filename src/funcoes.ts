function produto(primeiroNumero: number, segundoNumero:number): number {
    return primeiroNumero * segundoNumero;
}

const multiplicacao = produto(5,6);
console.log( multiplicacao);



function saudacao(nome: string): string {
    return `Olá ${nome}`;
}

const mensagem = saudacao("Alessandro");
console.log( mensagem);
