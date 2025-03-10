document.addEventListener('DOMContentLoaded', function() {
    const whatsappUrl = "https://api.whatsapp.com/send?phone=77775061481&text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5!%20%D0%9C%D0%B5%D0%BD%D1%8F%20%D0%B8%D0%BD%D1%82%D0%B5%D1%80%D0%B5%D1%81%D1%83%D0%B5%D1%82%20%D0%B2%D0%B0%D1%88%D0%B0%20%D0%BF%D1%80%D0%BE%D0%B4%D1%83%D0%BA%D1%86%D0%B8%D1%8F";
    const mainPageUrl = "https://minternational.ru/kz";
    
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
    
    document.body.addEventListener('click', function(e) {
        const link = e.target.closest('a');
        if (!link) return;
        
        const href = link.getAttribute('href');
        const text = link.textContent.trim().toLowerCase();
        
        console.log('Clicked link:', { href, text }); // Отладочная информация
        
        // Проверяем на главную страницу
        if (text === 'главная' || href === mainPageUrl) {
            e.preventDefault();
            console.log('Main page link detected, redirecting...'); // Отладочная информация
            window.location.replace(mainPageUrl);
            return;
        }
        
        // Проверяем остальные ссылки
        if ((href && href.includes('minternational')) || (href && href.includes('api.whatsapp'))) {
            e.preventDefault();
            console.log('WhatsApp link detected, redirecting...'); // Отладочная информация
            
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
    });

    if (isMobile()) {
        setMobileViewport();
    }
}); 