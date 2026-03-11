let name = prompt("Атыңыз ким?");


let subject1 = prompt("1-сабактын аталышы:");
let subject2 = prompt("2-сабактын аталышы:");
let subject3 = prompt("3-сабактын аталышы:");


let opozdanie = Number(prompt("Жалпы опозданиелер саны:"));


if (opozdanie > 10) {
    alert("Урматтуу " + name + ", сиз опоздание 10дон ашып кеткендиктен экзаменден куладыңыз!");
} else {
   
    let core1 = Number(prompt(subject1 + "  алган балыңыз (0-95)"));
    let core2 = Number(prompt(subject2 + "  алган балыңыз (0-90)"));
    let core3 = Number(prompt(subject3 + "  алган балыңыз (0-95)"));

   
    let averageScore = (core1 + core2 + core3) / 3;

   
    if (opozdanie === 0){
        averageScore += 5;
        alert("Сонун! Сизде опоздание жок, орточо балыңызга 5 балл кошулду.");
    }

    if (averageScore > 90) {
        averageScore = 90;
    }

  
    let resultMessage = "к";
    if (averageScore >= 90) {
        resultMessage = "Эң жакшы (5)";
    } else if (averageScore >= 70) {
        resultMessage = "Жакшы (4)";
    } else if (averageScore >= 50) {
        resultMessage = "Удов ";
    } else {
        resultMessage = "Кайрадан тапшыр отподун ";
    }

  
    alert("Студент: " + name + "\n" +
          "Орточо балл: " + averageScore.toFixed(1) + "\n" +
          "Жыйынтык: " + resultMessage);
}

