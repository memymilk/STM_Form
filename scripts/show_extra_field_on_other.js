// show extra fiels on other
function setupSelect2WithOther(dropdownId, detailsId) {
  const dropdown = $("#" + dropdownId); // Use jQuery to select the dropdown
  const details = $("#" + detailsId);

  // Initialize Select2
  dropdown.select2();

  dropdown.on("change", function (e) {
    const selectedValue = e.target.value;


    if (selectedValue === "Other") {
      details.show();
    } else {
      details.hide();
    }
  });

  // Trigger the change event to handle the initial state
  dropdown.trigger("change");
}

// Call the function for Select2 dropdown


    // All the questions with other option below called below
      //Q1
      setupSelect2WithOther("fundingSource", "fundingSourceDetails");
      //Q9
      setupSelect2WithOther("caseStudyScale", "caseStudyScaleDetails");
      //Q13
      setupSelect2WithOther("researchAreas", "researchAreasDetails");
      //Q32
      setupSelect2WithOther("organizationSector", "organizationSectorDetails");
      //Q37
      setupSelect2WithOther("coProductionLevel", "coProductionLevelDetails");
      //Q39
      setupSelect2WithOther("financingMethod", "financingMethodDetails");
