document.addEventListener("DOMContentLoaded", function () {
    const footerContainer = document.getElementById("footer-container");

    const footer = document.createElement("footer");
    footer.innerHTML = `
        <div>
            <a href="https://www.facebook.com/profile.php?id=100004296407496" target="_blank"><img src="images/fb_icon.png" alt="Ikona facebook" class="footer-icon"/></a>
            <a href="https://www.instagram.com/_mnichu_/" target="_blank"><img src="images/instagram_icon.png" alt="Ikona instagram" class="footer-icon"/></a>
            <a href="https://github.com/Mnichuu" target="_blank"><img src="images/github_icon.png" alt="Ikona github" class="footer-icon"/></a>
        </div>
        <p>© Stanisław Mnich 2023</p>
    `;

    footerContainer.appendChild(footer);
});
