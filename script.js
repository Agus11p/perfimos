function render(lista) {
    grid.innerHTML = '';
    
    if (lista.length === 0) {
        grid.innerHTML = '<p style="color:white; grid-column: 1/-1; text-align:center;">No se encontraron perfumes.</p>';
        return;
    }

    lista.forEach(p => {
        const div = document.createElement('div');
        // Si no hay stock, le bajamos un poco la opacidad a la tarjeta
        div.className = 'card';
        if (!p.disponible) {
            div.style.opacity = "0.6";
        }

        // Preparamos el mensaje para Instagram
        const mensajeBase = `Hola! Me interesa el perfume: ${p.nombre}`;
        const mensajeStock = p.disponible ? "" : " (Vi que figura sin stock, ¿cuándo vuelve a entrar?)";
        const linkIG = `https://www.instagram.com/_perfimos/?text=${encodeURIComponent(mensajeBase + mensajeStock)}`;

        div.innerHTML = `
            <img src="${p.imagen}" style="${p.disponible ? '' : 'filter: grayscale(1);'}">
            <h3>${p.nombre} ${p.disponible ? '' : '<br><span style="color:#ff4444; font-size:9px;">(SIN STOCK)</span>'}</h3>
            <p class="precio">$${p.precio.toLocaleString('es-AR')}</p>
            <a href="${linkIG}" target="_blank" class="btn-ig" style="${p.disponible ? '' : 'background: #444; border: 1px solid #666;'}">
                ${p.disponible ? 'PEDIR POR IG' : 'CONSULTAR LLEGADA'}
            </a>
        `;
        grid.appendChild(div);
    });
}