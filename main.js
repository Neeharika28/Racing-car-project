canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

car1_img="Car1.png";
car1_width=120;
car1_height=70;
car1_x=10;
car1_y=10;

car2_img="Car2.png"
car2_width=120;
car2_height=70;
car2_x=10;
car2_y=100;

bg_img="Road image.jpg"

function add(){
    background_image=new Image();
    background_image.onload=uploadBackground;
    background_image.src=bg_img;

    car1_image=new Image();
    car1_image.onload=uploadCar1;
    car1_image.src=car1_img;

    car2_image=new Image();
    car2_image.onload=uploadCar2;
    car2_image.src=car2_img;
}

function uploadBackground(){
ctx.drawImage(background_image,0,0,canvas.width,canvas.height);
}

function uploadCar1(){
    ctx.drawImage(car1_image,car1_x,car1_y,car1_width,car1_height);
}

function uploadCar2(){
    ctx.drawImage(car2_image,car2_x,car2_y,car2_width,car2_height);
}

window.addEventListener("keydown",myKeyDown);

function myKeyDown(e){
keyPressed=e.keyCode;
console.log(keyPressed);

if(keyPressed==37){
    car1_left();
    console.log("left key");
}

if(keyPressed==38){
    car1_up();
    console.log("up key");
}

if(keyPressed==39){
    car1_right();
    console.log("right key");
}

if(keyPressed==40){
    car1_down();
    console.log("down key");
}

if(keyPressed==65){
    car2_left();
    console.log("a key");
}

if(keyPressed==87){
    car2_up();
    console.log("w key");
}

if(keyPressed==68){
    car2_right();
    console.log("d key");
}

if(keyPressed==83){
    car2_down();
    console.log("s key");
}

}
