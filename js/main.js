// Navigation

document.addEventListener("DOMContentLoaded", () => {
    var nav = document.getElementById("main-nav");

    nav.innerHTML = `
            <div class="container-fluid">
            <a id="brandName" class="navbar-brand ps-3 pe-2 fancy" href="/">Angeline Nguyen</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item px-2">
                        <a class="nav-link active" aria-current="page" href="/">Home</a>
                    </li>
                    <li class="nav-item px-2">
                        <a class="nav-link" href="/about.html">About</a>
                    </li>
                    <li class="nav-item px-2">
                        <a class="nav-link" href="/projects.html">Projects</a>
                    </li>
                    <li class="nav-item px-2">
                        <a class="nav-link" href="/contact.html">Contact</a>
                    </li>
                </ul>
            </div>
        </div>
    `;
});

// Footer

document.addEventListener("DOMContentLoaded", () => {
    var footer = document.getElementById("footer");

    nav.innerHTML = `
        <div class="container my-3">
            <small>Copyright © 2026 Angeline Nguyen</small>
        </div>
    `;
});