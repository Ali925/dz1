<?php
header('Content-Type: application/json');

$name = $_POST['name'];
$adrs = $_POST['address'];
$msg = $_POST['message'];
$captcha = $_POST['g-recaptcha-response'];

require_once "libs/valitron/src/Valitron/Validator.php";
require_once "libs/valitron/lang/ru.php";

use Valitron\Validator as Validator;

Validator::langDir(__DIR__.'/libs/valitron/lang/');	
Validator::lang('ru');

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
     'name' => 'Имя',
     'mail' => 'Текст в поле Email',
     'text' => 'Сообщение'
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
	$resultC = check_captcha($captcha);
	if(!$resultC){
     $resultC="captcha";
	}

}
  


if($resultC==true){

require_once "libs/phpmailer/class.phpmailer.php";

$resultM = send_message_to_email($name, $adrs, $msg); 

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

function check_captcha($catpcha){

    if($catpcha=='') {
        return false;
    } else {
        return true;
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


?>