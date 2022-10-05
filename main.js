song = "";
leftWristx = "";
leftWristy = "";
rightWristx = "";
rightWristy = "";

function preload()
{
    song = loadSound("music.mp3");
}

function setup()
{
    canvas = createCanvas(300, 300);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses);
}

function modelLoaded()
{
    console.log("PoseNet is Initialized");
}

function gotPoses(results)
{
  if(results.length > 0)
  {
    console.log(results);
  leftWristx = results[0].pose.leftWrist.x;
  leftWristy = results[0].pose.leftWrist.y;
  rightWristx = results[0].pose.rightWrist.x;
  rightWristy = results[0].pose.rightWrist.y;
  }
}

function draw()
{
    image(video, 0, 0, 300, 300);
}

function playSong()
{
    song.play();
    song.setVolume(1);
    song.rate(1);
}