let buttons = document.querySelectorAll(".btn");
let screenx = document.querySelector("input");
let clr = document.querySelector(".clears-btn");
let result = document.querySelector(".equal-btn");

buttons.forEach((button)=>{
	button.addEventListener("click",(e)=>{
		screenx.value+=e.target.value;
		console.log(e.target.value);
	})
})
result.addEventListener("click",(e)=>{
	if(screenx.value===""){
		screenx.value="";
	}else{
		let res=eval(screenx.value);
		screenx.value=res;
	}
})
clr.addEventListener("click",()=>{
	screenx.value="";
})