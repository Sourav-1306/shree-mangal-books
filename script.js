const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav-links");
if (menuButton && nav) {
  menuButton.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    menuButton.setAttribute("aria-expanded", String(isOpen));
    menuButton.textContent = isOpen ? "✕" : "☰";
  });
  nav.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.textContent = "☰";
  }));
}

document.getElementById("year").textContent = new Date().getFullYear();

const enquiryForm = document.getElementById("enquiryForm");
if (enquiryForm) {
  enquiryForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(enquiryForm);
    const name = String(formData.get("name") || "").trim();
    const organisation = String(formData.get("organisation") || "").trim();
    const phone = String(formData.get("phone") || "").trim();
    const interest = String(formData.get("interest") || "").trim();
    const message = String(formData.get("message") || "").trim();
    const lines = [
      "Hello Shree Mangal Books, I would like to make an enquiry.",
      "",
      `Name: ${name}`,
      `School / Organisation: ${organisation || "Not provided"}`,
      `Phone: ${phone}`,
      `Interested in: ${interest}`,
      `Requirements: ${message || "Please contact me to discuss."}`
    ];
    const url = "https://wa.me/919468995530?text=" + encodeURIComponent(lines.join("\n"));
    window.open(url, "_blank", "noopener,noreferrer");
  });
}
