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
    image.src = 'Image/banner_2.jpg';
    image_tracker5 = 'changed';
  }
  else{
    image.src='Image/banner_2.jpg';
  
  }
}

function acts()
{
  var image = document.getElementById('M_R');

  if(image_tracker6=='default')
  {
    image.src='Image/banner_1.jpg';
    image_tracker6='changed';
  }
  else{
    image.src='Image/banner_1.jpg';
  }
}

function words()
{
  var image = document.getElementById('M_R');

  if(image_tracker7=='default')
  {
    image.src='Image/banner_2.jpg';
    image_tracker7='changed';
  }
  else{
    image.src='Image/banner_2.jpg';
    
  }
}

function gifts()
{
  var image = document.getElementById('M_R');

  if(image_tracker8=='default')
  {
    image.src='Image/banner_3.jpg';
    image_tracker8='changed';
  }
  else{
    image.src='Image/banner_3.jpg';
  }
}


