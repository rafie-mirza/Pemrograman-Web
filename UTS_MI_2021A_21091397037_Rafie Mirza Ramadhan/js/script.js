// js digunakan sebagai rumus penghitungan untuk panjang, lebar dan tinggi yang sudah di inputkan oleh user

function final (){
// beberapa const dibawah digunakan sebagai penyimpanan input dari user untuk panjang, lebar dan tinggi
const panjang = document.querySelector("#panjang").value
const lebar = document.querySelector("#lebar").value
const tinggi = document.querySelector("#tinggi").value
    // command hasil di bawah adalah pengeksekusian rumus perhitungan volume balok
    hasil = panjang * lebar * tinggi 
    // command document dibawah digunakan sebagai penyambungan antara h2 class "hasil" pada index.html dengan script.js agar hasil bisa keluar
    document.querySelector(".hasil").innerHTML= hasil 
}
document.querySelector(".btn").addEventListener("click",final)