function changeHeaderBackground(){
	var x = document.getElementById("header");
	if (x.style.backgroundColor==="red") {
		x.style.backgroundColor = "black";
	}else{
		x.style.backgroundColor="red";
	}
}

function changeTwinsBackground(){
	var right = document.getElementById("rightDiv");
	var left  = document.getElementById("leftDiv");
	if (right.style.backgroundColor==="green") {
		right.style.backgroundColor = "yellow";
		left.style.backgroundColor = "green";
	}else{
		left.style.backgroundColor = "yellow";
		right.style.backgroundColor = "green";
	}
}

function changeFlanksBackround(){
	var rightFlank = document.getElementById("rightArticle");
	var leftFlank  = document.getElementById("leftArticle");
	var center  = document.getElementById("centerArticle");
	
	if (center.style.backgroundColor==="black") {
		center.style.backgroundColor="red";
		rightFlank.style.backgroundColor = "black";
		leftFlank.style.backgroundColor = "black";
		
	}else{	

		center.style.backgroundColor="black";
		rightFlank.style.backgroundColor = "red";
		leftFlank.style.backgroundColor = "red";
	}
}




