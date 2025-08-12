// 2. Clase: CuentaBancaria con get y set

class CuentaBancaria {
  #saldo;

  constructor(titular, saldoInicial) {
    this.titular = titular;

    //mi validación de saldo
    if (saldoInicial >= 0) {
      this.#saldo = saldoInicial;
    } else {
      console.log(
        "El saldo inicial no puede ser un valor negativo. Inicia en 0"
      );
      this.#saldo = 0;
    }
  }

  //se usa getter para obtener el saldo
  get saldo() {
    return this.#saldo;
  }

  //se usa setter para modificar el saldo
  set saldo(nuevoSaldo) {
    if (nuevoSaldo >= 0) {
      this.saldoInicial += nuevoSaldo;
    } else {
      console.log("El valor del saldo debe ser positivo");
    }
  }

  //depositar
  depositar(monto) {
    if (monto > 0) {
      this.#saldo += monto;
      console.log(
        `Se ha depositado con exito $${monto}. Tu saldo actual es de: $${
          this.#saldo
        }`
      );
    } else {
      console.log("El monto debe ser positivo");
    }
  }

  extraer(monto) {
    if (monto <= this.#saldo) {
      this.#saldo -= monto;
      console.log(
        `Se ha extraido $${monto} de tu cuena. Tu saldo actual es de: $${
          this.#saldo
        }`
      );
    } else {
      console.log(
        "No tienes suficiente saldo en tu cuenta para extraer ese monto"
      );
    }
  }

  consultarSaldo() {
    console.log(`Tu saldo actual es de $${this.#saldo} `);
  }
}

//uso
const cuentaNueva = new CuentaBancaria("Milagros", 3000);
cuentaNueva.depositar(2000);
cuentaNueva.extraer(1000);
cuentaNueva.consultarSaldo();
