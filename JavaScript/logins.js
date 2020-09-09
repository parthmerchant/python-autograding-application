function getLoginInfo() {

		var middle_path = "https://web.njit.edu/~pmm44/beta_middle.php";
        
        // Used to send and receive AJAX Requests and Responses
        var AJAX_Request;
        
        // Try AJAX Request for different browsers
        try{
            AJAX_Request = new XMLHttpRequest();
        } catch (e){
            try{
                AJAX_Request = new ActiveXObject("Msxml2.XMLHTTP");
            } catch (e) {
                try{
                    AJAX_Request = new ActiveXObject("Microsoft.XMLHTTP");
                } catch (e){
                    alert("Login Unsuccessful");
                    return false;
                }
            }
        }
        
        // Function to receive data from server
        AJAX_Request.onreadystatechange = function(){
            
            if(AJAX_Request.readyState == 4){
                var responseContent = document.getElementById('receiver-one');
                var projectContent = document.getElementById('receiver-two')
                
                // Retrieve response and store into variable (JSON format)
                var responseVar = AJAX_Request.responseText;
                
                console.log(responseVar);

                // Parse JSON into data array
                var data = JSON.parse(responseVar);
                
                console.log(data);
                
                
                
                if (data['login'] == "true" && data['role'] == "instructor") location.replace('https://web.njit.edu/~pmm44/instructor_page.html');
                if (data['login'] == 'true' && data['role'] == "student") location.replace('https://web.njit.edu/~pmm44/student_page.html');
                sessionStorage.setItem("role", data['role']);
                sessionStorage.setItem("username", username);
                
                
               
                // if (data['Project'] == "Success") projectContent.innerHTML = "<h4><center>NJIT Project Successful</center></h4>";
                // else projectContent.innerHTML = "<h4><center>NJIT Project Failed</center></h4>";
                
                
            }
        }
            event.preventDefault();
        
            // Variable used to store form input value for UCID
            var username = document.getElementById("username").value;
            // Variable used to store from input value for Password
            var password = document.getElementById("password").value;
            // Variable used to create JSON format for UCID and Password to send to server
            var JSON_message = {"content_type": "login","username": username,"password": password};
            // Open AJAX Request Connection to server
            AJAX_Request.open("POST", middle_path, true);
            // Reset login form after function getLoginInfo() is triggered
            document.getElementById("login-form").reset();
            // Send stringified JSON message to the server
            AJAX_Request.send(JSON.stringify(JSON_message));
    }