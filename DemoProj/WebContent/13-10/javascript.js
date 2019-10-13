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
	 
	 $("#eliCalculate").click(function(e){
		 /*var monthlySalary = $('input[name="monthlyIncome"]').val()/2;
		 var tenure = $('input[name="tenure"]').val();
		 var roi=$('input[name="roi"]').val();
		 var eligibility=monthlySalary*tenure*roi;
		 alert(eligibility);
		 $('input[name="eligibility"]').val(eligibility);*/
		 alert("click");
		 var monthlySalary = $('input[name="monthlyIncome"]').val();
		 monthlySalary = monthlySalary*0.5;
		 alert(monthlySalary);
		 var tenure = $('input[name="eliTenure"]').val();
		 alert(tenure);
		 var roi=$('input[name="roi"]').val();
		 alert(roi);
		 var eligibility=monthlySalary*tenure*roi;
		 alert(eligibility);
		 $("#eligibility").html("<h5>"+eligibility+"</h5>");
		 e.preventDefault();
		 
		 
	 })

});