const mylist = ["cafe", "caneta", "estudo"];
const elemento = document.querySelector('#mylist');

if (elemento) {
    elemento.textContent = mylist.join(", ");
}