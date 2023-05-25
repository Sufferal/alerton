const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const openModalBtn = document.querySelector(".btn-open");
const closeModalBtn = document.querySelector(".btn-close");
const submitBtn = document.querySelector(".btn-submit");

// Open modal
const openModal = function () {
  modal.classList.add("open");
  modal.classList.remove("hidden");
  overlay.classList.add("open");
  overlay.classList.remove("hidden");
};

openModalBtn.addEventListener("click", openModal);

// Close modal
const closeModal = function () {
  modal.classList.remove("open");
  modal.classList.add("hidden");
  overlay.classList.remove("open");
  overlay.classList.add("hidden");
};

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && modal.classList.contains("open")) {
    closeModal();
  }
});

closeModalBtn.addEventListener("click", closeModal);
submitBtn.addEventListener("click", closeModal);
