<?php

/*echo $_POST["name"] . "\n";
echo $_POST["email"] . "\n"; 
echo $_POST["telephone"] . "\n";
echo $_POST["message"];*/


 $mailtext = "";
 $tab = ":\t";

  foreach ($_POST as $name => $value) {
         if (is_array($value)) {
                 foreach ($value as $singleValue) {
                 $mailtext .= $name.$tab.$singleValue."\n";
             }
         } else {
             $mailtext .= $name.$tab.$value."\n";
         }
     }
 echo $mailtext;     

?> 