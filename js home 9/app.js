
 
    let name = prompt("Студенттин атын киргизиңиз:");


    let mathem = Number(prompt("Математика боюнча баа (0-100):"));
    let lang = Number(prompt("Тилдер боюнча баа (0-100):"));
    let program = Number(prompt("Программалоо боюнча баа (0-100):"));
    

    let abs = Number(prompt("Калтырылган сабактардын саны:"));


    let avera = (mathem + lang + program) / 3;


    if (abs === 0) {
        avera += 5;
        alert("Бонус +5 балл идеалдуу катышуу үчүн!");
    }

   
    if (avera >= 90) {
        alert("Куттуктайбыз, " + name + "! Жогорулатылган стипендия. Сиздин балл: " + avera.toFixed(1));
    } else if (avera >= 70) {
        alert("Кадимки стипендия берилди. Сиздин балл: " + avera.toFixed(1));
    } else {
        alert("Студент " + name + ", сиз сессиядан өтпөй калдыңыз. Орточо балл: " + avera.toFixed(1));
    }
