const ui = {
    popup:       document.querySelector("#popUp"),
    agreeBtn:    document.querySelector("#popUpAgreeBtn")
};

const checkSavedCookie = localStorage.getItem("cookie")

window.addEventListener("DOMContentLoaded", () => {
    if (!checkSavedCookie) {
        ui.popup.classList.add("visible");
    } 

    ui.agreeBtn.addEventListener("click", () => {
        ui.popup.classList.remove("visible")
        cookieSaved()
    })
})

function cookieSaved () {
    const savedCookie = localStorage.setItem("cookie", true)
}