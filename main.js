//Ends preloader when page is loaded
window.addEventListener('load', () => {
    const preload = document.querySelector('.preload');
    preload.classList.add('preload-finish') ;
});
function validateForm() {
  var fName = document.forms["contactForm"]["fname"].value;
  if (fName == "") {
    alert("Name must be filled out");
    return false;
  }
  var fEmail = document.forms["contactForm"]["femail"].value;
  if (fEmail == "") {
    alert("Email must be filled out");
    return false;
  }
  var fPhone = document.forms["contactForm"]["fphone"].value;
  if (fPhone == "") {
    alert("Phone number must be filled out");
    return false;
  }
  var fDetails = document.forms["contactForm"]["fdetails"].value;
  if (fDetails == "") {
    alert("Details must be filled out");
    return false;
  }
};