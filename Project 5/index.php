<!DOCTYPE html>
<html lang="en">
<head>
   <meta charset="UTF-8" />
   <meta http-equiv="X-UA-Compatible" content="IE=edge" />
   <meta name="viewport" content="width=device-width, initial-scale=1.0" />
   <title>Document</title>
</head>
<body>
   <?php
      $name = $address = $number = $gender = $year = $citizen = $interests = "";
      if ($_SERVER["REQUEST_METHOD"] == "POST") {
            $name = test_input($_POST["name"]);
            $address = test_input($_POST["address"]);
            $number = test_input($_POST["number"]);
            $gender = test_input($_POST["gender"]);
            $year = test_input($_POST["year"]);
            $state = test_input($_POST["state"]);
            $citizen = test_input($_POST["citizen"]);
            $interests1 = test_input($_POST["interests1"]);
            $interests2 = test_input($_POST["interests2"]);
            $interests3 = test_input($_POST["interests3"]);
            $interests4 = test_input($_POST["interests4"]);
            $interests5 = test_input($_POST["interests5"]);
      }

      function test_input($data) {
            $data = trim($data);
            $data = stripslashes($data);
            $data = htmlspecialchars($data);
            return $data;
      }
      ?>
      <h2>Project 5</h2>
      
         <form method = "post" action = "/index.php">
         <table>
            <tr>
               <td>Name:</td> 
               <td><input type = "text" name = "name"></td>
            </tr>            
            <tr>
               <td>Address:</td>               
               <td><input type = "text" name = "address"></td>
            </tr>           
            <tr>
               <td>Phone:</td>
               <td><input type = "text" name = "number"></td>
            </tr>                    
            <tr>
               <td>Gender:</td>
               <td>
                  <input type = "radio" name = "gender" value = "Female">Female
                  <input type = "radio" name = "gender" value = "Male">Male
               </td>
            </tr>
            <tr>
               <td>Year in School:</td>
               <td>
                  <input type = "radio" name = "year" value="Freshman">Freshman
                  <input type = "radio" name = "year" value="Sophmore">Sophmore
                  <input type = "radio" name = "year" value="Junior">Junior
                  <input type = "radio" name = "year" value="Senior">Senior
               </td>
            </tr>   
            <tr>
               <td>Home State:</td>
               <td>
                  <select name="state" id="state">
                     <option value="Alabama">Alabama</option>
                     <option value="Alaska">Alaska</option>
                     <option value="Arizona">Arizona</option>
                     <option value="Arkansas">Arkansas</option>
                     <option value="California">California</option>
                     <option value="Colorado">Colorado</option>
                     <option value="Connecticut">Connecticut</option>
                     <option value="Delaware">Delaware</option>
                     <option value="Florida">Florida</option>
                     <option value="Georgia">Georgia</option>
                     <option value="Hawaii">Hawaii</option>
                     <option value="Idaho">Idaho</option>
                     <option value="Illinois">Illinois</option>
                     <option value="Indiana">Indiana</option>
                     <option value="Iowa">Iowa</option>
                     <option value="Kansas">Kansas</option>
                     <option value="Kentucky">Kentucky</option>
                     <option value="Louisiana">Louisiana</option>
                     <option value="Maine">Maine</option>
                     <option value="Maryland">Maryland</option>
                     <option value="Massachusetts">Massachusetts</option>
                     <option value="Michigan">Michigan</option>
                     <option value="Minnesota">Minnesota</option>
                     <option value="Mississippi">Mississippi</option>
                     <option value="Missouri">Missouri</option>
                     <option value="Montana">Montana</option>
                     <option value="Nebraska">Nebraska</option>
                     <option value="Nevada">Nevada</option>
                     <option value="New Hampshire">New Hampshire</option>
                     <option value="New Jersey">New Jersey</option>
                     <option value="New Mexico">New Mexico</option>
                     <option value="New York">New York</option>
                     <option value="North Carolina">North Carolina</option>
                     <option value="North Dakota">North Dakota</option>
                     <option value="Ohio">Ohio</option>
                     <option value="Oklahoma">Oklahoma</option>
                     <option value="Oregon">Oregon</option>
                     <option value="Pennsylvania">Pennsylvania</option>
                     <option value="Rhode Island">Rhode Island</option>
                     <option value="South Carolina">South Carolina</option>
                     <option value="South Dakota">South Dakota</option>
                     <option value="Tennessee">Tennessee</option>
                     <option value="Texas">Texas</option>
                     <option value="Utah">Utah</option>
                     <option value="Vermont">Vermont</option>
                     <option value="Virginia">Virginia</option>
                     <option value="Washington">Washington</option>
                     <option value="West Virginia">West Virginia</option>
                     <option value="Wisconsin">Wisconsin</option>
                     <option value="Wyoming">Wyoming</option>
 
                  </select>
               </td>
            </tr>   
            <tr>
               <td>US Citizen:</td>
               <td>
                  <input type = "radio" name = "citizen" value="Yes">Yes
                  <input type = "radio" name = "citizen" value="No">No
               </td>
            </tr>   
            <tr>
               <td>Interests:</td>
               <td>
                  <input type = "checkbox" name = "interests1" value="Baseball">Baseball
                  <input type = "checkbox" name = "interests2" value="Basketball">Basketball
                  <input type = "checkbox" name = "interests3" value="Football">Football
                  <input type = "checkbox" name = "interests4" value="Soccer">Soccer
                  <input type = "checkbox" name = "interests5" value="Rugby">Rugby
               </td>
            </tr>   
            <tr>
               <td>
                  <input type = "submit" name = "submit" value = "Submit"> 
               </td>
            </tr>
         </table>
      </form>      
      <?php
         echo "<h2>Your details are as :</h2>";
         echo $name;
         echo "<br>";
         echo $address;
         echo "<br>";
         echo $number;
         echo "<br>";
         echo $gender;
         echo "<br>";
         echo $year;        
         echo "<br>";
         echo $state;        
         echo "<br>";
         echo $citizen;        
         echo "<br>";
         echo $interests1;
         echo "<br>";
         echo $interests2;
         echo "<br>";
         echo $interests3;
         echo "<br>";
         echo $interests4;
         echo "<br>";
         echo $interests5;

      ?>
      
</body>
</html>
