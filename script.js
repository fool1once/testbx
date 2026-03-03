function showSection(id) {
    document.querySelectorAll(".section").forEach(section => {
        section.classList.remove("active");
    });

    document.getElementById(id).classList.add("active");
}

function toggleMenu() {
    document.getElementById("sideMenu").classList.toggle("active");
}
