function Time(nome){
    this.nome = nome;
}

function Jogador(nome, posicao, salario, contrato){
    this.posicao = posicao;
    this.contrato = contrato;
    this.salario = salario;
    let _salario = salario;

    this.getSalario = function(){
        return _salario;
    }

    this.setSalario = function(valor){
        if(typeof valor === 'number'){
            _salario = valor;
        }
    }

    this.dizInfo = function(){
        console.log(this.posicao);
    }

    Time.call(this, nome);
}

function Zagueiro(nome){
    Jogador.call(this, nome, "Zagueiro", 600000, "4 anos");

}

function Goleiro(nome){
    Jogador.call(this, nome, "Goleiro", 750000, "3 anos");

}

const jogador1 = new Jogador("Gabigol", "Atacante", 1200000, "3 anos");
const jogador2 = new Zagueiro("Léo Pereira");
const jogador3 = new Goleiro("Matheus Cunha");

console.log(jogador2.getSalario());
console.log(jogador1.getSalario());
console.log(jogador3.getSalario());

console.log(jogador2);
