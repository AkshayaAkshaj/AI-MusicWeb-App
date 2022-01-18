song_1="";
song_2="";
function preload(){
song_1=loadSound("IntoTheUnknown.mp3");
song_2=loadSound("LetItGo.mp3");
}
function setup(){
canvas=createCanvas(500,600);
canvas.center()

video=createCapture(VIDEO);
video.center();
video.hide();

}
function draw(){
    image(video,0,0,500,600);
}