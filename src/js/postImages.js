function generateProfile() {
    const input = document.getElementById("instagram").value;

    const url = `https://api.github.com/users/${input}`;
    console.log("procecing");
    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.message == "Not Found") {
                console.log(data.message);
                localStorage.setItem("Avatar", "../src/images/profile.jpeg");
                Swal.fire({
                    icon: "failed",
                    title: "Note",
                    text: "Gambar tidak ada set ke default"
                });
                return;
            }

            localStorage.setItem("Avatar", data.avatar_url);
            Swal.fire({
                icon: "success",
                title: "Changed",
                text: "Gambar berhasil di ganti"
            });
            window.location.href = "../sena.html"
        })
        .catch(error => {
            console.log(error);
        });
}
