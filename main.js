song1 = "";
song2 = "";
leftWristX = 0;
 leftWristY = 0;
rightWristX = 0;
rightWristY = 0;
function setup(){
canvas = createCanvas(600,500);
canvas.position(550,200);
video = createCapture(VIDEO);
video.hide();
posenet = ml5.poseNet(video, modelLoaded);
posenet.on('pose', gotPoses);
}
function draw(){
    image(video,0,0,600,500);
}

function preload(){
    song1= loadSound("Heatwaves.mp3");
   song2 = loadSound("Shadow Of Mine.mp3");
}
function playsong1(){
  song1.stop();
  song1.play();
  
  song2.stop();
  document.getElementById("Song_name").innerHTML = "Song Name: Heatwaves";
}
function playsong2(){
 song2.stop();
  song2.play();
  song1.stop();
  document.getElementById("Song_name").innerHTML = "Song Name: Shadow Of Mine";
}
function gotPoses(results){
  if(results.length > 0){
    console.log(results);
    leftWristX = results[0].pose.leftWrist.x;
    leftWristY = results[0].pose.leftWrist.y;
    console.log("LeftWrist X "+ leftWristX + " LeftWristY"+leftWristY)
    rightWristX = results[0].pose.leftWrist.x;
    rightWristY = results[0].pose.leftWrist.y;
  }
}
function modelLoaded(){
  console.log('PoseNet is initialized!');
}