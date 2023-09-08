

class BankAccount {
    constructor(saldo) {
        this.saldo = saldo;
    }

    async deposit(jumlah) {
        if (!isNaN(jumlah) && jumlah >= 0) {
            this.saldo += jumlah; // saldo = saldo + jumlah
            setTimeout(() => {
                console.log(`Saldo baru: ${this.saldo}`);
              }, 3000)
        } else {
            console.log('Masukkan angka yang valid dan lebih dari 0');
        }
    }

    async withdraw(jumlah) {
        if (!isNaN(jumlah) && jumlah >= 0 && jumlah <= this.saldo) {
            this.saldo -= jumlah;
            setTimeout(() => {
                console.log(`Saldo baru: ${this.saldo}`);
              }, 3000)
        } else {
            console.log('Masukkan angka yang valid dan lebih dari 0');
        }
    }
}

const bank = new BankAccount(1000000);
bank.deposit(200000);
bank.withdraw(500000);