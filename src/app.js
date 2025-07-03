import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  
  function changeCard() {
    let cardType = ['♦', '♥', '♠', '♣'];
    let cardNumber = ['A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K'];
    let randomCardType = cardType[Math.floor(Math.random()*cardType.length)];
    let randomCardNumber = cardNumber[Math.floor(Math.random()*cardNumber.length)]; 
    let color = (randomCardType === '♦' || randomCardType === '♥') ? 'red' : 'black';

    document.getElementById('number').innerHTML = randomCardNumber;
    document.getElementById('number').style.color = color;

    document.getElementById('symbol1').innerHTML = randomCardType;
    document.getElementById('symbol1').style.color = color;

    document.getElementById('symbol2').innerHTML = randomCardType;
    document.getElementById('symbol2').style.color = color;

    document.getElementById('btnClick').addEventListener("click", changeCard);
    
    // update card every 10s
    // setInterval(changeCard, 10000);

  };
  changeCard();

};

  function changeSize() {
    let ancho = document.getElementById('ancho').value ;
    let alto = document.getElementById('alto').value;
    document.querySelector('.card').style.width = ancho + 'px';
    document.querySelector('.card').style.height = alto + 'px';
    document.getElementById('btn2').addEventListener("click", changeSize);
  };
  changeSize();


  

