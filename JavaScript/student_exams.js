function publishScores(sub) {

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
                
                // Parse JSON into data array
                var data = JSON.parse(responseVar);
                
                console.log(data);
                location.reload();
                
            }
        }
            event.preventDefault();
            
            var oneFinal = document.getElementById('final-points-1').value;
        	var twoFinal = document.getElementById('final-points-2').value;
        	var threeFinal = document.getElementById('final-points-3').value;
        	var fourFinal = document.getElementById('final-points-4').value;
        	var fiveFinal = document.getElementById('final-points-5').value;
        	
        	var oneFN = document.getElementById('auto_func_name_1').value;
        	var twoFN = document.getElementById('auto_func_name_2').value;
        	var threeFN = document.getElementById('auto_func_name_3').value;
        	var fourFN = document.getElementById('auto_func_name_4').value;
        	var fiveFN = document.getElementById('auto_func_name_5').value;
        	
        	var oneAN = document.getElementById('auto_arg_name_1').value;
        	var twoAN = document.getElementById('auto_arg_name_2').value;
        	var threeAN = document.getElementById('auto_arg_name_3').value;
        	var fourAN = document.getElementById('auto_arg_name_4').value;
        	var fiveAN = document.getElementById('auto_arg_name_5').value;
        	
        	var oneOT = document.getElementById('auto_wrong_output_1').value;
        	var twoOT = document.getElementById('auto_wrong_output_2').value;
        	var threeOT = document.getElementById('auto_wrong_output_3').value;
        	var fourOT = document.getElementById('auto_wrong_output_4').value;
        	var fiveOT = document.getElementById('auto_wrong_output_5').value;
        	
        	var oneCR = document.getElementById('auto_invalid_constraint_1').value;
        	var twoCR = document.getElementById('auto_invalid_constraint_2').value;
        	var threeCR = document.getElementById('auto_invalid_constraint_3').value;
        	var fourCR = document.getElementById('auto_invalid_constraint_4').value;
        	var fiveCR = document.getElementById('auto_invalid_constraint_5').value;
        	
        	var oneP = document.getElementById('auto_paren_1').value;
        	var twoP = document.getElementById('auto_paren_2').value;
        	var threeP = document.getElementById('auto_paren_3').value;
        	var fourP = document.getElementById('auto_paren_4').value;
        	var fiveP = document.getElementById('auto_paren_5').value;
        	
        	var oneC = document.getElementById('auto_colon_1').value;
        	var twoC = document.getElementById('auto_colon_2').value;
        	var threeC = document.getElementById('auto_colon_3').value;
        	var fourC = document.getElementById('auto_colon_4').value;
        	var fiveC = document.getElementById('auto_colon_5').value;
        	
        	var oneCom = document.getElementById('comment-1').value;
        	var twoCom = document.getElementById('comment-2').value;
        	var threeCom = document.getElementById('comment-3').value;
        	var fourCom = document.getElementById('comment-4').value;
        	var fiveCom = document.getElementById('comment-5').value;
        	
        	var one_one = document.getElementById('test_1_1').value;
        	var two_one = document.getElementById('test_2_1').value;
        	var three_one = document.getElementById('test_3_1').value;
        	var four_one = document.getElementById('test_4_1').value;
        	var five_one = document.getElementById('test_5_1').value;
        	
        	var one_two = document.getElementById('test_1_2').value;
        	var two_two = document.getElementById('test_2_2').value;
        	var three_two = document.getElementById('test_3_2').value;
        	var four_two = document.getElementById('test_4_2').value;
        	var five_two = document.getElementById('test_5_2').value;
        	
        	var one_three = document.getElementById('test_1_3').value;
        	var two_three = document.getElementById('test_2_3').value;
        	var three_three = document.getElementById('test_3_3').value;
        	var four_three = document.getElementById('test_4_3').value;
        	var five_three = document.getElementById('test_5_3').value;
        	
        	var one_four = document.getElementById('test_1_4').value;
        	var two_four = document.getElementById('test_2_4').value;
        	var three_four = document.getElementById('test_3_4').value;
        	var four_four = document.getElementById('test_4_4').value;
        	var five_five = document.getElementById('test_5_4').value;
        	
        	var one_five = document.getElementById('test_1_5').value;
        	var two_five = document.getElementById('test_2_5').value;
        	var three_five = document.getElementById('test_3_5').value;
        	var four_five = document.getElementById('test_4_5').value;
        	var five_five = document.getElementById('test_5_5').value;
        	
        	var one_six = document.getElementById('test_1_6').value;
        	var two_six = document.getElementById('test_2_6').value;
        	var three_six = document.getElementById('test_3_6').value;
        	var four_six = document.getElementById('test_4_6').value;
        	var five_six = document.getElementById('test_5_6').value;
        	
        	console.log(five_six);
        	
        	var finalComments = document.getElementById('final-comment').value;
           
            var JSON_message = {"content_type": "instructor_publishes_exam", "submission_id": sub, "auto_func_name_1": oneFN, "auto_arg_name_1": oneAN, "auto_wrong_output_1": oneOT, "auto_invalid_constraint_1": oneCR, "auto_paren_1": oneP, "auto_colon_1": oneC, "auto_func_name_2": twoFN, "auto_arg_name_2": twoAN, "auto_wrong_output_2": twoOT, "auto_invalid_constraint_2": twoCR, "auto_paren_2": twoP, "auto_colon_2": twoC, "auto_func_name_3": threeFN, "auto_arg_name_3": threeAN, "auto_wrong_output_3": threeOT, "auto_invalid_constraint_3": threeCR, "auto_paren_3": threeP, "auto_colon_3": threeC, "auto_func_name_4": fourFN, "auto_arg_name_4": fourAN, "auto_wrong_output_4": fourOT, "auto_invalid_constraint_4": fourCR, "auto_paren_4": fourP, "auto_colon_4": fourC, "auto_func_name_5": fiveFN, "auto_arg_name_5": fiveAN, "auto_wrong_output_5": fiveOT, "auto_invalid_constraint_5": fiveCR, "auto_paren_5": fiveP, "auto_colon_5": fiveC, "ans_1_comments": oneCom, "ans_1_score": oneFinal, "ans_2_comments": twoCom, "ans_2_score": twoFinal, "ans_3_comments": threeCom, "ans_3_score": threeFinal, "ans_4_comments": fourCom, "ans_4_score": fourFinal, "ans_5_comments": fiveCom, "ans_5_score": fiveFinal, "final_comments": finalComments};
            AJAX_Request.open("POST", middle_path, true);
            AJAX_Request.send(JSON.stringify(JSON_message));
}


function reviewSE(sub) {

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
            
            	var rc = document.getElementById('student-exam-review');
    			
                var responseVar = AJAX_Request.responseText;
                
                console.log(responseVar);
                
                // Parse JSON into data array
                var data = JSON.parse(responseVar);
                
                console.log(data);
                
                var examName = data['exam_name'];
                var studentName = data['username'];
                document.getElementById('student-exam-name').innerHTML = 'Exam Name: '+examName;
                document.getElementById('student-exam-ucid').innerHTML = 'Student ID: '+studentName;
                
                var num = data['no_of_questions'];
                rc.innerHTML ='';
                for(i=1;i<=num;i++){
                	var no_test = data['que_'+i+'']['no_of_testcases'];
                	rc.innerHTML += 'Write a function named '+data['que_'+i+'']['fun_name']+' with an argument '+data['que_'+i+'']['fun_argument_name']+' that '+data['que_'+i+'']['fun_description']+' and it '+data['que_'+i+'']['fun_output_type']+' output, using '+data['que_'+i+'']['fun_constrain']+'.';
                	rc.innerHTML += '<br>';
                	rc.innerHTML += 'Answer: <br>'+data['ans_'+i+'']+'';
                	rc.innerHTML += '<br>';
                	rc.innerHTML += 'Comment: <br><textarea class="input-text" rows="3" cols="70" id="comment-'+i+'"></textarea>';
                	rc.innerHTML += '<br>';
                  rc.innerHTML += 'Points deduction for wrong function name: <input type="text" id="auto_func_name_'+i+'" value='+data['autogradeoutput_'+i+'']['header_fun_name_result']+'>';
                  rc.innerHTML += '<hr>';
                  rc.innerHTML += 'Points deduction for wrong function arument name: <input type="text" id="auto_arg_name_'+i+'" value='+data['autogradeoutput_'+i+'']['header_fun_argument_name_result']+'>';
                  rc.innerHTML += '<hr>';
                   rc.innerHTML += 'Points deduction for wrong function output type: <input type="text" id="auto_wrong_output_'+i+'" value='+data['autogradeoutput_'+i+'']['fun_output_type_result']+'>';
                  rc.innerHTML += '<hr>';
                  rc.innerHTML += 'Points deduction for invalid constrain requirement: <input type="text" id="auto_invalid_constraint_'+i+'" value='+data['autogradeoutput_'+i+'']['fun_constrain_result']+'>';
                  rc.innerHTML += '<hr>';
                  rc.innerHTML += 'Points deduction for no colon requirement: <input type="text" id="auto_colon_'+i+'" value='+data['autogradeoutput_'+i+'']['header_parens_result']+'>';
                  rc.innerHTML += '<hr>';
                  rc.innerHTML += 'Points deduction for no parentheses requirement: <input type="text" id="auto_paren_'+i+'" value='+data['autogradeoutput_'+i+'']['header_colon_result']+'>';
                  rc.innerHTML += '<hr>';
                  for(j=1; j<=no_test; j++){
                  	rc.innerHTML += 'Test Case '+j+' Result - Points Deducted: '+data['autogradeoutput_'+i+'']['testcase_result_'+j+''];
                  	rc.innerHTML += '<br>';
                  	rc.innerHTML += '<input id="test_'+i+'_'+j+'" value="'+data['autogradeoutput_'+i+'']['testcase_result_'+j]+'" hidden>';
                  }
                  for(j=no_test+1; j<=6;j++){
                  	rc.innerHTML += '<input id="test_'+i+'_'+j+'" value="90000" hidden>';
                  }
                 
                  
                  var totality = data['autogradeoutput_'+i+'']['que_score'];
                  var uno = document.getElementById('auto_func_name_'+i+'').value;
                  var dos = document.getElementById('auto_arg_name_'+i+'').value;
                  var tres = document.getElementById('auto_wrong_output_'+i+'').value;
                  var cuatro = document.getElementById('auto_invalid_constraint_'+i+'').value;
                  var cinco = document.getElementById('auto_colon_'+i+'').value;
                  var seis = document.getElementById('auto_paren_'+i+'').value;
                  var finale = totality - (uno - dos - tres - cuatro - cinco - seis);
                  if (finale < 0) {
                  	finale = 0;
                  }
                  rc.innerHTML += '<br>';
                	rc.innerHTML += '<p id="final-points-'+i+'" value="'+finale+'">Points: '+finale+'</p>';
                  rc.innerHTML += '<br>';
                  rc.innerHTML += 'Total Points for Question: ' +data['autogradeoutput_'+i+'']['que_score'];
                	rc.innerHTML += '<hr>';
                }
                rc.innerHTML += 'Final Comments: <br><textarea class="input-text" rows="3" cols="70" id="final-comment"></textarea>';
                rc.innerHTML += '<hr>';
                rc.innerHTML += '<center><input type="submit" onclick="publishScores('+sub+')" value="PUBLISH SCORES"></center>';
                
                
            }
        }
            event.preventDefault();
           
            var JSON_message = {"content_type": "instructor_review_an_exam", "submission_id": sub};
            AJAX_Request.open("POST", middle_path, true);
            AJAX_Request.send(JSON.stringify(JSON_message));
}


function instructorReview() {

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
            
    			var examsContent = document.getElementById('completed-exams');
    			
                var responseVar = AJAX_Request.responseText;
                
                console.log(responseVar);
                
                // Parse JSON into data array
                var data = JSON.parse(responseVar);
                
                console.log(data);
                
                var num = data['no_of_exams'];
                delete data.no_of_questions;
                examsContent.innerHTML = '';
                for(i=1;i<=num;i++){
                	examsContent.innerHTML += 'Exam Name: '+data['exam_name_'+i+'']+'';
                	examsContent.innerHTML += '<br>';
                	examsContent.innerHTML += 'Student UCID: '+data['username_'+i+'']+'';
                	examsContent.innerHTML += '<br>';
                	examsContent.innerHTML += '<button type="button" onclick="reviewSE('+data['submission_id_'+i+'']+')">REVIEW EXAM</button>';
                	examsContent.innerHTML += '<hr>';
                }
                
            }
        }
            event.preventDefault();
            
        
           
            var JSON_message = {"content_type": "instructor_review_exams"};
            AJAX_Request.open("POST", middle_path, true);
            AJAX_Request.send(JSON.stringify(JSON_message));
}