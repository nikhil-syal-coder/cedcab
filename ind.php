<?php 
 session_start();
 


require_once('../class.php');
require_once('../config.php');
$obj3= new DB();
$obj5=new location();
$cabby=$obj5->array($obj3->conn);

$extra=0;
$origin=$_POST['pickup'];
$drop=$_POST['drop'];
$laugage=$_POST['laugage'];
$origin2=$cabby[$origin];
$drop2=$cabby[$drop];
$final =($origin2)-($drop2);
$final=abs($final);
echo $final;
$_SESSION['origin']=$origin;

$_SESSION['drop']=$drop;
$_SESSION['laugage']=$laugage;
$_SESSION['final']=$final;
$_SESSION['cabname']=$_POST['cabname'];

if($laugage<10 && $laugage>0){
  $extra=50;
}

elseif ($laugage>=10 && $laugage<=20) {
	 $extra=100;
}
elseif ($laugage>=20) {
	 $extra=200;
	# code...
}

  if($_POST['cabname']=="CedMicro"){
     	 $fare=50;
     	 if($final<=10){
     	 	$fare=$fare+$final*(13.50);
     	 	echo(',');
     	 	echo $fare;
     	 }
     	 if($final<=60){

     	 	$fare=$fare+(10)*(13.50)+($final-10)*12;
     	 	echo(',');
     	 	echo $fare;
     	 }
     	 if($final<=160){

     	 	$fare=$fare+(10)*(13.50)+(50)*(12)+($final-60)*10.20;
     	 	echo(',');
     	 	echo $fare;
     	 }
     	  if($final>160){

     	 	$fare=$fare+(10)*(13.50)+(50)*(12)+(100)*(10.20)+($final-160)*(8.50);
     	 	echo(',');
     	 	echo $fare;
     	 }
     }
   elseif ($_POST['cabname']=="CedMini") {
   	$fare=150;
     	 if($final<=10){
     	 	$fare=$fare+$final*(14.50)+ $extra;
     	 	echo(',');
     	 	echo $fare;
     	 }
     	 if($final<=60){

     	 	$fare=$fare+(10)*(14.50)+($final-10)*13+ $extra;
     	 	echo(',');
     	 	echo $fare;
     	 }
     	 if($final<=160){

     	 	$fare=$fare+(10)*(14.50)+(50)*(13)+($final-60)*11.20+ $extra;
     	 	echo(',');
     	 	echo $fare;
     	 }
     	  if($final>160){

     	 	$fare=$fare+(10)*(14.50)+(50)*(13)+(100)*(11.20)+($final-160)*(9.50)+ $extra;
     	 	echo(',');
     	 	echo $fare;
     	 }
     	
     }  
      elseif ($_POST['cabname']=="Cedroyal") {
   	 $fare=200;
     	 if($final<=10){
     	 	$fare=$fare+$final*(15.50)+ $extra;
     	 	echo(',');
     	 	echo $fare;
     	 }
     	 if($final<=60){

     	 	$fare=$fare+(10)*(15.50)+($final-10)*14+ $extra;
     	 	echo(',');
     	 	echo $fare;
     	 }
     	 if($final<=160){

     	 	$fare=$fare+(10)*(15.50)+(50)*(14)+($final-60)*12.20+ $extra;
     	 	echo(',');
     	 	echo $fare;
     	 }
     	  if($final>160){

     	 	$fare=$fare+(10)*(15.50)+(50)*(14)+(100)*(12.20)+($final-160)*(10.50)+ $extra;
     	 	echo(',');
     	 	echo $fare;
     	 }
     	
     } 
        elseif ($_POST['cabname']=="Cedsuv") {
   	 $fare=250;
     	 if($final<=10){
     	 	$fare=$fare+$final*(16.50)+ $extra*2;
     	 	echo(',');
     	 	echo $fare;
     	 }
     	 if($final<=60){

     	 	$fare=$fare+(10)*(16.50)+($final-10)*15+ $extra*2;
     	 	echo(',');
     	 	echo $fare;
     	 }
     	 if($final<=160){

     	 	$fare=$fare+(10)*(16.50)+(50)*(15)+($final-60)*13.20+ $extra*2;
     	 	echo(',');
     	 	echo $fare;
     	 }
     	  if($final>160){

     	 	$fare=$fare+(10)*(16.50)+(50)*(15)+(100)*(13.20)+($final-160)*(11.50)+ $extra*2;
     	 	echo(',');
     	 	echo $fare;
     	 }
     	
	 } 
	 $_SESSION['fare']=$fare;
	
	 $obj= new DB();
	 $obj2=new User();
	 $obj2->ride($obj->conn);
   
?>