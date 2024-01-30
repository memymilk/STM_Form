// Setup select two below

// multiple with custom tags

      $(document).ready(function () {
        $(".multiple-select-custom-field").select2({
          theme: "bootstrap-5",
          width: $(this).data("width")
            ? $(this).data("width")
            : $(this).hasClass("w-100")
            ? "100%"
            : "style",
          placeholder: $(this).data("placeholder"),
          closeOnSelect: false,
          tags: true,
        });
      });


// multiple no custom tags

  $(document).ready(function () {
    $(".multiple-no-tags").select2({
      theme: "bootstrap-5",
      width: $(this).data("width")
        ? $(this).data("width")
        : $(this).hasClass("w-100")
        ? "100%"
        : "style",
      placeholder: $(this).data("placeholder"),
      closeOnSelect: false,
      tags: false,
    });
  });


// single select

  $(document).ready(function () {
    $(".single-select-field").select2({
      theme: "bootstrap-5",
      width: $(this).data("width")
        ? $(this).data("width")
        : $(this).hasClass("w-100")
        ? "100%"
        : "style",
      placeholder: $(this).data("placeholder"),
    });
  });
