// navigation in steps

var currentSection = 1;

function nextSection(section) {
  var currentSectionElement = document.getElementById("section" + section);
  currentSectionElement.style.display = "none";

  currentSection = section + 1;
  if (currentSection > 7) {
    currentSection = 7;
  }

  var nextSectionElement = document.getElementById("section" + currentSection);
  nextSectionElement.style.display = "block";
}

function prevSection(section) {
  var currentSectionElement = document.getElementById("section" + section);
  currentSectionElement.style.display = "none";

  currentSection = section - 1;
  if (currentSection < 1) {
    currentSection = 1;
  }

  var prevSectionElement = document.getElementById("section" + currentSection);
  prevSectionElement.style.display = "block";
}

function submitForm() {
  // gather form data and generate JSON
  alert("Form submitted!");
}

function checkOther() {
  var fundingSourceDropdown = document.getElementById("fundingSource");
  var otherDetails = document.getElementById("otherDetails");
  var otherText = document.getElementById("otherText");

  if (fundingSourceDropdown.value === "Other") {
    otherDetails.style.display = "block";
    otherText.required = true;
  } else {
    otherDetails.style.display = "none";
    otherText.required = false;
  }
}

// Function to populate the country dropdown
function populateCountries() {
  var countryDropdowns = document.getElementsByClassName("coordinatorCountry");

  // List of countries
  var countries = [
    "Afghanistan",
    "Albania",
    "Algeria",
    "Andorra",
    "Angola",
    "Antigua & Deps",
    "Argentina",
    "Armenia",
    "Australia",
    "Austria",
    "Azerbaijan",
    "Bahamas",
    "Bahrain",
    "Bangladesh",
    "Barbados",
    "Belarus",
    "Belgium",
    "Belize",
    "Benin",
    "Bhutan",
    "Bolivia",
    "Bosnia Herzegovina",
    "Botswana",
    "Brazil",
    "Brunei",
    "Bulgaria",
    "Burkina",
    "Burundi",
    "Cambodia",
    "Cameroon",
    "Canada",
    "Cape Verde",
    "Central African Rep",
    "Chad",
    "Chile",
    "China",
    "Colombia",
    "Comoros",
    "Congo",
    "Congo {Democratic Rep}",
    "Costa Rica",
    "Croatia",
    "Cuba",
    "Cyprus",
    "Czech Republic",
    "Denmark",
    "Djibouti",
    "Dominica",
    "Dominican Republic",
    "East Timor",
    "Ecuador",
    "Egypt",
    "El Salvador",
    "Equatorial Guinea",
    "Eritrea",
    "Estonia",
    "Ethiopia",
    "Fiji",
    "Finland",
    "France",
    "Gabon",
    "Gambia",
    "Georgia",
    "Germany",
    "Ghana",
    "Greece",
    "Grenada",
    "Guatemala",
    "Guinea",
    "Guinea-Bissau",
    "Guyana",
    "Haiti",
    "Honduras",
    "Hungary",
    "Iceland",
    "India",
    "Indonesia",
    "Iran",
    "Iraq",
    "Ireland {Republic}",
    "Israel",
    "Italy",
    "Ivory Coast",
    "Jamaica",
    "Japan",
    "Jordan",
    "Kazakhstan",
    "Kenya",
    "Kiribati",
    "Korea North",
    "Korea South",
    "Kosovo",
    "Kuwait",
    "Kyrgyzstan",
    "Laos",
    "Latvia",
    "Lebanon",
    "Lesotho",
    "Liberia",
    "Libya",
    "Liechtenstein",
    "Lithuania",
    "Luxembourg",
    "Macedonia",
    "Madagascar",
    "Malawi",
    "Malaysia",
    "Maldives",
    "Mali",
    "Malta",
    "Marshall Islands",
    "Mauritania",
    "Mauritius",
    "Mexico",
    "Micronesia",
    "Moldova",
    "Monaco",
    "Mongolia",
    "Montenegro",
    "Morocco",
    "Mozambique",
    "Myanmar, {Burma}",
    "Namibia",
    "Nauru",
    "Nepal",
    "Netherlands",
    "New Zealand",
    "Nicaragua",
    "Niger",
    "Nigeria",
    "Norway",
    "Oman",
    "Pakistan",
    "Palau",
    "Panama",
    "Papua New Guinea",
    "Paraguay",
    "Peru",
    "Philippines",
    "Poland",
    "Portugal",
    "Qatar",
    "Romania",
    "Russian Federation",
    "Rwanda",
    "St Kitts & Nevis",
    "St Lucia",
    "Saint Vincent & the Grenadines",
    "Samoa",
    "San Marino",
    "Sao Tome & Principe",
    "Saudi Arabia",
    "Senegal",
    "Serbia",
    "Seychelles",
    "Sierra Leone",
    "Singapore",
    "Slovakia",
    "Slovenia",
    "Solomon Islands",
    "Somalia",
    "South Africa",
    "South Sudan",
    "Spain",
    "Sri Lanka",
    "Sudan",
    "Suriname",
    "Swaziland",
    "Sweden",
    "Switzerland",
    "Syria",
    "Taiwan",
    "Tajikistan",
    "Tanzania",
    "Thailand",
    "Togo",
    "Tonga",
    "Trinidad & Tobago",
    "Tunisia",
    "Turkey",
    "Turkmenistan",
    "Tuvalu",
    "Uganda",
    "Ukraine",
    "United Arab Emirates",
    "United Kingdom",
    "United States",
    "Uruguay",
    "Uzbekistan",
    "Vanuatu",
    "Vatican City",
    "Venezuela",
    "Vietnam",
    "Yemen",
    "Zambia",
    "Zimbabwe",
    // Add more countries as needed
  ];

  // Populate each dropdown with countries
  for (var j = 0; j < countryDropdowns.length; j++) {
    var dropdown = countryDropdowns[j];

    // Clear existing options
    dropdown.innerHTML = '<option value="">Select a country</option>';

    // Populate the dropdown with countries
    for (var i = 0; i < countries.length; i++) {
      var option = document.createElement("option");
      option.value = countries[i];
      option.text = countries[i];
      dropdown.appendChild(option);
    }
  }
}

// Call the function to populate the country dropdown on page load
populateCountries();

// Function to submit the form and generate JSON file
function submitForm() {
  var formData = {
    fundingSource: document.getElementById("fundingSource").value,
    otherText: document.getElementById("otherText").value,
    coordinatorCountry: document.getElementById("coordinatorCountry").value,
    projectName: document.getElementsByName("projectName")[0].value,
    projectAcronym: document.getElementsByName("projectAcronym")[0].value,
    projectWebsite: document.getElementsByName("projectWebsite")[0].value,
    coordinatingInstitute: document.getElementsByName(
      "coordinatingInstitute"
    )[0].value,
    coordinatingInstituteName: document.getElementsByName(
      "coordinatingInstituteName"
    )[0].value,
    coordinatingInstituteContact: document.getElementsByName(
      "coordinatingInstituteContact"
    )[0].value,
    additionalDetails: document.getElementById("additionalDetails").value,
  };

  var jsonData = JSON.stringify(formData);

  // Create a Blob and download the JSON file
  var blob = new Blob([jsonData], { type: "application/json" });
  var a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = "questionnaire_data.json";
  a.click();
}

// Other in questions below

function setupDropdownWithOther(dropdownId, detailsId) {
  var dropdown = document.getElementById(dropdownId);
  var details = document.getElementById(detailsId);

  dropdown.addEventListener("change", function () {
    if (dropdown.value === "Other") {
      details.style.display = "block";
    } else {
      details.style.display = "none";
    }
  });
  setupDropdownWithOther(
    "footprintCalculations",
    "footprintCalculationsDetails"
  );
  setupDropdownWithOther(
    "climateProjectionsModel",
    "climateProjectionsModelDetails"
  );
  setupDropdownWithOther("dataTypesUsed", "dataTypesUsedDetails");
  setupDropdownWithOther(
    "decisionSupportSystem",
    "decisionSupportSystemDetails"
  );
  setupDropdownWithOther("monitoringTechniques", "monitoringTechniquesDetails");
  setupDropdownWithOther("caseStudyScale", "caseStudyScaleDetails");
  setupDropdownWithOther("nexusSectors", "nexusSectorsOther");
  setupDropdownWithOther("projectOutputsUsage", "projectOutputsUsageDetails");
  setupDropdownWithOther("nexusSectors", "nexusSectorsOther");
  setupDropdownWithOther("resultsUsers", "resultsUsersDetails");
  setupDropdownWithOther("dataManagementPlan", "dataManagementPlanDetails");
  setupDropdownWithOther("disseminationTools", "disseminationToolsOther");
  setupDropdownWithOther("lessonsLearned", "lessonsLearnedText");
  setupDropdownWithOther("nexusDrivers", "nexusDriversOther");
  setupDropdownWithOther("financingMethod", "financingMethodOther");
  setupDropdownWithOther("caseStudyScale", "caseStudyScaleDetails");
  setupDropdownWithOther("nexusSectors", "nexusSectorsDetails");
  setupDropdownWithOther("stakeholderApproach", "stakeholderApproachDetails");
  setupDropdownWithOther("stakeholders", "stakeholdersDetails");
  setupDropdownWithOther("researchAreas", "researchAreasDetails");
  setupDropdownWithOther("economicsMethods", "economicsMethodsDetails");
  setupDropdownWithOther(
    "policyCoherenceAssessment",
    "policyCoherenceAssessmentDetails"
  );
  setupDropdownWithOther("coProductionLevel", "coProductionLevelOther");
  setupDropdownWithOther("economicSector", "economicSectorDetails");
  setupDropdownWithOther("envManagement", "envManagementDetails");
  setupDropdownWithOther("statisticsMethods", "statisticsMethodsDetails");
  setupDropdownWithOther("integratedModelling", "integratedModellingDetails");
  setupDropdownWithOther("organizationSector", "organizationSectorDetails");
  setupDropdownWithOther("systemsAnalysis", "systemsAnalysisDetails");
  setupDropdownWithOther("aiMethodology", "aiMethodologyDetails");
  setupDropdownWithOther("implementationLevel", "implementationLevelDetails");
}




// Toggle radio button below

function showContent(option) {
  var content1 = document.getElementById("content1");
  var content2 = document.getElementById("content2");

  if (option === "option1") {
    content1.style.display = "block";
    content2.style.display = "none";
  } else if (option === "option2") {
    content1.style.display = "none";
    content2.style.display = "block";
  }
}

// show/hide the additional text field

var ontologyEngineeringDropdown = document.getElementById(
  "ontologyEngineering"
);
var ontologyEngineeringDetails = document.getElementById(
  "ontologyEngineeringDetails"
);

ontologyEngineeringDropdown.addEventListener("change", function () {
  ontologyEngineeringDetails.style.display =
    ontologyEngineeringDropdown.value === "YES" ? "block" : "none";
  // Clear the text field when changing the dropdown value
  if (ontologyEngineeringDropdown.value !== "YES") {
    document.getElementById("ontologyEngineeringText").value = "";
  }
});
