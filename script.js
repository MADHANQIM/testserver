 // Fungsi untuk menampilkan halaman check-in
function showCheckInPage() {
    document.getElementById('homePage').style.display = 'none';
    document.getElementById('checkinPage').style.display = 'block';
}

// Fungsi untuk menangani check-in
function handleCheckIn() {
    // Simpan status check-in di sessionStorage
    sessionStorage.setItem('checkinStatus', 'completed');

    // Redirect ke halaman utama
    window.location.href = 'index.html';
}

// Fungsi untuk menampilkan alert khusus
function showAlert() {
    document.getElementById("customAlert").style.display = "flex";
}

// Fungsi untuk menutup alert khusus
function closeAlert() {
    document.getElementById("customAlert").style.display = "none";
}

// Cek status check-in di sessionStorage dan tampilkan alert jika diperlukan
window.onload = function() {
    if (sessionStorage.getItem('checkinStatus') === 'completed') {
        // Tampilkan custom alert
        showAlert();

        // Hapus status check-in agar alert tidak muncul lagi
        sessionStorage.removeItem('checkinStatus');
    } else {
        // Jika belum check-in, tampilkan halaman utama
        document.getElementById('homePage').style.display = 'block';
    }
};