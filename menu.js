import promptSync from 'prompt-sync'

//notion do curso: https://mirror-saw-7ad.notion.site/Desenvolvedor-Web-Back-end-2797fef7117e802193d3e8215c838f9b

class Pessoa {
    #senha;   // privado
    //   _email;   // protegido

    constructor(nome, nascimento, senha, palavraChave) {
        this.nome = nome;       // público    // público
        this.nascimento = new Date(nascimento).toLocaleString('pt-BR');
        this.#senha = senha;    // privado
        this.palavraChave = palavraChave;
        //     this._email = "teste@email.com"; // protegido
    }


    apresentar() {
        console.log(`Olá me chamo ${this.nome}.`)
    }

    // Getter para senha privada
    get senha() {
        const palavraChave = prompt("Para ver a senha, digite a palavra chave")

        if (this.palavraChave == palavraChave) {
            return this.#senha;
        }
        else {
            return "Foi mal, tente novamente.";
        }
    }

    // Setter para senha privada
    set senha(novaSenha) {
        this.#senha = novaSenha;
    }
}


class Aluno extends Pessoa { //extends: indica de qual classe herdar

    constructor(nome, nascimento, senha, palavraChave, ra, nota) {
        super(nome, nascimento, senha, palavraChave);
        this.nascimento = nascimento
        this.ra = ra;
        this.nota = nota;
    }

    //exemplo de polimorfismo: sobrescrita/override de métodos de super classes 
    apresentar() {
        console.log(`Meu nome é ${this.nome} e meu RA é ${this.ra}.`)
    }
    //(sobrecarga = overload)
    
    responderChamada() {
        console.log("Presente!");
    }
    
}

class Professor extends Pessoa {
    
    constructor(nome, nascimento, senha, palavraChave, salario, registro) {
        super(nome, nascimento, senha, palavraChave);
        this.salario = salario;
        this.registro = registro;
    }

    apresentar() {
        console.log(`Meu nome é ${this.nome} e meu número de registro é ${this.registro}.`)
    }

}

const prompt = promptSync()


console.log("Bem vindo ao cadastro do SENAC.")
console.log("Para continuar, informe se você é aluno ou professor.")

let novaPessoa;
let tipoDePessoa = parseInt(prompt("Digite 1 se você for Aluno ou 2 se você for Professor: "));

let nomePessoa = prompt("Digite seu nome: ");
let dataPessoa = prompt("Digite sua data de nascimento: ");
let senhaPessoa = prompt("Digite sua senha: ");
let palavraChavePessoa = prompt("Digite a palavra chave: ");

if (tipoDePessoa == 1) {
    let raDoAluno = prompt("Digite seu RA: ");
    let notaAluno = prompt("Digite sua nota: ");

    novaPessoa = new Aluno(
        nomePessoa,
        dataPessoa,
        senhaPessoa,
        palavraChavePessoa,
        raDoAluno,
        notaAluno
    )


} else if (tipoDePessoa == 2) {
    let salarioProf = prompt("Digite seu salário: ");
    let registroProf = prompt("Digite seu registro: ");

    novaPessoa = new Professor(
        nomePessoa,
        dataPessoa,
        senhaPessoa,
        palavraChavePessoa,
        salarioProf,
        registroProf
    )
}

console.log(novaPessoa)
console.log(novaPessoa.apresentar())