$(document).ready(function(){
$('.new2').hide();
 $('.new3').hide();
 $('.error').hide();
  $('.error2').hide();
  $('.error3').hide();
	$('.error4').hide();
	$('.error5').hide();
	$('.book').hide();


});
$(".book").click(function(){
	alert("The paragraph was clicked.");
  });

	
function loc() {
	
    var x = $(".pickup").val();

    $(".drop option[value='"+x+"']").attr("disabled", "disabled").siblings().removeAttr("disabled");
     $('.error2').hide();
}
function droploc() {
    var x = $(".drop").val();
    $(".pickup option[value='"+x+"']").attr("disabled", "disabled").siblings().removeAttr("disabled");
  $('.error3').hide();
   }

function saman(){
	var x=$(".pass").val();
	$('.error4').hide();
	if(x=='CedMicro'){
		
		$('.new').attr('disabled', 'disabled');
		$(".new").val("laugage option is not avaible in CedMicro");
		 $('.error').show();
		 $('.error').html("laugage option is not avaible in CedMicro");
		
		
	}
	else{
		$('.new').removeAttr('disabled');
		$(".new").val(0); 
		 $('.error').hide();
	}
}
function final(){
	var aana=$(".s1").val();
	if(aana=="Current-location"){
	
         $('.error2').show();
		 $('.error2').html("please choose your current location");
		return;
	}
	
	var jana=$(".s2").val();
	if(jana=="Enter Drop for ride estimate"){

		
		 $('.error3').show();
		 $('.error3').html("please choose your drop location location");
		return;
	}
	
	var laugag=$(".new").val();
	console.log(typeof 'laugag');
	console.log(laugag);
	var cab=$(".pass").val();
	console.log(cab);
	if(cab==1){
		
		 $('.error4').show();
		 $('.error4').html("please choose your cab for journey");
		return;
	}
	
	if(aana==jana){
		alert('pickup and drop point should not be same ');
		return;
	}
	if(laugag==''){
		alert("Your default laugage-weight is 0 ");
		$(".new").val(0);
	}

     $.ajax({
    	url: "http://localhost/training/cab_project/cab/ind.php", 
    	type:"POST",
    	 
    	data:{pickup:aana,drop:jana,laugage:laugag,cabname:cab },
    	success: function(result){
    	   console.log(result);
    		var at=result;
    	var at = result.split(',');
        console.log( at[0]);
    		$('.new2').show();
    		$('.new3').show();
    		$(".new2").val('The final distance is' + ' '+ at[0]+'KM');
    		$(".new3").val('The final fare is:₹' + ' '+ at[1]);
    		
    	},
         error :function(error){
         	console.log(error);
        }

	});
	$('.book').show();
	$('.fare').hide();
}
function onlynumber(button) { 
	console.log(button.which);
        var code = button.which;
        if (code > 31 && (code < 48 || code > 57)) 
            return false; 
        return true; 
    } 
