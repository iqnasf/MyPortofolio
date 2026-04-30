// Hamburger Menu Toggle
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navLinks.classList.toggle("active");
});

// Close menu when link is clicked
document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navLinks.classList.remove("active");
  });
});

// Form Validation
const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function (e) {
  e.preventDefault();

  // Clear previous errors
  clearErrors();

  // Get form values
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const message = document.getElementById("message").value.trim();

  let isValid = true;

  // Validate Name
  if (name === "") {
    showError("nameError", "Name is required");
    isValid = false;
  } else if (name.length < 3) {
    showError("nameError", "Name must be at least 3 characters");
    isValid = false;
  }

  // Validate Email
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (email === "") {
    showError("emailError", "Email is required");
    isValid = false;
  } else if (!emailPattern.test(email)) {
    showError("emailError", "Please enter a valid email address");
    isValid = false;
  }

  // Validate Phone Number
  const phonePattern = /^[\d\s\-\+\(\)]+$/;
  if (phone === "") {
    showError("phoneError", "Phone number is required");
    isValid = false;
  } else if (phone.length < 10) {
    showError("phoneError", "Phone number must be at least 10 digits");
    isValid = false;
  } else if (!phonePattern.test(phone)) {
    showError("phoneError", "Please enter a valid phone number");
    isValid = false;
  }

  // Validate Message
  if (message === "") {
    showError("messageError", "Message is required");
    isValid = false;
  } else if (message.length < 10) {
    showError("messageError", "Message must be at least 10 characters");
    isValid = false;
  }

  // If form is valid, show success message with submitted values
  if (isValid) {
    const submittedInfo = `
Thank you ${name}! Your message has been submitted successfully.

Submitted Information:
━━━━━━━━━━━━━━━━━━━━━━
Name: ${name}
Email: ${email}
Phone: ${phone}
Message: ${message}
    `.trim();

    alert(submittedInfo);
    contactForm.reset();
  }
});

// Function to show error
function showError(elementId, message) {
  const errorElement = document.getElementById(elementId);
  errorElement.textContent = message;
  errorElement.style.display = "block";
}

// Function to clear all errors
function clearErrors() {
  const errors = document.querySelectorAll(".error");
  errors.forEach((error) => {
    error.textContent = "";
    error.style.display = "none";
  });
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// Add active class to navigation on scroll
window.addEventListener("scroll", function () {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".nav-links a");

  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= sectionTop - 100) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href").slice(1) === current) {
      link.classList.add("active");
    }
  });
});
