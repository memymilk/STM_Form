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
