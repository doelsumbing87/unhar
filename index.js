function cekGenapGanjil(angka) {
  if (angka % 2 === 0) {
    return "Genap";
  } else {
    return "Ganjil";
  }
}

const angka = 15;
const hasil = cekGenapGanjil(angka);
console.log(`${angka} adalah bilangan ${hasil}`);
