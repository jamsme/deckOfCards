function Card(suit, type, value) {
    this.type = type;
    this.suit = suit;
    this.value = value;

    this.show = function(){
        console.log(this.suit, this.type, this.value);
    }
}

function Deck() {
    var suit = ["Hearts", "Clubs", "Diamonds", "Spades"];
    var type = ["Ace", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Jack", "Queen", "King"];
    var card = [];
    var value = [1,2,3,4,5,6,7,8,9,10,11,12,13];
    var reset = card;

    for (var i = 0; i < suit.length; i++){
        for (var j = 0; j < type.length; j++){
            var cardOne = new Card(suit[i], type[j], value[j]);
            card.push(cardOne);
        }
    }

    console.log('created a deck', card);
    this.reset = function(){
        card = reset;
        console.log("Resetting card", card);
    }

    this.shuffle = function(){
        var m = card.length, t, i;
        while(m){
            i = Math.floor(Math.random() * m--);
            t = card[m];
            card[m] = card[i];
            card[i] = t;
        }
        console.log("Shuffling card", t);
        return card;
    }

    this.deal = function(){
        deal = Math.floor(Math.random() * 51);
        var temp;
        temp = card[deal];
        card[deal] = card[card.length - 1];
        card.pop();
        console.log("Dealing card", temp);
    }

}

var deck1 = new Deck();
console.log(deck1);
deck1.reset();
deck1.shuffle();
deck1.deal();

