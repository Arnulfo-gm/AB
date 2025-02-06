function toggleSubMenu(submenuId) {
    const submenu = document.getElementById(submenuId);
    if (submenu) {
        submenu.classList.toggle('show');
    }
}

document.querySelectorAll('.dropdown').forEach(dropdown => {
    dropdown.addEventListener('mouseleave', () => {
        const submenu = dropdown.querySelector('.submenu');
        if (submenu) {
            submenu.classList.remove('show');
        }
    });
});




function loadPage(url) {
    if (url) {
        fetch(url)
            .then(response => {
                if (response.ok) {
                    return response.text();
                } else {
                    throw new Error("No se pudo cargar la página.");
                }
            })
            .then(html => {
                const mainContent = document.getElementById("main-content");
                mainContent.innerHTML = html;

                const tempDiv = document.createElement("div");
                tempDiv.innerHTML = html;
                tempDiv.querySelectorAll("script").forEach(script => {
                    if (!document.querySelector(`script[src="${script.src}"]`)) {
                        const newScript = document.createElement("script");
                        if (script.src) {
                            newScript.src = script.src;
                        } else {
                            newScript.textContent = script.textContent;
                        }
                        document.body.appendChild(newScript);
                    }
                });

                console.log("Página cargada correctamente.");
            })
            .catch(error => {
                console.error("Error:", error);
            });
    } else {
        console.error("La URL proporcionada no es válida");
    }
}









