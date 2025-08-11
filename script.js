// Smooth scroll for all links
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        document.querySelector(link.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Back to top button
const topBtn = document.createElement("button");
topBtn.innerHTML = "↑ Top";
topBtn.id = "topBtn";
document.body.appendChild(topBtn);

topBtn.style.position = "fixed";
topBtn.style.bottom = "20px";
topBtn.style.right = "20px";
topBtn.style.padding = "10px";
topBtn.style.background = "#ff9800";
topBtn.style.color = "white";
topBtn.style.border = "none";
topBtn.style.borderRadius = "5px";
topBtn.style.display = "none";
topBtn.style.cursor = "pointer";

window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }
});

topBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

// Dark mode toggle
const toggleBtn = document.createElement("button");
toggleBtn.innerHTML = "🌙 Dark Mode";
toggleBtn.id = "toggleBtn";
toggleBtn.style.position = "fixed";
toggleBtn.style.top = "20px";
toggleBtn.style.right = "20px";
toggleBtn.style.padding = "10px";
toggleBtn.style.backgro