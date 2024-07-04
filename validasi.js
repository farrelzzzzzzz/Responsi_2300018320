function validasiform() {
    const nama = document.getElementById('nama').value.trim();
    const email = document.getElementById('email').value.trim();
    const ticket = document.getElementById('ticket').value.trim();
    
    const namePattern = /^[A-Za-z\s]+$/;
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

    if (nama === "") {
        alert("Nama Tidak Boleh Kosong");
        return false;
    } else if (!namePattern.test(nama)) {
        alert("Nama Hanya Boleh Mengandung Huruf dan Spasi");
        return false;
    }

    if (email === "") {
        alert("Email Tidak Boleh Kosong");
        return false;
    } else if (!emailPattern.test(email)) {
        alert("Email Tidak Valid");
        return false;
    }

    if (ticket === "" || isNaN(ticket) || ticket <= 0) {
        alert("Jumlah tiket harus lebih dari 0");
        return false;
    }

    alert("Form Berhasil Disimpan !");
    return true;
}
