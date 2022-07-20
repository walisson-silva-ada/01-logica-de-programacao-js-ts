// Veículo
//  |- marca, modelo
//  |- ligar, desligar, colocar passageiro dentro

function Veiculo(marca, modelo) {
  this.marca = marca;
  this.modelo = modelo;
  this._estaLigado = false;
  this.quantidadePassageiros = 0;
}

Veiculo.prototype.estaLigado = function () {
  return this._estaLigado;
};

Veiculo.prototype.setQuantidadePassageiros = function (quantidadePassageiros) {
  this.quantidadePassageiros = quantidadePassageiros;
};

Veiculo.prototype.ligar = function () {
  this._estaLigado = true;
  console.log(`O veículo ${this.marca} ${this.modelo} está ligado!`);
};

Veiculo.prototype.desligar = function () {
  this._estaLigado = false;
  console.log(`O veículo ${this.marca} ${this.modelo} está desligado!`);
};

let corsa = new Veiculo("Chevrolet", "Corsa");
corsa.setQuantidadePassageiros(2);
console.log(`Olha, eu tenho um ${corsa.marca} ${corsa.modelo}`);
console.log(`O veículo está ligado? ${corsa.estaLigado()}`);
corsa.ligar();
corsa.desligar();

let titan = {
  modelo: "Titan",
  marca: "Honda",
  cor: "Preta",
  empinar: function () {
    console.log(`A moto ${this.modelo} ${this.marca} está empinada!`);
  },
};
titan.empinar();
// [{'key': 'value'}]
// [{'modelo': 'Corsa'}]

console.clear();

console.log("*** Object.entries() ***");
for (const [propriedade, valor] of Object.entries(corsa)) {
  console.log(` - ${propriedade} = ${valor}`);
}
console.log(`Mapa -> ${corsa["modelo"]}`);

console.log("*** Object.keys() ***");
for (const propriedade of Object.keys(corsa)) {
  console.log(` - ${propriedade}`);
}

console.log("*** Object.values() ***");
for (const valor of Object.values(corsa)) {
  console.log(` - ${valor}`);
}

console.clear();
let hb20 = new Veiculo("Hyundai", "HB20");
Object.assign(corsa, titan, hb20);
for (const [propriedade, valor] of Object.entries(corsa)) {
  console.log(` - ${propriedade} = ${valor}`);
}

class VeiculoV2 {
  modelo;
  marca;
  #estaLigado;

  constructor(modelo, marca) {
    this.modelo = modelo;
    this.marca = marca;
    this.#estaLigado = false;
  }

  get estaLigado() {
    return this.#estaLigado;
  }

  ligar() {
    this.#estaLigado = true;
    console.log(`O veículo ${this.modelo} está ligado`);
  }
}

console.clear();

let argo = new VeiculoV2("Argo", "Fiat");

console.log(argo.estaLigado);

argo.ligar();

console.log(argo.estaLigado);

for (const [propriedade, valor] of Object.entries(argo)) {
  console.log(` - ${propriedade} = ${valor}`);
}

argo.#estaLigado = true;
