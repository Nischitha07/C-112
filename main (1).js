Webcam.set({
    width: 320,
    height:200,
    image_format:"png",
    png_quality:100,
    constraints: {
        facingMode:"environment"
    }
});
camera = document.getElementById("camera");
Webcam.attach('#camera');

function capture_img()
{
    Webcam.snap(function (data_uri){
        document.getElementById("result").innerHTML = '<img id="snapshot" src="'+data_uri+'"/>';

    });
}
console.log('ml5.version' , ml5.version);
classifier = ml5.imageClassifier('MobileNet' , modelLoaded);
function modelLoaded()
{
    console.log('modelLoaded');

}
function identify_img()
{
img = document.getElementById("snapshot");
classifier.classify(img , gotResult);
}
function gotResult (error , results)
    { if (error){
        console.error(error);
    }
    else {
        console.log(results);
        document.getElementById("result_span").innerHTML = results[0].label;

    }

    }
