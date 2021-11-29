<?php 
    if(isset($_POST['submit']))
    {
        $to = "fedorayoshejuandy@gmail.com";
        $from = $_POST['email'];
        $name = $_POST['name'];
        $headers = "From $from to $to\r\n";
        $headers2 .= "From $from to $to\r\n";
        $subject = $_POST['subject'];
        $subject2 = "Copy of your subject";
        $message = $name . " wrote the following:" . "\n\n" . $_POST['message'];
        $message2 = "Here is a copy of your message " . $name . "\n\n" . $_POST['message'];

        $headers = "From:" . $from;
        $headers2 = "From:" . $to;
        mail($to,$subject,$message,$headers);
        // sends a copy of the message to the sender
        mail($from,$subject2,$message2,$headers2);
        echo "Mail sent. Thank you." . $name . ", we will contact you shortly.";
    }

    function IsInjected($str)
    {
        $injections = array('(\n+)',
               '(\r+)',
               '(\t+)',
               '(%0A+)',
               '(%0D+)',
               '(%08+)',
               '(%09+)'
               );
                   
        $inject = join('|', $injections);
        $inject = "/$inject/i";
        
        if(preg_match($inject,$str))
        {
          return true;
        }
        else
        {
          return false;
        }
    }
    
    if(IsInjected($visitor_email))
    {
        echo "Bad email value!";
        exit;
    }
?>