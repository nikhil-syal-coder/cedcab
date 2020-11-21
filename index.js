$(document).ready(function(){

 $('.new2').hide();
 $('.new3').hide();

});
function loc() {
	
    var x = $(".pickup").val();

    $(".drop option[value='"+x+"']").attr("disabled", "disabled").siblings().removeAttr("disabled");
   
}
function droploc() {
    var x = $(".drop").val();
    $(".pickup option[value='"+x+"']").attr("disabled", "disabled").siblings().removeAttr("disabled");
   }

function saman(){
	var x=$(".pass").val();
	if(x=='CedMicro'){
		// $( ".new" ).prop( "disabled", true );
		$('.new').attr('disabled', 'disabled');
		$(".new").val("laugage option is not avaible in CedMicro");
		// alert("laugage option is not avaible for required taxi selection");
		
	}
	else{
		$('.new').removeAttr('disabled');
		$(".new").val(0); 
	}
}
function final(){
	var aana=$(".s1").val();
	if(aana=="Current-location"){
		alert("Required....Please select your current location");
		return;
	}
	var jana=$(".s2").val();
	if(jana=="Enter Drop for ride estimate"){

		alert("Required....Please select your drop location");
		return;
	}
	var laugag=$(".new").val();
	console.log(typeof 'laugag');
	console.log(laugag);
	var cab=$(".pass").val();
	console.log(cab);
	if(cab==1){
		alert("Required....Please select your cab-type");
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
    	url: "http://localhost/training/cab/index.php", 
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
}
function onlynumber(button) { 
	console.log(button.which);
        var code = button.which;
        if (code > 31 && (code < 48 || code > 57)) 
            return false; 
        return true; 
    } 
