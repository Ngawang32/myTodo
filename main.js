    // Append <li> to <ul> with id="myList"
//cashing the DOM
const button = document.querySelector('.btn');
const myDiv = document.querySelector('.myDiv');
const myList = document.getElementById('myList');
const button2 = document.querySelector('.btn2');
const input = document.querySelector('.input');



//funcitons




const newFunction = () => {
  var list = document.createElement('li');
  list.innerText = input.value;
  myList.appendChild(list);
}

const oldFunction = () => {
  var newList = myList.removeChild(myList.childNodes[0]);
}

//eventlistener
button.addEventListener('click', newFunction);
button2.addEventListener('click', oldFunction);
