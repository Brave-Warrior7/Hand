Webcam.set({
  width:350,
  height:300,
  image_format: 'png',
  png_quality:90
});

Webcam.attach('#camera');

function take_snapshot(){
    Webcam.snap(function (data_uri){
      document.getElementById("selfie_result").innerHTML= '<img id=captured_imge width="350" height="266" src="'+data_uri+'"/>';
    });
}

console.log("ml5 version:", ml5.version);


classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/YBUu0mu08/model.json', modelLoaded);

function modelLoaded(){
    console.log("model Loaded")
}