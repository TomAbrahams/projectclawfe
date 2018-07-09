function imageDisplay() {
  var i = 0;
  var picName;
  var currentPicture = pictureRateObj();
  for( i=1; i <3; i++) {
    picName = "sheeh0" + i;
    fillHTML = '<img src=../pictures/"' + picName + '" alt="This is pic ' +i + '"><br>';
    document.getElementById("imageItem").innerHTML = fillHTML;

  }
}
imageDisplay();
