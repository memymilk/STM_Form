// Toggle radio button

function showContent(option) {
  const content1 = document.getElementById("content1");
  const content2 = document.getElementById("content2");

  if (option === "option1") {
    content1.style.display = "block";
    content2.style.display = "none";
  } else if (option === "option2") {
    content1.style.display = "none";
    content2.style.display = "block";
  }
}
