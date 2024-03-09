function Game(nome, genero, ano) {
    this.nome = nome;
    this.genero = genero;
    this.ano = ano;

    this.informacao = function() {
        console.log(`Jogo: ${this.nome}, ${this.genero}, ${this.ano}`);
    }
}

function PlatGame(nome, genero, ano, plataforma) {
    Game.call(this, nome, genero, ano);
    this.plataforma = plataforma;

    this.informacao = function() {
        console.log(`Jogo: ${this.nome}, ${this.genero}, ${this.ano}, ${this.plataforma}`);
    }
}

function DispGame(nome, genero, ano, dispositivo) {
    Game.call(this, nome, genero, ano);
    this.dispositivo = dispositivo;

    this.informacao = function() {
        console.log(`Jogo: ${this.nome}, ${this.genero}, ${this.ano}, ${this.dispositivo}`);
    }
}

const game1 = new Game("Fortnite", "Battle Royale", 2017);
const platgame1 = new PlatGame("Counter-Strike 2", "FPS", 2023, "Steam");
const dispgame1 = new DispGame("Bit Heroes", "MMORPG", 2017, "Mobile");

game1.informacao();
platgame1.informacao();
dispgame1.informacao();