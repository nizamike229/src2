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
        
        // Получаем iframe
        const iframe = modal.querySelector('iframe');
        
        // Создаем обертку для iframe с прокруткой
        const iframeWrapper = document.createElement('div');
        iframeWrapper.style.width = '100%';
        iframeWrapper.style.height = '80vh';
        iframeWrapper.style.maxHeight = '2000px';
        iframeWrapper.style.overflow = 'auto';
        iframeWrapper.style.position = 'relative';
        
        // Заменяем iframe на обертку с iframe внутри
        const parent = iframe.parentNode;
        parent.removeChild(iframe);
        iframeWrapper.appendChild(iframe);
        parent.appendChild(iframeWrapper);
        
        // Добавляем индикатор загрузки
        const loadingIndicator = document.createElement('div');
        loadingIndicator.style.position = 'absolute';
        loadingIndicator.style.top = '50%';
        loadingIndicator.style.left = '50%';
        loadingIndicator.style.transform = 'translate(-50%, -50%)';
        loadingIndicator.style.fontSize = '20px';
        loadingIndicator.style.color = '#333';
        loadingIndicator.textContent = 'Загрузка...';
        iframeWrapper.appendChild(loadingIndicator);
        
        // Создаем прокси-URL для обхода CORS
        // Используем сервис cors-anywhere или аналогичный
        // Если у вас есть свой прокси, используйте его
        const corsProxy = 'https://cors-anywhere.herokuapp.com/';
        const proxyUrl = corsProxy + url;
        
        // Загружаем контент через fetch
        fetch(proxyUrl)
            .then(response => response.text())
            .then(html => {
                // Модифицируем HTML
                let modifiedHtml = html;
                
                // Удаляем хедер
                modifiedHtml = modifiedHtml.replace(/<header[^>]*>[\s\S]*?<\/header>/gi, '');
                modifiedHtml = modifiedHtml.replace(/<nav[^>]*>[\s\S]*?<\/nav>/gi, '');
                modifiedHtml = modifiedHtml.replace(/<div[^>]*class="[^"]*header[^"]*"[^>]*>[\s\S]*?<\/div>/gi, '');
                modifiedHtml = modifiedHtml.replace(/<div[^>]*id="[^"]*header[^"]*"[^>]*>[\s\S]*?<\/div>/gi, '');
                modifiedHtml = modifiedHtml.replace(/<div[^>]*class="[^"]*nav[^"]*"[^>]*>[\s\S]*?<\/div>/gi, '');
                
                // Добавляем стили для ограничения высоты и скрытия хедера
                const styleTag = `
                <style>
                    header, nav, .header, .nav, .navigation, 
                    .top-header, .site-header, .main-header, 
                    .page-header, #header, #nav, #navigation,
                    [class*="header"], [id*="header"],
                    [class*="nav"], [id*="nav"],
                    .top-bar, .navbar, .navigation-wrapper {
                        display: none !important;
                    }
                    body {
                        max-height: 2000px !important;
                        overflow-y: auto !important;
                        padding-top: 0 !important;
                        margin-top: 0 !important;
                    }
                    html {
                        max-height: 2000px !important;
                    }
                </style>
                `;
                
                // Вставляем стили в head
                modifiedHtml = modifiedHtml.replace('</head>', styleTag + '</head>');
                
                // Создаем Blob из модифицированного HTML
                const blob = new Blob([modifiedHtml], { type: 'text/html' });
                const blobUrl = URL.createObjectURL(blob);
                
                // Удаляем индикатор загрузки
                iframeWrapper.removeChild(loadingIndicator);
                
                // Устанавливаем src для iframe
                iframe.style.width = '100%';
                iframe.style.height = '2000px';
                iframe.style.maxHeight = '80vh';
                iframe.style.border = 'none';
                iframe.style.overflow = 'auto';
                iframe.src = blobUrl;
                
                // Добавляем обработчик для освобождения ресурсов
                iframe.onload = function() {
                    // Дополнительные манипуляции с iframe, если нужно
                    try {
                        const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
                        if (iframeDoc) {
                            // Дополнительные манипуляции с DOM, если нужно
                        }
                    } catch (e) {
                        console.log('Не удалось получить доступ к содержимому iframe:', e);
                    }
                };
            })
            .catch(error => {
                console.error('Ошибка при загрузке контента:', error);
                
                // Удаляем индикатор загрузки
                iframeWrapper.removeChild(loadingIndicator);
                
                // Показываем сообщение об ошибке
                const errorMessage = document.createElement('div');
                errorMessage.style.position = 'absolute';
                errorMessage.style.top = '50%';
                errorMessage.style.left = '50%';
                errorMessage.style.transform = 'translate(-50%, -50%)';
                errorMessage.style.fontSize = '16px';
                errorMessage.style.color = 'red';
                errorMessage.style.textAlign = 'center';
                errorMessage.innerHTML = 'Не удалось загрузить контент.<br>Возможно, сайт блокирует доступ через прокси.<br>Попробуйте открыть напрямую.';
                iframeWrapper.appendChild(errorMessage);
                
                // Добавляем кнопку для открытия напрямую
                const openDirectButton = document.createElement('button');
                openDirectButton.textContent = 'Открыть напрямую';
                openDirectButton.style.display = 'block';
                openDirectButton.style.margin = '20px auto 0';
                openDirectButton.style.padding = '5px 10px';
                openDirectButton.style.background = '#4CAF50';
                openDirectButton.style.color = 'white';
                openDirectButton.style.border = 'none';
                openDirectButton.style.borderRadius = '3px';
                openDirectButton.style.cursor = 'pointer';
                openDirectButton.onclick = function() {
                    window.open(url, '_blank');
                };
                iframeWrapper.appendChild(openDirectButton);
            });
        
        // Добавляем кнопку закрытия поверх iframe
        const closeButton = document.createElement('button');
        closeButton.textContent = 'Закрыть';
        closeButton.style.position = 'absolute';
        closeButton.style.top = '10px';
        closeButton.style.right = '10px';
        closeButton.style.zIndex = '9999';
        closeButton.style.padding = '5px 10px';
        closeButton.style.background = '#f44336';
        closeButton.style.color = 'white';
        closeButton.style.border = 'none';
        closeButton.style.borderRadius = '3px';
        closeButton.style.cursor = 'pointer';
        closeButton.onclick = closeModal;
        
        iframeWrapper.appendChild(closeButton);
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