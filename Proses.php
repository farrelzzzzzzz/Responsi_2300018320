<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nama = $_POST['nama'];
    $email = $_POST['email'];
    $ticket = $_POST['ticket'];

    
    $file = 'pesanan.txt';
    $handle = fopen($file, 'a'); 

    
    $data = "Nama: $nama, Email: $email, Jumlah Tiket: $ticket\n";
    fwrite($handle, $data);

    
    fclose($handle);

    echo "Pemesanan tiket berhasil!";
}
?>
