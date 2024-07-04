// This is just a basic example. You may need to adjust this based on your specific requirements.
function onWindowClose() {
    Neutralino.app.exit();
}

Neutralino.init();

Neutralino.events.on("windowClose", onWindowClose);

// Load Deno Fresh app
fetch('http://localhost:8000')
    .then(response => response.text())
    .then(html => {
        document.body.innerHTML = html;
        // Load Deno Fresh scripts
        const scripts = document.createElement('script');
        scripts.src = 'http://localhost:8000/main.js';
        scripts.type = 'module';
        document.body.appendChild(scripts);
    });