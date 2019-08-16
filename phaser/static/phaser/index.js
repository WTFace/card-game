const canvasWidth = 794;
const canvasHeight = 572;
const deckY = canvasHeight/2+2;
const cardWith = 90;
const cardHeight = 140;
const cardOffset = 18;
const edgeFromCenter = 15;
const scoreX = [358, 590];
const scoreY = 186;
const resultX = canvasWidth+200;
const resultY = 450;
const tboxY = 86;
const tboxOffset = 9;
const tboxLeft = canvasWidth/2-63;
let deck = [];
let result;
let bigTableX = 26;
let bigTableY = 292;
let bigTbOffsetX = 38;
let bigTbOffsetY = 39;


class GameScene extends Phaser.Scene{
    constructor(){
        super('game')
        this.theta = [0,0,0,0,0,0];
        this.score = [0, 0];
        this.drawnCards = [];
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
        let bg = this.add.image(canvasWidth/2 + 3, canvasHeight/2, 'bg');
        bg.displayWidth = canvasWidth + 3;
        bg.displayHeight = canvasHeight;
        this.add.image(scoreX[0], scoreY, '0').setScale(.8);
        this.add.image(scoreX[1], scoreY, '0').setScale(.8);
        
        this.showCards(this)
    }

    showCards(obj){
        // console.log(deck)
        if (deck.length ===0) {
            this.showResult();
            return;
        }
        const first = deck.shift();
        
        if (deck.length >= 2) {
            this.drawnCards.push(obj.add.image(first.X, deckY, first.res).setScale(.725))
        }else{
            if(first.res) this.drawnCards.push(obj.add.image(first.X, deckY-(cardHeight-cardWith)/2, first.res).setScale(.725).setAngle(90))
        }

        let _score = first.res.slice(1);
        let key = (deck.length+1)%2;

        if ( !isNaN(parseInt(_score))) {
            _score = parseInt(_score)
        }else{
            _score = _score==='A'? 1:0
        }

        this.score[key] = (this.score[key] + _score) % 10;
        console.log(this.score)
        setTimeout(function(){
            _score>0 && obj.add.image(scoreX[key], scoreY, `${obj.score[key]}`).setScale(.8)
        },1200);
        if (deck.length > 2){
            setTimeout(function(){
                obj.showCards(obj)
            }, 1800)
        }
        else{
            if (first.res) {
                setTimeout(_=>{obj.showCards(obj)}, 3000)
            }else{
                obj.showCards(obj)
            }
        }
    }

    showResult(){
        setTimeout(_=>{
            this.resultImg = this.add.image(resultX, resultY, result).setScale(.75);
            this.resultSpeed = 1.2;
            this.finished = true;
            this.timedEvent = this.time.addEvent({ delay: 1000});
            setTimeout(_=>{
                this.scene.start('timer')
            },4000)
        },1000)
    }

    update(time, delta){
        if (this.finished && this.resultImg.x - (this.resultSpeed * delta) >= canvasWidth/2) {
            this.resultImg.x -= this.resultSpeed * delta;
            this.resultSpeed -= 0.07*this.timedEvent.getProgress()
            // console.log(delta, time)
            // console.log(this.resultSpeed, this.timedEvent.getProgress())
        }

        for(let card of this.drawnCards){
            // console.log(card.displayWidth, card.displayHeight)
            if(this.theta[this.drawnCards.indexOf(card)] <= Math.asin(cardWith/129)){
                card.scaleX = Math.sin(this.theta[this.drawnCards.indexOf(card)]);
                this.theta[this.drawnCards.indexOf(card)] += 0.025;
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
        this.load.image('tbox', 'time/tbox.png');
        this.load.image('pin0', 'time/pin0.png');
        this.load.image('pin1', 'time/pin1.png');
        this.load.image('grey', 'time/0_1.png');
        this.load.image('b2', 'table/b2.png');
        this.load.image('p2', 'table/p2.png');
        this.load.image('t2', 'table/t2.png');
        for (var i = 0; i < 10; i++) {
            this.load.image(`t_${i}`, `time/${i}.png`)
        }
    }

    create(){
        let bg = this.add.image(canvasWidth/2, canvasHeight - 215, 'map');
        bg.displayWidth = 780; bg.displayHeight = 423.5;

        let tbox = this.add.image(canvasWidth/2, tboxY, 'tbox').setScale(.7)
        tbox.displayWidth = 178
        let grey = this.add.image(tboxLeft, tboxY, 'grey').setScale(.7)
        this.add.image(tboxLeft + (tboxOffset+grey.displayWidth), tboxY, 't_0').setScale(.7)
        let colon = this.add.image(tboxLeft + (tboxOffset+grey.displayWidth) + tboxOffset*3, tboxY, 'pin0').setScale(.7)
        let timer1 = this.add.image(tboxLeft + (tboxOffset+grey.displayWidth)*2 + tboxOffset*2, tboxY, 'grey').setScale(.7)
        let timer2 = this.add.image(tboxLeft + (tboxOffset+grey.displayWidth)*3 + tboxOffset*2, tboxY, 'grey').setScale(.7)
        deck = [
            {'res':'d10', 'X': canvasWidth/2 - edgeFromCenter - cardWith*1.5 - cardOffset},
            {'res':'c8', 'X': canvasWidth/2 + edgeFromCenter + cardWith/2},
            {'res':'cA', 'X': canvasWidth/2 - edgeFromCenter - cardWith/2},
            {'res':'h5', 'X': canvasWidth/2 + edgeFromCenter + cardWith*1.5 + cardOffset},
            {'res':'c8', 'X': canvasWidth/2 - edgeFromCenter - cardWith*2 - cardOffset*2 - cardHeight*0.5},
            {'res':'c8', 'X': canvasWidth/2 + edgeFromCenter + cardWith*2 + cardOffset*2 + cardHeight*0.5},
        ];
        result = 'player'

        let bigTb = this.add.image(bigTableX, bigTableY, 'b2').setScale(.72)
        this.add.image(bigTableX, bigTableY+bigTbOffsetX*1, 'b2').setScale(.72)
        this.add.image(bigTableX, bigTableY+bigTbOffsetX*2, 'b2').setScale(.72)
        this.add.image(bigTableX, bigTableY+bigTbOffsetX*3, 'b2').setScale(.72)
        this.add.image(bigTableX, bigTableY+bigTbOffsetX*4, 'b2').setScale(.72)
        this.add.image(bigTableX, bigTableY+bigTbOffsetX*5, 'b2').setScale(.72)

        
        let interval = setInterval(_=>{
            let d = new Date();
            let sec = 59 - d.getSeconds()
            let digit1 = parseInt(sec/10)
            let digit2 = sec%10
            console.log(sec, 2)

            timer1.setTexture(`t_${digit1}`)
            timer2.setTexture(`t_${digit2}`)
            colon.setTexture('pin0')
            if(d.getSeconds()===0){
                clearInterval(interval)
                this.scene.start('game');
            }else{
                setTimeout(_=>{colon.setTexture('pin1')},500)
            }
        }, 1000)
    }
}

const config = {
    type: Phaser.CANVAS,
    width: canvasWidth,
    height: canvasHeight,
    scene: [Timer, GameScene]
    // scene: { preload: preload, create: create, update: update }
};
const game = new Phaser.Game(config);