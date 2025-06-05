document.addEventListener('DOMContentLoaded', function () {
  var popup = document.getElementById('myPopup');
  var closeButton = document.querySelector('.close-button');

  function openPopup() {
    popup.style.display = 'block';
  }

  function closePopup() {
    popup.style.display = 'none';
  }

  // Open the popup on page load
  openPopup();

  // Close the popup when the close button is clicked
  closeButton.onclick = closePopup;

  // Close the popup when the user clicks outside of it
  window.onclick = function (event) {
    if (event.target == popup) {
      closePopup();
    }
  };
});
