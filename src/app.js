import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
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
};
