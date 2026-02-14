// Sidebar toggle code
var sideNavMenu = document.getElementById("side-navbar-activate");
var sidenavbar = document.querySelector(".side-navbar");

sideNavMenu.addEventListener("click", function () {
  sidenavbar.style.marginLeft = "0px";
});

document.getElementById("side-navbar-close").addEventListener("click", () => {
  document.querySelector(".side-navbar").style.marginLeft = "-60%";
});

// Contact form LocalStorage code
const contactForm = document.getElementById("contactForm");
const successMsg = document.getElementById("form-success");

contactForm.addEventListener("submit", function (e) {
  e.preventDefault(); // prevent page reload

  // Get input values
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !message) return; // extra safety check

  // Get existing messages or empty array
  const messages = JSON.parse(localStorage.getItem("contactMessages")) || [];

  // Add new message
  messages.push({ name, email, message, date: new Date().toLocaleString() });

  // Save back to LocalStorage
  localStorage.setItem("contactMessages", JSON.stringify(messages));

  // Show success message
  successMsg.style.display = "block";
  setTimeout(() => (successMsg.style.display = "none"), 3000);

  // Clear form
  contactForm.reset();
});
