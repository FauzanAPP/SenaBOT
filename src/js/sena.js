/* FauzanAPP SMK Ma'arif 9 Kebumen XII RPL 2*/

let i = 0;

const APIKEY = "zenzkey_b70c92e221";

let getYtAudioDownload = null;

const container = document.getElementById("container");
const profile = document.getElementById("profile");
const dropdown = document.getElementById("profile-card");
const inputs = document.getElementById("chat");
const buttons = document.getElementById("btn-chat");

profile.addEventListener("click", () => {
    dropdown.style.display = "";
    inputs.setAttribute("disabled", "");
    inputs.style.pointerEvents = "none";
    buttons.setAttribute("disabled", "");
    buttons.style.pointerEvents = "none";
    container.style.opacity = "0.4";
    container.style.background = "black";
});
const imageProfile = document.getElementById("profile-images");
setInterval(() => {
    imageProfile.setAttribute("src", localStorage.getItem("avatar"));
    const profileTitle = document.getElementById("profile-title");
    const profileSubtitle = document.getElementById("profile-subtitle");
    profileTitle.innerHTML = localStorage.getItem("username");
    profileSubtitle.innerHTML = localStorage.getItem("bio");
    if (
        localStorage.getItem("avatar") == "" ||
        localStorage.getItem("avatar") == null
    ) {
        return localStorage.setItem("../images/profile.jpeg");
    }
}, 100);

function setProfile() {
    const profileUsername = document.getElementById("profile-username").value;
    const profileBio = document.getElementById("profile-bio").value;
    const profileImages = document.getElementById("profile-file");
    const profiles = window.URL.createObjectURL(profileImages.files[0]);
    const profilImages = document.getElementById("profile-images");

    if (
        profileUsername == "" ||
        profileBio == "" ||
        profileImages.value == ""
    ) {
        return;
    }

    inputs.removeAttribute("disabled");
    inputs.style.pointerEvents = "auto";
    buttons.removeAttribute("disabled");
    buttons.style.pointerEvents = "auto";

    container.style.opacity = "1";

    localStorage.setItem("username", profileUsername);
    localStorage.setItem("bio", profileBio);
    localStorage.setItem("avatar", profiles);
    localStorage.setItem("verified", true);
    dropdown.style.display = "none";
}

const downloadType = (filename, content) => {
    let el = document.createElement("a");
    el.setAttribute(
        "href",
        "data:text/plain;charset=utf-8," + encodeURIComponent(content)
    );
    el.setAttribute("download", filename);

    el.style.display = "none";
    document.body.appendChild(el);

    el.click();

    document.body.removeChild(el);
};

function setChat(ids, idWrapper, content) {
    const main = document.querySelector(".main");

    const setChat = document.createElement("div");

    setChat.setAttribute("class", "senachat");
    setChat.id = ids;
    main.appendChild(setChat);

    const setChatJadi = document.getElementById(ids);
    const setImage = document.createElement("img");
    setImage.setAttribute("class", "foto-sena");
    setImage.setAttribute("src", "../src/images/sena.jpg");
    setChatJadi.appendChild(setImage);

    const setChatWrapper = document.createElement("div");
    setChatWrapper.setAttribute("class", "wrapper-senachat");
    setChatWrapper.id = idWrapper;
    setChatJadi.appendChild(setChatWrapper);

    const setChatWrapperJadi = document.getElementById(idWrapper);
    const nameChat = document.createElement("p");
    const textChat = document.createElement("p");
    nameChat.setAttribute("class", "name-chat");
    textChat.setAttribute("class", "text-chat");
    setChatWrapperJadi.appendChild(nameChat);
    setChatWrapperJadi.appendChild(textChat);

    nameChat.innerHTML =
        '<span style="color: red">Nekoyama Sena</span> ( Sena )';
    textChat.innerHTML = content;
}

function ytMusicDownload() {
    console.log(getYtAudioDownload);

    const blob = new Blob([getYtAudioDownload], { type: "audio/m4a" });

    const url = window.URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.style.display = "none";
    a.setAttribute("href", url);
    a.setAttribute("download", "FauzanAPPYT.mp3");

    document.body.appendChild(a);

    a.click();

    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
}

function comingSoon() {
    Swal.fire({
        icon: "error",
        title: "Note",
        text: "Fitur Coming Soon"
    });
}
const btn = document.getElementById("btn-chat");

document.getElementById("chat").addEventListener("keypress", event => {
    if (event.key == "Enter") {
        event.preventDefault();
        btn.click();
    }
});

function onClick() {
    i = i + 1;
    const info = document.querySelector(".info-text");
    const input = document.getElementById("chat").value;
    const values = document.getElementById("chat");
    if (input == "") {
        return Swal.fire({
            icon: "error",
            title: "Note",
            text: "Data tidak boleh null"
        });
    }

    values.value = "";

    const inputSena = document.querySelector(".senachat");
    const main = document.querySelector(".main");

    const myChat = document.createElement("div");
    myChat.setAttribute("class", "mychat");
    myChat.id = i;
    main.appendChild(myChat);

    const myChatJadi = document.getElementById(`${i}`);
    const img = document.createElement("img");
    const wrapperImg = document.createElement("div");
    wrapperImg.setAttribute("class", "poto-saya");
    setInterval(() => {
        img.setAttribute("src", localStorage.getItem("avatar"));
    }, 100);
    myChatJadi.appendChild(wrapperImg);
    wrapperImg.appendChild(img);

    const wrapperMyChat = document.createElement("div");
    wrapperMyChat.setAttribute("class", "wrapper-mychat");
    wrapperMyChat.id = `wrapper${i}`;
    myChatJadi.appendChild(wrapperMyChat);

    const wrapperMyChatJadi = document.getElementById(`wrapper${i}`);
    const nameChatSaya = document.createElement("p");
    const textChatSaya = document.createElement("p");
    nameChatSaya.setAttribute("class", "name-chat");
    textChatSaya.setAttribute("class", "text-chat");
    wrapperMyChatJadi.appendChild(nameChatSaya);
    wrapperMyChatJadi.appendChild(textChatSaya);
    setInterval(() => {
        nameChatSaya.innerHTML = localStorage.getItem("username");
    }, 100);

    textChatSaya.innerHTML = input;

    /* Fitur */

    /** CEK IP **/
    let arrayValueForIP = input.split("-");
    if (arrayValueForIP[0] == "cekip") {
        if (arrayValueForIP[1] == "") {
            main.removeChild(myChat);
            Swal.fire({
                icon: "error",
                title: "Note",
                text: "Url Parameter Tidak boleh Null"
            });
            return;
        }

        const IP = arrayValueForIP[1];
        const cekIp = `https://cek-ip-zhirrr.vercel.app/api/cek?ip=${IP}`;
        const button = document.getElementById("btn-chat");
        button.setAttribute("disabled", "");
        button.innerHTML =
            '<i class="fa-brands fa-cloudscale" id="loading" style="color: #ffffff;"></i>';

        setChat(
            `senachat-youtubetyping${i}`,
            `wrappersena-youtubetyping${i}`,
            `Bentar ya kak ✨ ...`
        );

        fetch(cekIp)
            .then(res => res.json())
            .then(result => {
                const ipCountry = result.country;
                const ipTimezone = result.timezone;
                const ipOrg = result.org;

                setChat(
                    `sena-cekip${i}`,
                    `wrappersena-cekip${i}`,
                    `<span style="font-weight: bolder">Berhasil mendapatkan data</span><br><br>Country: ${ipCountry},<br>Timezone: ${ipTimezone},<br>Org: ${ipOrg}.<br><br>FauzanAPP`
                );
                button.removeAttribute("disabled");
                button.innerHTML = '<i class="fa-solid fa-arrow-right"></i>';
            })
            .catch(error => {
                console.error(error);
            });
        return;
    }

    /** YOUTUBE **/
    let arrayValueForYoutubeDownload = input.split(" ");
    if (arrayValueForYoutubeDownload[0] == "+youtube") {
        if (arrayValueForYoutubeDownload[1] == "") {
            main.removeChild(myChat);
            Swal.fire({
                icon: "error",
                title: "Note",
                text: "Url Parameter Tidak boleh Null"
            });
            return;
        }

        const Youtube = arrayValueForYoutubeDownload[1];
        let match = Youtube.match(/\/youtu\.be\//);
        let match2 = Youtube.match(/\/youtube\.com\//);
        let match3 = Youtube.match(/\/www\.youtube\.com\//);
        console.log(Youtube);

        if (match || match2 || match3) {
            const button = document.getElementById("btn-chat");
            button.setAttribute("disabled", "");
            button.innerHTML =
                '<i class="fa-brands fa-cloudscale" id="loading" style="color: #ffffff;"></i>';

            setChat(
                `senachat-youtubetyping${i}`,
                `wrappersena-youtubetyping${i}`,
                `Bentar ya kak ✨ ...`
            );

            let apiYoutube = `https://api.zahwazein.xyz/downloader/youtube?apikey=${APIKEY}&url=${Youtube}`;
            fetch(apiYoutube)
                .then(res => res.json())
                .then(data => {
                    const getYtTitle = data.result.title;
                    const getYtThumbnail = data.result.thumbnail;
                    const getYtDuration = data.result.duration;
                    const getYtVideo = data.result.getVideo;
                    let getYtAudio = 0;

                    for (let a = 0; a < getYtVideo.length; a++) {
                        if (getYtVideo[a].quality == "128kbps") {
                            getYtAudio = a;
                        }
                    }

                    getYtAudioDownload = getYtVideo[getYtAudio].url;
                    const getYtAudioQuality = getYtVideo[getYtAudio].quality;
                    const getYtQuality = getYtVideo.quality;
                    const getYtSize = getYtVideo.formattedSize;

                    setChat(
                        `senachat-youtube${i}`,
                        `wrappersena-youtube${i}`,
                        `
                        <img class="yt-dl-thumbnail" src=${getYtThumbnail} alt="" />
                        <p class="yt-dl-title">${getYtTitle}</p>
                        <div class="wrapper-yt-dl">
                        <p class="yt-dl-duration">${getYtDuration}</p>
                        <p class="yt-dl-duration">${getYtSize}</p>
                        </div>
                        <button onclick="comingSoon()" type="button" class="yt-dl-btn-cs">Download Video ${getYtQuality}</button>
                        <button onclick="ytMusicDownload()" type="button" class="yt-dl-btn-cs succes-btn">Download Audio ${getYtAudioQuality}</button>
                    `
                    );
                    button.removeAttribute("disabled");
                    button.innerHTML =
                        '<i class="fa-solid fa-arrow-right"></i>';
                    return;
                })
                .catch(error => console.log(error));
        } else {
            main.removeChild(myChat);
            Swal.fire({
                icon: "error",
                title: "Note",
                text: "Url Harus Bertipe Youtube"
            });
            return;
        }
        return;
    }

    /* Kata Kata */

    if (input == "+randomquotes-anime") {
        const apiQuotes = "https://katanime.vercel.app/api/getrandom";
        const button = document.getElementById("btn-chat");
        button.setAttribute("disabled", "");
        button.innerHTML =
            '<i class="fa-brands fa-cloudscale" id="loading" style="color: #ffffff;"></i>';

        fetch(apiQuotes)
            .then(res => res.json())
            .then(response => {
                setChat(
                    `senachat-quotes${i}`,
                    `wrappersena-quotes${i}`,
                    `<p>
                Quotes dari anime: <span style="font-weight: bold;color: #bbff59">${response.result[0].anime}</span><br><br>
                Quotes: <span style="color: #a0ff6b">${response.result[0].indo}</span><br><br>
                ~ <i style="color: #93ff6f">${response.result[0].character}</i> ~
                </p>`
                );

                button.removeAttribute("disabled");
                button.innerHTML = '<i class="fa-solid fa-arrow-right"></i>';
            })
            .catch(err => console.error(err));
        return;
    }

    /** Fetch Website **/
    const getFetchUrl = input.split(" ");

    if (getFetchUrl[0] == "+fetch") {
        if (getFetchUrl[1] == "") {
            main.removeChild(myChat);
            Swal.fire({
                icon: "error",
                title: "Note",
                text: "Url Parameter Tidak boleh Null"
            });
            return;
        }

        if (!getFetchUrl[1].includes("https://")) {
            return Swal.fire({
                icon: "error",
                title: "Note",
                text: "Url harus disertai dengan https"
            });
        }

        if (getFetchUrl[2] == null || getFetchUrl[2] == "") {
            return Swal.fire({
                icon: "error",
                title: "Note",
                text: "data ke 3 tidak boleh null"
            });
        }

        if (getFetchUrl[1] == "https://") {
            return Swal.fire({
                icon: "error",
                title: "Note",
                text: "Url harus di isi"
            });
        }

        fetch(
            `https://api.xcodeteam.xyz/api/tools/fetch?api_key=sk-dw0sszo45yzw2qxfy&target_url=${getFetchUrl[1]}`
        )
            .then(res => res.json())
            .then(result => {
                const output = result.data;
                downloadType(
                    `${getFetchUrl[2]}.txt`,
                    `
Fetching Data Made By FauzanAPP : 
${output}
              `
                );

                downloadType(
                    `${getFetchUrl[2]}.html`,
                    `
<!-- Fetching Data By FauzanAPP -->
${output}
                `
                );

                const idUser = ~~(Math.random() * 10000000);

                setChat(
                    `senafetch${i}`,
                    `wrappersenafetch${i}`,
                    `<span style="font-weight: bold">Data berhasil di fetch</span><br>id: ${idUser}`
                );
                return;
            });
        return;
    }

    /* End Fitur */

    const button = document.getElementById("btn-chat");
    button.setAttribute("disabled", "");
    button.innerHTML =
        '<i class="fa-brands fa-cloudscale" id="loading" style="color: #ffffff;"></i>';

    /* Typing */
    setTimeout(() => {
        setChat(
            `sena-typing${i}`,
            `wrappersena-typing${i}`,
            "Sedang mengetik...."
        );
    }, 100);
    /* End Typing */

    const DEVELOPER_ACCESS_TOKEN = "II3lYJK8yChs7uaj2Z7lXeylSfbML44y";

    fetch(
        `https://api.xcodeteam.xyz/api/artificial-intelligence/chatgpt-3?api_key=sk-dw0sszo45yzw2qxfy&question=${input}&custom_question=author&custom_answer=Fauzan APP
        `
    )
        /*  fetch(
        `https://api.clayzaaubert.my.id/api/ai/characterai?text=${input}&name=Nekoyama Sena&apikey=7xv5xp4B4X`
    ) */
        .then(res => res.json())
        .then(response => {
            const main = document.querySelector(".main");
            main.removeChild(document.getElementById(`sena-typing${i}`));
            i += 1;

            const message = response.data.message;

            setChat(`senachat${i}`, `wrappersena${i}`, message);
            button.removeAttribute("disabled");
            button.innerHTML = '<i class="fa-solid fa-arrow-right"></i>';
        })
        .catch(error => {
            setChat(
                `senachat-error${i}`,
                `wrappersena-error${i}`,
                `Chat lain kali aja ya hehe... atau gak gunain fitur lain.`
            );
            main.removeChild(document.getElementById(`sena-typing${i}`));
            button.removeAttribute("disabled");
            button.innerHTML = '<i class="fa-solid fa-arrow-right"></i>';
        

            console.error(error);
        });
}
