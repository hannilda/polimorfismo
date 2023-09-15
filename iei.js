class Pessoa {
    constructor(nome, idade) {
      this.nome = nome;
      this.idade = idade;
    }
  
    apresentar() {
      console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`);
    }
  }
  
  class Estudante extends Pessoa {
    constructor(nome, idade, instituicao) {
      super(nome, idade);
      this.instituicao = instituicao;
    }
  
    apresentar() {
      console.log(`Olá, meu nome é ${this.nome}, tenho ${this.idade} anos e estudo na ${this.instituicao}.`);
    }
  }
  
  class Professor extends Pessoa {
    constructor(nome, idade, disciplina) {
      super(nome, idade);
      this.disciplina = disciplina;
    }
  
    apresentar() {
      console.log(`Olá, meu nome é ${this.nome}, tenho ${this.idade} anos e ensino ${this.disciplina}.`);
    }
  }
  
  const pessoa = new Pessoa("Isaac", 17);
  const estudante = new Estudante("Laura", 22, "UFMS");
  const professor = new Professor("Lucas", 40, "Gramática");
  
  pessoa.apresentar();    
  estudante.apresentar();  
  professor.apresentar();  