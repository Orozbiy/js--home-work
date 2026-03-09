// for (let y =5; y>=1; y--) {
// 	console.log(y);
	
// }


// for (let i =2 ; i<=10 ; i+=2)
// {
// 	console.log(i);
	
// }

// for (let i =1 ; i<=10 ; i+=2)
// {
// 	console.log(i);
	
// }

// while(usllovia)
// {
// 	// code
// }


// let num =1
// while (num<=5) {
// 	console.log(num);
// 	num++
	
// }

// while (true) {
// 	console.log('hello');
	
// }

// let nam=''
// while (nam !== 'doni') {
// nam=prompt('неверное имя')
	
// }

// break contine

// for (let i = 0; i <=5; i++) {
// if (i===3) {
// 	continue
// }
// 	console.log(i);	
// }


// let nam=''
// while (nam !== '221000') {
// nam=prompt('Введите парол')
// // continue
// // alert(nam+'неверный парол')
	
// }

// while (true) {
// 	age= +prompt('введи свой возраст')


// if (age>=18) {
// 	alert('Доступ разрешон')
// 	break
// }else {
// 	alert ('ВЫ слищком молоды')}
// }



// secret=20


// слишком большое 
// слишком маленкое 
// вы угадали 



// let secret =56
// let age

// while (true) {
// 	age= +prompt('Угадай число ')
// if (age<secret){
// 	alert(' Слишком маленькое')
	
// }
// if (age>secret) {
// 	alert('Слишком большое ')
	
	
// }if (age===secret) {
// 	alert('Ты угадали')
// 	break  
	
// }else('неправильно')
// }




let attemps = 3
while (attemps>0) {
	let login =prompt('ведите логин')
	let password =prompt('ведите парол')
	if (login==='admin' &&  password==='adnin123 '){
		alert('Добро')
		break
	}else{
		attemps--
		alert('Невер парол, Осталосьпопыток: ' +attemps)
	}
}

if(attemps===0){
	alert('Аккаунт заблокирован  Осталось 0 попыток:')
}
