const contactForm = document.getElementById('contactForm');
const nameInput = document.getElementById('name');
const subjectInput = document.getElementById('subject');
const messageInput = document.getElementById('message');

contactForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const name = nameInput.value;
  const subject = subjectInput.value;
  const message = messageInput.value;

  if (!name || !subject || !message) {
    alert('Harap isi semua kolom.');
    return;
  }

  const emailBody = `Nama: ${name}\nSubjek: ${subject}\nPesan:\n${message}`;
  window.location.href = `mailto:arya.wibawa@office.ui.ac.id?subject=${subject}&body=${encodeURIComponent(emailBody)}`;
});