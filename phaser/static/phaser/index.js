var _0x3f86=['exports','call','defineProperty','undefined','toStringTag','Module','__esModule','object','create','default','prototype','hasOwnProperty','player','banker','tie','CANVAS','timer','tboxOffset','tboxLeft','bigTableX','bigTbOffsetX','bigTbOffsetY','smallTbX','smallTbOffX','smallTbOffY','prevResult','sideStreak','streakBroke','tieStreak','coord','setPath','image','map','table/map.png','load','time/tbox.png','time/pin0.png','time/pin1.png','grey','time/0_1.png','table/b2.png','table/p2.png','table/t2.png','bp2','pp2','table/pp2.png','table/pp.png','table/p.png','t-1','table/tie.png','table/2tie.png','t-3','table/3tie.png','t-4','table/4tie.png','t-5','table/5tie.png','.png','add','displayWidth','tboxY','tbox','setScale','pin0','bigTableY','res','streak','has','smallTbY','pair','includes','getSeconds','setTexture','clear','scene','start','game','pin1','Scene','theta','drawnCards','preload','player.png','banker.png','cards/','sum/','displayHeight','scoreX','showCards','length','showResult','shift','push','setAngle','slice','score','log','scoreY','resultImg','timedEvent','time','finished','resultSpeed','indexOf','scaleX','sin','Game'];(function(_0x279b88,_0x528ae4){var _0x1833f8=function(_0x4120d4){while(--_0x4120d4){_0x279b88['push'](_0x279b88['shift']());}};_0x1833f8(++_0x528ae4);}(_0x3f86,0x1ac));var _0x581e=function(_0x2b5c06,_0x1de73a){_0x2b5c06=_0x2b5c06-0x0;var _0x19f2c2=_0x3f86[_0x2b5c06];return _0x19f2c2;};!function(_0xd40af6){var _0x4b2684={};function _0xb79cb0(_0x3d5a86){if(_0x4b2684[_0x3d5a86])return _0x4b2684[_0x3d5a86][_0x581e('0x0')];var _0x10f0dc=_0x4b2684[_0x3d5a86]={'i':_0x3d5a86,'l':!0x1,'exports':{}};return _0xd40af6[_0x3d5a86][_0x581e('0x1')](_0x10f0dc[_0x581e('0x0')],_0x10f0dc,_0x10f0dc[_0x581e('0x0')],_0xb79cb0),_0x10f0dc['l']=!0x0,_0x10f0dc[_0x581e('0x0')];}_0xb79cb0['m']=_0xd40af6,_0xb79cb0['c']=_0x4b2684,_0xb79cb0['d']=function(_0xd40af6,_0x4b2684,_0x4960ed){_0xb79cb0['o'](_0xd40af6,_0x4b2684)||Object[_0x581e('0x2')](_0xd40af6,_0x4b2684,{'enumerable':!0x0,'get':_0x4960ed});},_0xb79cb0['r']=function(_0xd40af6){_0x581e('0x3')!=typeof Symbol&&Symbol[_0x581e('0x4')]&&Object[_0x581e('0x2')](_0xd40af6,Symbol[_0x581e('0x4')],{'value':_0x581e('0x5')}),Object[_0x581e('0x2')](_0xd40af6,_0x581e('0x6'),{'value':!0x0});},_0xb79cb0['t']=function(_0xd40af6,_0x4b2684){if(0x1&_0x4b2684&&(_0xd40af6=_0xb79cb0(_0xd40af6)),0x8&_0x4b2684)return _0xd40af6;if(0x4&_0x4b2684&&_0x581e('0x7')==typeof _0xd40af6&&_0xd40af6&&_0xd40af6['__esModule'])return _0xd40af6;var _0xa23323=Object[_0x581e('0x8')](null);if(_0xb79cb0['r'](_0xa23323),Object['defineProperty'](_0xa23323,_0x581e('0x9'),{'enumerable':!0x0,'value':_0xd40af6}),0x2&_0x4b2684&&'string'!=typeof _0xd40af6)for(var _0x1bb26e in _0xd40af6)_0xb79cb0['d'](_0xa23323,_0x1bb26e,function(_0x4b2684){return _0xd40af6[_0x4b2684];}['bind'](null,_0x1bb26e));return _0xa23323;},_0xb79cb0['n']=function(_0xd40af6){var _0x4b2684=_0xd40af6&&_0xd40af6[_0x581e('0x6')]?function(){return _0xd40af6[_0x581e('0x9')];}:function(){return _0xd40af6;};return _0xb79cb0['d'](_0x4b2684,'a',_0x4b2684),_0x4b2684;},_0xb79cb0['o']=function(_0xd40af6,_0x4b2684){return Object[_0x581e('0xa')][_0x581e('0xb')]['call'](_0xd40af6,_0x4b2684);},_0xb79cb0['p']='',_0xb79cb0(_0xb79cb0['s']=0x0);}([function(_0x1419d7,_0x695efb,_0xc35852){'use strict';const _0x2d911a=0x31a,_0x302230=0x23c,_0x514ad1=0x5a,_0x3270ed=0x8c,_0x4e42d2=0x12,_0x2d627a=0xf;let _0x36a91f,_0x1b72a4=[],_0x5c0e2e=[{'res':'player','pair':''},{'res':_0x581e('0xc'),'pair':''},{'res':_0x581e('0xc'),'pair':'p'},{'res':_0x581e('0xc'),'pair':''},{'res':_0x581e('0xc'),'pair':''},{'res':'player','pair':''},{'res':'player','pair':''},{'res':'player','pair':''},{'res':_0x581e('0xd'),'pair':'b'},{'res':_0x581e('0xd'),'pair':''},{'res':_0x581e('0xc'),'pair':''},{'res':_0x581e('0xd'),'pair':'p'},{'res':_0x581e('0xc'),'pair':''},{'res':_0x581e('0xd'),'pair':''},{'res':_0x581e('0xd'),'pair':''},{'res':_0x581e('0xd'),'pair':''},{'res':_0x581e('0xd'),'pair':''},{'res':'player','pair':''},{'res':_0x581e('0xe'),'pair':'bp'},{'res':'player','pair':''},{'res':_0x581e('0xc'),'pair':'b'},{'res':'tie','pair':''}];const _0xed5791={'type':Phaser[_0x581e('0xf')],'width':_0x2d911a,'height':_0x302230,'scene':[class extends Phaser['Scene']{constructor(){super(_0x581e('0x10')),this['tboxY']=0x56,this[_0x581e('0x11')]=0x9,this[_0x581e('0x12')]=_0x2d911a/0x2-0x3f,this[_0x581e('0x13')]=0x1a,this['bigTableY']=0x124,this[_0x581e('0x14')]=0x27,this[_0x581e('0x15')]=0x26,this[_0x581e('0x16')]=0x12,this['smallTbY']=0x9b,this[_0x581e('0x17')]=20.52,this[_0x581e('0x18')]=0x14,this[_0x581e('0x19')]='',this['streak']=0x0,this[_0x581e('0x1a')]=0x0,this[_0x581e('0x1b')]=0x0,this[_0x581e('0x1c')]=0x0,this[_0x581e('0x1d')]=new Set();}['preload'](){this['load'][_0x581e('0x1e')](assets),this['load'][_0x581e('0x1f')](_0x581e('0x20'),_0x581e('0x21')),this[_0x581e('0x22')][_0x581e('0x1f')]('tbox',_0x581e('0x23')),this[_0x581e('0x22')][_0x581e('0x1f')]('pin0',_0x581e('0x24')),this[_0x581e('0x22')][_0x581e('0x1f')]('pin1',_0x581e('0x25')),this[_0x581e('0x22')][_0x581e('0x1f')](_0x581e('0x26'),_0x581e('0x27')),this[_0x581e('0x22')][_0x581e('0x1f')]('b2',_0x581e('0x28')),this[_0x581e('0x22')][_0x581e('0x1f')]('p2',_0x581e('0x29')),this[_0x581e('0x22')]['image']('t2',_0x581e('0x2a')),this[_0x581e('0x22')][_0x581e('0x1f')](_0x581e('0x2b'),'table/bp2.png'),this['load'][_0x581e('0x1f')](_0x581e('0x2c'),_0x581e('0x2d')),this[_0x581e('0x22')][_0x581e('0x1f')]('bp','table/bp.png'),this[_0x581e('0x22')][_0x581e('0x1f')]('pp',_0x581e('0x2e')),this[_0x581e('0x22')][_0x581e('0x1f')]('p',_0x581e('0x2f')),this[_0x581e('0x22')][_0x581e('0x1f')]('b','table/b.png'),this[_0x581e('0x22')][_0x581e('0x1f')](_0x581e('0x30'),_0x581e('0x31')),this[_0x581e('0x22')][_0x581e('0x1f')]('t-2',_0x581e('0x32')),this[_0x581e('0x22')][_0x581e('0x1f')](_0x581e('0x33'),_0x581e('0x34')),this[_0x581e('0x22')][_0x581e('0x1f')](_0x581e('0x35'),_0x581e('0x36')),this[_0x581e('0x22')][_0x581e('0x1f')](_0x581e('0x37'),_0x581e('0x38'));for(var _0x1419d7=0x0;_0x1419d7<0xa;_0x1419d7++)this['load'][_0x581e('0x1f')]('t_'+_0x1419d7,'time/'+_0x1419d7+_0x581e('0x39'));}['create'](){let _0x1419d7=this[_0x581e('0x3a')]['image'](_0x2d911a/0x2,_0x302230-0xd7,_0x581e('0x20'));_0x1419d7[_0x581e('0x3b')]=0x30c,_0x1419d7['displayHeight']=423.5,this[_0x581e('0x3a')][_0x581e('0x1f')](_0x2d911a/0x2,this[_0x581e('0x3c')],_0x581e('0x3d'))[_0x581e('0x3e')](0.7)[_0x581e('0x3b')]=0xb2;let _0x695efb=this[_0x581e('0x3a')][_0x581e('0x1f')](this[_0x581e('0x12')],this[_0x581e('0x3c')],_0x581e('0x26'))[_0x581e('0x3e')](0.7);this[_0x581e('0x3a')][_0x581e('0x1f')](this[_0x581e('0x12')]+(this[_0x581e('0x11')]+_0x695efb[_0x581e('0x3b')]),this[_0x581e('0x3c')],'t_0')[_0x581e('0x3e')](0.7);let _0xc35852=this[_0x581e('0x3a')]['image'](this[_0x581e('0x12')]+(this['tboxOffset']+_0x695efb[_0x581e('0x3b')])+0x3*this[_0x581e('0x11')],this[_0x581e('0x3c')],_0x581e('0x3f'))[_0x581e('0x3e')](0.7),_0xed5791=this['add']['image'](this['tboxLeft']+0x2*(this[_0x581e('0x11')]+_0x695efb['displayWidth'])+0x2*this[_0x581e('0x11')],this['tboxY'],_0x581e('0x26'))[_0x581e('0x3e')](0.7),_0x2ddbf4=this['add'][_0x581e('0x1f')](this[_0x581e('0x12')]+0x3*(this[_0x581e('0x11')]+_0x695efb[_0x581e('0x3b')])+0x2*this[_0x581e('0x11')],this[_0x581e('0x3c')],'grey')['setScale'](0.7);_0x1b72a4=[{'res':'d10','X':_0x2d911a/0x2-_0x2d627a-1.5*_0x514ad1-_0x4e42d2},{'res':'c8','X':_0x2d911a/0x2+_0x2d627a+_0x514ad1/0x2},{'res':'cA','X':_0x2d911a/0x2-_0x2d627a-_0x514ad1/0x2},{'res':'h5','X':_0x2d911a/0x2+_0x2d627a+1.5*_0x514ad1+_0x4e42d2},{'res':'c8','X':_0x2d911a/0x2-_0x2d627a-0x2*_0x514ad1-0x2*_0x4e42d2-0.5*_0x3270ed},{'res':'c8','X':_0x2d911a/0x2+_0x2d627a+0x2*_0x514ad1+0x2*_0x4e42d2+0.5*_0x3270ed}],_0x36a91f=_0x581e('0xc');for(const _0x1419d7 in _0x5c0e2e){const _0x695efb=_0x5c0e2e[_0x1419d7];this[_0x581e('0x3a')]['image'](this[_0x581e('0x13')]+this['bigTbOffsetX']*parseInt(_0x1419d7/0x6),this[_0x581e('0x40')]+this['bigTbOffsetY']*(_0x1419d7%0x6),_0x695efb[_0x581e('0x41')][0x0]+'2')['setScale'](0.72),this[_0x581e('0x19')]===_0x695efb[_0x581e('0x41')]&&(this[_0x581e('0x1d')]['has'](this[_0x581e('0x1b')]+this['sideStreak']+'_'+(this['streak']+0x1))||0x5===this[_0x581e('0x42')]?(this['sideStreak']++,this[_0x581e('0x1d')][_0x581e('0x3a')](this[_0x581e('0x1b')]+this[_0x581e('0x1a')]+'_'+this[_0x581e('0x42')])):this[_0x581e('0x42')]<0x5&&!this[_0x581e('0x1d')][_0x581e('0x43')](this[_0x581e('0x1b')]+this['sideStreak']+'_'+(this[_0x581e('0x42')]+0x1))&&this['streak']++),this[_0x581e('0x19')]!==_0x695efb[_0x581e('0x41')]&&'t'!==_0x695efb[_0x581e('0x41')][0x0]&&(this['streak']=0x0,this[_0x581e('0x1a')]=0x0,this[_0x581e('0x19')]=_0x695efb[_0x581e('0x41')],this[_0x581e('0x1c')]=0x0,_0x1419d7>0x0&&this[_0x581e('0x1b')]++),'t'===_0x695efb[_0x581e('0x41')][0x0]?(this[_0x581e('0x1c')]++,_0x695efb[_0x581e('0x41')]='t-'+this[_0x581e('0x1c')]):_0x695efb[_0x581e('0x41')]=_0x695efb[_0x581e('0x41')][0x0],this['add'][_0x581e('0x1f')](this[_0x581e('0x16')]+this['smallTbOffX']*(this[_0x581e('0x1b')]+this['sideStreak']),this[_0x581e('0x44')]+this[_0x581e('0x18')]*this['streak'],_0x695efb[_0x581e('0x41')])['setScale'](0.7),_0x695efb[_0x581e('0x45')][_0x581e('0x46')]('b')&&(this[_0x581e('0x3a')][_0x581e('0x1f')](this['bigTableX']+this[_0x581e('0x14')]*parseInt(_0x1419d7/0x6),this[_0x581e('0x40')]+this['bigTbOffsetY']*(_0x1419d7%0x6),_0x581e('0x2b'))[_0x581e('0x3e')](0.72),this[_0x581e('0x3a')]['image'](this['smallTbX']+this['smallTbOffX']*(this[_0x581e('0x1b')]+this['sideStreak']),this[_0x581e('0x44')]+this[_0x581e('0x18')]*this[_0x581e('0x42')],'bp')['setScale'](0.7)),_0x695efb['pair'][_0x581e('0x46')]('p')&&(this['add']['image'](this['bigTableX']+this['bigTbOffsetX']*parseInt(_0x1419d7/0x6),this[_0x581e('0x40')]+this[_0x581e('0x15')]*(_0x1419d7%0x6),_0x581e('0x2c'))['setScale'](0.72),this[_0x581e('0x3a')][_0x581e('0x1f')](this[_0x581e('0x16')]+this['smallTbOffX']*(this[_0x581e('0x1b')]+this[_0x581e('0x1a')]),this[_0x581e('0x44')]+this[_0x581e('0x18')]*this[_0x581e('0x42')],'pp')[_0x581e('0x3e')](0.7));}let _0x384d52=setInterval(_0x1419d7=>{let _0x695efb=new Date(),_0x2d911a=0x3b-_0x695efb[_0x581e('0x47')](),_0x302230=parseInt(_0x2d911a/0xa),_0x514ad1=_0x2d911a%0xa;_0xed5791[_0x581e('0x48')]('t_'+_0x302230),_0x2ddbf4['setTexture']('t_'+_0x514ad1),_0xc35852[_0x581e('0x48')](_0x581e('0x3f')),_0x695efb[_0x581e('0x47')]()%0xa==0x0?(clearInterval(_0x384d52),this['prevResult']='',this[_0x581e('0x42')]=0x0,this[_0x581e('0x1a')]=0x0,this[_0x581e('0x1b')]=0x0,this[_0x581e('0x1c')]=0x0,this[_0x581e('0x1d')][_0x581e('0x49')](),this[_0x581e('0x4a')][_0x581e('0x4b')](_0x581e('0x4c'))):setTimeout(_0x1419d7=>{_0xc35852[_0x581e('0x48')](_0x581e('0x4d'));},0x1f4);},0x3e8);}},class extends Phaser[_0x581e('0x4e')]{constructor(){super(_0x581e('0x4c')),this[_0x581e('0x4f')]=[0x0,0x0,0x0,0x0,0x0,0x0],this['score']=[0x0,0x0],this['scoreX']=[0x166,0x24e],this['scoreY']=0xba,this[_0x581e('0x50')]=[];}[_0x581e('0x51')](){for(_0x1419d7 of(this['load'][_0x581e('0x1e')](assets),this[_0x581e('0x22')][_0x581e('0x1f')]('bg','SOL.jpg'),this[_0x581e('0x22')][_0x581e('0x1f')](_0x581e('0xc'),_0x581e('0x52')),this[_0x581e('0x22')][_0x581e('0x1f')](_0x581e('0xd'),_0x581e('0x53')),this[_0x581e('0x22')][_0x581e('0x1f')](_0x581e('0xe'),'tie.png'),_0x1b72a4))_0x1419d7[_0x581e('0x41')]&&this[_0x581e('0x22')][_0x581e('0x1f')](_0x1419d7[_0x581e('0x41')],_0x581e('0x54')+_0x1419d7[_0x581e('0x41')]+_0x581e('0x39'));for(var _0x1419d7=0x0;_0x1419d7<0xa;_0x1419d7++)this[_0x581e('0x22')][_0x581e('0x1f')](''+_0x1419d7,_0x581e('0x55')+_0x1419d7+'.png');}['create'](){let _0x1419d7=this[_0x581e('0x3a')]['image'](_0x2d911a/0x2+0x3,_0x302230/0x2,'bg');_0x1419d7[_0x581e('0x3b')]=_0x2d911a+0x3,_0x1419d7[_0x581e('0x56')]=_0x302230,this[_0x581e('0x3a')]['image'](this[_0x581e('0x57')][0x0],this['scoreY'],'0')[_0x581e('0x3e')](0.8),this[_0x581e('0x3a')][_0x581e('0x1f')](this['scoreX'][0x1],this['scoreY'],'0')[_0x581e('0x3e')](0.8),this[_0x581e('0x58')](this);}[_0x581e('0x58')](_0x1419d7){const _0x695efb=_0x302230/0x2+0x2;if(0x0===_0x1b72a4[_0x581e('0x59')])return void this[_0x581e('0x5a')]();const _0xc35852=_0x1b72a4[_0x581e('0x5b')]();_0x1b72a4[_0x581e('0x59')]>=0x2?this['drawnCards'][_0x581e('0x5c')](_0x1419d7[_0x581e('0x3a')][_0x581e('0x1f')](_0xc35852['X'],_0x695efb,_0xc35852['res'])[_0x581e('0x3e')](0.725)):_0xc35852[_0x581e('0x41')]&&this[_0x581e('0x50')][_0x581e('0x5c')](_0x1419d7[_0x581e('0x3a')][_0x581e('0x1f')](_0xc35852['X'],_0x695efb-(_0x3270ed-_0x514ad1)/0x2,_0xc35852[_0x581e('0x41')])[_0x581e('0x3e')](0.725)[_0x581e('0x5d')](0x5a));let _0x2d911a=_0xc35852[_0x581e('0x41')][_0x581e('0x5e')](0x1),_0x4e42d2=(_0x1b72a4[_0x581e('0x59')]+0x1)%0x2;_0x2d911a=isNaN(parseInt(_0x2d911a))?'A'===_0x2d911a?0x1:0x0:parseInt(_0x2d911a),this[_0x581e('0x5f')][_0x4e42d2]=(this[_0x581e('0x5f')][_0x4e42d2]+_0x2d911a)%0xa,console[_0x581e('0x60')](this[_0x581e('0x5f')]),setTimeout(()=>{_0x2d911a>0x0&&_0x1419d7['add'][_0x581e('0x1f')](_0x1419d7[_0x581e('0x57')][_0x4e42d2],_0x1419d7[_0x581e('0x61')],''+_0x1419d7[_0x581e('0x5f')][_0x4e42d2])[_0x581e('0x3e')](0.8);},0x4b0),_0x1b72a4['length']>0x2?setTimeout(function(){_0x1419d7['showCards'](_0x1419d7);},0x708):_0xc35852['res']?setTimeout(_0x695efb=>{_0x1419d7[_0x581e('0x58')](_0x1419d7);},0xbb8):_0x1419d7[_0x581e('0x58')](_0x1419d7);}[_0x581e('0x5a')](){setTimeout(_0x1419d7=>{this[_0x581e('0x62')]=this[_0x581e('0x3a')][_0x581e('0x1f')](_0x2d911a+0xc8,0x1c2,_0x36a91f)['setScale'](0.75),this['resultSpeed']=1.2,this['finished']=!0x0,this[_0x581e('0x63')]=this[_0x581e('0x64')]['addEvent']({'delay':0x3e8}),setTimeout(_0x1419d7=>{this[_0x581e('0x4f')]=[0x0,0x0,0x0,0x0,0x0,0x0],this[_0x581e('0x5f')]=[0x0,0x0],this[_0x581e('0x50')]=[],this[_0x581e('0x4a')][_0x581e('0x4b')](_0x581e('0x10'));},0xfa0);},0x3e8);}['update'](_0x1419d7,_0x695efb){this[_0x581e('0x65')]&&this[_0x581e('0x62')]['x']-this[_0x581e('0x66')]*_0x695efb>=_0x2d911a/0x2&&(this[_0x581e('0x62')]['x']-=this[_0x581e('0x66')]*_0x695efb,this[_0x581e('0x66')]-=0.07*this[_0x581e('0x63')]['getProgress']());for(let _0x1419d7 of this[_0x581e('0x50')])this[_0x581e('0x4f')][this[_0x581e('0x50')][_0x581e('0x67')](_0x1419d7)]<=Math['asin'](_0x514ad1/0x81)?(_0x1419d7[_0x581e('0x68')]=Math[_0x581e('0x69')](this[_0x581e('0x4f')][this['drawnCards'][_0x581e('0x67')](_0x1419d7)]),this[_0x581e('0x4f')][this[_0x581e('0x50')]['indexOf'](_0x1419d7)]+=0.025):_0x1419d7[_0x581e('0x68')]=_0x514ad1/0x81;}}]};new Phaser[(_0x581e('0x6a'))](_0xed5791);}]);