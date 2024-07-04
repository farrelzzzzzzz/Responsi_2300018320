<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nama = $_POST['nama'];
    $email = $_POST['email'];
    $ticket = $_POST['ticket'];

    // Menyimpan data ke dalam file teks
    $file = 'pesanan.txt';
    $current = file_get_contents($file);
    $current .= "Nama: $nama, Email: $email, Jumlah Tiket: $ticket\n";
    file_put_contents($file, $current);

    echo "Pemesanan tiket berhasil!";
}
?>
