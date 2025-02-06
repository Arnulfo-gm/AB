const sucursales = {
    "MX-YUC": {
        nombre: "Yucatán",
        sucursales: [
            { nombre: "Oficina Matriz (Descuento por nómina)", 
                direccion:"C. 23 180, García Ginerés, 97070 Mérida, Yuc.", 
                numero:"01 (999)9-255130 / 9-256870 / 9-255703",
                logo: "../../activos/img/grupoab.jpg", 
                mapa: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d931.2901481940256!2d-89.62785582735707!3d20.986198756099355!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f5671575bf7076d%3A0xe3ec6364f4ff9fd2!2sMetLife!5e0!3m2!1ses-419!2smx!4v1736186017810!5m2!1ses-419!2smx" },

            { nombre: "Promotoría Yucatán", 
                direccion:"Calle 16 No.188 x 17 y 19 Col. México Oriente. Mérida, Yucatán.",
                numero:"01 (999) 9-260708 / 2-540214",
                logo: "../../activos/img/no imagen.jpg", 
                mapa: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d232.82265123852773!2d-89.62708853435986!3d20.98612549695673!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f5676ac1c93e797%3A0xf466def75536feb5!2sMetlife%20Mexico!5e0!3m2!1ses-419!2smx!4v1736873239744!5m2!1ses-419!2smx" },

            { nombre: "Promotoría Cancun", 
                direccion:"C. 21 151, García Ginerés, 97120 Mérida, Yuc.",
                numero:"",
                logo: "../../activos/img/no imagen.jpg", 
                mapa: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d232.82265123852773!2d-89.62708853435986!3d20.98612549695673!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f5676ac1c93e797%3A0xf466def75536feb5!2sMetlife%20Mexico!5e0!3m2!1ses-419!2smx!4v1736873239744!5m2!1ses-419!2smx" },

            { nombre: "Promotoria Fenix", 
                direccion:"Avenida Felipe Carrillo Puerto # 77 esquina con calle 9 Col. Felipe Carrillo Puerto, Mérida, Yucatán.",
                numero:"01 (999) 9-200377 / 9-200871",
                logo: "../../activos/img/no imagen.jpg", 
                mapa: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1744.185115890607!2d-89.60146451412294!3d20.996943276486412!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f5671333970c9a1%3A0x44e0d983e5f5b5e1!2sPromotoria%20Fenix%20GAB!5e0!3m2!1ses-419!2smx!4v1736874055122!5m2!1ses-419!2smx" }
        ]
    },
    "MX-CAM": {
        nombre: "Campeche",
        sucursales: [
            { nombre: "Promotoría Campeche", 
                direccion:"Calle Guayacán Mza. 12 Lote 1, Bosques de Campeche. Campeche, Campeche.",
                numero:"01(981) 8-113487 / 8-116455",
                logo: "../../activos/img/no imagen.jpg", 
                mapa: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3753.2156739096677!2d-90.5589665249525!3d19.83082528153548!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85f833c0ece9212f%3A0x818186d3014f595a!2sPromotor%C3%ADa%20Campeche%20AB-MetLife!5e0!3m2!1ses-419!2smx!4v1736874274385!5m2!1ses-419!2smx" }
        ]
    },
    "MX-ROO": {
        nombre: "Quintana Roo",
        sucursales: [
            { nombre: "Promotoría Chetumal", 
                direccion:"AV Efrain Aguilar 479, Colonia Campestre, C.P. 77030, Chetumal Quintana Roo.",
                numero:"(983) 1277121 / (983) 1277188",
                logo: "../../activos/img/no imagen.jpg", 
                mapa: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d227.23383722416244!2d-88.314286!3d18.504676!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f5ba3500abdfa9b%3A0x13fdc90fbb2e73cb!2sAv%20Efra%C3%ADn%20Aguilar%20479%2C%20Campestre%2C%2077030%20Chetumal%2C%20Q.R.!5e1!3m2!1ses!2smx!4v1736874478432!5m2!1ses!2smx" },

            { nombre: "Promotoría Cancun", 
                direccion:"Av. Bonampack Lote 60 Mza. 10, Super Mza 4. Cancún, Quintana Roo.",
                numero:"01 (998) 2-518374 / 2-519807 / 8-924904",
                logo: "../../activos/img/no imagen.jpg", 
                mapa: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d232.5661139781625!2d-86.822104!3d21.150097!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f4c2bfd7e363041%3A0xc5ce8c168b0c1a5a!2sPromotoria%20Canc%C3%BAn%20-%20GAB%20-%20METLIFE!5e0!3m2!1sen!2sus!4v1736874401972!5m2!1sen!2sus" }
        ]
    },
    "MX-PUE": {
        nombre: "Puebla",
        sucursales: [
            { nombre: "Promotoría Horizonte", 
                direccion:"BLV Esteban de Antuñano No. 2506, Col. Ampliación Reforma entre Av. 25 PTE y Av. 27 PTE. Puebla, Puebla, C.P. 72160",
                numero:"01 (222) 2-796388 / 2-796389",
                logo: "../../activos/img/no imagen.jpg", 
                mapa: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d227.23383722416244!2d-88.314286!3d18.504676!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f5ba3500abdfa9b%3A0x13fdc90fbb2e73cb!2sAv%20Efra%C3%ADn%20Aguilar%20479%2C%20Campestre%2C%2077030%20Chetumal%2C%20Q.R.!5e1!3m2!1ses!2smx!4v1736874533404!5m2!1ses!2smx" },

            { nombre: "Promotoría Elite", 
                direccion:"",
                numero:"",
                logo: "../../activos/img/no imagen.jpg", 
                mapa: "" }

        ]
    },
    "MX-VER": {
        nombre: "Veracruz",
        sucursales: [
            { nombre: "Sucursal Veracruz", 
                direccion:"Mar Mediterráneo No. 280 x Blvd. Reyes Heroles y Costa Dorada, Fracc. Costa Verde. Veracruz, Veracruz.",
                numero:"01 (229) 1-301122 / 1-301716",
                logo: "logo1.png", 
                mapa: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d227.23383722416244!2d-88.314286!3d18.504676!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f5ba3500abdfa9b%3A0x13fdc90fbb2e73cb!2sAv%20Efra%C3%ADn%20Aguilar%20479%2C%20Campestre%2C%2077030%20Chetumal%2C%20Q.R.!5e1!3m2!1ses!2smx!4v1736874619119!5m2!1ses!2smx" },

            { nombre: "Sucursal Apolo", 
                direccion:"",
                numero:"",
                logo: "logo2.png", 
                mapa: "" }
        ]
    }
};

const infoBox = document.getElementById('info-box-est');
const modalSucursal = document.getElementById('modal-sucursal');
const modalTitleSucursal = document.getElementById('modal-title-sucursal');
const modalLogoSucursal = document.getElementById('modal-logo-sucursal');
const modalNumeroSucursal = document.getElementById('modal-numero-sucursal');
const modalDireccion = document.getElementById('modal-direccion');
const modalMapaSucursal = document.getElementById('modal-mapa-sucursal');
const closeModalSucursal = document.querySelector('.close-sucursal');

function openModalSucursal(sucursal) {
    modalTitleSucursal.textContent = sucursal.nombre;
    modalLogoSucursal.src = sucursal.logo;
    modalDireccion.textContent = sucursal.direccion;
    modalNumeroSucursal.textContent =sucursal.numero;
    modalMapaSucursal.innerHTML = `<iframe src="${sucursal.mapa}" width="100%" height="100%" frameborder="0"></iframe>`;
    modalSucursal.style.display = 'block';
}

closeModalSucursal.addEventListener('click', () => {
    modalSucursal.style.display = 'none';
});

window.addEventListener('click', (event) => {
    if (event.target === modalSucursal) {
        modalSucursal.style.display = 'none';
    }
});

if (infoBox) {
    document.querySelectorAll('.estado').forEach(estado => {
        estado.addEventListener('click', function (event) {
            event.stopPropagation();

            const estadoId = this.id;
            const estadoInfo = sucursales[estadoId];

            if (estadoInfo) {
                const contenido = `
                    <h3>${estadoInfo.nombre}</h3>
                    <ul>
                        ${estadoInfo.sucursales.map((sucursal, index) =>
                            `<li><a href="#" data-estado="${estadoId}" data-index="${index}">${sucursal.nombre}</a></li>`
                        ).join('')}
                    </ul>
                `;
                infoBox.innerHTML = contenido;
                infoBox.style.display = 'block';
                infoBox.style.left = `${event.pageX + 10}px`;
                infoBox.style.top = `${event.pageY + 10}px`;
                infoBox.style.opacity = '1';

                infoBox.querySelectorAll('a').forEach(link => {
                    link.addEventListener('click', (e) => {
                        e.preventDefault();
                        const estadoId = link.dataset.estado;
                        const sucursalIndex = link.dataset.index;
                        const sucursal = sucursales[estadoId].sucursales[sucursalIndex];
                        openModalSucursal(sucursal);
                    });
                });
            }
        });
    });

    document.addEventListener('click', function (event) {
        if (!infoBox.contains(event.target)) {
            infoBox.style.opacity = '0';
            setTimeout(() => {
                infoBox.style.display = 'none';
            }, 300);
        }
    });
}
