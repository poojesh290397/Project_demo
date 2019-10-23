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

	 $("#eliCalculate").click(function(e){
		 var monthlySalary = $('input[name="monthlyIncome"]').val();
		 monthlySalary = monthlySalary*0.6;
		 var tenure = $('input[name="eliTenure"]').val();
		 var roi=8.5;
		 var eligibility=monthlySalary*tenure*roi*0.5;
		 eligibility=eligibility.toString();
		 $("#eligibility").html("Rs "+eligibility);
		 e.preventDefault();
	 });

	 $("#emiCalculate").click(function(e){
		 var emiLoan = $('input[name="emiLoan"]').val();
		 var tenure = $('input[name="emiTenure"]').val();
		 var roi=8.5/100;
		 var emiValue=emiLoan*roi*((Math.pow(1+roi,tenure))/( Math.pow(1+roi,tenure-1)));
		 emiValue=Math.round(emiValue);
		 emiValue=emiValue.toString();
		 $("#emiValue").html("Rs "+emiValue);
		 e.preventDefault();
	 });
});
