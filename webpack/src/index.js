'use strict';
const canvasWidth = 794;
const canvasHeight = 572;
const cardWith = 90;
const cardHeight = 140;
const cardOffset = 18;
const edgeFromCenter = 15;


let deck = [];
let result;
let allResults = [
    {res:'player', pair:''},{res:'player', pair:''},{res:'player', pair:'p'},{res:'player', pair:''},{res:'player', pair:''},{res:'player', pair:''},{res:'player', pair:''},{res:'player', pair:''},
    {res:'banker', pair:'b'}, {res:'banker', pair:''},
    {res:'player', pair:''},
    {res:'banker', pair:'p'},
    {res:'player', pair:''},
    {res:'banker', pair:''},{res:'banker', pair:''},{res:'banker', pair:''},{res:'banker', pair:''},
    {res:'player', pair:''},
    {res:'tie', pair:'bp'},
    {res:'player', pair:''},{res:'player', pair:'b'},
    {res:'tie', pair:''},
]

class GameScene extends Phaser.Scene{
    constructor(){
        super('game')
        this.theta = [0,0,0,0,0,0];
        this.score = [0, 0];
        this.scoreX = [358, 590];
        this.scoreY = 186;
        this.drawnCards = [];
    }
    preload (){
        this.load.setPath(assets);
        this.load.image('bg', 'SOL.jpg');
        this.load.image('player', 'player.png');
        this.load.image('banker', 'banker.png');
        this.load.image('tie', 'tie.png');
        for (i of deck){
            if(i.res) this.load.image(i.res , `cards/${i.res}.png`)
        }
        for (var i = 0; i < 10; i++) {
            this.load.image(`${i}`, `sum/${i}.png`)
        }
    }
    create (){
        let bg = this.add.image(canvasWidth/2 + 3, canvasHeight/2, 'bg');
        bg.displayWidth = canvasWidth + 3;
        bg.displayHeight = canvasHeight;
        this.add.image(this.scoreX[0], this.scoreY, '0').setScale(.8);
        this.add.image(this.scoreX[1], this.scoreY, '0').setScale(.8);
        
        this.showCards(this)
    }

    showCards(obj){
        const deckY = canvasHeight/2+2;
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
        setTimeout(()=>{
            _score>0 && obj.add.image(obj.scoreX[key], obj.scoreY, `${obj.score[key]}`).setScale(.8)
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
            this.resultImg = this.add.image(canvasWidth+200, 450, result).setScale(.75);
            this.resultSpeed = 1.2;
            this.finished = true;
            this.timedEvent = this.time.addEvent({ delay: 1000});
            setTimeout(_=>{
                this.theta = [0,0,0,0,0,0];
                this.score = [0, 0];
                this.drawnCards = [];
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
        this.tboxY = 86;
        this.tboxOffset = 9;
        this.tboxLeft = canvasWidth/2-63;
        this.bigTableX = 26;
        this.bigTableY = 292;
        this.bigTbOffsetX = 39;
        this.bigTbOffsetY = 38;
        this.smallTbX = 18;
        this.smallTbY = 155;
        this.smallTbOffX = 20.52;
        this.smallTbOffY = 20;
        this.prevResult = '';
        this.streak = 0;
        this.sideStreak = 0;
        this.streakBroke = 0;
        this.tieStreak = 0;
        this.coord = new Set();
    }

    preload(){
        this.load.setPath(assets);
        this.load.image('map', 'table/map.png');
        this.load.image('tbox', 'time/tbox.png');
        this.load.image('pin0', 'time/pin0.png');
        this.load.image('pin1', 'time/pin1.png');
        this.load.image('grey', 'time/0_1.png');
        this.load.image('b2', 'table/b2.png');
        this.load.image('p2', 'table/p2.png');
        this.load.image('t2', 'table/t2.png');
        this.load.image('bp2', 'table/bp2.png');
        this.load.image('pp2', 'table/pp2.png');
        this.load.image('bp', 'table/bp.png');
        this.load.image('pp', 'table/pp.png');
        this.load.image('p', 'table/p.png');
        this.load.image('b', 'table/b.png');
        this.load.image('t-1', 'table/tie.png');
        this.load.image('t-2', 'table/2tie.png');
        this.load.image('t-3', 'table/3tie.png');
        this.load.image('t-4', 'table/4tie.png');
        this.load.image('t-5', 'table/5tie.png');
        for (var i = 0; i < 10; i++) {
            this.load.image(`t_${i}`, `time/${i}.png`)
        }
    }

    create(){
        let bg = this.add.image(canvasWidth/2, canvasHeight - 215, 'map');
        bg.displayWidth = 780; bg.displayHeight = 423.5;

        let tbox = this.add.image(canvasWidth/2, this.tboxY, 'tbox').setScale(.7)
        tbox.displayWidth = 178
        let grey = this.add.image(this.tboxLeft, this.tboxY, 'grey').setScale(.7)
        this.add.image(this.tboxLeft + (this.tboxOffset+grey.displayWidth), this.tboxY, 't_0').setScale(.7)
        let colon = this.add.image(this.tboxLeft + (this.tboxOffset+grey.displayWidth) + this.tboxOffset*3, this.tboxY, 'pin0').setScale(.7)
        let timer1 = this.add.image(this.tboxLeft + (this.tboxOffset+grey.displayWidth)*2 + this.tboxOffset*2, this.tboxY, 'grey').setScale(.7)
        let timer2 = this.add.image(this.tboxLeft + (this.tboxOffset+grey.displayWidth)*3 + this.tboxOffset*2, this.tboxY, 'grey').setScale(.7)
        deck = [
            {'res':'d10', 'X': canvasWidth/2 - edgeFromCenter - cardWith*1.5 - cardOffset},
            {'res':'c8', 'X': canvasWidth/2 + edgeFromCenter + cardWith/2},
            {'res':'cA', 'X': canvasWidth/2 - edgeFromCenter - cardWith/2},
            {'res':'h5', 'X': canvasWidth/2 + edgeFromCenter + cardWith*1.5 + cardOffset},
            {'res':'c8', 'X': canvasWidth/2 - edgeFromCenter - cardWith*2 - cardOffset*2 - cardHeight*0.5},
            {'res':'c8', 'X': canvasWidth/2 + edgeFromCenter + cardWith*2 + cardOffset*2 + cardHeight*0.5},
        ];
        result = 'player'
        

        for(const i in allResults){ // index
            const current = allResults[i]
            this.add.image(this.bigTableX + this.bigTbOffsetX*parseInt(i/6), this.bigTableY + this.bigTbOffsetY*(i%6), `${current.res[0]}2`).setScale(.72)

            if (this.prevResult === current.res) {
                if(this.coord.has(`${this.streakBroke+this.sideStreak}_${this.streak+1}`) || this.streak===5){
                    this.sideStreak++;
                    this.coord.add(`${this.streakBroke+this.sideStreak}_${this.streak}`)
                }else{
                    this.streak < 5 && !this.coord.has(`${this.streakBroke+this.sideStreak}_${this.streak+1}`) && this.streak++;
                }
            }
            
            if(this.prevResult !== current.res && current.res[0] !== 't') {
                this.streak = 0; this.sideStreak = 0;
                this.prevResult = current.res;
                this.tieStreak = 0
                i >0 && this.streakBroke++
            }
            if (current.res[0] ==='t') {
                this.tieStreak++
                current.res = `t-${this.tieStreak}`
            }else{
                current.res = current.res[0]
            }
            this.add.image(this.smallTbX + this.smallTbOffX*(this.streakBroke + this.sideStreak), this.smallTbY + this.smallTbOffY*this.streak, current.res).setScale(.7)
            // console.log( this.sideStreak, this.streakBroke,this.streak, this.coord)

            if (current.pair.includes('b')) { 
                this.add.image(this.bigTableX + this.bigTbOffsetX*parseInt(i/6), this.bigTableY + this.bigTbOffsetY*(i%6), 'bp2').setScale(.72)
                this.add.image(this.smallTbX + this.smallTbOffX*(this.streakBroke + this.sideStreak), this.smallTbY + this.smallTbOffY*this.streak, 'bp').setScale(.7)
            }
            if (current.pair.includes('p')) {
                this.add.image(this.bigTableX + this.bigTbOffsetX*parseInt(i/6), this.bigTableY + this.bigTbOffsetY*(i%6), 'pp2').setScale(.72)
                this.add.image(this.smallTbX + this.smallTbOffX*(this.streakBroke + this.sideStreak), this.smallTbY + this.smallTbOffY*this.streak, 'pp').setScale(.7)
            }
        }
        
        let interval = setInterval(_=>{
            let d = new Date();
            let sec = 59 - d.getSeconds()
            let digit1 = parseInt(sec/10)
            let digit2 = sec%10

            timer1.setTexture(`t_${digit1}`)
            timer2.setTexture(`t_${digit2}`)
            colon.setTexture('pin0')
            if(d.getSeconds()%10===0){
                clearInterval(interval);
                this.prevResult = '';
                this.streak = 0;
                this.sideStreak = 0;
                this.streakBroke = 0;
                this.tieStreak = 0;
                this.coord.clear();
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