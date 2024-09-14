
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // input form
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    // Cek
    if (!name || !email || !message) {
        alert('Harap isi semua data sebelum mengirim.');
        return;
    }

    // data yang sudah disubmit
    document.getElementById('submitted-name').innerText = name;
    document.getElementById('submitted-email').innerText = email;
    document.getElementById('submitted-message').innerText = message;
    
    // Tampilkan waktu saat ini
    const now = new Date();
    document.getElementById('current-time').innerText = now.toLocaleString();

    // Reset formulir
    document.getElementById('contactForm').reset();
    
});
