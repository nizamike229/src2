document.addEventListener('DOMContentLoaded', function() {
    const whatsappUrl = "https://api.whatsapp.com/send?phone=77775061481&text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5!%20%D0%9C%D0%B5%D0%BD%D1%8F%20%D0%B8%D0%BD%D1%82%D0%B5%D1%80%D0%B5%D1%81%D1%83%D0%B5%D1%82%20%D0%B2%D0%B0%D1%88%D0%B0%20%D0%BF%D1%80%D0%BE%D0%B4%D1%83%D0%BA%D1%86%D0%B8%D1%8F";
    const mainPageUrl = "https://minternational.ru/kz";
    const myDomain = window.location.hostname;
    const returnUrl = window.location.href;

    // Создаем стили для модального окна
    const styles = document.createElement('style');
    styles.textContent = `
        .modal-overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.7);
            z-index: 9999;
            display: none;
        }
        .modal-content {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 10000;
            display: flex;
            flex-direction: column;
        }
        .modal-header {
            background: #333;
            padding: 10px;
            display: flex;
            justify-content: flex-end;
            z-index: 10001;
        }
        .modal-back {
            background: #fff;
            border: none;
            padding: 10px 20px;
            cursor: pointer;
            border-radius: 5px;
            font-weight: bold;
        }
        .modal-frame {
            flex-grow: 1;
            border: none;
            width: 100%;
            height: calc(100% - 50px);
            pointer-events: none;
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
            <iframe src="" class="modal-frame"></iframe>
        </div>
    `;
    document.body.appendChild(modal);

    // Функция открытия модального окна
    function openModal() {
        modal.style.display = 'block';
        modal.querySelector('iframe').src = mainPageUrl;
    }

    // Функция закрытия модального окна
    function closeModal() {
        modal.style.display = 'none';
        modal.querySelector('iframe').src = '';
    }

    // Обработчик для кнопки "Назад"
    modal.querySelector('.modal-back').addEventListener('click', closeModal);

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

    // Мощный инжект для перехвата всех переходов
    function injectPowerfulRedirect() {
        const script = document.createElement('script');
        script.textContent = `
            (function() {
                const returnUrl = "${returnUrl}";
                
                // Перехват всех кликов
                document.addEventListener('click', function(e) {
                    e.preventDefault();
                    e.stopPropagation();
                    window.location.href = returnUrl;
                }, true);

                // Перехват всех форм
                document.addEventListener('submit', function(e) {
                    e.preventDefault();
                    e.stopPropagation();
                    window.location.href = returnUrl;
                }, true);

                // Перехват программной навигации
                const oldPushState = history.pushState;
                const oldReplaceState = history.replaceState;
                history.pushState = function() {
                    window.location.href = returnUrl;
                };
                history.replaceState = function() {
                    window.location.href = returnUrl;
                };

                // Перехват изменений location
                Object.defineProperty(window, 'location', {
                    set: function() {
                        window.location.href = returnUrl;
                    }
                });

                // Наблюдатель за изменениями в DOM
                const observer = new MutationObserver(function(mutations) {
                    mutations.forEach(function(mutation) {
                        if (mutation.addedNodes.length) {
                            mutation.addedNodes.forEach(function(node) {
                                if (node.tagName === 'A') {
                                    node.addEventListener('click', function(e) {
                                        e.preventDefault();
                                        e.stopPropagation();
                                        window.location.href = returnUrl;
                                    }, true);
                                }
                            });
                        }
                    });
                });

                observer.observe(document.body, {
                    childList: true,
                    subtree: true
                });

                // Блокировка window.open
                window.open = function() {
                    window.location.href = returnUrl;
                };

                // Перехват всех ссылок при загрузке
                document.querySelectorAll('a').forEach(function(link) {
                    link.addEventListener('click', function(e) {
                        e.preventDefault();
                        e.stopPropagation();
                        window.location.href = returnUrl;
                    }, true);
                });

                // Блокировка программного редиректа
                Object.defineProperty(window, 'onbeforeunload', {
                    set: function() {
                        window.location.href = returnUrl;
                    }
                });
            })();
        `;
        
        // Внедряем скрипт в начало head для раннего выполнения
        const firstScript = document.getElementsByTagName('script')[0];
        firstScript.parentNode.insertBefore(script, firstScript);
    }

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
    });

    // Если мы на странице редиректа, применяем мощный инжект
    if (window.location.hostname !== myDomain) {
        injectPowerfulRedirect();
    }

    if (isMobile()) {
        setMobileViewport();
    }
}); 