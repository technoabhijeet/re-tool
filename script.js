// Get form and result elements
const jsonForm = document.getElementById("json-form");
const jsonInput = document.getElementById("json-input");
const result = document.getElementById("result");

// Add event listener for form submission
jsonForm.addEventListener("submit", validateJSON);

// Function to validate JSON
function validateJSON(e) {
  e.preventDefault();

  // Parse JSON input
  try {
    var json = JSON.parse(jsonInput.value);
  } catch (e) {
    // If input is not valid JSON, display error message
    result.innerHTML = "Invalid JSON: " + e;
    result.classList.add("error");
    return;
  }

  // If JSON is valid, display success message
  result.innerHTML = "Valid JSON";
  result.classList.remove("error");
}