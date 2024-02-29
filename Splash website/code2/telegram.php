<?php

/* https://api.telegram.org/bot6469757846:AAERIxqtRH3v0gVNvv9wZHShBPlV1AAqVEY/getUpdates,
где, XXXXXXXXXXXXXXXXXXXXXXX - токен вашего бота, полученный ранее */

$name = $_POST['name'];
$phone = $_POST['phone'];
$email = $_POST['email'];
$company = $_POST['company'];
$text = $_POST['text'];
$token = "6469757846:AAERIxqtRH3v0gVNvv9wZHShBPlV1AAqVEY";
$chat_id = "-811301863";
$arr = array(
    'Имя пользователя: ' => $name,
    'Телефон: ' => $phone,
    'Email' => $email,
    'Название компании' => $company,
    'Дополнительная информация' => $text
);

foreach($arr as $key => $value) {
    $txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

if ($sendToTelegram) {
    header('Location: thank-you.html');
} else {
    echo "Error";
}
?>