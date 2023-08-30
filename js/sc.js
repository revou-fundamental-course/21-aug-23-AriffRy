 document.getElementById("buttonValidate").addEventListener("click", function () {
// Mengambil nilai dari elemen input nama
    var inputNama = document.getElementById("name-input").value;
    
    // Mengambil nilai dari elemen input tanggal lahir
    var inputTanggalLahir = document.getElementById("tgl_lahir").value;
    
    // Mengambil nilai dari elemen radio jenis kelamin yang dipilih
    var inputJenisKelamin = document.querySelector('input[name="jenis_kelamin"]:checked').value;
    
    // Mengambil nilai dari elemen textarea pesan
    var inputPesan = document.getElementById("pesan").value;
    
    // Mengganti teks pada elemen dengan ID "user" dengan nilai inputNama
    document.getElementById("user").textContent = inputNama;

    // mengganti waktu
    var waktuSekarang = new Date();
    var waktu = waktuSekarang.toLocaleString();
    
    // Mengganti teks pada elemen hasilSubmit
    var hasilSubmit = document.querySelector(".hasilSubmit");
    hasilSubmit.innerHTML = `
        <fieldset style="width: 500px;">
            <p id="waktuSekarang">Current Time : ${waktu}</p>
            <p id="hasilNama">Nama : ${inputNama}</p>
            <p id="hasilTlahir">Tanggal Lahir : ${inputTanggalLahir}</p>
            <p id="hasilJkel">Jenis Kelamin : ${inputJenisKelamin}</p>
            <p id="hasilPesan">Pesan : ${inputPesan}</p>
        </fieldset>
    `;
});