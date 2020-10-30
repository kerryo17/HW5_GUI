/*
Author: Kerry O'Neill
Email: kerry_oneill@student.uml.edu
Class: 91.61 GUI Programming I
*/


//function in which has checks AND the table. i originally had the make_table function separate but i had too many issues.
function input_and_table() {
	// defines variables for input values, i used https://www.w3schools.com/jsref/jsref_parseint.asp to help me with input of variables
	var min_col = parseInt(document.getElementById("min_col").value);
	var max_col = parseInt(document.getElementById("max_col").value);
	var min_row = parseInt(document.getElementById("min_row").value);
	var max_row = parseInt(document.getElementById("max_row").value);

	//defines warnings and warning warning_message
	var warning=document.getElementById("warning");
	var warning_message = "";

	//used https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML#:~:text=Warning%3A%20If%20your%20project%20is,pass%20the%20automated%20review%20process. to help me understand warning.innerhtml
	//checks if min_col is greater than -50. if it less than, it will send an error
	if (min_col < -50) {
		warning_message = "Error. Min Col has min entry of -50. Reload and try again.";
		warning.innerHTML = warning_message;
	}

	//checks if max_col is less than 50, if it is greater than it will send an error
	else if(max_col > 50) {
		warning_message = "Error. Max Col has max entry of 50. Reload and try again.";
		warning.innerHTML = warning_message;
	}

	//checks if min row is greater than -50. if it is less than, it will send an error
	else if(min_row < -50){
		warning_message =  "Error. Min Row has min entry of -50. Reload and try again.";
		warning.innerHTML = warning_message;
	}

	//checks if max row is less than 50, if it is greater than it will send an error
	else if(max_row > 50) {
		warning_message = "Error. Max Row has max entry of 50. Reload and try again.";
		warning.innerHTML = warning_message;
	}

	//checks if any values entered is empty, if is sends error
	else if(!min_col || !max_col || !min_row || !max_row){
		warning_message = "Error. One of the entries is empty. Reload and try again.";
		warning.innerHTML = warning_message;
	}

	//checks if max_col greater than min_col, error warning_message pops
	else if(min_col > max_col){
		warning_message = "Error. Max Col is less than Min Col. Reload and try again";
		warning.innerHTML = warning_message;
	}

	//checks if max_row greater than min_row error warning_message pops up
	else if(min_row > max_row){
		warning_message = "Error. Max Row is less than Min Row. Reload and try again";
		warning.innerHTML = warning_message;
	}

	//if inputs pass every single test, make table
	// i used this video: https://www.youtube.com/watch?v=5Oq6Eqy7Y_A to help me with the multiplication process, and I had to modify it as it only uses hard coded inputs
	//I had to make sure to input a space so the rows/col axises show up
	else{
		var temp1, temp2;
		var mult_table = "";

		// first for loop which goes through the rows
		for (temp1 = min_row - 1; temp1 <= max_row; temp1++) {
			mult_table = mult_table + "<tr>"; //for each temp1++, add a space

			//this is to make sure there is a blank space and so the row/col axises show up
			if (temp1 == min_row - 1) {
				mult_table = mult_table + "<td>☺️</td>";// <td></td> creates empty space

				//second for loop which goes through columns if the condiiton above is true
				for (temp2 = min_col; temp2 <= max_col; temp2++) {
					mult_table = mult_table + "<td>" + temp2 + "</td>";//adds a space, temp2 value, then goes onto next
				}
			}

			//  if you dont need to check the min_row-1
			else {
				mult_table = mult_table + "<td>" + temp1 + "</td>";
				//secpmd for loop for min col
				for (temp2 = min_col; temp2 <= max_col; temp2++) {
					mult_table = mult_table + "<td>" + temp1 * temp2 + "</td>";//this does the multiplying of the table. this is after the row/col axis has been created
				}
			}

			mult_table = mult_table + "</tr>";//ends the table
		}

		// sends the table to HTML file to be outputted
		document.getElementById("mult_table").innerHTML = mult_table;
	}
}
