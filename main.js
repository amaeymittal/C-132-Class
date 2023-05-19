var dog_image = ""
var status1 = ""
function preload(){
    dog_image = loadImage("dog_cat.jpg")
}
function setup(){
    canvas = createCanvas(640,420)
    canvas.center()
    object_detector = ml5.objectDetector('cocossd',modelLoaded)
    document.getElementById("status").innerHTML = "Status:Detecting Objects"
}
function draw(){
    image(dog_image,0,0,640,420)
    fill("#FF0000")
    text("Dog",45,75)
    stroke("#FF0000")
    noFill()
    rect(30,60,450,350)

    fill("#FF0000")
    text("Cat",320,120)
    stroke("#FF0000")
    noFill()
    rect(300,90,270,320)
   
}
function modelLoaded(){
    console.log("Model is initializing")
    status1 = "true"
    object_detector.detect(dog_image,gotResults)
}
function gotResults(error,results){
    if (error){
        console.log(error)
    }
    console.log(results)
}