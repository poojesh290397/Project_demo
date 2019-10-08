/**
 * 
 */
function eli_cal(){
	document.getElementById("eli_cal_head").classList.add("invisible");
	document.getElementById("eli_cal_cont").classList.remove("invisible");
	document.getElementById("emi_cal_cont").classList.add("invisible");
	document.getElementById("emi_cal_head").classList.remove("invisible");


}

function emi_cal(){
	document.getElementById("emi_cal_head").classList.add("invisible");
	document.getElementById("emi_cal_cont").classList.remove("invisible");
	document.getElementById("eli_cal_head").classList.remove("invisible");
	document.getElementById("eli_cal_cont").classList.add("invisible");
		
	}