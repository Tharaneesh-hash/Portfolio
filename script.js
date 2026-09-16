
function toggleMenu() {
    const navbar = document.getElementById("navbar");
    navbar.classList.toggle("open");
}
function downloadResume() {
    alert(
        "Add your resume PDF as 'resume.pdf' in the portfolio folder."
    );

}
function projectMessage() {
    alert(
        "Project details coming soon!"
    );

}
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll("nav a");
window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 150;
        if (window.scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }
    });
    navLinks.forEach(link => {
        link.classList.remove("active");
        if (
            link.getAttribute("href") === "#" + current
        ) {
            link.classList.add("active");
        }
    });
});
window.addEventListener("load", () => {

    setTimeout(() => {

        document.getElementById("progressBar")
            .style.width = "80%";

    }, 500);

});