const VALID_CODES = ["MOM123", "LOVE456", "HUG789"]; // Sample valid codes
const uploadForm = document.getElementById("uploadForm");
const imagesContainer = document.getElementById("imagesContainer");

uploadForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const code = document.getElementById("accessCode").value.trim();
  const imageFile = document.getElementById("imageUpload").files[0];
  const message = document.getElementById("message").value.trim();

  if (!VALID_CODES.includes(code)) {
    alert("Invalid unique code. Please try again.");
    return;
  }

  if (!imageFile || !message) {
    alert("Please fill in all fields.");
    return;
  }

  const reader = new FileReader();
  reader.onload = function (e) {
    const uniqueId = "mom_" + Date.now();

    const card = document.createElement("div");
    card.className = "imageCard";

    card.innerHTML = `
      <img src="${e.target.result}" alt="Mother's Photo" />
      <p><strong>ID:</strong> ${uniqueId}</p>
      <p>${message}</p>
    `;

    imagesContainer.appendChild(card);
    uploadForm.reset();
  };

  reader.readAsDataURL(imageFile);
});
