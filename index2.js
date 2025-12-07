//number guessing
const secretNumber = Math.floor(Math.random()*100);
const playerGuess = Number();
function checkGuess(secretNumber, playerGuess, attemptsLeft=3) {
  
  if (playerGuess === secretNumber) {
    return "Selamat!!, kamu menebak angka yang benar";
  } else if (playerGuess > secretNumber) {
    return "Angka terlalu tinggi!!, coba lagi";
  } else {
    return "Angka terlalu rendah!!, coba lagi";
  }
}
console.log(secretNumber);
console.log(checkGuess(secretNumber, "tiga puluh", 3)); 
// // console.log(checkGuess(42, 42, 1)); 
// rock,scissor,paper
// function playRPS(playerMove,computerMove){
//   playerMove = playerMove.toLowerCase();
//   computerMove = computerMove.toLowerCase();
//   const choices = ["rock","scissor","paper"];
//   if(playerMove === computerMove){
//     return "Seri !!!";
//   }
//   if(playerMove === choices[0] && computerMove === choices[1]){
//       return "kamu menang!!!," + playerMove + "mengalahkan" + computerMove;
//     }
//   if(playerMove === choices[1] && computerMove === choices[2]){
//     return "kamu menang!!!, " + playerMove + " mengalahkan " + computerMove;
//   }
//   if(playerMove === choices[2] && computerMove === choices[0]){
//     return "kamu menang!!!, " + playerMove + " mengalahkan " + computerMove;
//   }
//   return "kamu kalah !!!, " + computerMove + " mengalahkan " + playerMove;
//   }
// console.log(playRPS("Scissor","Rock"));