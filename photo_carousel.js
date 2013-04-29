
var images = ["bangkok_river.jpg", "bangkok.jpg", "chengdu.jpg", "karakoram.jpg", "khunjerab_pass.jpg"];

var currentimage = 0;


var back_button = document.getElementById('back_button');
var forward_button = document.getElementById('forward_button');

back_button.onclick = function(){changeimage(-1);};
forward_button.onclick = function(){changeimage(1);};


function changeimage(change){
  currentimage += change;
  if(currentimage === images.length){
    currentimage = 0;
  }else if (currentimage === -1){
    currentimage = images.length - 1;
  }

  var string = '<img class="img-rounded photo" src="' + images[currentimage] + '"/>';
  document.getElementById('slideshowimage').innerHTML = string;


  // document.getElementById('photo').style.opacity = 1;

  // function fadeOut(){
  //   if(img.style.opacity <= 0) {
  //     return;
  //   }
  //   document.getElementById('photo').style.opacity -= 0.1;
  // }

  // var x = setInterval(fadeOut, 3000);
}

changeimage(0);




// var img = document.getElementById('hplogo');
// img.style.opacity = 1;

// function fadeOut(){
//   if(img.style.opacity <= 0) {
//     return;
//   }
//   img.style.opacity -= 0.01;
// }

// var time = setInterval(fadeOut, 10);

// function animate(){
//   if(img.width >= 600) {
//     return;
//   }
//   img.width += 3;
// }

// var timer = setInterval(animate, 41.67);
// var stopMoving = function(){clearInterval(timer);};
// setTimeout(stopMoving, 2000);