img = "";
status = "";


function preload() 
{
    img = loadImage('Sports.jpg');    
}




function setup()
{
    canvas = createCanvas(640, 420);
    canvas.center();
    //Loading the COCO SSD model in ml5
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

function draw()
{
    image(img, 0, 0, 640, 420);
    
}

function modelLoaded() 
{
    console.log("Model Loaded!");
    status = true;
    objectDetector.detect(img, gotResult);    
}

function gotResult(error, results) {
    if (error) {
        console.log(error);
    }
    console.log(results);
}