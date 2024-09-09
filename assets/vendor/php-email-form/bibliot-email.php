<?php
  $receiving_email_address = 'contact@example.com';

  if (isset($_POST['name'], $_POST['email'], $_POST['message'])) {
    $to = $receiving_email_address;
    $subject = "Form Submission from " . $_POST['name'];
    $message = "From: " . $_POST['name'] . "\n";
    $message .= "Email: " . $_POST['email'] . "\n";
    $message .= "Message: " . $_POST['message'];
    $headers = "From: " . $_POST['email'];

    if (mail($to, $subject, $message, $headers)) {
      echo "Message sent successfully!";
    } else {
      echo "Failed to send message.";
    }
  } else {
    echo "Form data missing.";
  }
?>
