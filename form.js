//prevent default form submitting

var form = document.getElementById("form");

form.addEventListener("submit", function (event) {
  event.preventDefault();
});

var button = document.getElementById("bt");

button.addEventListener("click", function () {
  var select1 = document.getElementById("1");
  var select2 = document.getElementById("2");
  var select3 = document.getElementById("3");

  // Get the date input element by id
  var dateInput = document.getElementById("email-3");

  // Get the selected values of the select inputs
  var value1 = select1.value;
  var value2 = select2.value;
  var value3 = select3.value;

  // Get the date value of the date input
  var dateValue = dateInput.value;

  // Create a new Date object from the date value
  var dateEntered = new Date(dateValue);

  console.log(value1, value2, value3, dateEntered);
});
