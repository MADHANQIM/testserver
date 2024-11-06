function handleCheckIn() {
  // Simpan status check-in di sessionStorage
  sessionStorage.setItem('checkinStatus', 'completed');

  // Redirect ke halaman utama
  window.location.href = 'index.html';
}