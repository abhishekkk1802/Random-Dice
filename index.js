var randomno1 = Math.floor(Math.random() * 6) + 1;
var randomimg = 'dice' + randomno1 + '.png';
var randomimgsource = 'images/' + randomimg;
var image1 = document.querySelectorAll('img')[0];
image1.setAttribute('src', randomimgsource);

var randomno2 = Math.floor(Math.random() * 6) + 1;
var randomimgsource2 = 'images/dice' + randomno2 + '.png';
document.querySelectorAll('img')[1].setAttribute('src', randomimgsource2);

if (randomno1 > randomno2) {
  document.querySelector('h1').innerHTML = '🏆Play 1 Wins!';
} else if (randomno1 < randomno2) {
  document.querySelector('h1').innerHTML = 'Play 2 Wins!🏆';
} else {
  document.querySelector('h1').innerHTML = 'DRAW!';
}
