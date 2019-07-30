const canvasWidth = 794
const canvasHeight = 572
const deckY = canvasHeight/2+2
const cardWith = 90
const cardHeight = 140
const cardOffset = 18
const edgeFromCenter = 15
const scoreX = [358, 590]
const scoreY = 186
let deck = []
let theta = [0,0,0,0,0,0]
let resultImageStart = canvasWidth
let score = [0, 0]  // p, b
let drawnCards = []
let result = ''

class GameScene extends Phaser.Scene{
    constructor(){
        super('game')
    }
    preload (){
        this.load.setPath('assets/');
        this.load.image('bg', 'SOL.jpg');
        for (i of deck){
            if(i.res) this.load.image(i.res , `${i.res}.png`)
        }
        for (var i = 0; i < 10; i++) {
            this.load.image(`${i}`, `sum/${i}.png`)
        }
    }
    create (){
        let bg = this.add.image(canvasWidth/2 + 3, canvasHeight/2, 'bg')
        bg.displayWidth = canvasWidth + 3
        bg.displayHeight = canvasHeight
        this.add.image(scoreX[0], scoreY, '0').setScale(.8)
        this.add.image(scoreX[1], scoreY, '0').setScale(.8)

        this.showCards(this, 0)
    }

    showCards(obj){
        const first = deck.shift();
        
        if (deck.length > 1) {
            drawnCards.push(obj.add.image(first.X, deckY, first.res).setScale(.725))
        }else{
            if(first.res) drawnCards.push(obj.add.image(first.X, deckY-(cardHeight-cardWith)/2, first.res).setScale(.725).setAngle(90))
        }

        let _score = first.res.slice(1)
        let key = (deck.length+1)%2

        if ( !isNaN(parseInt(_score))) {
            _score = parseInt(_score)
        }else{
            _score = _score==='A'? 1:0
        }

        score[key] = (score[key] + _score) % 10
        // console.log(score, _score)
        setTimeout(function(){
            _score>0 && obj.add.image(scoreX[key], scoreY, `${score[key]}`).setScale(.8)
        },1000)
        if (deck.length > 2){
            setTimeout(function(){
                obj.showCards(obj)
            }, 1600)
        }
        else if(deck.length > 0){
            if (first.res) {
                setTimeout(_=>{obj.showCards(obj)}, 3000)
            }else{
                obj.showCards(obj)
            }
        }
        if (deck.length ===0) {
            this.showResult()
        }
    }

    showResult(){
        console.log('end')
        setTimeout(_=>{this.scene.start('timer')}, 3000)
    }
    update(){
        for(let card of drawnCards){
            // console.log(card.displayWidth, card.displayHeight)
            if(theta[drawnCards.indexOf(card)] <= Math.asin(cardWith/129)){
                card.scaleX = Math.sin(theta[drawnCards.indexOf(card)]);
                theta[drawnCards.indexOf(card)] += 0.025;
            }else{
                card.scaleX = cardWith/129
            }
        }
    }
}

class Timer extends Phaser.Scene{
    constructor(){
        super('timer')
    }

    preload(){
        this.load.setPath('assets/');
        this.load.image('map', 'map.png');
    }

    create(){
        let bg = this.add.image(canvasWidth/2, canvasHeight - 215, 'map')
        // console.log(bg.displayHeight, bg.displayWidth)
        bg.displayWidth = 780
        bg.displayHeight = 423.5
        deck = [
            {'res':'d10', 'X': canvasWidth/2 - edgeFromCenter - cardWith*1.5 - cardOffset},
            {'res':'c8', 'X': canvasWidth/2 + edgeFromCenter + cardWith/2},
            {'res':'cA', 'X': canvasWidth/2 - edgeFromCenter - cardWith/2},
            {'res':'h5', 'X': canvasWidth/2 + edgeFromCenter + cardWith*1.5 + cardOffset},
            {'res':'c8', 'X': canvasWidth/2 - edgeFromCenter - cardWith*2 - cardOffset*2 - cardHeight*0.5},
            {'res':'sJ', 'X': canvasWidth/2 + edgeFromCenter + cardWith*2 + cardOffset*2 + cardHeight*0.5},
        ];
        drawnCards = []
        setTimeout(_=>{
            this.scene.start('game');
        }, 4000)
    }
}

const config = {
    type: Phaser.CANVAS,
    width: canvasWidth,
    height: canvasHeight,
    scene: [Timer, GameScene]
    // scene: { preload: preload, create: create, update: update }
}
const game = new Phaser.Game(config);