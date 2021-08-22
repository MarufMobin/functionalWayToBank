/* 
const players = document.getElementsByClassName('player'); */
/* 
for( const player of players ){
   player.style.border = "2px solid red";
   player.style.padding = "15px";
   player.style.margin = "15px";
   player.style.borderRadius = "15px";
} */
/* 
function addPlayer(){
   const playersContainer = document.getElementById('players');
   const player 
} */


//find a spacific one using class Name 
// document.getElementsByClassName('player')[0];

// if i will not using index number then give a ( HTML COLLECTION )

// document.getElementsByClassName('player');


// jodi onk Complax Bhabe kno id or class Select krte hoi taile ai type ar selector use krte hbe

/* 
document.querySelector(' #players .player:first-child');

document.querySelectorAll(' #players .player:first-child')>>>sob guli k select krbe
 */

// using style use js
const players = document.getElementsByClassName('player');

for(const player of players){
   player.style.padding = '15px';
   player.style.margin = '15px';
   player.style.border = '2px solid red';
   player.style.borderRadius = '15px';
   player.style.fontSize = '22px';
}

const playerNames = document.querySelectorAll('.player .player-name');

for( const playerName of playerNames){
   playerName.style.fontSize = '28px';
   playerName.style.color = 'goldenrod';
}


// Create Dynamicaly players
function addPlayer(){
  const player = document.createElement('div');
  player.classList.add('player');
  player.innerHTML = `
  <h4 class="player-name">player - 1</h4>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, nihil ut. Saepe inventore labore ratione ex tempora vel non, quo autem officia dicta doloremque beatae illum sapiente natus, molestiae amet.</p>`
}