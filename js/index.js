// let button = document.querySelector('#button');
// console.log(button);

//Задание 339
// //№1
// let elem1 = document.querySelector('#elem1');
// console.log(elem1);
// let elem2 = document.querySelector('#elem2');
// console.log(elem2);
// let elem3 = document.querySelector('#elem3');
// console.log(elem3);

// let elem = document.querySelector('#parent input');
// console.log(elem);

//Задание 340
// //№1
// let elem4 = document.querySelector('#block p');
// console.log(elem4);
// //№2
// let elem5 = document.querySelector('.block p');
// console.log(elem5);
// //№3
// let elem6 = document.querySelector('.www');
// console.log(elem6);

//Задание 341
// //№1
// let button1 = document.querySelector('#button1');
// button1.addEventListener('click', function() {
// 	console.log('1');
// });
// let button2 = document.querySelector('#button2');
// button2.addEventListener('click', function() {
// 	console.log('2');
// });
// let button3 = document.querySelector('#button3');
// button3.addEventListener('click', function() {
// 	console.log('3');
// });

//Задание 342
// //№1
// let button4 = document.querySelector('#button4');
// button4.addEventListener('click', func1);
// function func1() {
// 	console.log(1);
// }
// let button5 = document.querySelector('#button5');
// button5.addEventListener('click', func2);
// function func2() {
// 	console.log(2);
// }

//Задание 343
// //№1
// let elem1 = document.querySelector('#elem1');
// elem1.addEventListener('click', func);
// let elem2 = document.querySelector('#elem2');
// elem2.addEventListener('click', func);
// let elem3 = document.querySelector('#elem3');
// elem3.addEventListener('click', func);
// let elem4 = document.querySelector('#elem4');
// elem4.addEventListener('click', func);
// let elem5 = document.querySelector('#elem5');
// elem5.addEventListener('click', func);
// function func() {
// 	console.log('message');
// }

//Задание 344
// //№1
// let elem = document.querySelector('#elem');
// elem.addEventListener('click', func1);
// function func1() {
// 	console.log('1');
// }
// elem.addEventListener('click', func2);
// function func2() {
// 	console.log('2');
// }
// elem.addEventListener('click', func3);
// function func3() {
// 	console.log('3');
// }

//Задание 345
// //№1
// let button1 = document.querySelector('#button1');
// button1.addEventListener('dblclick', func);
// function func() {
// 	console.log("Hello world!");
// }
// //№2
// let button2 = document.querySelector('#button2');
// button2.addEventListener('mouseover', func);
// function func() {
// 	console.log("Hello world!");
// }
// //№3
// let button3 = document.querySelector('#button3');
// button3.addEventListener('mouseout', func);
// function func() {
// 	console.log("Hello world!");
// }
// //№4
// let button4 = document.querySelector('#button4');
// button4.addEventListener('mouseover', func);
// function func() {
// 	console.log("Hello world!");
// }
// button4.addEventListener('mouseout', func1);
// function func1() {
// 	console.log("Goodbye world!");
// }

//Задание 346
// //№1
// let button1 = document.querySelector('#button1');
// let elem1 = document.querySelector('#elem1');
// button1.addEventListener('click', func);
// function func() {
// 	console.log(elem1.textContent);
// }
// //№2
// let button2 = document.querySelector('#button2');
// let elem2 = document.querySelector('#elem2');
// button2.addEventListener('click', func1);
// function func1() {
// 	console.log(elem2.textContent);
//     elem2.textContent = 'drugoi text';
// }
// //№3
// let button3 = document.querySelector('#button3');
// let elem3 = document.querySelector('#elem3');
// let elem4 = document.querySelector('#elem4');
// button3.addEventListener('click', func2);
// function func2() {
//     let res = +elem3.textContent + +elem4.textContent
// 	return console.log(res);
// }
// //№4
// let button4 = document.querySelector('#button4');
// let elem5 = document.querySelector('#elem5');
// let elem6 = document.querySelector('#elem6');
// let elem7 = document.querySelector('#elem7');
// let elem8 = document.querySelector('#elem8');
// button4.addEventListener('click', func3);
// function func3() {
//     let res = +elem5.textContent + +elem6.textContent + +elem7.textContent
// 	elem8.textContent = res;
// }
// //№5
// let button5 = document.querySelector('#button5');
// let elem9 = document.querySelector('#elem9');
// button5.addEventListener('click', func4);
// function func4() {
//     elem9.textContent = '200';
// }
// //№6
// let button6 = document.querySelector('#button6');
// let elem10 = document.querySelector('#elem10');
// button6.addEventListener('click', func5);
// function func5() {
// 	elem10.textContent = elem10.textContent + '!'
//     // elem10.textContent = 'Hello world!';
// }

//Задание 347
// //№1
// let elem1 = document.querySelector('#elem1');
// let button1 = document.querySelector('#button1');
// button1.addEventListener('click', func1);
// function func1() {
// 	console.log(elem1.innerHTML);
// }
// //№2
// let elem2 = document.querySelector('#elem2');
// let button2 = document.querySelector('#button2');
// button2.addEventListener('click', func2);
// function func2() {
//     elem2.innerHTML = `<b>${elem2.textContent}</b>`;
// }

//Задание 348
// // №1
// let elem = document.querySelector('#elem');
// let button = document.querySelector('#button');
// button.addEventListener('click', func1);
// function func1() {
// 	console.log(elem.id);
// 	console.log(elem.type);
// }
// //№2
// let elem1 = document.querySelector('#elem1');
// let button1 = document.querySelector('#button1');
// button1.addEventListener('click', func2);
// function func2() {
// 	elem1.type = 'submit'
// 	console.log(elem1.id);
// 	console.log(elem1.type);
// }
// //№3
// let elem2 = document.querySelector('#elem2');
// let button2 = document.querySelector('#button2');
// button2.addEventListener('click', func3);
// function func3 () {
// elem2.innerHTML = link.href
// }
// //№4
// let elem3 = document.querySelector('#elem3');
// let button3 = document.querySelector('#button3');
// button3.addEventListener('click', func4);
// function func4 () {
// elem3.innerHTML = elem3.innerHTML + '(' + link1.href + ')'
// }
// //№5
// let elem4 = document.querySelector('#elem4');
// let button4 = document.querySelector('#button4');
// button4.addEventListener('click', func4);
// function func4 () {
// elem4.textContent = image1.src

// // elem4.innerHTML = '<h1>' + 'Дима' + "</h1>" (выведется жирным) разница между innerHTML и textContent
// // elem4.textContent = '<h1>' + 'Дима' + "</h1>"
// }

// //№6
// let button5 = document.querySelector('#button5');
// let image2 = document.querySelector('#image2');
// button5.addEventListener('click', func5);
// function func5 () {
// image2.style.width='300px'
// }

//Задание 349
// //№1
// let elem = document.querySelector('#elem');
// let button = document.querySelector('#button');
// button.addEventListener('click', func);
// function func () {
// elem.value = 'new text';
// }
// //№2
// let elem1 = document.querySelector('#elem1');
// let elem2 = document.querySelector('#elem2');
// let button2 = document.querySelector('#button2');
// button2.addEventListener('click', func1);
// function func1 () {
// elem1.value = elem2.innerHTML;
// }

//Задание 350
// //№1
// let elem = document.querySelector('#elem');
// elem.addEventListener('focus', func1);
// function func1 () {
// elem.value = '1';
// }
// elem.addEventListener('blur', func2);
// function func2 () {
// elem.value = '2';
// }

//Задание 352
// //№1
// console.log(document.querySelector('#image').src);

//Задание 356
// //№1
// let elems = document.querySelectorAll('.www');
// let button = document.querySelector('#button');
// button.addEventListener('click', func1);
// function func1 () {
// for (let elem of elems) {
//     elem.textContent = 'text';
// }
// }
// //№2
// let elems = document.querySelectorAll(".www");
// let button1 = document.querySelector('#button1');
// button1.addEventListener("click", func2);
// function func2() {
//     for (let i = 0; i < elems.length; i++) {
//         elems[i].textContent += " " + (i + 1);
//     }
// }

//Задание 357
// //№1
// let elems = document.querySelectorAll("#elem");
// for (let elem of elems) {
//     elem.addEventListener('blur', func);
//     function func() {
//         this.value = Number(this.value) + 1;
//     }
// }

//Задание 358
// //№1
// let divs = document.querySelectorAll('div');
// for (let div of divs) {
// 	div.addEventListener('click', function() {
// 	this.textContent++;
//     });
// }

//Задание 359
// //№1
// let links = document.getElementsByTagName("a");
// let button = document.querySelector('#button');
// button.addEventListener("click", func);
// function func() {
//     for (let i = 0; i < links.length; i++) {
//         links[i].textContent += " (" + links[i].href + ")";
//         this.removeEventListener('click', func);
//     }
// }

//Задание 360
// //№1
// let elems = document.querySelectorAll('p');
// for (let elem of elems) {
// 	elem.addEventListener('click', func);
//     function func() {
// 	elem.textContent = elem.innerHTML + "!";
// 	this.removeEventListener('click', func);
// }
// }

//Задание 361
// //№1
// let lists = document.querySelector(".list");
// for (let list of lists) {
//     list.addEventListener('click', func);
//     function func() {
//         this.textContent++;
//     }
// }