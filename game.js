let player = {//objects
    Name :"Liam",
    Amount :185
 }
let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = " "
let messageEl = document.getElementById("message-el")
let sumEL = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")

cashEl = document.getElementById("cash-el")
cashEl.textContent = player.Name+" "+"$"+player.Amount
function getRandomCard(){
   let randomNum = (Math.floor(Math.random()*13)+1)
   if(randomNum === 1){
    return  11
   }else if(randomNum > 10){
    return 10
   } 
   else{
    return randomNum
   }
}
function callMe(){
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    let cards = [firstCard, secondCard]
    let sum = firstCard + secondCard
    let isAlive = true
}
function intitialize(){
    firstCard = 0
    secondCard = 0
    sum = 0 
   /* let backsum = 0
    sumEL.textContent = "Sum: "+ backsum*/
    if (sum === 0){
    messageEl.textContent = " Do you want a new card "
    sumEL.textContent = "Sum: "+ sum
    }
    /*if (sum <= 20){
        messageEl.textContent = " Do you want a new card "
        isAlive = true
        hasBlackJack = false
    }else if(sum === 21){
        messageEl.textContent = "You won a blackjack"
        hasBlackJack = true
    }else{
        messageEl.textContent = "You lost and out of the game"
        isAlive = false
    }*/
}
function startGame(){
    callMe()
    renderGame()
    //intitialize()
}
function renderGame(){
    //prevents the repeat of same values instead of adding to 
    for(i=0; i < cards.length; i++){
        cardsEl.textContent += (cards[i] + " ")
    }
    sumEL.textContent = "Sum: "+ sum
    if (sum <= 20){
        messageEl.textContent = " Do you want a new card "
        isAlive = true
        hasBlackJack = false
    }else if(sum === 21){
        messageEl.textContent = "You won a blackjack"
        hasBlackJack = true
    }else{
        messageEl.textContent = "You lost and out of the game"
        isAlive = false
    }
}
function newCard(){
   if(hasBlackJack === false && isAlive === true){
        let card = getRandomCard()
        sum += card
        cards.push(card)// pushes the card and create space for the knew one
        renderGame()
    }
}
