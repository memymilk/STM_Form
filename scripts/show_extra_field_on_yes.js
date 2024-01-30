// show/hide the additional field if Yes/No

    document.addEventListener("DOMContentLoaded", function () {
      // Define the list of dropdown IDs and their corresponding details IDs
      const dropdownDetailsMapping = [
        //Q20
        { dropdownId: "ontologyEngineering", detailsId: "ontologyEngineeringDetails" },
        //Q21
        { dropdownId: "footprintCalculations", detailsId: "footprintCalculationsDetails" },
        //Q22
        { dropdownId: "decisionSupportSystem", detailsId: "decisionSupportSystemDetails" },
        //Q34
        { dropdownId: "governanceAssessment", detailsId: "governanceAssessmentDetails" },
        //Q45
        { dropdownId: "dataManagementPlan", detailsId: "dataManagementPlanDetails" },
      ];

      // Function to handle the change event
      function handleFormChange(dropdownId, detailsId) {
        const dropdown = $("#" + dropdownId); // Use jQuery to select the dropdown
        const details = $("#" + detailsId);

        // Initialize Select2
        dropdown.select2();

        dropdown.on("change", function (e) {
          const selectedValue = e.target.value;

          details.toggle(selectedValue === "Yes"); // Show details if "Yes" is selected, hide otherwise
        });

        // Trigger the change event to handle the initial state
        dropdown.trigger("change");
      }

      // Attach the event listener to the change event of each dropdown
      dropdownDetailsMapping.forEach(({ dropdownId, detailsId }) => {
        handleFormChange(dropdownId, detailsId);
      });
    });
