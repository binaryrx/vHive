var images = [];
//function to preload images
function preload() {
  for (var i = 0; i < arguments.length; i++) {
    images[i] = new Image();
    images[i].crossOrigin = "anonymous";
    images[i].src = preload.arguments[i];
  }
}

var x = window.matchMedia("(max-width: 768px)");

function DetectMobile() {
  if (x.matches) {
    //mobile
      // preload("images/mobile/bg_mobile.jpg");
  } else {
    //desktop
    // preload("images/mobile/bg_mobile.jpg");

  }

}

x.addListener(DetectMobile);
DetectMobile(x);
