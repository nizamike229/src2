document.addEventListener('DOMContentLoaded', function() {
    const whatsappUrl = "https://api.whatsapp.com/send?phone=77775061481&text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5!%20%D0%9C%D0%B5%D0%BD%D1%8F%20%D0%B8%D0%BD%D1%82%D0%B5%D1%80%D0%B5%D1%81%D1%83%D0%B5%D1%82%20%D0%B2%D0%B0%D1%88%D0%B0%20%D0%BF%D1%80%D0%BE%D0%B4%D1%83%D0%BA%D1%86%D0%B8%D1%8F";
    const mainPageUrl = "https://minternational.ru/kz";
    const myDomain = "src2.pages.dev";
    const returnUrl = "https://" + myDomain;

    // Добавляем массив разрешенных URL для модального окна
    const allowedModalUrls = [
        'https://minternational.ru/kz/mimax',
        'https://minternational.ru/kz/blumax',
        'https://minternational.ru/kz/nutrimax',
        'https://minternational.ru/kaliningrad/yekaterina'
    ];

    const styles = document.createElement('style');
    styles.textContent = `
        body.modal-open {
            overflow: hidden;
            position: fixed;
            width: 100%;
            height: 100%;
        }
        .modal-overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            background: rgba(0, 0, 0, 0.7);
            z-index: 9999;
            display: none;
            overflow: hidden;
        }
        .modal-content {
            position: fixed;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            z-index: 10000;
            display: flex;
            flex-direction: column;
            overflow: hidden;
        }
        .modal-header {
            background: #333;
            padding: 10px;
            display: flex;
            justify-content: flex-end;
            z-index: 10001;
            flex-shrink: 0;
            position: sticky;
            top: 0;
        }
        .modal-back {
            background: #fff;
            border: none;
            padding: 10px 20px;
            cursor: pointer;
            border-radius: 5px;
            font-weight: bold;
            font-size: 16px;
        }
        .modal-frame-container {
            position: relative;
            flex-grow: 1;
            height: calc(100vh - 50px);
            overflow: hidden;
        }
        .modal-frame {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            border: none;
            overflow: auto;
            -webkit-overflow-scrolling: touch;
        }
        @media (max-width: 768px) {
            .modal-header {
                padding: 8px;
            }
            .modal-back {
                padding: 8px 16px;
                font-size: 14px;
            }
            .modal-frame-container {
                height: calc(100vh - 40px);
            }
        }
    `;
    document.head.appendChild(styles);

    // Создаем модальное окно
    const modal = document.createElement('div');
    modal.className = 'modal-overlay';
    modal.innerHTML = `
        <div class="modal-content">
            <div class="modal-header">
                <button class="modal-back">← Назад</button>
            </div>
            <div class="modal-frame-container">
                <iframe src="" class="modal-frame" scrolling="yes"></iframe>
            </div>
        </div>
    `;
    document.body.appendChild(modal);

    // Функция открытия модального окна с ограниченным контентом
    function openModalWithLimitedContent(url) {
        document.body.classList.add('modal-open');
        modal.style.display = 'block';
        const iframe = modal.querySelector('iframe');
        iframe.src = url;
        
        iframe.onload = function() {
            try {
                const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
                const iframeWin = iframe.contentWindow;

                // Функция применения стилей
                function applyStyles() {
                    const iframeStyles = iframeDoc.createElement('style');
                    iframeStyles.textContent = `
                        /* Скрываем все возможные хедеры */
                        header, 
                        nav, 
                        .header,
                        .nav,
                        .navigation,
                        .top-header,
                        .site-header,
                        .main-header,
                        .page-header,
                        #header,
                        #nav,
                        #navigation,
                        [class*="header"],
                        [id*="header"],
                        [class*="nav"],
                        [id*="nav"],
                        .top-bar,
                        .navbar,
                        .navigation-wrapper {
                            display: none !important;
                            height: 0 !important;
                            min-height: 0 !important;
                            max-height: 0 !important;
                            padding: 0 !important;
                            margin: 0 !important;
                            opacity: 0 !important;
                            pointer-events: none !important;
                            position: absolute !important;
                            top: -9999px !important;
                            left: -9999px !important;
                        }
                        
                        /* Ограничиваем высоту и настраиваем прокрутку */
                        html {
                            max-height: 2000px !important;
                            overflow: hidden !important;
                        }
                        
                        body {
                            max-height: 2000px !important;
                            overflow-y: auto !important;
                            padding-top: 0 !important;
                            margin-top: 0 !important;
                            position: relative !important;
                        }
                        
                        /* Сбрасываем отступы для основного контента */
                        main,
                        .content,
                        .main-content,
                        .site-content,
                        .page-content,
                        article,
                        .article,
                        [class*="content"],
                        [id*="content"] {
                            margin-top: 0 !important;
                            padding-top: 0 !important;
                            position: relative !important;
                            top: 0 !important;
                        }
                    `;
                    
                    // Удаляем старые стили если они есть
                    const oldStyles = iframeDoc.querySelector('#modal-limitation-styles');
                    if (oldStyles) {
                        oldStyles.remove();
                    }
                    
                    iframeStyles.id = 'modal-limitation-styles';
                    iframeDoc.head.appendChild(iframeStyles);
                    
                    // Принудительно скрываем хедер через DOM
                    const possibleHeaders = iframeDoc.querySelectorAll('header, .header, nav, .nav, .navigation, [class*="header"], [id*="header"]');
                    possibleHeaders.forEach(header => {
                        header.style.display = 'none';
                        header.style.height = '0';
                        header.style.minHeight = '0';
                        header.style.maxHeight = '0';
                        header.style.opacity = '0';
                        header.style.overflow = 'hidden';
                    });
                }

                // Применяем стили сразу
                applyStyles();

                // Наблюдаем за изменениями в DOM и переприменяем стили
                const observer = new MutationObserver(() => {
                    applyStyles();
                });

                observer.observe(iframeDoc.body, {
                    childList: true,
                    subtree: true
                });

                // Блокируем навигацию
                iframeWin.onbeforeunload = function(e) {
                    e.preventDefault();
                    window.location.href = returnUrl;
                    return false;
                };

                // Блокируем клики
                iframeDoc.addEventListener('click', function(e) {
                    e.preventDefault();
                    e.stopPropagation();
                    window.location.href = returnUrl;
                    return false;
                }, true);

                // Блокируем отправку форм
                iframeDoc.addEventListener('submit', function(e) {
                    e.preventDefault();
                    e.stopPropagation();
                    window.location.href = returnUrl;
                    return false;
                }, true);

                // Блокируем программную навигацию
                Object.defineProperty(iframeWin, 'location', {
                    set: function() {
                        window.location.href = returnUrl;
                    }
                });

                // Блокируем history API
                iframeWin.history.pushState = function() {
                    window.location.href = returnUrl;
                };
                iframeWin.history.replaceState = function() {
                    window.location.href = returnUrl;
                };
            } catch(e) {
                console.log('Failed to inject iframe handlers');
            }
        };
    }

    // Функция закрытия модального окна
    function closeModal() {
        document.body.classList.remove('modal-open');
        modal.style.display = 'none';
        modal.querySelector('iframe').src = '';
    }

    // Обработчик для кнопки "Назад"
    modal.querySelector('.modal-back').addEventListener('click', closeModal);

    // Обработчик для ссылок
    document.body.addEventListener('click', function(e) {
        const link = e.target.closest('a');
        if (!link) return;
        
        const href = link.getAttribute('href');
        const text = link.textContent.trim().toLowerCase();
        
        // Проверяем на главную страницу
        if (text === 'главная' || href === mainPageUrl) {
            e.preventDefault();
            openModalWithLimitedContent(mainPageUrl);
            return;
        }
        
        // Проверяем на разрешенные URL для модального окна
        if (allowedModalUrls.includes(href)) {
            e.preventDefault();
            openModalWithLimitedContent(href);
            return;
        }
        
        // Если модалка закрыта - все остальные переходы ведут на WhatsApp
        if (modal.style.display !== 'block') {
            e.preventDefault();
            window.location.href = whatsappUrl;
            return;
        }
    });

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

    if (isMobile()) {
        setMobileViewport();
    }
}); 