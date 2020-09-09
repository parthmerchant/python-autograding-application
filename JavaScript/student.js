var ucid = sessionStorage.getItem("username");

function reviewExam(sid) {

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
            
                var listExams = document.getElementById('comp-list');
    
                var responseVar = AJAX_Request.responseText;
                
                // Parse JSON into data array
                var data = JSON.parse(responseVar);
                
                console.log(data);
                
                var rc = document.getElementById('current-comp-exam');
                
                var examName = data['exam_name'];
                document.getElementById('comp-exam-nam').innerHTML = 'Exam Name: '+examName;
                
                var num = data['no_of_questions'];
                rc.innerHTML = '';
                for(i=1;i<=num;i++){
                	rc.innerHTML += 'Write a function named '+data['que_'+i+'']['fun_name']+' with an argument '+data['que_'+i+'']['fun_argument_name']+' that '+data['que_'+i+'']['fun_description']+' and it '+data['que_'+i+'']['fun_output_type']+' output, using '+data['que_'+i+'']['fun_constrain']+'.';
                	rc.innerHTML += '<br>';
                	rc.innerHTML += 'Answer: <br>'+data['ans_'+i+'']+'';
                	rc.innerHTML += '<br>';
                	rc.innerHTML += 'Comments: ' +data['ans_'+i+'_comments'];
                	rc.innerHTML += '<br>';
                  	rc.innerHTML += 'Score: '+data['ans_'+i+'_score']+'/'+data['que_'+i+'_score'];
                  	rc.innerHTML += '<br>';
                	rc.innerHTML += '<hr>';
                }
                rc.innerHTML += 'Final Comments: ' + data["final_comments"];
                rc.innerHTML += '<hr>';
                rc.innerHTML += 'Final Score: ' + data["final_score"];
                
                                
            }
        }
            event.preventDefault();
           
            var JSON_message = {"content_type": "student_review_an_exam","submission_id": sid};
            AJAX_Request.open("POST", middle_path, true);
            AJAX_Request.send(JSON.stringify(JSON_message));

}

function reviewCompletedExam(){

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
            
                var listExams = document.getElementById('comp-list');
    
                var responseVar = AJAX_Request.responseText;
                
                console.log(responseVar);
                
                // Parse JSON into data array
                var data = JSON.parse(responseVar);
                
                var num = data['no_of_exams'];
                for(i=1;i<=num;i++){
                	listExams.innerHTML += data['exam_name_'+i+''];
                	listExams.innerHTML += '<br>';
                	listExams.innerHTML += '<button type="button" onclick="reviewExam('+data['submission_id_'+i+'']+')">REVIEW EXAM</button>'
                	listExams.innerHTML += '<hr>';
                }
                
            }
        }
            event.preventDefault();
           
            var JSON_message = {"content_type": "student_review_exams_list","username": ucid};
            AJAX_Request.open("POST", middle_path, true);
            AJAX_Request.send(JSON.stringify(JSON_message));
}

function submitExam(id) {

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
            
    
                var responseVar = AJAX_Request.responseText;                
                getExam();
                location.reload();
                var examQuestions = document.getElementById('current-exam');
                examQuestions.innerHTML = "";
                refresh();
                location.replace('https://web.njit.edu/~pmm44/student_page.html');
            }
        }
            event.preventDefault();
            
            var oneAnswer = document.getElementById('answer-1').value;
            if (document.getElementById('answer-2') == null){
            	var twoAnswer = 0;
            }
            else {
            	var twoAnswer = document.getElementById('answer-2').value;
            }
            if (document.getElementById('answer-3') == null){
            	var threeAnswer = 0;
            }
            else {
            	var threeAnswer = document.getElementById('answer-3').value;
            }
            if (document.getElementById('answer-4') == null){
            	var fourAnswer = 0;
            }
            else {
            	var fourAnswer = document.getElementById('answer-4').value;
            }
            if (document.getElementById('answer-5') == null){
            	var fiveAnswer = 0;
            }
            else {
            	var fiveAnswer = document.getElementById('answer-5').value;
            }
         
         var exam_name = document.getElementById('exam-nam').innerHTML;
         console.log(exam_name);
        
           
            var JSON_message = {"content_type": "student_exam_submission","username": ucid,"exam_id": id, "exam_name": exam_name, "ans_1": oneAnswer, "ans_2": twoAnswer, "ans_3": threeAnswer, "ans_4": fourAnswer, "ans_5": fiveAnswer};
            AJAX_Request.open("POST", middle_path, true);
            AJAX_Request.send(JSON.stringify(JSON_message));
}


function takeExam(x) {

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
            
    
    			var examQuestions = document.getElementById('current-exam');
                var responseVar = AJAX_Request.responseText;
                

                
                // Parse JSON into data array
                var data = JSON.parse(responseVar);
                
               
                
                document.getElementById('exam-nam').innerHTML = data['exam_name'];
                delete data.exam_name;
                
                var examID = data['exam_id'];
                
                var num = data['no_of_questions'];
                delete data.no_of_questions;
                
                examQuestions.innerHTML = '';
                for(i=1;i<=num;i++){
                	examQuestions.innerHTML += 'Write a function named '+data['que_'+i+'']['fun_name']+' with an argument '+data['que_'+i+'']['fun_argument_name']+' that '+data['que_'+i+'']['fun_description']+' and it '+data['que_'+i+'']['fun_output_type']+' output, using '+data['que_'+i+'']['fun_constrain']+'.';
                	examQuestions.innerHTML += '<br>';
                	examQuestions.innerHTML += 'Points: '+data['que_'+i+'_score']+'';
                	examQuestions.innerHTML += '<br>';
                	examQuestions.innerHTML += '<textarea class="input-text" rows="3" cols="70" id="answer-'+i+'"></textarea>';
                	examQuestions.innerHTML += '<hr>';
                }
                examQuestions.innerHTML += '<center><input onclick="submitExam('+examID+')" type="submit" value="SUBMIT EXAM"></center>';

                
            }
        }
            event.preventDefault();
            
            console.log(x);
        
        	var examID = x;
           
            var JSON_message = {"content_type": "student_exam_questions", "exam_id": examID};
            AJAX_Request.open("POST", middle_path, true);
            AJAX_Request.send(JSON.stringify(JSON_message));
}

function getExam() {
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
            
            	var listExams = document.getElementById('exam-list');
    
                var responseVar = AJAX_Request.responseText;
                
                console.log(responseVar);
                
                // Parse JSON into data array
                var data = JSON.parse(responseVar);
                
                var num = data['no_of_exams'];
                delete data.no_of_questions;
                listExams.innerHTML = '';
                for(i=0;i<num;i++){
                	listExams.innerHTML += data['exam_name_'+i+''];
                	listExams.innerHTML += '<br>';
                	listExams.innerHTML += '<button type="button" onclick="takeExam('+data['exam_id_'+i+'']+')">TAKE EXAM</button>'
                	listExams.innerHTML += '<hr>';
                }
                
            }
        }
            event.preventDefault();
        
           
            var JSON_message = {"content_type": "student_pending_exams","username": ucid};
            AJAX_Request.open("POST", middle_path, true);
            AJAX_Request.send(JSON.stringify(JSON_message));
    }
