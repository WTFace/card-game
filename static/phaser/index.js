const canvasWidth = 794
const canvasHeight = 572
const deckY = canvasHeight/2+2
const cardWith = 90
const cardHeight = 140
const cardOffset = 18
const edgeFromCenter = 15
const scoreX = [358, 590]
const scoreY = 186
const resultX = canvasWidth+200
const resultY = 450
let deck = []
let theta = [0,0,0,0,0,0]
let score = [0, 0]  // p, b
let drawnCards = []
let result = ''

class GameScene extends Phaser.Scene{
    constructor(){
        super('game')
    }
    preload (){
        this.load.setPath(assets);
        this.load.image('bg', 'SOL.jpg');
        this.load.image('player', 'player.png');
        this.load.image('banker', 'banker.png');
        this.load.image('tie', 'tie.png');
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
        
        this.showCards(this)
    }

    showCards(obj){
        // console.log(deck)
        if (deck.length ===0) {
            this.showResult()
            return;
        }
        const first = deck.shift();
        
        if (deck.length >= 2) {
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
        else{
        // else if(deck.length > 0){
            if (first.res) {
                setTimeout(_=>{obj.showCards(obj)}, 3000)
            }else{
                obj.showCards(obj)
            }
        }
    }

    showResult(){
        setTimeout(_=>{
            this.resultImg = this.add.image(resultX, resultY, 'player').setScale(.75)
            this.resultSpeed = 1.2
            this.finished = true
            this.timedEvent = this.time.addEvent({ delay: 1000});
            setTimeout(_=>{
                this.scene.start('timer')
            },3000)
        },1000)
    }

    update(time, delta){
        if (this.finished && this.resultImg.x - (this.resultSpeed * delta) >= canvasWidth/2) {
            this.resultImg.x -= this.resultSpeed * delta
            this.resultSpeed -= 0.07*this.timedEvent.getProgress()
            // console.log(delta, time)
            // console.log(this.resultSpeed, this.timedEvent.getProgress())
        }

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
        this.load.setPath(assets);
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
            {'res':'c8', 'X': canvasWidth/2 + edgeFromCenter + cardWith*2 + cardOffset*2 + cardHeight*0.5},
        ];
        theta = [0,0,0,0,0,0]
        score = [0, 0]; drawnCards = []
        setTimeout(_=>{
            this.scene.start('game');
        }, 2000)
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