<?php
header('Content-Type: application/json');

$name = $_POST['name'];
$adrs = $_POST['address'];
$msg = $_POST['message'];
$captcha = $_POST['g-recaptcha-response'];
$ip = $_SERVER['REMOTE ADDR'];
$key = '6LdzJQgTAAAAABZAJO01P2yfikNy982VMvyhyhjT';

require_once "libs/valitron/src/Valitron/Validator.php";

use Valitron\Validator as Validator;

$user = array(
     'name' => $name,
      'mail' => $adrs,
      'text' => $msg
	);

$v = new Validator($user);

$rules = array(
     
     'required' => array(
     ['name'], ['mail'], ['text']
     	),
     'email' => array(
           ['mail']
     	)
	);

$labels = array(
     'name' => 'Name',
     'mail' => 'Email',
     'text' => 'Message'
	);

$v->rules($rules);
$v->labels($labels); 

if($v->validate()){
	$resultV=true;
}
else {
  $resultV = $v->errors();
}

if($resultV===true){
	$resultC = check_captcha($key, $captcha, $ip);
	if($resultC==false){
     $resultC="captcha";
	}

}
  


if($resultC==true){

require_once "libs/phpmailer/class.phpmailer.php";

$resultM = send_message_to_email($name, $adrs, $msg); 

}

function check_captcha($c_key, $c_captcha, $c_ip){
   
   $url_to_send = "https://www.google.com/recaptcha/api/siteverify?secret=".$c_key."&response=".$c_captcha."&remoteip=".$c_ip;
   $data_request = file_get_contents($url_to_send);
   $data = json_decode($data_request, true);

   if(isset($data['success']) && $data['success'] == 1){
   	return true;
   }
   else {
   	return false;
   }
}      

function send_message_to_email($senderName, $addressTo, $messageTo) {

	$mail = new PHPMailer();

	$mail->IsSendmail();

	$mail->SetFrom($addressTo, $senderName);

	$mail->AddAddress("alitural.mehdi@gmail.com", "Tural Mehdi");

	$mail->Subject = "Интересный проект";

	$mail->MsgHTML($messageTo);

	return $mail->Send();
}


if($resultV!==true) {
	$result=$resultV; }
elseif($resultC!==true) {
	$result=$resultC; }
else {
	$result=$resultM;
}
	
echo json_encode(array(
	'status' => $result,
));


?>