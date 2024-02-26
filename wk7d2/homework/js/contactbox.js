const contactMethodSelect = document.getElementById("contactMethod");
const emailBox = document.getElementById("emailBox");
const phoneBox = document.getElementById("phoneBox");

contactMethodSelect.addEventListener("change", function () {
  emailBox.style.display = "none";
  phoneBox.style.display = "none";
  const selectedValue = contactMethodSelect.value;

  if (selectedValue === "email") {
    emailBox.style.display = "block";
  } else if (selectedValue === "phone") {
    phoneBox.style.display = "block";
  }
});
