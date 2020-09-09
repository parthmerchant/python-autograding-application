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
            
            // Question 1 Information
            var oneFinal = document.getElementById('final-points-1').value;
            var oneFN = document.getElementById('auto_func_name_1').value;
            var oneAN = document.getElementById('auto_arg_name_1').value;
            var oneOT = document.getElementById('auto_wrong_output_1').value;
            var oneCR = document.getElementById('auto_invalid_constraint_1').value;
            var oneP = document.getElementById('auto_paren_1').value;
            var oneC = document.getElementById('auto_colon_1').value;
            var oneCom = document.getElementById('comment-1').value;
            
            
            // Question 2 Information 
            var twoFinal = document.getElementById('final-points-2').value;
            var twoFN = document.getElementById('auto_func_name_2').value;
            var twoAN = document.getElementById('auto_arg_name_2').value;
            var twoOT = document.getElementById('auto_wrong_output_2').value;
            var twoCR = document.getElementById('auto_invalid_constraint_2').value;
            var twoP = document.getElementById('auto_paren_2').value;
            var twoC = document.getElementById('auto_colon_2').value;
            var twoCom = document.getElementById('comment-2').value;
            
            // Question 3 Information
            if (document.getElementById('final-points-3') == null){
            	var threeFinal = 0;
            	var threeFN = 0;
            	var threeAN = 0;
            	var threeOT = 0;
            	var threeCR = 0;
            	var threeP = 0;
            	var threeC = 0;
            	var threeCom = 0;
            	var three_one = 0;
            	var three_two = 0;
            }
            else {
            	var threeFinal = document.getElementById('final-points-3').value;
            	var threeFN = document.getElementById('auto_func_name_3').value;
            	var threeAN = document.getElementById('auto_arg_name_3').value;
            	var threeOT = document.getElementById('auto_wrong_output_3').value;
            	var threeCR = document.getElementById('auto_invalid_constraint_3').value;
            	var threeP = document.getElementById('auto_paren_3').value;
            	var threeC = document.getElementById('auto_colon_3').value;
            	var threeCom = document.getElementById('comment-3').value;
            	var three_one = document.getElementById('test_3_1').value;
            	var three_two = document.getElementById('test_3_2').value;
            }
            
            // Question 4 Information
            if (document.getElementById('final-points-4') == null){
            	var fourFinal = 0;
            	var fourFN = 0;
            	var fourAN = 0;
            	var fourOT = 0;
            	var fourCR = 0;
            	var fourP = 0;
            	var fourC = 0;
            	var fourCom = 0;
            	var four_one = 0;
            	var four_two = 0;
            }
            else {
            	var fourFinal = document.getElementById('final-points-4').value;
            	var fourFN = document.getElementById('auto_func_name_4').value;
            	var fourAN = document.getElementById('auto_arg_name_4').value;
            	var fourOT = document.getElementById('auto_wrong_output_4').value;
            	var fourCR = document.getElementById('auto_invalid_constraint_4').value;
            	var fourP = document.getElementById('auto_paren_4').value;
            	var fourC = document.getElementById('auto_colon_4').value;
            	var fourCom = document.getElementById('comment-4').value;
            	var four_one = document.getElementById('test_4_1').value;
            	var four_two = document.getElementById('test_4_2').value;
            }
            
            // Question 5 Information
            if (document.getElementById('final-points-5') == null){
            	var fiveFinal = 0;
            	var fiveFN = 0;
            	var fiveAN = 0;
            	var fiveOT = 0;
            	var fiveCR = 0;
            	var fiveP = 0;
            	var fiveC = 0;
            	var fiveCom = 0;
            	var five_one = 0;
            	var five_two = 0;
            }
            else {
            	var fiveFinal = document.getElementById('final-points-5').value;
            	var fiveFN = document.getElementById('auto_func_name_5').value;
            	var fiveAN = document.getElementById('auto_arg_name_5').value;
            	var fiveOT = document.getElementById('auto_wrong_output_5').value;
            	var fiveCR = document.getElementById('auto_invalid_constraint_5').value;
            	var fiveP = document.getElementById('auto_paren_5').value;
            	var fiveC = document.getElementById('auto_colon_5').value;
            	var fiveCom = document.getElementById('comment-5').value;
            	var five_one = document.getElementById('test_5_1').value;
            	var five_two = document.getElementById('test_5_2').value;
            }
        	
        	// Test Case Outputs
        	var uno_one = document.getElementById('o_1_1').value;
        	var uno_two = document.getElementById('o_1_2').value;
        	var dos_one = document.getElementById('o_2_1').value;
        	var dos_two = document.getElementById('o_2_2').value;
        	
        	if (document.getElementById('o_3_1') == null) {
        		var tres_one = 0;
        	}
        	else {
        		var tres_one = document.getElementById('o_3_1').value;
        	}
        	if (document.getElementById('o_3_2') == null) {
        		var tres_two = 0;
        	}
        	else {
        		var tres_two = document.getElementById('o_3_2').value;
        	}
        	if (document.getElementById('o_4_1') == null) {
        		var cuatro_one = 0;
        	}
        	else {
        		var cuatro_one = document.getElementById('o_4_1').value;
        	}
        	if (document.getElementById('o_4_2') == null) {
        		var cuatro_two = 0;
        	}
        	else {
        		var cuatro_two = document.getElementById('o_4_2').value;
        	}
        	if (document.getElementById('o_5_1') == null) {
        		var cinco_one = 0;
        	}
        	else {
        		var cinco_one = document.getElementById('o_5_1').value;
        	}
        	if (document.getElementById('o_5_2') == null) {
        		var cinco_two = 0;
        	}
        	else {
        		var cinco_two = document.getElementById('o_5_2').value;
        	}
            
            
        	
        	// Test Cases
        	var one_one = document.getElementById('test_1_1').value;
        	var two_one = document.getElementById('test_2_1').value;
        	
        	var one_two = document.getElementById('test_1_2').value;
        	var two_two = document.getElementById('test_2_2').value;
        	
        	
        	
        	// Test Case 3
        	if (document.getElementById('test_1_3') == null){
        		var one_three = 0;
        		var uno_three = 0;
        	}
        	else {
        		var one_three = document.getElementById('test_1_3').value;
        		var uno_three = document.getElementById('o_1_3').value;
        	}
        	if (document.getElementById('test_2_3') == null){
        		var two_three = 0;
        		var dos_three = 0;
        	}
        	else {
        		var two_three = document.getElementById('test_2_3').value;
        		var dos_three = document.getElementById('o_2_3').value;
        	}
        	if (document.getElementById('test_3_3') == null){
        		var three_three = 0;
        		var tres_three = 0;
        	}
        	else {
        		var three_three = document.getElementById('test_3_3').value;
        		var tres_three = document.getElementById('o_3_3').value;
        	}
        	if (document.getElementById('test_4_3') == null){
        		var four_three = 0;
        		var cuatro_three = 0;
        	}
        	else {
        		var four_three = document.getElementById('test_4_3').value;
        		var cuatro_three = document.getElementById('o_4_3').value;
        	}
        	if (document.getElementById('test_5_3') == null){
        		var five_three = 0;
        		var cinco_three = 0;
        	}
        	else {
        		var five_three = document.getElementById('test_5_3').value;
        		var cinco_three = document.getElementById('o_5_3').value;
        	}
        	
        	// Test Case 4
        	if (document.getElementById('test_1_4') == null){
        		var one_four = 0;
        		var uno_four = 0;
        	}
        	else {
        		var one_four = document.getElementById('test_1_4').value;
        		var uno_four = document.getElementById('o_1_4').value;
        	}
        	if (document.getElementById('test_2_4') == null){
        		var two_four = 0;
        		var dos_four = 0;
        	}
        	else {
        		var two_four = document.getElementById('test_2_4').value;
        		var dos_four = document.getElementById('o_2_4').value;
        	}
        	if (document.getElementById('test_3_4') == null){
        		var three_four = 0;
        		var tres_four = 0;
        	}
        	else {
        		var three_four = document.getElementById('test_3_4').value;
        		var tres_four = document.getElementById('o_3_4').value;
        	}
        	if (document.getElementById('test_4_4') == null){
        		var four_four = 0;
        		var cuatro_four = 0;
        	}
        	else {
        		var four_four = document.getElementById('test_4_4').value;
        		var dos_three = document.getElementById('o_4_4').value;
        	}
        	if (document.getElementById('test_5_4') == null){
        		var five_four = 0;
        		var cinco_four = 0;
        	}
        	else {
        		var five_four = document.getElementById('test_5_4').value;
        		var cinco_four = document.getElementById('o_5_4').value;
        	}
        	// Test Case 5
        	if (document.getElementById('test_1_5') == null){
        		var one_five = 0;
        		var uno_five = 0;
        	}
        	else {
        		var one_five = document.getElementById('test_1_5').value;
        		var uno_five = document.getElementById('o_1_5').value;
        	}
        	if (document.getElementById('test_2_5') == null){
        		var two_five = 0;
        		var dos_five = 0;
        	}
        	else {
        		var two_five = document.getElementById('test_2_5').value;
        		var dos_five = document.getElementById('o_2_5').value;
        	}
        	if (document.getElementById('test_3_5') == null){
        		var three_five = 0;
        		var tres_five = 0;
        	}
        	else {
        		var three_five = document.getElementById('test_3_5').value;
        		var tres_five = document.getElementById('o_3_5').value;
        	}
        	if (document.getElementById('test_4_5') == null){
        		var four_five = 0;
        		var cuatro_five = 0;
        	}
        	else {
        		var four_five = document.getElementById('test_4_5').value;
        		var cuatro_five = document.getElementById('o_4_5').value;
        	}
        	if (document.getElementById('test_5_5') == null){
        		var five_five = 0;
        		var cinco_five = 0;
        	}
        	else {
        		var five_five = document.getElementById('test_5_5').value;
        		var cinco_five = document.getElementById('o_5_5').value;
        	}
        	
        	// Test Case 6
        	if (document.getElementById('test_1_6') == null){
        		var one_six = 0;
        		var uno_six = 0;
        	}
        	else {
        		var one_six = document.getElementById('test_1_6').value;
        		var uno_six = document.getElementById('o_1_6').value;
        	}
        	if (document.getElementById('test_2_6') == null){
        		var two_six = 0;
        		var dos_six = 0;
        	}
        	else {
        		var two_six = document.getElementById('test_2_6').value;
        		var dos_six = document.getElementById('o_2_6').value;
        	}
        	if (document.getElementById('test_3_6') == null){
        		var three_six = 0;
        		var tres_six = 0;
        	}
        	else {
        		var three_six = document.getElementById('test_3_6').value;
        		var tres_six = document.getElementById('o_3_6').value;
        	}
        	if (document.getElementById('test_4_6') == null){
        		var four_six = 0;
        		var cuatro_six = 0;
        	}
        	else {
        		var four_six = document.getElementById('test_4_6').value;
        		var cuatro_six = document.getElementById('o_4_6').value;
        	}
        	if (document.getElementById('test_5_6') == null){
        		var five_six = 0;
        		var cinco_six = 0;
        	}
        	else {
        		var five_six = document.getElementById('test_5_6').value;
        		var cinco_six = document.getElementById('o_5_6').value;
        	}
        	
        	var Test_Case = {"question_1_testcase_1": one_one, "question_1_testcase_2": one_two, "question_1_testcase_3": one_three, "question_1_testcase_4": one_four, "question_1_testcase_5": one_five, "question_1_testcase_6": one_six, "question_2_testcase_1": two_one, "question_2_testcase_2": two_two, "question_2_testcase_3": two_three, "question_2_testcase_4": two_four, "question_2_testcase_5": two_five, "question_2_testcase_6": two_six, "question_3_testcase_1": three_one, "question_3_testcase_2": three_two, "question_3_testcase_3": three_three, "question_3_testcase_4": three_four, "question_3_testcase_5": three_five, "question_3_testcase_6": three_six, "question_4_testcase_1": four_one, "question_4_testcase_2": four_two, "question_4_testcase_3": four_three, "question_4_testcase_4": four_four, "question_4_testcase_5": four_five, "question_4_testcase_6": four_six, "question_5_testcase_1": five_one, "question_5_testcase_2": five_two, "question_5_testcase_3": five_three, "question_5_testcase_4": five_four, "question_5_testcase_5": five_five, "question_5_testcase_6": five_six};
        	var Test_Output = {"question_1_testcase_1": uno_one, "question_1_testcase_2": uno_two, "question_1_testcase_3": uno_three, "question_1_testcase_4": uno_four, "question_1_testcase_5": uno_five, "question_1_testcase_6": uno_six, "question_2_testcase_1": dos_one, "question_2_testcase_2": dos_two, "question_2_testcase_3": dos_three, "question_2_testcase_4": dos_four, "question_2_testcase_5": dos_five, "question_2_testcase_6": dos_six, "question_3_testcase_1": tres_one, "question_3_testcase_2": tres_two, "question_3_testcase_3": tres_three, "question_3_testcase_4": tres_four, "question_3_testcase_5": tres_five, "question_3_testcase_6": tres_six, "question_4_testcase_1": cuatro_one, "question_4_testcase_2": cuatro_two, "question_4_testcase_3": cuatro_three, "question_4_testcase_4": cuatro_four, "question_4_testcase_5": cuatro_five, "question_4_testcase_6": cuatro_six, "question_5_testcase_1": cinco_one, "question_5_testcase_2": cinco_two, "question_5_testcase_3": cinco_three, "question_5_testcase_4": cinco_four, "question_5_testcase_5": cinco_five, "question_5_testcase_6": cinco_six};
        	
        	
        	var finalComments = document.getElementById('final-comment').value;
           
            var JSON_message = {"content_type": "instructor_publishes_exam", "submission_id": sub, "auto_func_name_1": oneFN, "auto_arg_name_1": oneAN, "auto_wrong_output_1": oneOT, "auto_invalid_constraint_1": oneCR, "auto_paren_1": oneP, "auto_colon_1": oneC, "auto_func_name_2": twoFN, "auto_arg_name_2": twoAN, "auto_wrong_output_2": twoOT, "auto_invalid_constraint_2": twoCR, "auto_paren_2": twoP, "auto_colon_2": twoC, "auto_func_name_3": threeFN, "auto_arg_name_3": threeAN, "auto_wrong_output_3": threeOT, "auto_invalid_constraint_3": threeCR, "auto_paren_3": threeP, "auto_colon_3": threeC, "auto_func_name_4": fourFN, "auto_arg_name_4": fourAN, "auto_wrong_output_4": fourOT, "auto_invalid_constraint_4": fourCR, "auto_paren_4": fourP, "auto_colon_4": fourC, "auto_func_name_5": fiveFN, "auto_arg_name_5": fiveAN, "auto_wrong_output_5": fiveOT, "auto_invalid_constraint_5": fiveCR, "auto_paren_5": fiveP, "auto_colon_5": fiveC, "ans_1_comments": oneCom, "ans_1_score": oneFinal, "ans_2_comments": twoCom, "ans_2_score": twoFinal, "ans_3_comments": threeCom, "ans_3_score": threeFinal, "ans_4_comments": fourCom, "ans_4_score": fourFinal, "ans_5_comments": fiveCom, "ans_5_score": fiveFinal, "test_case_results": Test_Case, "test_case_outs": Test_Output, "final_comments": finalComments};
            console.log(JSON_message);
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
                  rc.innerHTML += 'Points deduction for no colon requirement: <input type="text" id="auto_colon_'+i+'" value='+data['autogradeoutput_'+i+'']['header_colon_result']+'>';
                  rc.innerHTML += '<hr>';
                  rc.innerHTML += 'Points deduction for no parentheses requirement: <input type="text" id="auto_paren_'+i+'" value='+data['autogradeoutput_'+i+'']['header_parens_result']+'>';
                  rc.innerHTML += '<hr>';
                  for(j=1; j<=no_test; j++){
                  	rc.innerHTML += 'Test Case '+j+' Result - Points Deducted: '+data['autogradeoutput_'+i+'']['testcase_result_'+j+''];
                  	rc.innerHTML += '<br>';
                  	rc.innerHTML += '<input id="test_'+i+'_'+j+'" value="'+data['autogradeoutput_'+i+'']['testcase_result_'+j]+'" hidden>';
                  	rc.innerHTML += '<input id="o_'+i+'_'+j+'" value="'+data['autogradeoutput_'+i+'']['testcase_output_'+j]+'" hidden>';
                  }
                  for(k=no_test; k<=6; k++){
                  	rc.innerHTML += '<input id="test_'+i+'_'+k+'" value="'+data['autogradeoutput_'+i+'']['testcase_result_'+k]+'" hidden>';
                  	rc.innerHTML += '<input id="o_'+i+'_'+k+'" value="'+data['autogradeoutput_'+i+'']['testcase_output_'+k]+'" hidden>';
                  }
                  
                 
                  
                  var totality = data['autogradeoutput_'+i+'']['total'];
                  var uno = document.getElementById('auto_func_name_'+i+'').value;
                  var dos = document.getElementById('auto_arg_name_'+i+'').value;
                  var tres = document.getElementById('auto_wrong_output_'+i+'').value;
                  var cuatro = document.getElementById('auto_invalid_constraint_'+i+'').value;
                  var cinco = document.getElementById('auto_colon_'+i+'').value;
                  var seis = document.getElementById('auto_paren_'+i+'').value;
                  var finale = totality;
                  if (finale < 0) {
                  	finale = 0;
                  }
                  rc.innerHTML += '<br>';
                  rc.innerHTML += 'Points: '+finale+'';
                  rc.innerHTML += '<br>';
                  rc.innerHTML += '<input id="final-points-'+i+'" value="'+finale+'" hidden>';
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