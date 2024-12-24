(function() {
    // Base URL for loading resources
    const BASE_URL = 'https://testingnil4.ru/';

    // Load CSS files
    const cssFiles = [
        'lib/bootstrap-3.3.6-dist/css/bootstrap.min.css',
        'lib/spectrum/spectrum.css',
        'css/style.css'
    ];

    cssFiles.forEach(file => {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.type = 'text/css';
        link.href = `${BASE_URL}/${file}`;
        document.head.appendChild(link);
    });

    // Load Google Fonts
    const fontLink = document.createElement('link');
    fontLink.href = 'https://fonts.googleapis.com/css?family=Roboto:400,400italic,700,700italic&subset=latin,cyrillic';
    fontLink.rel = 'stylesheet';
    document.head.appendChild(fontLink);

    const materialIconsLink = document.createElement('link');
    materialIconsLink.href = 'https://fonts.googleapis.com/icon?family=Material+Icons';
    materialIconsLink.rel = 'stylesheet';
    document.head.appendChild(materialIconsLink);

    // Create constructor container
    const container = document.createElement('div');
    container.className = 'tshirt-constructor';  // Используем класс для идентификации
    container.setAttribute('data-tshirt-constructor', '');
    
    // Вставляем контейнер в родительский элемент скрипта
    document.currentScript.parentElement.appendChild(container);

    // Load JavaScript dependencies in order
    const scripts = [
        'https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js',
        'https://code.jquery.com/ui/1.11.4/jquery-ui.min.js',
        `${BASE_URL}/lib/jquery-plugins/jquery-ui-touch-punch/jquery.ui.touch-punch.min.js`,
        `${BASE_URL}/lib/bootstrap-3.3.6-dist/js/bootstrap.min.js`,
        `${BASE_URL}/lib/react-15.0.2/react.min.js`,
        `${BASE_URL}/lib/react-15.0.2/react-dom.min.js`,
        `${BASE_URL}/lib/react-15.0.2/browser.min.js`,
        `${BASE_URL}/lib/spectrum/spectrum.js`,
        `${BASE_URL}/lib/html2canvas/html2canvas.js`,
        `${BASE_URL}/js/constructor.js`
    ];

    function loadScript(index) {
        if (index >= scripts.length) {
            // All scripts loaded, initialize the constructor
            if (window.editor && window.editor.init) {
                window.editor.init();
            }
            return;
        }

        const script = document.createElement('script');
        script.src = scripts[index];
        script.onload = () => loadScript(index + 1);
        document.body.appendChild(script);
    }

    // Start loading scripts
    loadScript(0);
})();