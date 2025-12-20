document.addEventListener("DOMContentLoaded", function () {
  const modalTriggers = document.querySelectorAll(".open-modal");
  const modals = document.querySelectorAll(".modal");
  const closeButtons = document.querySelectorAll(".close");

  modalTriggers.forEach((btn) => {
    btn.addEventListener("click", () => {
      const parentItem = btn.closest(".tempat-hits-item");
      const modalId = parentItem.getAttribute("data-modal");
      document.getElementById(modalId).style.display = "block";
    });
  });

  closeButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      btn.closest(".modal").style.display = "none";
    });
  });

  window.addEventListener("click", (event) => {
    modals.forEach((modal) => {
      if (event.target === modal) {
        modal.style.display = "none";
      }
    });
  });
});
