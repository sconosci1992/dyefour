let channelUp = document.querySelector(".channelUp");

let channelDown = document.querySelector(".channelDown");

let imageSpot = document.querySelector(".imageSpot");

let gifSpot = document.querySelector(".gifSpot");

let modalStart = document.querySelector("#modalStart");

let modalBox = document.querySelector("#modalBox");

let close = document.querySelector(".close");

let modalImage = document.querySelector("#modalImage");

let modalLook = document.querySelector(".modalLook");


let modalImages = {
	source: ['screen.png', '../art/1.jpg', '../art/2.jpg', '../art/3.jpg', '../art/4.jpg', 
			 '../art/5.jpg', '../art/6.jpg', '../art/7.jpg', '../art/8.jpg', 
			 '../art/9.jpg', '../art/10.jpg', '../art/11.jpg', '../art/12.jpg', 
			 '../art/13.jpg', '../art/14.jpg', '../art/15.jpg', '../art/16.jpg', 
			 '../art/17.jpg', '../art/18.jpg', '../art/19.jpg', '../art/20.jpg', 
			 '../art/21.jpg', '../art/22.jpg', '../art/23.jpg', '../art/24.jpg', 
			 '../art/25.jpg', '../art/26.jpg', '../art/27.jpg', '../art/28.jpg', 
			 '../art/29.jpg', '../art/30.jpg', '../art/31.jpg', '../art/32.jpg', 
			 '../art/33.jpg', '../art/34.jpg', '../art/35.jpg', '../art/36.jpg', 
			 '../art/37.jpg', ]
}

let mainImages = {
  	source: [ './finalEdit/1.png', './finalEdit/2.png', './finalEdit/3.png', 
			  './finalEdit/4.png', './finalEdit/5.png', './finalEdit/6.png', 
			  './finalEdit/7.png', './finalEdit/8.png', './finalEdit/9.png', 
			  './finalEdit/10.png', './finalEdit/11.png', './finalEdit/12.png', 
			  './finalEdit/13.png', './finalEdit/14.png', './finalEdit/15.png', 
			  './finalEdit/16.png', './finalEdit/17.png', './finalEdit/18.png', 
			  './finalEdit/19.png', './finalEdit/20.png', './finalEdit/21.png', 
			  './finalEdit/22.png', './finalEdit/23.png', './finalEdit/24.png', 
			  './finalEdit/25.png', './finalEdit/26.png', './finalEdit/27.png',
			  './finalEdit/28.png', './finalEdit/29.png', './finalEdit/30.png', 
			  './finalEdit/31.png', './finalEdit/32.png', './finalEdit/33.png', 
			  './finalEdit/34.png', './finalEdit/35.png', './finalEdit/36.png', 
			  './finalEdit/37.png']
}

var images = [];
function preload() {
    for (var i = 0; i < arguments.length; i++) {
        images[i] = new Image();
        images[i].src = preload.arguments[i];
    }
}

//-- usage --//
preload(
    		 './finalEdit/1.png', './finalEdit/2.png', './finalEdit/3.png', 
			  './finalEdit/4.png', './finalEdit/5.png', './finalEdit/6.png', 
			  './finalEdit/7.png', './finalEdit/8.png', './finalEdit/9.png', 
			  './finalEdit/10.png', './finalEdit/11.png', './finalEdit/12.png', 
			  './finalEdit/13.png', './finalEdit/14.png', './finalEdit/15.png', 
			  './finalEdit/16.png', './finalEdit/17.png', './finalEdit/18.png', 
			  './finalEdit/19.png', './finalEdit/20.png', './finalEdit/21.png', 
			  './finalEdit/22.png', './finalEdit/23.png', './finalEdit/24.png', 
			  './finalEdit/25.png', './finalEdit/26.png', './finalEdit/27.png',
			  './finalEdit/28.png', './finalEdit/29.png', './finalEdit/30.png', 
			  './finalEdit/31.png', './finalEdit/32.png', './finalEdit/33.png', 
			  './finalEdit/34.png', './finalEdit/35.png', './finalEdit/36.png', 
			  './finalEdit/37.png'
)

let counter= -1;

function static(){
	gifSpot.classList.toggle("show");
	setTimeout(function(){gifSpot.classList.toggle("show");}, 300);
	gifSpot.src = "";
	gifSpot.src = "static.gif";
}

function imageUp(){
	static() 
	if(counter == mainImages.source.length - 1){
		counter = 0;
		imageSpot.src = mainImages.source[counter];
		modalImage.src = modalImages.source[counter];
	}else{
		counter++;
		imageSpot.src = mainImages.source[counter];
		modalImage.src = modalImages.source[counter];
	}
};

function imageDown(){
	static()
	if(counter > 0){
 		counter--;
		imageSpot.src = mainImages.source[counter];
		modalImage.src = modalImages.source[counter];
	}else{
		counter = mainImages.source.length - 1;
		imageSpot.src = mainImages.source[counter];
		modalImage.src = modalImages.source[counter];
	}
};

channelUp.addEventListener("click", function(){
	imageUp();
});

channelDown.addEventListener("click", function(){
	imageDown();
});

modalStart.onclick = function(){
	modalBox.style.display = "block";
}

close.onclick = function() {
	modalBox.style.display = "none";
}

window.onclick = function(event) {
	if (event.target == modalImage){
		modalLook.style.display = "none";
	}
}