// Challenge Dokumen
// Nama : Shera Alice Ayutri (BEJS-1)

let saldo = 0;

function tampilkanSaldo() {
    alert(`Saldo Anda saat ini: ${saldo}`);
}

function tambahSaldo() {
    const tambahan = parseFloat(window.prompt("Masukkan jumlah saldo yang ingin ditambahkan:"));
    if (!isNaN(tambahan) && tambahan >= 0) {
        saldo += tambahan;
        tampilkanSaldo();
        updateSaldoDisplay();
    } else {
        alert("Masukkan angka yang valid dan lebih dari 0.");
    }
}

function kurangiSaldo() {
    const pengurangan = parseFloat(window.prompt("Masukkan jumlah saldo yang ingin dikurangi:"));
    if (!isNaN(pengurangan) && pengurangan >= 0) {
        if (pengurangan <= saldo) {
            saldo -= pengurangan;
            tampilkanSaldo();
            updateSaldoDisplay();
        } else {
            alert("Saldo tidak mencukupi.");
        }
    } else {
        alert("Masukkan angka yang valid dan lebih dari 0.");
    }
}

function updateSaldoDisplay() {
    document.getElementById("saldoDisplay").textContent = saldo;
}
