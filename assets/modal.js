// Registration modal (main one)
const modal = document.getElementById("registrationModal");
const openBtn = document.getElementById("openModal");
const openBtn2 = document.getElementById("openModal2");
const closeBtn = document.querySelector(".close");

if (modal && openBtn && closeBtn && openBtn2) {
  openBtn.onclick = () => { modal.style.display = "flex"; };
  openBtn2.onclick = () => { modal.style.display = "flex"; };
  closeBtn.onclick = () => { modal.style.display = "none"; };
  window.onclick = (e) => { if (e.target == modal) modal.style.display = "none"; };

  // ✅ Close modal on ESC key
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") modal.style.display = "none";
  });
}

// ✅ Generic modal setup function
function setupModal(triggerId, modalId) {
  const trigger = document.getElementById(triggerId);
  const modal = document.getElementById(modalId);

  if (!trigger || !modal) return; // safeguard
  const closeBtn = modal.querySelector(".close");

  // Open modal
  trigger.addEventListener("click", (e) => {
    e.preventDefault();
    modal.style.display = "flex";   // ensure modal is visible
    setTimeout(() => modal.classList.add("show"), 10); // fade in
  });

  // Close modal
  function closeModal() {
    modal.classList.remove("show");
    setTimeout(() => {
      modal.style.display = "none";
    }, 300); // match fade duration
  }

  closeBtn.addEventListener("click", closeModal);
  window.addEventListener("click", (e) => { if (e.target === modal) closeModal(); });
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") closeModal(); });
}

// ✅ Attach handlers for other modals
setupModal("openTerms", "termsModal");
setupModal("openRefund", "refundModal");
setupModal("openPrivacy", "privacyModal");

// ✅ Phone field: digits only
const phoneField = document.getElementById("phone");
if (phoneField) {
  phoneField.addEventListener("input", function () {
    this.value = this.value.replace(/\D/g, ""); // allow only numbers
  });
}
