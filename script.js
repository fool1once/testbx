function showSection(id) {
    document.querySelectorAll(".section").forEach(section => {
        section.classList.remove("active");
    });

    document.getElementById(id).classList.add("active");
}

function toggleMenu() {
    const menu = document.getElementById("sideMenu");
    menu.style.display = menu.style.display === "flex" ? "none" : "flex";
}
