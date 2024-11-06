async function openCamera() {
    try {
      // Meminta akses ke kamera
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        
      // Menampilkan video ke elemen video di HTML
        const videoElement = document.querySelector('video');
        videoElement.srcObject = stream;
      videoElement.style.display = "block"; // Menampilkan elemen video
        videoElement.play();
    } catch (error) {
        console.error("Gagal mengakses kamera:", error);
    }
}