
let balance = prompt("Балансыңызды жазыңыз ");
balance = Number(balance); 

let choice = prompt("Аракетти тандаңыз: 1 - Валютага алмаштыруу, 2 - Сатып алууну текшерүү");

if (choice === "1") {
   
    let currency = prompt("Кайсы валютага (USD же EUR)").toUpperCase();
    let rate;

    if (currency === "USD") {
        rate = 87; 
        alert("Сиздин баланс USD менен: " + (balance / rate).toFixed(2));
    } else if (currency === "EUR") {
        rate = 9; 
        alert("Сиздин баланс EUR менен: " + (balance / rate).toFixed(2));
    } else {
        alert("Мындай валюта жок");
    }

} else if (choice === "2") {
    
    let price = prompt("Товардын баасы канча?");
    price = Number(price);

    if (balance >= price) {
        let remainder = balance - price;
        alert("Ура! Акча жетет. Калган акчаңыз: " + remainder + " сом.");
    } else {
        let missing = price - balance;
        alert("Тилекке каршы, акча жетпейт. Дагы " + missing + " сом керек.");
    }

} else {
    alert("Туура эмес киргизилген ");
}