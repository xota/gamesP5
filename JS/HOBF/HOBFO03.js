// deze code is onleesbaar gemaakt met https://obfuscator.io

var _0x55b18f=function(){var _0x330ad3=!![];return function(_0x5aa076,_0x457a7f){var _0x41138d=_0x330ad3?function(){if(_0x457a7f){var _0x21f2cc=_0x457a7f['apply'](_0x5aa076,arguments);_0x457a7f=null;return _0x21f2cc;}}:function(){};_0x330ad3=![];return _0x41138d;};}();var _0x1a8ab0=_0x55b18f(this,function(){var _0x47d899=function(){return'\x64\x65\x76';},_0x2cd165=function(){return'\x77\x69\x6e\x64\x6f\x77';};var _0x3137c8=function(){var _0xabd7b6=new RegExp('\x5c\x77\x2b\x20\x2a\x5c\x28\x5c\x29\x20\x2a\x7b\x5c\x77\x2b\x20\x2a\x5b\x27\x7c\x22\x5d\x2e\x2b\x5b\x27\x7c\x22\x5d\x3b\x3f\x20\x2a\x7d');return!_0xabd7b6['\x74\x65\x73\x74'](_0x47d899['\x74\x6f\x53\x74\x72\x69\x6e\x67']());};var _0x41cf76=function(){var _0x1d3dd6=new RegExp('\x28\x5c\x5c\x5b\x78\x7c\x75\x5d\x28\x5c\x77\x29\x7b\x32\x2c\x34\x7d\x29\x2b');return _0x1d3dd6['\x74\x65\x73\x74'](_0x2cd165['\x74\x6f\x53\x74\x72\x69\x6e\x67']());};var _0x2f1e87=function(_0xbd737f){var _0x22274c=~-0x1>>0x1+0xff%0x0;if(_0xbd737f['\x69\x6e\x64\x65\x78\x4f\x66']('\x69'===_0x22274c)){_0x3e9a5e(_0xbd737f);}};var _0x3e9a5e=function(_0x2fce7a){var _0x1a868e=~-0x4>>0x1+0xff%0x0;if(_0x2fce7a['\x69\x6e\x64\x65\x78\x4f\x66']((!![]+'')[0x3])!==_0x1a868e){_0x2f1e87(_0x2fce7a);}};if(!_0x3137c8()){if(!_0x41cf76()){_0x2f1e87('\x69\x6e\x64\u0435\x78\x4f\x66');}else{_0x2f1e87('\x69\x6e\x64\x65\x78\x4f\x66');}}else{_0x2f1e87('\x69\x6e\x64\u0435\x78\x4f\x66');}});_0x1a8ab0();var straal=0x14;var xPositie;var yPositie;var xSnelheid=0x8;var ySnelheid=0x5;var onderlingeAfstand;function setup(){var _0x513c9a=createCanvas(0x3e8,0x12c);_0x513c9a['\x70\x61\x72\x65\x6e\x74']('\x70\x72\x6f\x63\x65\x73\x73\x69\x6e\x67');frameRate(0x32);colorMode(RGB,0xff,0xff,0xff,0x1);background(0x0,0x0,0x4b,0x1);noStroke();textFont('\x56\x65\x72\x64\x61\x6e\x61');textSize(0x8c);xPositie=straal;yPositie=height/0x2;}function draw(){background(0x0,0x0,0x4b,0.05);fill(0x0,0x0,0xff,0x1);ellipse(0x226,height-straal,0x2*straal);xPositie+=xSnelheid;yPositie+=ySnelheid;fill(0xff,0xff,0xff,0x1);ellipse(xPositie,yPositie,0x2*straal);onderlingeAfstand=round(dist(0x226,height-straal,xPositie,yPositie))-0x2*straal;if(onderlingeAfstand<=0x0){eindScherm();noLoop();}gebruikBesturing();if(yPositie<straal||yPositie>height-straal){ySnelheid*=-0x1;}if(xPositie<straal||xPositie>width-straal){xSnelheid*=-0x1;}}function gebruikBesturing(){if(keyIsDown(LEFT_ARROW)){xSnelheid+=0x1;ySnelheid+=0x1;}if(keyIsDown(RIGHT_ARROW)){xSnelheid-=0x1;ySnelheid-=0x1;}}function eindScherm(){background('\x77\x68\x69\x74\x65');fill('\x62\x6c\x61\x63\x6b');text('\x47\x45\x56\x41\x4e\x47\x45\x4e\x21',0x4b,0xc8);noLoop();}