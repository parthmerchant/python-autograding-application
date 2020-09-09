function testFunc(x) {
	alert(x);
}

function getQuestions() {

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
        
        function testFunc(x){
			alert(x);
			document.getElementById('exams-questions').innerHTML = x;
		}
        
        // Function to receive data from server
        AJAX_Request.onreadystatechange = function(){
            
            if(AJAX_Request.readyState == 4){
                // Retrieve response and store into variable (JSON format)
                
                var responseContent = document.getElementById('created');
                var examContent = document.getElementById('exam-content');
                
                var responseV = AJAX_Request.responseText;
                
                console.log(responseV);
                
                // Parse JSON into data array
                var data = JSON.parse(responseV);
                
                var num = data['no_of_questions'];
                delete data.no_of_questions;
                console.log(data);
                console.log(num);
                responseContent.innerHTML = '';
                responseContent.innerHTML += '<center><h3>List of Questions</h3></center>';
                for(i=0;i<num;i++){
                	responseContent.innerHTML += '<hr>';
                	responseContent.innerHTML += data[i]['que_id'];
                }
                examContent.innerHTML += '';
                examContent.innerHTML += '<center><h3>List of Questions</h3></center>';
                for(i=0;i<num;i++){
                	examContent.innerHTML += '<hr>';
                	examContent.innerHTML += data[i]['que_id'];
                	examContent.innerHTML += '<br>';
                	examContent.innerHTML += '<button type="button" onclick="testFunc('+data[i]['que_id']+')">Click Me!</button>';
                }
                
            }
        }
        event.preventDefault();
        
        var JSON_message = {"content_type": "view_questions","difficulty_level": "easy","topic": "list","keyword": "seq"};
        console.log(JSON_message);
        // Open AJAX Request Connection to server
        AJAX_Request.open("POST", middle_path, true);
        // Reset login form after function getLoginInfo() is triggered
        document.getElementById("question-form").reset();
        // Send stringified JSON message to the server
        AJAX_Request.send(JSON.stringify(JSON_message));
}


function createQuestion() {

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
                // Retrieve response and store into variable (JSON format)
                
                var responseContent = document.getElementById('created');
                
                var responseV = AJAX_Request.responseText;
                
                console.log(responseV);
                
                // Parse JSON into data array
                var data = JSON.parse(responseV);
                getQuestions();
                
                
            }
        }
            event.preventDefault();
        
            var fun_name = document.getElementById("fun_name").value;
            var argument_name = document.getElementById("argument_name").value;
            var description = document.getElementById("description").value;
            var output_type = document.getElementById("output_type").value;
            var constrain = document.getElementById("constrain").value;
            var difficulty_level = document.getElementById("difficulty_level").value;
            
            
            
            var topic = document.getElementById("topic").value;
            
            var no_of_testcases = 2;
            var testcase_input_1 = document.getElementById("testcase_input_1").value;
            var testcase_output_1 = document.getElementById("testcase_output_1").value;
            var testcase_input_2 = document.getElementById("testcase_input_2").value;
            var testcase_output_2 = document.getElementById("testcase_output_2").value;
           
            var JSON_message = {"content_type": "add_question", "fun_name": fun_name,"argument_name": argument_name,"description": description,"output_type": output_type,"constrain": constrain,"difficulty_level": difficulty_level,"topic": topic, "no_of_testcases": no_of_testcases, "testcase_input_1": testcase_input_1, "testcase_output_1": testcase_output_1, "testcase_input_2": testcase_input_2, "testcase_output_2": testcase_output_2};
            console.log(JSON_message);
            // Open AJAX Request Connection to server
            AJAX_Request.open("POST", middle_path, true);
            // Reset login form after function getLoginInfo() is triggered
            document.getElementById("question-form").reset();
            // Send stringified JSON message to the server
            AJAX_Request.send(JSON.stringify(JSON_message));
    }
    