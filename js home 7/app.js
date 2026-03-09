let tovar = prompt('	Дисциплина');
let pro = Number(prompt('РК1'));
let prooo = Number(prompt('Экзамен'));

let tal = pro + prooo; 

alert('Дисциплина' + tovar);

if (tal > 50) {
    
    let fSum = (tal +60);
    alert('общие : ' + fSum + ' сом');
} else {
    
    alert('сред баллы ' + tal + ' сом');
}

