function getQuestionsForExam() {
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
                var examContent = document.getElementById('exam-content');
                
                var responseV = AJAX_Request.responseText;
                
                console.log(responseV);
                
                // Parse JSON into data array
                var data = JSON.parse(responseV);
                
                var num = data['no_of_questions'];
                delete data.no_of_questions;
                responseContent.innerHTML = '';
                responseContent.innerHTML += '<center><h3>List of Questions</h3></center>';
                for(i=0;i<num;i++){
                	responseContent.innerHTML += '<hr>';
                	responseContent.innerHTML += 'Write a function named '+data[i]['fun_name']+' with an argument '+data[i]['fun_argument_name']+' that '+data[i]['fun_description']+' and it '+data[i]['fun_output_type']+' output, using '+data[i]['fun_constrain']+'.';
                }
                examContent.innerHTML = '';
                examContent.innerHTML += '<center><h3>List of Questions</h3></center>';
                for(i=0;i<num;i++){
                	examContent.innerHTML += '<hr>';
                	examContent.innerHTML += 'Write a function named '+data[i]['fun_name']+' with an argument '+data[i]['fun_argument_name']+' that '+data[i]['fun_description']+' and it '+data[i]['fun_output_type']+' output, using '+data[i]['fun_constrain']+'.';
                	examContent.innerHTML += '<br>';
                	examContent.innerHTML += '<button type="button" onclick="getQuestionInfo('+data[i]['que_id']+')">ADD TO EXAM</button>';
                }
                
            }
        }
        event.preventDefault();
        
        var e = document.getElementById('filter_difficulty_exam_page');
        var filter_difficulty = e.options[e.selectedIndex].value;
        
        var e1 = document.getElementById('filter_topic_exam_page');
        var filter_topic = e1.options[e1.selectedIndex].value;
        
        var filter_keyword = document.getElementById('filter_keyword_exam_page').value;
        
        var JSON_message = {"content_type": "view_questions","difficulty_level": filter_difficulty,"topic": filter_topic,"keyword": filter_keyword};
        console.log(JSON_message);
        // Open AJAX Request Connection to server
        AJAX_Request.open("POST", middle_path, true);
        // Reset login form after function getLoginInfo() is triggered
        document.getElementById("question-form").reset();
        // Send stringified JSON message to the server
        AJAX_Request.send(JSON.stringify(JSON_message));
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
                responseContent.innerHTML = '';
                responseContent.innerHTML += '<center><h3>List of Questions</h3></center>';
                for(i=0;i<num;i++){
                	responseContent.innerHTML += '<hr>';
                	responseContent.innerHTML += 'Write a function named '+data[i]['fun_name']+' with an argument '+data[i]['fun_argument_name']+' that '+data[i]['fun_description']+' and it '+data[i]['fun_output_type']+' output, using '+data[i]['fun_constrain']+'.';
                }
                examContent.innerHTML = '';
                examContent.innerHTML += '<center><h3>List of Questions</h3></center>';
                for(i=0;i<num;i++){
                	examContent.innerHTML += '<hr>';
                	examContent.innerHTML += 'Write a function named '+data[i]['fun_name']+' with an argument '+data[i]['fun_argument_name']+' that '+data[i]['fun_description']+' and it '+data[i]['fun_output_type']+' output, using '+data[i]['fun_constrain']+'.';
                	examContent.innerHTML += '<br>';
                	examContent.innerHTML += '<button type="button" onclick="getQuestionInfo('+data[i]['que_id']+')">ADD TO EXAM</button>';
                }
                
            }
        }
        event.preventDefault();
        
        var e = document.getElementById('filter_difficulty');
        var filter_difficulty = e.options[e.selectedIndex].value;
        
        var e1 = document.getElementById('filter_topic');
        var filter_topic = e1.options[e1.selectedIndex].value;
        
        var filter_keyword = document.getElementById('filter_keyword').value;
        
        var JSON_message = {"content_type": "view_questions","difficulty_level": filter_difficulty,"topic": filter_topic,"keyword": filter_keyword};
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
            
            
            var etype = document.getElementById('create_question_output_type');
            var output_type = etype.options[etype.selectedIndex].value;
            
            
            var econstrain = document.getElementById('create_question_constrain');
            var constrain = econstrain.options[econstrain.selectedIndex].value;
            
            var elevel = document.getElementById('difficulty_level_create_question');
            var difficulty_level = elevel.options[elevel.selectedIndex].value;            
            
            
            var etopic = document.getElementById('create_question_topic');
            var topic = etopic.options[etopic.selectedIndex].value;
                    
            
            var no_of_testcases = 6;
            var testcase_input_1 = document.getElementById("testcase_input_1").value;
            var testcase_output_1 = document.getElementById("testcase_output_1").value;
            var testcase_input_2 = document.getElementById("testcase_input_2").value;
            var testcase_output_2 = document.getElementById("testcase_output_2").value;
            var testcase_input_3 = document.getElementById("testcase_input_3").value;
            var testcase_output_3 = document.getElementById("testcase_output_3").value;
            var testcase_input_4 = document.getElementById("testcase_input_4").value;
            var testcase_output_4 = document.getElementById("testcase_output_4").value;
            var testcase_input_5 = document.getElementById("testcase_input_5").value;
            var testcase_output_5 = document.getElementById("testcase_output_5").value;
            var testcase_input_6 = document.getElementById("testcase_input_6").value;
            var testcase_output_6 = document.getElementById("testcase_output_6").value;
    
           
            var JSON_message = {"content_type": "add_question", "fun_name": fun_name,"argument_name": argument_name,"description": description,"output_type": output_type,"constrain": constrain,"difficulty_level": difficulty_level,"topic": topic, "no_of_testcases": no_of_testcases, "testcase_input_1": testcase_input_1, "testcase_output_1": testcase_output_1, "testcase_input_2": testcase_input_2, "testcase_output_2": testcase_output_2, "testcase_input_3": testcase_input_3, "testcase_output_3": testcase_output_3, "testcase_input_4": testcase_input_4, "testcase_output_4": testcase_output_4, "testcase_input_5": testcase_input_5, "testcase_output_5": testcase_output_5, "testcase_input_6": testcase_input_6, "testcase_output_6": testcase_output_6};
            console.log(JSON_message);
            // Open AJAX Request Connection to server
            AJAX_Request.open("POST", middle_path, true);
            // Reset login form after function getLoginInfo() is triggered
            document.getElementById("question-form").reset();
            // Send stringified JSON message to the server
            AJAX_Request.send(JSON.stringify(JSON_message));
    }
    