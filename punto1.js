// 1. Función constructora: CuentaBancaria

//funcion constructora
function CuentaBancaria(titular, saldoInicial) {
  this.titular = titular;
  this.saldo = saldoInicial;
}

//método depositar
CuentaBancaria.prototype.depositar = function (monto) {
  if (monto > 0) {
    this.saldo += monto;
    console.log(`Depósito exitoso de $${monto}. Nuevo saldo: $${this.saldo}`);
  }
};

//Metodo para extraer
CuentaBancaria.prototype.extraer = function (monto) {
  if (monto <= this.saldo && monto > 0) {
    this.saldo -= monto;
    console.log(`Extracción exitosa de $${monto}. Nuevo saldo: $${this.saldo}`);
  }
};

// Método para consultar saldo

CuentaBancaria.prototype.consultarSaldo = function () {
  console.log(` Tu saldo actual es: $${this.saldo}`);
};

const cuentaNueva = new CuentaBancaria("Milagros", 3000);
cuentaNueva.depositar(500);
cuentaNueva.extraer(200);
cuentaNueva.consultarSaldo();
