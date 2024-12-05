document.addEventListener("DOMContentLoaded", () => {
  // Button click event listeners
  const readMoreBtn = document.getElementById("readMoreBtn");
  const contactUsBtn = document.getElementById("contactUsBtn");

  readMoreBtn.addEventListener("click", (event) => {
    event.preventDefault(); // Prevent default anchor behavior
    const servicesSection = document.querySelector("#services");
    servicesSection.scrollIntoView({ behavior: "smooth" });
  });

  contactUsBtn.addEventListener("click", (event) => {
    event.preventDefault(); // Prevent default anchor behavior
    const contactSection = document.querySelector("#contact");
    contactSection.scrollIntoView({ behavior: "smooth" });
  });
});


document.addEventListener("DOMContentLoaded", () => {
  const prosjekterBtn = document.querySelector("#prosjekter"); // "Prosjekter" button
  const backToMainBtn = document.querySelector("#backToMain"); // Back button
  const mainContent = document.querySelector("main"); // Main content section
  const prosjekterSection = document.querySelector("#prosjekter-section"); // Projects section

  // Show the Projects Section
  prosjekterBtn.addEventListener("click", (event) => {
    event.preventDefault();
    mainContent.style.display = "none"; // Hide the main content
    prosjekterSection.classList.add("active"); // Show the projects section
  });

  // Go Back to Main Content
  backToMainBtn.addEventListener("click", () => {
    prosjekterSection.classList.remove("active"); // Hide the projects section
    mainContent.style.display = "block"; // Show the main content
  });
});



document.addEventListener("DOMContentLoaded", () => {
  const mainContent = document.querySelector("main"); // Main content section
  const contactSection = document.querySelector("#contact-section"); // Contact section
  const readMoreSection = document.querySelector("#readmore-section"); // Read More section

  const contactBtn = document.querySelector("#contactUsBtn"); // "Kontakt meg" button
  const readMoreBtn = document.querySelector("#readMoreBtn"); // "Les mer" button
  const backFromContactBtn = document.querySelector("#backFromContact"); // Back from contact
  const backFromReadMoreBtn = document.querySelector("#backFromReadMore"); // Back from Read More

  // Show Contact Section
  contactBtn.addEventListener("click", (event) => {
    event.preventDefault();
    mainContent.style.display = "none"; // Hide main content
    contactSection.classList.add("active"); // Show contact section
  });

  // Show Read More Section
  readMoreBtn.addEventListener("click", (event) => {
    event.preventDefault();
    mainContent.style.display = "none"; // Hide main content
    readMoreSection.classList.add("active"); // Show Read More section
  });

  // Back from Contact
  backFromContactBtn.addEventListener("click", () => {
    contactSection.classList.remove("active"); // Hide contact section
    mainContent.style.display = "block"; // Show main content
  });

  // Back from Read More
  backFromReadMoreBtn.addEventListener("click", () => {
    readMoreSection.classList.remove("active"); // Hide Read More section
    mainContent.style.display = "block"; // Show main content
  });
});

document.querySelector(".contact-form").addEventListener("submit", (e) => {
  e.preventDefault(); // Prevents page reload
  alert("Takk for meldingen din! Jeg vil ta kontakt snart.");
});

