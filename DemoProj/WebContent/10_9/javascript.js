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
$(document).ready(function(){
	 $("#eli_monthlyincome").keypress(function(){
		 var month_income= this.value;
		 var alphaExp = /^[a-zA-Z]+$/;
		 if(month_income.match(alphaExp))
         {
             //Your logice will be here.
			 $("#eli_monthlyincome").addClass("error");
         }
         else{
        	 $("#eli_monthlyincome").removeClass("error");
         }
	 });




});