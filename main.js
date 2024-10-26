noseX = 0
noseY = 0

function preload(){

}

function setup(){
    canvas = createCanvas(300,300)
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    pseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses)
}

function gotPoses(results){
    if(results.length>0){
        console.log(results)
        noseX = results[0].pose.nose.x
        noseY = results[0].pose.nose.y
        console.log("nose x ="+ noseX)
        console.log("nose y ="+noseY)
    }
}

function modelLoaded(){
    console.log('PoseNet Is INitialized');

}
function draw(){
    image(video,0,0,300,300)
    fill(255,0,0)
    stroke(255,0,0)
    circle(noseX,noseY,20)
    image(clown_nose,noseX,noseY,30,30)
}

function take_snapshot(){
    save('myFilterImage.png')
}