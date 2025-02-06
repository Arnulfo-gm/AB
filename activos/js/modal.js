document.addEventListener("DOMContentLoaded", function () {
    var modal = document.getElementById("contactModal");
  
    function openModal() {
      fetch("../../paginas/Corp/contacto.html")
        .then((response) => response.text())
        .then((data) => {
          document.getElementById("modal-container").innerHTML = data;
          modal = document.getElementById("contactModal");
          modal.style.display = "block";
  
          var span = document.getElementsByClassName("close")[0];
          span.onclick = function () {
            closeModal();
          };
          window.onclick = function (event) {
            if (event.target == modal) {
              closeModal();
            }
          };
        })
        .catch((error) => console.error("Error loading modal content:", error));
    }
  
    function closeModal() {
      modal.style.display = "none";
    }
  
    window.openModal = openModal;
  });
  