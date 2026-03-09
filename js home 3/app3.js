let age = Number(prompt('Жаш курак'))    

if (age >= 0 && age <= 12) {
    alert("Ребёнок");
} 
else if (age >= 13 && age <= 17) {
   alert("Подросток");
} 
else if (age >= 18 && age <= 60) {
   alert("Взрослый");
} 
else  {
   alert('Пенсионер');
}
