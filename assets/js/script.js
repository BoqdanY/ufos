let p = document.getElementById("pap");
let a = 0;

window.onscroll = function(){scrollFunction()}
window.onscroll = function(){scrolls()}

//Випливаюча підказка
function b1(){
	p.innerHTML = "Data source" + "(On the Moon): " + '<a href="https://google.com" target="_blank">http://google.com</a>';
}

function b2(){
	p.innerHTML = "Data source" + "(On the Earth): " + '<a href="https://youtube.com.com" target="_blank">http://youtube.com</a>';
}

function b3(){
	p.innerHTML = "Data source" + "(On the Space): " + '<a href="https://st2.depositphotos.com/4164031/7029/i/600/depositphotos_70298385-stock-photo-deep-space.jpg" target="_blank">http://space.com</a>';
}


//Header зменшується
function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    document.getElementById("header").style.padding = "0.5% 0";
  } else {
    document.getElementById("header").style.padding = "1.3% 0";
  }
}

//Зміна menu
function change(){
	let link = document.getElementById("link1");

	if (a == 0) {
		a += 1;
		link1.href = "assets/css/dark-style.css";
	}else{
		a -= 1;
		link1.href = "assets/css/style.css";
	}
	
}

function scrolls(){
	if (window.pageYOffset > document.getElementById("imaf").offsetTop - 500) {
		document.getElementById("cover1").classList.add("anim");
		document.getElementById("cover2").classList.add("anim");
		document.getElementById("cover3").classList.add("anim");
	}
}
