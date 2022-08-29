import './style.css'

const projectsModal = document.getElementById("projects-modal");
const projectsModalBtn = document.getElementById("openProjectsModal");

projectsModalBtn.addEventListener("click", () => {
  projectsModal.style.display = "flex";
});

window.onclick = function (event) {
  if (event.target == projectsModal) {
    projectsModal.style.display = "none";
  }
};