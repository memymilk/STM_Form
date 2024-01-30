
  // navigation in steps

let currentSection = 1;

function nextSection(section) {
  let currentSectionElement = document.getElementById("section" + section);
  currentSectionElement.style.display = "none";

  currentSection = section + 1;
  if (currentSection > 7) {
    currentSection = 7;
  }

  let nextSectionElement = document.getElementById("section" + currentSection);
  nextSectionElement.style.display = "block";
}

function prevSection(section) {
  let currentSectionElement = document.getElementById("section" + section);
  currentSectionElement.style.display = "none";

  currentSection = section - 1;
  if (currentSection < 1) {
    currentSection = 1;
  }

  let prevSectionElement = document.getElementById("section" + currentSection);
  prevSectionElement.style.display = "block";
}
