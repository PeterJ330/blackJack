// =================== VARIABLES
var values = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"]
var singleDeck = []
var tempShoe = []
var finalShoe = []
var workingShoe = []
var playerHand = []
var playerHandValue
var playerCardValueArray = []
var dealerCardValueArray = []
var dealerHand = []
var dealerHandValue
var dealerUpCard

// =================== CREATE DECK
// ======================================
function createDeck() {
    var cardDeck = singleDeck;
    var items = values

    for (var i = 0; i < 4; i++) {
        for (var j = 0; j < items.length; j++) {
            var card = items[j]
            cardDeck.push(card);
        }
    }
    // console.log('var singleDeck...');
    // console.log(singleDeck);
}
createDeck();

// =================== CREATE SHOE
// ======================================
function createShoe() {
    var totalDecks = 6
    var tempArray = new Array();

    for (var i = 0; i < totalDecks; i++) {
        tempArray.push(singleDeck)
    }

    tempShoe = [].concat.apply([], tempArray);
    //console.log('var tempArray...');
    //console.log(tempArray);
}
createShoe();

// =================== SHUFFLE Function
// ======================================
function shuffle(array) {
    let counter = array.length;

    // While there are elements in the array
    while (counter > 0) {
        // Pick a random index
        let index = Math.floor(Math.random() * counter);

        // Decrease counter by 1
        counter--;

        // And swap the last element with it
        let temp = array[counter];
        array[counter] = array[index];
        array[index] = temp;
    }

    return array;
}

// Shuffle tempShoe to create finalShoe
var finalShoe = shuffle(tempShoe);
console.log('var finalShoe...');
console.log(finalShoe);

// =================== DEAL CARDS
// ======================================
function dealCards() {
    var array1 = finalShoe
    var i = 0
    var cardsToDeal = 4
    //console.log(array1);
    for (i; i < cardsToDeal; i++) {
        if ((i % 2) == 0) {
            playerHand.push(array1[i])
        }
        else dealerHand.push(array1[i])

    }
    workingShoe = array1.splice(cardsToDeal, array1.length - cardsToDeal);

    console.log('workingShoe');
    console.log(workingShoe);

}
dealCards();
//console.log("Player: "+ playerHand )
//console.log("Dealer: "+ dealerHand )
dealerUpCard = dealerHand[1]
//console.log("Dealer UpCard: " + dealerUpCard)
// ============================================================================
// ============================================================================

function cardValue(cardArray, valueArray) {
    var cardValue
    var array1 = valueArray
    cardArray.forEach(value => {
        if (value === "J" || value === "Q" || value === "K") {
            cardValue = 10
            array1.push(cardValue);
        } else {
            cardValue = value
            array1.push(cardValue);
        }
    });
    //array1.push(cardValue);
    // console.log(valueArray);
}
cardValue(playerHand, playerCardValueArray);
cardValue(dealerHand, dealerCardValueArray);


function playerValue() {
    var array = playerCardValueArray
    var placeHolder

    placeHolder = array.reduce(function (a, b) {
        return a + b;
    }, 0);

    playerHandValue = placeHolder

}
playerValue();


function dealerValue() {
    var array = dealerCardValueArray
    var placeHolder

    placeHolder = array.reduce(function (a, b) {
        return a + b;
    }, 0);

    dealerHandValue = placeHolder

}
dealerValue();



console.log("Player Hand: " + playerHand[0] + " , " + playerHand[1]);
console.log("Player Value: " + playerHandValue)
console.log("UpCard: " + dealerUpCard)
console.log("Dealer Hand: " + dealerHand[0] + " , " + dealerHand[1]);
console.log("Dealer Value: " + dealerHandValue)













