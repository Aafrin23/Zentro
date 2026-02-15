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
const newsletterInput = document.getElementById("newsletter-email");
const newsletterBtn = document.getElementById("newsletter-subscribe");
const newsletterMsg = document.getElementById("newsletter-msg");

// Show toast message
function showMessage(msg, type = "success") {
    newsletterMsg.textContent = msg;
    newsletterMsg.className = `newsletter-msg show ${type}`;

    // Hide after 3 seconds
    setTimeout(() => {
        newsletterMsg.className = `newsletter-msg ${type}`;
    }, 3000);
}

newsletterBtn.addEventListener("click", () => {
    const email = newsletterInput.value.trim();

    if (email === "") {
        showMessage("Please enter an email!", "error");
        return;
    }

    // Basic email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        showMessage("Please enter a valid email!", "error");
        return;
    }

    let emails = JSON.parse(localStorage.getItem("newsletterEmails")) || [];

    if (emails.includes(email)) {
        showMessage("You are already subscribed!", "error");
        newsletterInput.value = "";
        return;
    }

    emails.push(email);
    localStorage.setItem("newsletterEmails", JSON.stringify(emails));

    showMessage("Thanks for subscribing!");
    newsletterInput.value = "";
    console.log("Current stored emails:", emails);
});