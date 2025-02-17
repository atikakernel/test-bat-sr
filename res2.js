const form = document.getElementById('signin-form');
const submitBtn = document.querySelector('.btn.btn-style.btn-primary');

submitBtn.addEventListener('click', function(event) {
  const name = document.getElementById('w3lName').value.trim();
  const subject = document.getElementById('w3lSubject').value.trim();
  const email = document.getElementById('w3lSender').value.trim();
  const phone = document.getElementById('w3lPhone').value.trim();
  const message = document.getElementById('w3lMessage').value.trim();

  if (!name || !subject || !email || !phone || !message) {
    event.preventDefault();
    alert('Por favor complete todos los campos antes de enviar el formulario.');
  }
});
