// validate and submit the first form

function submitForm() {
  // Get form elements and their values
  const project_name = document.getElementById("projectName");
  const project_type = $("#fundingSource"); // Using jQuery to select the select2 dropdown
  const project_type_other = document.getElementById("fundingSourceText");
  const coord_host = document.getElementById("projectInstitution");
  const project_website = document.getElementById("projectWebsite");
  const project_funding = document.getElementById("projectAmount");
  const project_start = document.getElementById("projectStartDate");
  const project_end = document.getElementById("projectEndDate");

  // Check if any required field is empty
  let isFormValid = true;

  function checkAndMarkRequiredField(field) {
  const label = $("label[for='" + field.id + "']");

  if (field.value.trim() === "") {
    if (field.tagName.toLowerCase() === "select" && field.classList.contains("select2-hidden-accessible")) {
      // For select2, check the select2 value
      const selectedValue = $(field).val();
      if (field.hasAttribute("required") && (!selectedValue || selectedValue.length === 0)) {
        label.addClass("required-field");
        isFormValid = false;
      } else {
        label.removeClass("required-field");
      }
    } else {
      label.addClass("required-field");
      isFormValid = false;
    }
  } else {
    label.removeClass("required-field");
  }
}

// Call checkAndMarkRequiredField for each field
checkAndMarkRequiredField(document.getElementById("projectName"));
checkAndMarkRequiredField(document.getElementById("fundingSource"));

if (project_type.val() == "Other"){
  checkAndMarkRequiredField(document.getElementById("fundingSourceText"));
}

checkAndMarkRequiredField(document.getElementById("projectInstitution"));
checkAndMarkRequiredField(document.getElementById("projectWebsite"));
checkAndMarkRequiredField(document.getElementById("projectAmount"));
checkAndMarkRequiredField(document.getElementById("projectStartDate"));
checkAndMarkRequiredField(document.getElementById("projectEndDate"));

  // If any required field is empty, stop the function and prevent form submission
  if (!isFormValid) {
    $("#warningDiv").show(); // Assuming the warning div has an id of "warningDiv"
    alert("Please fill out all required fields.");
    return;
  }

  // If all required fields are filled, proceed with form submission
  const formData = {
    project_name: project_name.value,
    project_type: project_type.val(), // Use .val() for select2
    project_type_other: project_type_other.value,
    coord_host: coord_host.value,
    project_website: project_website.value,
    project_funding: project_funding.value,
    project_start: project_start.value,
    project_end: project_end.value,
    // Add other form fields as needed
  };

  // Convert the form data to JSON
  const jsonData = JSON.stringify(formData);

  // Display or use the JSON data as needed
  console.log(jsonData);
  // You can also save the JSON data to a file or send it to a server

  // Reset the form
  $("#warningDiv").hide();
  document.getElementById("multiSectionFormTwo").reset();}
