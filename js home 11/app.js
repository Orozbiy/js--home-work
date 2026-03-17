
function convertCurrency(balance) {
    let currency = prompt("Кайсы валютага (USD же EUR)").toUpperCase();
    let rate;

    if (currency === "USD") {
        rate = 87.5;
        alert("Сиздин баланс USD менен: " + (balance / rate).toFixed(2));
    } else if (currency === "EUR") {
        rate = 100; 
        alert("Сиздин баланс EUR менен: " + (balance / rate).toFixed(2));
    } else {
        alert("Мындай валюта жок");
    }
}


function checkPurchase(balance) {
    let price = Number(prompt("Товардын баасы канча?"));

    if (balance >= price) {
        let remainder = balance - price;
        alert("Ура! Акча жетет. Калган акчаңыз: " + remainder + " сом.");
    } else {
        let missing = price - balance;
        alert("Тилекке каршы, акча жетпейт. Дагы " + missing + " сом керек.");
    }
}





function startApp() {
    let userInput = prompt("Балансыңызды жазыңыз ");
    let balance = Number(userInput);


    if (isNaN(balance)) {
        alert("Сураныч, сан киргизиңиз!");
        return;
    }

    let choice = prompt("Аракетти тандаңыз: 1 - Валютага алмаштыруу, 2 - Сатып алууну текшерүү");

    if (choice === "1") {
        convertCurrency(balance);
    } else if (choice === "2") {
        checkPurchase(balance);
    } else {
        alert("Туура эмес тандоо киргизилди");
    }
}


startApp();