function ValidateOne() {
  // Check if any required field is empty
  let isFormValid = true;
  //const p = $("#caseStudyScale"); // Use jQuery to select the select2 dropdown

  function checkAndMarkRequiredField(field) {
  const label = $("label[for='" + field.id + "']");
  //console.log(field.id); // Log the field ID to the console

  if (field.value.trim() === "") {
   // console.log("Empty field"); // Log when the field is empty

    if (field.tagName.toLowerCase() === "select" && $(field).hasClass("select2-hidden-accessible")) {
      // For Select2, check if it's empty
      const selectedValue = $(field).val();
      if (!selectedValue || selectedValue.length === 0) {
        label.addClass("error-label");
        isFormValid = false;
      } else {
        label.removeClass("error-label");
      }
    } else {
      label.addClass("error-label");
      isFormValid = false;
    }
  } else {
    label.removeClass("error-label");
  }
}

  // Call checkAndMarkRequiredField for each field
  checkAndMarkRequiredField(document.getElementById("caseStudyText"));
  checkAndMarkRequiredField(document.getElementById("coordinatorIntitute"));
  checkAndMarkRequiredField(document.getElementById("coordinatorName"));
  checkAndMarkRequiredField(document.getElementById("corrdinatorDetails"));
  const coordinatorCountry = $("#coordinatorCountry2");
  checkAndMarkRequiredField(coordinatorCountry[0]);
  // jQuery's .val() method for the select element
  const caseStudyScale = $("#caseStudyScale");
  checkAndMarkRequiredField(caseStudyScale[0]);

  console.log(caseStudyScale[0].value)
if (document.getElementById(caseStudyScale[0].value) == "Other"){
  console.log("yo")
  console.log(caseStudyScale[0].value)
  checkAndMarkRequiredField(document.getElementById("caseStudyScaleText"));
}

  const Transbound = $("#transboundary");
  checkAndMarkRequiredField(Transbound[0]);
  checkAndMarkRequiredField(document.getElementById("caseStudyObjectives"));

  // If any required field is empty, stop the function and prevent form submission
  if (!isFormValid) {
    $("#warningDivSecond").show(); // Assuming the warning div has an id of "warningDiv"
    alert("Please fill out all required fields.");
    return;
  } else{
    nextSection(1);
  }
}

function ValidateTwo() {
  // Check if any required field is empty
  let isFormValid = true;
  const p = $("#caseStudyScale"); // Use jQuery to select the select2 dropdown

  function checkAndMarkRequiredField(field) {
  const label = $("label[for='" + field.id + "']");
  //console.log(field.id); // Log the field ID to the console

  if (field.value.trim() === "") {
   // console.log("Empty field"); // Log when the field is empty

    if (field.tagName.toLowerCase() === "select" && $(field).hasClass("select2-hidden-accessible")) {
      // For Select2, check if it's empty
      const selectedValue = $(field).val();
      if (!selectedValue || selectedValue.length === 0) {
        label.addClass("error-label");
        isFormValid = false;
      } else {
        label.removeClass("error-label");
      }
    } else {
      label.addClass("error-label");
      isFormValid = false;
    }
  } else {
    label.removeClass("error-label");
  }
}


  const sectors = $("#nexus_sectors");
  checkAndMarkRequiredField(sectors[0]);
  // jQuery's .val() method for the select element
  const research = $("#researchAreas");
  checkAndMarkRequiredField(research[0]);



  console.log(research[0].value)
if (research[0].value === "Other"){
  console.log("yo")
  console.log("aand now?", research[0].value)
  checkAndMarkRequiredField(document.getElementById("researchAreasText"));
} else{console.log("nah", research[0].value)}




  // If any required field is empty, stop the function and prevent form submission
  if (!isFormValid) {
    $("#warningDivSecond").show(); // Assuming the warning div has an id of "warningDiv"
    alert("Please fill out all required fields.");
    return;
  } else{
    nextSection(2);
    $("#warningDivSecond").hide();
  }
}


function ValidateThree() {
  // Check if any required field is empty
  let isFormValid = true;

  function checkAndMarkRequiredField(field) {
  const label = $("label[for='" + field.id + "']");
  //console.log(field.id); // Log the field ID to the console

  if (field.value.trim() === "") {
   // console.log("Empty field"); // Log when the field is empty

    if (field.tagName.toLowerCase() === "select" && $(field).hasClass("select2-hidden-accessible")) {
      // For Select2, check if it's empty
      const selectedValue = $(field).val();
      if (!selectedValue || selectedValue.length === 0) {
        label.addClass("error-label");
        isFormValid = false;
      } else {
        label.removeClass("error-label");
      }
    } else {
      label.addClass("error-label");
      isFormValid = false;
    }
  } else {
    label.removeClass("error-label");
  }
}

  //Q14
  const systems = $("#systems_analysis");
  checkAndMarkRequiredField(systems[0]);

  //Q15
  const integrated = $("#integratedModelling");
  checkAndMarkRequiredField(integrated[0]);

  const environmental = $("#envManagement");
  checkAndMarkRequiredField(environmental[0]);

  const economics = $("#economicsMethods");
  checkAndMarkRequiredField(economics[0]);

  const statistics = $("#statisticsMethods");
  checkAndMarkRequiredField(statistics[0]);

  const social = $("#socialScienceMethods");
  checkAndMarkRequiredField(social[0]);

    //Q20
  const ontology = $("#ontologyEngineering");
  checkAndMarkRequiredField(ontology[0]);

  if (ontology[0].value === "Yes"){
  checkAndMarkRequiredField(document.getElementById("ontologyEngineeringText"));
}

  const footprint = $("#footprintCalculations");
  checkAndMarkRequiredField(footprint[0]);

  if (footprint[0].value === "Yes"){
  checkAndMarkRequiredField(document.getElementById("footprintCalculationsText"));
}

  const descision = $("#decisionSupportSystem");
  checkAndMarkRequiredField(descision[0]);

  if (descision[0].value === "Yes"){
  checkAndMarkRequiredField(document.getElementById("decisionSupportSystemText"));
}

  const climate = $("#climateProjectionsModel");
  checkAndMarkRequiredField(climate[0]);

  const dataused = $("#dataTypesUsed");
  checkAndMarkRequiredField(dataused[0]);

  //Q25
  const monitor = $("#monitoringTechniques");
  checkAndMarkRequiredField(monitor[0]);

  const ai = $("#aiMethodology");
  checkAndMarkRequiredField(ai[0]);

  const indicator = $("#nexusIndicators");
  checkAndMarkRequiredField(indicator[0]);

  // If any required field is empty, stop the function and prevent form submission
  if (!isFormValid) {
    $("#warningDivSecond").show(); // Assuming the warning div has an id of "warningDiv"
    alert("Please fill out all required fields.");
    return;
  } else{
    nextSection(3);
    $("#warningDivSecond").hide();
  }
}

function ValidateFour() {
  // Check if any required field is empty
  let isFormValid = true;

  function checkAndMarkRequiredField(field) {
  const label = $("label[for='" + field.id + "']");
  //console.log(field.id); // Log the field ID to the console

  if (field.value.trim() === "") {
   // console.log("Empty field"); // Log when the field is empty

    if (field.tagName.toLowerCase() === "select" && $(field).hasClass("select2-hidden-accessible")) {
      // For Select2, check if it's empty
      const selectedValue = $(field).val();
      if (!selectedValue || selectedValue.length === 0) {
        label.addClass("error-label");
        isFormValid = false;
      } else {
        label.removeClass("error-label");
      }
    } else {
      label.addClass("error-label");
      isFormValid = false;
    }
  } else {
    label.removeClass("error-label");
  }
}

  //Q28
  const stake = $("#stakeholders");
  checkAndMarkRequiredField(stake[0]);

  const econom = $("#economicSector");
  checkAndMarkRequiredField(econom[0]);

  //Q30
  const stakeappr = $("#stakeholderApproach");
  checkAndMarkRequiredField(stakeappr[0]);

  const actor = $("#biggestActor");
  checkAndMarkRequiredField(actor[0]);

  const orgsector = $("#organizationSector");
  checkAndMarkRequiredField(orgsector[0]);

  if (orgsector[0].value === "Other"){
  checkAndMarkRequiredField(document.getElementById("organizationSectorText"));
}

  const engage = $("#organizationEngagement");
  checkAndMarkRequiredField(engage[0]);



  // If any required field is empty, stop the function and prevent form submission
  if (!isFormValid) {
    $("#warningDivSecond").show(); // Assuming the warning div has an id of "warningDiv"
    alert("Please fill out all required fields.");
    return;
  } else{
    nextSection(4);
    $("#warningDivSecond").hide();
  }
}


function ValidateFive() {
  // Check if any required field is empty
  let isFormValid = true;

  function checkAndMarkRequiredField(field) {
  const label = $("label[for='" + field.id + "']");
  //console.log(field.id); // Log the field ID to the console

  if (field.value.trim() === "") {
   // console.log("Empty field"); // Log when the field is empty

    if (field.tagName.toLowerCase() === "select" && $(field).hasClass("select2-hidden-accessible")) {
      // For Select2, check if it's empty
      const selectedValue = $(field).val();
      if (!selectedValue || selectedValue.length === 0) {
        label.addClass("error-label");
        isFormValid = false;
      } else {
        label.removeClass("error-label");
      }
    } else {
      label.addClass("error-label");
      isFormValid = false;
    }
  } else {
    label.removeClass("error-label");
  }
}

  //Q34
  const govassesm = $("#governanceAssessment");
  checkAndMarkRequiredField(govassesm[0]);

  if (govassesm[0].value === "Yes"){
  checkAndMarkRequiredField(document.getElementById("governanceAssessmentText"));
}

  //Q35
  const policycoherence = $("#policyCoherenceAssessment");
  checkAndMarkRequiredField(policycoherence[0]);

  const nexus = $("#nexusDrivers");
  checkAndMarkRequiredField(nexus[0]);

  const coprod = $("#coProductionLevel");
  checkAndMarkRequiredField(coprod[0]);

  if (coprod[0].value === "Other"){
  checkAndMarkRequiredField(document.getElementById("coProductionLevelText"));
}

  const implement = $("#implementationLevel");
  checkAndMarkRequiredField(implement[0]);


  const finance = $("#financingMethod");
  checkAndMarkRequiredField(finance[0]);

  if (finance[0].value === "Other"){
  checkAndMarkRequiredField(document.getElementById("financingMethodText"));
}

  //Q40
  const govchallenge = $("#governanceChallenges");
  checkAndMarkRequiredField(govchallenge[0]);

  const lesson = $("#lessonsLearned");
  checkAndMarkRequiredField(lesson[0]);

  // If any required field is empty, stop the function and prevent form submission
  if (!isFormValid) {
    $("#warningDivSecond").show(); // Assuming the warning div has an id of "warningDiv"
    alert("Please fill out all required fields.");
    return;
  } else{
    nextSection(5);
    $("#warningDivSecond").hide();
  }
}



function ValidateSix() {
  // Check if any required field is empty
  let isFormValid = true;

  function checkAndMarkRequiredField(field) {
  const label = $("label[for='" + field.id + "']");
  //console.log(field.id); // Log the field ID to the console

  if (field.value.trim() === "") {
   // console.log("Empty field"); // Log when the field is empty

    if (field.tagName.toLowerCase() === "select" && $(field).hasClass("select2-hidden-accessible")) {
      // For Select2, check if it's empty
      const selectedValue = $(field).val();
      if (!selectedValue || selectedValue.length === 0) {
        label.addClass("error-label");
        isFormValid = false;
      } else {
        label.removeClass("error-label");
      }
    } else {
      label.addClass("error-label");
      isFormValid = false;
    }
  } else {
    label.removeClass("error-label");
  }
}

  //Q42
  const disseminate = $("#disseminationTools");
  checkAndMarkRequiredField(disseminate[0]);

  const sdg = $("#assessment");
  checkAndMarkRequiredField(sdg[0]);

  const sdgmethod = $("#sdgAssessmentMethod");
  checkAndMarkRequiredField(sdgmethod[0]);

  //Q45
  const datamanage = $("#dataManagementPlan");
  checkAndMarkRequiredField(datamanage[0]);

  if (datamanage[0].value === "Yes"){
  checkAndMarkRequiredField(document.getElementById("dataManagementPlanText"));
}

  // If any required field is empty, stop the function and prevent form submission
  if (!isFormValid) {
    $("#warningDivSecond").show(); // Assuming the warning div has an id of "warningDiv"
    alert("Please fill out all required fields.");
    return;
  } else{
    nextSection(6);
    $("#warningDivSecond").hide();
  }
}


function ValidateSeven() {
  // Check if any required field is empty
  let isFormValid = true;

  function checkAndMarkRequiredField(field) {
  const label = $("label[for='" + field.id + "']");
  //console.log(field.id); // Log the field ID to the console

  if (field.value.trim() === "") {
   // console.log("Empty field"); // Log when the field is empty

    if (field.tagName.toLowerCase() === "select" && $(field).hasClass("select2-hidden-accessible")) {
      // For Select2, check if it's empty
      const selectedValue = $(field).val();
      if (!selectedValue || selectedValue.length === 0) {
        label.addClass("error-label");
        isFormValid = false;
      } else {
        label.removeClass("error-label");
      }
    } else {
      label.addClass("error-label");
      isFormValid = false;
    }
  } else {
    label.removeClass("error-label");
  }
}

  //Q46
  const out = $("#caseStudyOutputs");
  checkAndMarkRequiredField(out[0]);

  const use = $("#projectOutputsUsage");
  checkAndMarkRequiredField(use[0]);

  const resultuser = $("#resultsUsers");
  checkAndMarkRequiredField(resultuser[0]);

  const impact = $("#impacts");
  checkAndMarkRequiredField(impact[0]);

  //Q50
   const achieve = $("#achieved");
  checkAndMarkRequiredField(achieve[0]);


  // If any required field is empty, stop the function and prevent form submission
  if (!isFormValid) {
    $("#warningDivSecond").show(); // Assuming the warning div has an id of "warningDiv"
    alert("Please fill out all required fields.");
    return;
  } else{
    submitFormTwo();
    $("#warningDivSecond").hide();
  }
}



  document.addEventListener("DOMContentLoaded", function () {
    //Q12
    const nexus_sectorsSelect = document.getElementById("nexus_sectors");
    const defaultValues = Array.from(nexus_sectorsSelect.options).map(option => option.value);
    //Q14
    const systems_analysisSelect = document.getElementById("systems_analysis");
    const systems_analysis_default = Array.from(systems_analysisSelect.options).map(option => option.value);

    //Q15
    const integrated_modelingSelect = document.getElementById("integratedModelling");
    const integrated_modeling_default = Array.from(integrated_modelingSelect.options).map(option => option.value);

    //Q16
    const environmental_managementSelect = document.getElementById("envManagement");
    const environmental_management_default = Array.from(environmental_managementSelect.options).map(option => option.value);

    //Q17
     const economicsSelect = document.getElementById("economicsMethods");
    const economics_default = Array.from(economicsSelect.options).map(option => option.value);

    //Q18
    const statisticsSelect = document.getElementById("statisticsMethods");
    const statistics_default = Array.from(statisticsSelect.options).map(option => option.value);

    //Q19
    const social_scienceSelect = document.getElementById("socialScienceMethods");
    const social_science_default = Array.from(social_scienceSelect.options).map(option => option.value);

    //Q23
    const climate_projectionsSelect = document.getElementById("climateProjectionsModel");
    const climate_projections_default = Array.from(climate_projectionsSelect.options).map(option => option.value);

    //Q24
    const data_typesSelect = document.getElementById("dataTypesUsed");
    const data_types_default = Array.from(data_typesSelect.options).map(option => option.value);

    //Q25
    const monitoring_techniquesSelect = document.getElementById("monitoringTechniques");
    const monitoring_techniques_default = Array.from(monitoring_techniquesSelect.options).map(option => option.value);

    //Q26
    const ai_metodologySelect = document.getElementById("aiMethodology");
    const ai_metodology_default = Array.from(ai_metodologySelect.options).map(option => option.value);

    //Q28
    const stakeholders_involvedSelect = document.getElementById("stakeholders");
    const stakeholders_involved_default = Array.from(stakeholders_involvedSelect.options).map(option => option.value);

    //Q29
    const stakeholders_sectorsSelect = document.getElementById("economicSector");
    const stakeholders_sectors_default = Array.from(stakeholders_sectorsSelect.options).map(option => option.value);

         //Q30
         const stakeholders_approachSelect = document.getElementById("stakeholderApproach");
    const stakeholders_approach_default = Array.from(stakeholders_approachSelect.options).map(option => option.value);

      //Q36
      const important_driversSelect = document.getElementById("nexusDrivers");
    const important_drivers_default = Array.from(important_driversSelect.options).map(option => option.value);

          //Q42
          const visualisation_choiceSelect = document.getElementById("disseminationTools");
    const visualisation_choice_default = Array.from(visualisation_choiceSelect.options).map(option => option.value);

    //Q43
     const sdg_assessmentSelect = document.getElementById("assessment");
     //Q47
     const usage_choiceSelect = document.getElementById("projectOutputsUsage");
    const usage_choice_default = Array.from(usage_choiceSelect.options).map(option => option.value);
            //Q48
            const helix_choiceSelect = document.getElementById("resultsUsers");
    const helix_choice_default = Array.from(helix_choiceSelect.options).map(option => option.value);
    //Q49
    const selected_impactsSelect = document.getElementById("impacts");




    window.submitFormTwo = function () {
         //Q12
      const selectedValues = Array.from(nexus_sectorsSelect.selectedOptions).map(option => option.value);
      const existingValues = selectedValues.filter(value => defaultValues.includes(value));
      const newValues = selectedValues.filter(value => !defaultValues.includes(value));

         //Q14
      const selectedValuesSystem = Array.from(systems_analysisSelect.selectedOptions).map(option => option.value);
      const existingValuesSystem = selectedValuesSystem.filter(value => systems_analysis_default.includes(value));
      const newValuesSystem = selectedValuesSystem.filter(value => !systems_analysis_default.includes(value));

         //Q15
      const selected_integrated_modeling = Array.from(integrated_modelingSelect.selectedOptions).map(option => option.value);
      const existing_integrated_modeling = selected_integrated_modeling.filter(value => integrated_modeling_default.includes(value));
      const new_integrated_modeling = selected_integrated_modeling.filter(value => !integrated_modeling_default.includes(value));

        //Q16
      const selected_environmental_management = Array.from(environmental_managementSelect.selectedOptions).map(option => option.value);
      const existing_environmental_management = selected_environmental_management.filter(value => environmental_management_default.includes(value));
      const new_environmental_management = selected_environmental_management.filter(value => !environmental_management_default.includes(value));

        //Q17
      const selected_economics = Array.from(economicsSelect.selectedOptions).map(option => option.value);
      const existing_economics = selected_economics.filter(value => economics_default.includes(value));
      const new_economics = selected_economics.filter(value => !economics_default.includes(value));

       //Q18
       const selected_statistics = Array.from(statisticsSelect.selectedOptions).map(option => option.value);
      const existing_statistics = selected_statistics.filter(value => statistics_default.includes(value));
      const new_statistics = selected_statistics.filter(value => !statistics_default.includes(value));

       //Q19
       const selected_social_science = Array.from(social_scienceSelect.selectedOptions).map(option => option.value);
      const existing_social_science = selected_social_science.filter(value => social_science_default.includes(value));
      const new_social_science = selected_social_science.filter(value => !social_science_default.includes(value));

      //Q23
      const selected_climate_projections = Array.from(climate_projectionsSelect.selectedOptions).map(option => option.value);
      const existing_climate_projections = selected_climate_projections.filter(value => climate_projections_default.includes(value));
      const new_climate_projections = selected_climate_projections.filter(value => !climate_projections_default.includes(value));

      //Q24
      const selected_data_types = Array.from(data_typesSelect.selectedOptions).map(option => option.value);
      const existing_data_types = selected_data_types.filter(value => data_types_default.includes(value));
      const new_data_types = selected_data_types.filter(value => !data_types_default.includes(value));
      //Q25
      const selected_monitoring_techniques = Array.from(monitoring_techniquesSelect.selectedOptions).map(option => option.value);
      const existing_monitoring_techniques = selected_monitoring_techniques.filter(value => monitoring_techniques_default.includes(value));
      const new_monitoring_techniques = selected_monitoring_techniques.filter(value => !monitoring_techniques_default.includes(value));

      //Q26
      const selected_ai_metodology = Array.from(ai_metodologySelect.selectedOptions).map(option => option.value);
      const existing_ai_metodology = selected_ai_metodology.filter(value => ai_metodology_default.includes(value));
      const new_ai_metodology = selected_ai_metodology.filter(value => !ai_metodology_default.includes(value));

      //Q28
      const selected_stakeholders_involved = Array.from(stakeholders_involvedSelect.selectedOptions).map(option => option.value);
      const existing_stakeholders_involved = selected_stakeholders_involved.filter(value => stakeholders_involved_default.includes(value));
      const new_stakeholders_involved = selected_stakeholders_involved.filter(value => !stakeholders_involved_default.includes(value));

       //Q29
       const selected_stakeholders_sectors = Array.from(stakeholders_sectorsSelect.selectedOptions).map(option => option.value);
      const existing_stakeholders_sectors = selected_stakeholders_sectors.filter(value => stakeholders_sectors_default.includes(value));
      const new_stakeholders_sectors = selected_stakeholders_sectors.filter(value => !stakeholders_sectors_default.includes(value));

      //Q30
      const selected_stakeholders_approach = Array.from(stakeholders_approachSelect.selectedOptions).map(option => option.value);
      const existing_stakeholders_approach = selected_stakeholders_approach.filter(value => stakeholders_approach_default.includes(value));
      const new_stakeholders_approach = selected_stakeholders_approach.filter(value => !stakeholders_approach_default.includes(value));

      //Q36
      const selected_important_drivers = Array.from(important_driversSelect.selectedOptions).map(option => option.value);
      const existing_important_drivers = selected_important_drivers.filter(value => important_drivers_default.includes(value));
      const new_important_drivers = selected_important_drivers.filter(value => !important_drivers_default.includes(value));


      //Q42
      const selected_visualisation_choice = Array.from(visualisation_choiceSelect.selectedOptions).map(option => option.value);
      const existing_visualisation_choice = selected_visualisation_choice.filter(value => visualisation_choice_default.includes(value));
      const new_visualisation_choice = selected_visualisation_choice.filter(value => !visualisation_choice_default.includes(value));

      //Q43
      const selected_sdg_assessment = Array.from(sdg_assessmentSelect.selectedOptions).map(option => option.value);

      //Q47
      const selected_usage_choice = Array.from(usage_choiceSelect.selectedOptions).map(option => option.value);
      const existing_usage_choice = selected_usage_choice.filter(value => usage_choice_default.includes(value));
      const new_usage_choice = selected_usage_choice.filter(value => !usage_choice_default.includes(value));

      //Q48
      const selected_helix_choice = Array.from(helix_choiceSelect.selectedOptions).map(option => option.value);
      const existing_helix_choice = selected_helix_choice.filter(value => helix_choice_default.includes(value));
      const new_helix_choice = selected_helix_choice.filter(value => !helix_choice_default.includes(value));

      //Q49
      const selected_selected_impacts = Array.from(selected_impactsSelect.selectedOptions).map(option => option.value);

      // Get other form elements and their values
      const case_study_name = document.getElementById("caseStudyText").value;
      const case_study_leader_institution = document.getElementById("coordinatorIntitute").value;
      const case_study_leader_name = document.getElementById("coordinatorName").value;
      const case_study_leader_contact = document.getElementById("corrdinatorDetails").value;
      const case_study_country = document.getElementById("coordinatorCountry2").value;
      const case_study_scale = document.getElementById("caseStudyScale").value;
      const case_study_scale_other = document.getElementById("caseStudyScaleText").value;
      const case_study_transboundary = document.getElementById("transboundary").value;
      const case_study_objectives = document.getElementById("caseStudyObjectives").value;
      //Q13
      const layers_of_analysis = document.getElementById("researchAreas").value;
      const layers_of_analysis_other = document.getElementById("researchAreasText").value;
      //Q20
      const semantics_ontologies = document.getElementById("ontologyEngineering").value;
      const semantics_ontologies_specify = document.getElementById("ontologyEngineeringText").value;
      //Q21
      const footprint_calculations = document.getElementById("footprintCalculations").value;
      const footprint_calculations_specify = document.getElementById("footprintCalculationsText").value;
      //Q22
      const descision_support_system = document.getElementById("decisionSupportSystem").value;
      const descision_support_system_details = document.getElementById("decisionSupportSystemText").value;
      //Q27
      const nexus_indicators = document.getElementById("nexusIndicators").value;
      //Q31
      const biggest_org = document.getElementById("biggestActor").value;
      //Q32
      const biggest_org_sector = document.getElementById("organizationSector").value;
      const biggest_org_sector_other = document.getElementById("organizationSectorText").value;
      //Q33
      const biggest_org_engaged = document.getElementById("organizationEngagement").value;
      //Q34
      const governance_assessment = document.getElementById("governanceAssessment").value;
      const governance_assessment_specify = document.getElementById("governanceAssessmentText").value;
      //Q35
      const plocy_coherence_assesment = document.getElementById("policyCoherenceAssessment").value;
      const plocy_coherence_assesment_specify = document.getElementById("policyCoherenceAssessmentText").value;
      //Q37
      const policy_coproduction = document.getElementById("coProductionLevel").value;
      const policy_coproduction_specify = document.getElementById("coProductionLevelText").value;
      //Q38
      const current_implementation = document.getElementById("implementationLevel").value;
      //Q39
      const solution_financing = document.getElementById("financingMethod").value;
      const solution_financing_specify = document.getElementById("financingMethodText").value;
      //Q40
      const governance_challenges = document.getElementById("governanceChallenges").value;
      //Q41
      const governance_lessons = document.getElementById("lessonsLearned").value;
      //Q44
      const sdg_assessmet_method = document.getElementById("sdgAssessmentMethod").value;
      //Q45
      const data_mgmt_plan = document.getElementById("dataManagementPlan").value;
      const data_mgmt_plan_specify = document.getElementById("dataManagementPlanText").value;
      //Q46
      const outputs_choice = document.getElementById("caseStudyOutputs").value;
      //Q50
      const impact_description = document.getElementById("achieved").value;




      // Combine selected values with other form data
      const formData = {

        case_study_name: case_study_name,

        case_study_leader_institution: case_study_leader_institution,

        case_study_leader_name: case_study_leader_name,

        case_study_leader_contact: case_study_leader_contact,
        //Q8
        case_study_country: case_study_country,
        //Q9
        case_study_scale: case_study_scale,
        case_study_scale_other: case_study_scale_other,
        //Q10
        case_study_transboundary: case_study_transboundary,
        case_study_objectives: case_study_objectives,

        //Q12
        nexus_sectors: existingValues, // Add selected values to the formData
        nexus_sectors_other: newValues,
        //Q13
        layers_of_analysis: layers_of_analysis,
        layers_of_analysis_other: layers_of_analysis_other,
        //Q14
        systems_analysis: existingValuesSystem,
        systems_analysis_other: newValuesSystem,
        //Q15
        integrated_modeling: existing_integrated_modeling,
        integrated_modeling_specify: new_integrated_modeling,
        //Q16
        environmental_management: existing_environmental_management,
        environmental_management_specify: new_environmental_management,
        //Q17
        economics: existing_economics,
        economics_specify: new_economics,
        //Q18
        statistics: existing_statistics,
        statistics_specify: new_statistics,
        //Q19
        social_science: existing_social_science,
        social_science_specify: new_social_science,
        //Q20
        semantics_ontologies: semantics_ontologies,
        semantics_ontologies_specify: semantics_ontologies_specify,
        //Q21
        footprint_calculations: footprint_calculations,
        footprint_calculations_specify: footprint_calculations_specify,
        //Q22
        descision_support_system: descision_support_system,
        descision_support_system_details: descision_support_system_details,
        //Q23
        climate_projections: existing_climate_projections,
        climate_projections_specify: new_climate_projections,
        //Q24
        data_types: existing_data_types,
        data_types_specify: new_data_types,
        //Q25
        monitoring_techniques: existing_monitoring_techniques,
        monitoring_techniques_specify: new_monitoring_techniques,
        //Q26
        ai_metodology: existing_ai_metodology,
        ai_metodology_specify: new_ai_metodology,
        //Q27
        nexus_indicators: nexus_indicators,
        //Q28
        stakeholders_involved: existing_stakeholders_involved,
        stakeholders_involved_specify: new_stakeholders_involved,
        //Q29
        stakeholders_sectors: existing_stakeholders_sectors,
        stakeholders_sectors_specify: new_stakeholders_sectors,
        //Q30
        stakeholders_approach: existing_stakeholders_approach,
        stakeholders_approach_specify: new_stakeholders_approach,
        //Q31
        biggest_org: biggest_org,
        //Q32
        biggest_org_sector: biggest_org_sector,
        biggest_org_sector_other: biggest_org_sector_other,
        //Q33
        biggest_org_engaged: biggest_org_engaged,
        //Q34
        governance_assessment: governance_assessment,
        governance_assessment_specify: governance_assessment_specify,
        //Q35
        plocy_coherence_assesment: plocy_coherence_assesment,
        plocy_coherence_assesment_specify: plocy_coherence_assesment_specify,
        //Q36
        important_drivers: existing_important_drivers,
        important_drivers_specify: new_important_drivers,
        //Q37
        policy_coproduction: policy_coproduction,
        policy_coproduction_specify: policy_coproduction_specify,
        //Q38
        current_implementation: current_implementation,
        //Q39
        solution_financing: solution_financing,
        solution_financing_specify: solution_financing_specify,
        //Q40
        governance_challenges: governance_challenges,
        //Q41
        governance_lessons: governance_lessons,
        //Q42
        visualisation_choice: existing_visualisation_choice,
        visualisation_choice_specify: new_visualisation_choice,
        //Q43
        sdg_assessment: selected_sdg_assessment,
        //Q44
        sdg_assessmet_method: sdg_assessmet_method,
        //Q45
        data_mgmt_plan: data_mgmt_plan,
        data_mgmt_plan_specify: data_mgmt_plan_specify,
        //Q46
        outputs_choice: outputs_choice,
        //Q47
        usage_choice: existing_usage_choice,
        usage_other_purpose: new_usage_choice,
        //Q48
        helix_choice: existing_helix_choice,
        helix_choice_specify: new_helix_choice,
        //Q49
        selected_impacts: selected_selected_impacts,
        //Q50
        impact_description: impact_description

      };

      // Convert the form data to JSON
      const jsonData = JSON.stringify(formData);

      // Display or use the JSON data as needed
      console.log(jsonData);

      // Optionally, reset the form
      document.getElementById("multiSectionFormTwo").reset();
    };


  });
