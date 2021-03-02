noseX= 0;
noseY= 0;


function preload(){
    nose= loadImage('https://i.postimg.cc/C1R8xLjX/orange-picture-png.jpg');
}

function setup(){
    canvas= createCanvas(300,300);
    canvas.center();
    video= createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    poseNet= ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses)
}

function gotPoses(results){
    if(results.length>0){
        console.log(results);
        console.log("nose x=  " + results[0].pose.nose.x);
        console.log("nose y= " + results[0].pose.nose.y);  
        noseX= results[0].pose.nose.x - 10;
        noseY= results[0].pose.nose.y - 10;
    }
}

function modelLoaded(){
    console.log('PoseNet is Initialised');
}


function draw(){
    image(video, 0, 0, 300, 300);
    fill(225,0,0);
    stroke(225, 0, 0);
    //circle(noseX, noseY, 20);
    image(nose, noseX, noseY, 20, 20);
}

function take_snapshot(){
    save('myFilterImage.png');
}

