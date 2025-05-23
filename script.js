const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
// get Context 2d means we are getting the 2d rendering context of the canvas
console.log(ctx);

const CANVAS_WIDTH = canvas.width = 600;
const CANVAS_HEIGHT = canvas.height = 600;

const playerImage= new Image();
playerImage.src='shadow_dog.png';
const spriteWidth=575;
const spriteHeight=523;
let frameX=0;
let frameY=0;

// 5230 - is full sheet height, 
function animate(){
    ctx.clearRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT);
    // ctx.fillRect(50,50,100,100);
    // ctx.drawImage(image,sx,sy,sw,sh,dx,dy,dw,dh)
    // sx - source image x , sy - source y, sw - source width, sh - source height, dx - destination x, dy - destination y, dw - destination width, dh - destination height
    
    ctx.drawImage(playerImage,frameX*spriteWidth,frameY*spriteHeight,spriteWidth,spriteHeight,0,0,spriteWidth,spriteHeight);
    requestAnimationFrame(animate);
}

animate();
