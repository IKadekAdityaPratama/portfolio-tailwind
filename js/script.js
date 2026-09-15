// ========================================
// MOBILE MENU
// ========================================

const menuButton = document.getElementById("menuButton");
const mobileMenu = document.getElementById("mobileMenu");

if (menuButton && mobileMenu) {

    menuButton.addEventListener("click", function () {

        mobileMenu.classList.toggle("hidden");

    });

}


// ========================================
// KALKULATOR NILAI MAHASISWA
// ========================================

function hitungNilai() {

    const tugas = parseFloat(
        document.getElementById("tugas").value
    );

    const uts = parseFloat(
        document.getElementById("uts").value
    );

    const uas = parseFloat(
        document.getElementById("uas").value
    );


    // Validasi

    if (
        isNaN(tugas) ||
        isNaN(uts) ||
        isNaN(uas)
    ) {

        alert("Silakan masukkan semua nilai!");

        return;
    }


    if (
        tugas < 0 || tugas > 100 ||
        uts < 0 || uts > 100 ||
        uas < 0 || uas > 100
    ) {

        alert("Nilai harus berada antara 0 sampai 100!");

        return;
    }


    // Perhitungan

    const nilaiAkhir =
        (tugas * 0.30) +
        (uts * 0.30) +
        (uas * 0.40);


    // Menentukan grade

    let grade;

    if (nilaiAkhir >= 85) {

        grade = "A";

    } else if (nilaiAkhir >= 75) {

        grade = "B";

    } else if (nilaiAkhir >= 65) {

        grade = "C";

    } else if (nilaiAkhir >= 50) {

        grade = "D";

    } else {

        grade = "E";

    }


    // Menentukan keterangan

    let keterangan;

    if (nilaiAkhir >= 65) {

        keterangan = "LULUS";

    } else {

        keterangan = "TIDAK LULUS";

    }


    // Menampilkan hasil

    document.getElementById("nilaiAkhir").textContent =
        nilaiAkhir.toFixed(2);

    document.getElementById("grade").textContent =
        grade;

    document.getElementById("keterangan").textContent =
        keterangan;


    document.getElementById("hasil").classList.remove("hidden");

}


// ========================================
// FORM CONTACT
// ========================================

function kirimPesan(event) {

    event.preventDefault();

    alert("Pesan berhasil dikirim! Terima kasih.");

}
