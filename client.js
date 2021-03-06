// Testing sourced JS file
console.log( 'js is working');
// starting with empty employees array
let employees = [];
// starting with $0 in monthly salary
const totalValue = 0;

$( document ).ready( readyNow );

function readyNow(){
// handle click event for input fields
$('#submitButton').on('click', addEmployee);
// target totalOut by id
let el = $('#totalOut')
el.empty();
el.append('$', totalValue);
// Delete employee row on click
$('#employeesOut').on('click', '#employeeRow', deleteEmployee);
} // end readyNow

// Deletes employee row
function deleteEmployee() {
	$(this).remove();
  }

// Adds employee to array when inputs are entered and clicked
function addEmployee(){
	let firstName = $("#firstName");
	let lastName = $("#lastName");
	let id = $("#id");
	let title = $("#title");
	let salary = $("#salary");
	// Make all inputs required
	if(
	firstName.val() == false || 
	lastName.val() == false || 
	id.val() == false || 
	title.val() == false || 
	salary.val() == false)
	{alert('Please complete all fields.');} 
	else {
		newEmployee(firstName.val(), 
		lastName.val(), 
		id.val(), 
		title.val(), 
		Number(salary.val()));
	  }
	// Clears input fields
	$( "#firstName" ).val('');
	$( "#lastName" ).val('');
	$( "#id" ).val('');
	$( "#title" ).val('');
	$( "#salary" ).val('');
	displayEmployees();
	calculateTotal();
  }

// Display employee in DOM
  function displayEmployees(){
	console.log( 'in displayEmployees' );
	// target output by id
	let el = $('#employeesOut')
	// empty
	el.empty();
	// loop through employee array
	for (let employee of employees) {
	  console.log(employee);
	  // Displays inputs in DOM.
	  el.append(` 
	  <table>
		<tr id="employeeRow">
		  <td>${employee.firstName}</td>
		  <td>${employee.lastName}</td>
		  <td>${employee.id}</td>
		  <td>${employee.title}</td>
		  <td>$${employee.salary}</td>
		  <td><button id="deleteButton"><img src="trash.png"></button></td>
		</tr>
	  </table>
	  `);
	}
  } // end displayEmployees

  function calculateTotal(){
	console.log( 'in calculateTotal' );
	// loop through employee array
	let totalSalary = 0;
	for (let i = 0; i < employees.length; i++) {
	// for each employee, add up total of all salaries and divide by 12
	totalSalary += employees[ i ].salary / 12;
	} // end for loop
	console.log( 'totalSalary', totalSalary);
	// add totalSalary to totalValue
	const newTotal = Math.round(totalValue + totalSalary);
	// display totalSalary
	let el = $( '#totalOut' );
	el.empty();
	// Display newTotal in red if over $20,000
	if(newTotal > 20000){
		el.append('$', newTotal ).css('color', 'red');
	} else {
		el.append('$', newTotal );
	}
  } // end calculateTotal

  function newEmployee(firstName, lastName, id, title, salary){
	const newEmployeeObject = {
	  firstName: firstName,
	  lastName: lastName,
	  id: id,
	  title: title,
	  salary: salary
	}
	employees.push(newEmployeeObject);
	console.log('Employees:', employees);
  } // end newEmployee
