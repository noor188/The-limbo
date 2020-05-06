var image_tracker1 = 'black';
var image_tracker2 = 'black';
var image_tracker3 = 'black';
var image_tracker4 = 'black';
var image_tracker5 = 'default';
var image_tracker6 = 'default';
var image_tracker7 = 'default';
var image_tracker8 = 'default';

var image1;
var image2;
var image3;
var image4;
 
function change1()
{
  image1 = document.getElementById('time');
  image2 = document.getElementById('acts');
  image3 = document.getElementById('words');
  image4 = document.getElementById('gifts');
  
  if(image_tracker1=='black')
  {
    image1.src='Image/time2.png';
    image2.src='Image/acts1.png';
    image3.src='Image/words1.png';
    image4.src='Image/gifts1.png';
    image_tracker1='color';
    image_tracker2='black';
    image_tracker3='black';
    image_tracker4='black';
  }
  else {
    image1.src='Image/time2.png';  
  }
}

function change2()
{ 
  image1 = document.getElementById('time');
  image2 = document.getElementById('acts');
  image3 = document.getElementById('words');
  image4 = document.getElementById('gifts');

  if(image_tracker2=='black')
  {
    image1.src='Image/time1.png';
    image2.src='Image/acts2.png';
    image3.src='Image/words1.png';
    image4.src='Image/gifts1.png';
    image_tracker1='black';
    image_tracker2='color';
    image_tracker3='black';
    image_tracker4='black';
  }
  else{
    image2.src='Image/acts2.png';
  }
}

function change3()
{
   
  image1 = document.getElementById('time');
  image2 = document.getElementById('acts');
  image3 = document.getElementById('words');
  image4 = document.getElementById('gifts');

  if(image_tracker3=='black')
  {
    image1.src='Image/time1.png';
    image2.src='Image/acts1.png';
    image3.src='Image/words2.png';
    image4.src='Image/gifts1.png';
    image_tracker1='black';
    image_tracker2='black';
    image_tracker3='color';
    image_tracker4='black';
  }
  else{
    image3.src='Image/words2.png';
  }
}

function change4()
{
  image1 = document.getElementById('time');
  image2 = document.getElementById('acts');
  image3 = document.getElementById('words');
  image4 = document.getElementById('gifts');

  if(image_tracker4=='black')
  {
    image1.src='Image/time1.png';
    image2.src='Image/acts1.png';
    image3.src='Image/words1.png';
    image4.src='Image/gifts2.png';
    image_tracker1='black';
    image_tracker2='black';
    image_tracker3='black';
    image_tracker4='color';
  }
  else{
    image4.src='Image/gifts2.png';
  }
}

function time()
{
  var image = document.getElementById('M_R');

  if(image_tracker5 == 'default')
  {
    image.src = 'Image/Quality_Time.png';
    image_tracker5 = 'changed';
  }
  else{
    image.src='Image/Quality_Time.png';
  
  }
}

function acts()
{
  var image = document.getElementById('M_R');

  if(image_tracker6=='default')
  {
    image.src='Image/Acts_of_Service.png';
    image_tracker6='changed';
  }
  else{
    image.src='Image/Acts_of_Service.png';
  }
}

function words()
{
  var image = document.getElementById('M_R');

  if(image_tracker7=='default')
  {
    image.src='Image/Words_of_Affirmation.png';
    image_tracker7='changed';
  }
  else{
    image.src='Image/Words_of_Affirmation.png';
    
  }
}

function gifts()
{
  var image = document.getElementById('M_R');

  if(image_tracker8=='default')
  {
    image.src='Image/Receiving_Gifts.png';
    image_tracker8='changed';
  }
  else{
    image.src='Image/Receiving_Gifts.png';
  }
}

function myFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("button");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more"; 
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less"; 
    moreText.style.display = "inline";
  }
}
