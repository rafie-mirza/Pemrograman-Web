function final (){
const panjang = document.querySelector("#panjang").value
const lebar = document.querySelector("#lebar").value
const tinggi = document.querySelector("#tinggi").value
    hasil = panjang * lebar * tinggi 
    document.querySelector(".hasil").innerHTML= hasil 
}
document.querySelector(".btn").addEventListener("click",final)
