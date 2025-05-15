document.getElementById("loan-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const amount = parseFloat(document.getElementById("amount").value);
  const duration = parseInt(document.getElementById("duration").value);
  const interestRate = 0.10; // 10% flat interest per month

  const whatsappNumber = "6281234567890"; // Ganti dengan nomor WhatsApp kamu

  if (isNaN(amount) || isNaN(duration) || amount <= 0 || duration <= 0) {
    document.getElementById("result").innerHTML = "<p>Masukkan data yang valid.</p>";
    document.getElementById("whatsapp-button").style.display = "none";
    return;
  }

  const interest = amount * interestRate * duration;
  const total = amount + interest;
  const monthly = total / duration;

  document.getElementById("result").innerHTML = `
    <h3>Hasil Simulasi:</h3>
    <p>Halo <strong>${name}</strong>, berikut rincian pinjaman kamu:</p>
    <ul>
      <li>Jumlah Pinjaman: <strong>Rp ${amount.toLocaleString("id-ID")}</strong></li>
      <li>Durasi: <strong>${duration} bulan</strong></li>
      <li>Bunga total: <strong>Rp ${interest.toLocaleString("id-ID")}</strong></li>
      <li>Total yang harus dibayar: <strong>Rp ${total.toLocaleString("id-ID")}</strong></li>
      <li>Cicilan per bulan: <strong>Rp ${monthly.toLocaleString("id-ID")}</strong></li>
    </ul>
  `;

  // Buat pesan WA otomatis sesuai data user
  const waMessage = encodeURIComponent(`Halo, saya ${name} sudah mengisi form pinjaman.\nJumlah: Rp ${amount.toLocaleString("id-ID")}\nDurasi: ${duration} bulan\nMohon bantuannya.`);

  // Tampilkan tombol WA dengan link yang benar
  const whatsappBtn = document.getElementById("whatsapp-button");
  whatsappBtn.style.display = "block";
  whatsappBtn.querySelector("a").href = `https://wa.me/${whatsappNumber}?text=${waMessage}`;
});
