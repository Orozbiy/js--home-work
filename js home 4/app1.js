let number = Number(prompt("Сан киргизиңиз"));

if (number % 3 === 0 && number % 5 === 0) {
    alert("CocaCola");
}
else if (number % 3 === 0) {
    alert("Coca");
}
else if (number % 5 === 0) {
    alert("Cola");
}
else {
    alert("Иштебейт");
}