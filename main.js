function setup()
{
    canvas = createCanvas(400,300);
    canvas.center();
    canvas.position(520, 450);
    video = createCapture(VIDEO);
    video.size(400,300);
    video.hide();
    classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/55FhH2BQ4/model.json',modelLoaded);
}

function modelLoaded()
{
    console.log('Model Loaded');
}

function draw()
{
    image(video, 0, 0, 400, 300);
    classifier.classify(video , gotResult);
}

function gotResult(error , results)
{
    if(error)
    {
        console.log(error);
    }
    else
    {
        console.log(results);
        document.getElementById("object").innerHTML = results[0].label;
        document.getElementById("accuracy").innerHTML = results[0].confidence.toFixed(3);
    }
}