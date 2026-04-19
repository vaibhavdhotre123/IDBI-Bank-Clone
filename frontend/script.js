document.getElementById("year").textContent = new Date().getFullYear();

document.getElementById("cta-btn").addEventListener("click", () => {
  document.getElementById("about").scrollIntoView({ behavior: "smooth" });
});

document.getElementById("contact-form").addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const status = document.getElementById("form-status");
  status.textContent = `Thanks, ${name}! Your message has been received.`;
  e.target.reset();
});
