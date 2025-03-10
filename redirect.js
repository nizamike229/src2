document.addEventListener('DOMContentLoaded', function() {
    const whatsappUrl = "https://api.whatsapp.com/send?phone=77775061481&text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5!%20%D0%9C%D0%B5%D0%BD%D1%8F%20%D0%B8%D0%BD%D1%82%D0%B5%D1%80%D0%B5%D1%81%D1%83%D0%B5%D1%82%20%D0%B2%D0%B0%D1%88%D0%B0%20%D0%BF%D1%80%D0%BE%D0%B4%D1%83%D0%BA%D1%86%D0%B8%D1%8F";
    const mainPageUrl = "https://minternational.ru/kz";
    const myDomain = "src2.pages.dev";
    const returnUrl = "https://" + myDomain;

    // Продукты и их URL
    const products = {
        'mimax': {
            url: 'https://minternational.ru/kz/mimax',
            name: 'MiMax',
            info: {
                main: 'Основная информация о MiMax',
                health: 'Польза для здоровья от MiMax',
                composition: 'Состав MiMax',
                order: 'Как заказать MiMax',
                usage: 'Применение MiMax'
            }
        },
        'blumax': {
            url: 'https://minternational.ru/kz/blumax',
            name: 'BluMax',
            info: {
                main: 'Основная информация о BluMax',
                health: 'Польза для здоровья от BluMax',
                composition: 'Состав BluMax',
                order: 'Как заказать BluMax',
                usage: 'Применение BluMax'
            }
        },
        'nutrimax': {
            url: 'https://minternational.ru/kz/nutrimax',
            name: 'NutriMax',
            info: {
                main: 'Основная информация о NutriMax',
                health: 'Польза для здоровья от NutriMax',
                composition: 'Состав NutriMax',
                order: 'Как заказать NutriMax',
                usage: 'Применение NutriMax'
            }
        },
        'yekaterina': {
            url: 'https://minternational.ru/kaliningrad/yekaterina',
            name: 'Ye-Katerina',
            info: {
                main: 'Основная информация о Ye-Katerina',
                health: 'Польза для здоровья от Ye-Katerina',
                composition: 'Состав Ye-Katerina',
                order: 'Как заказать Ye-Katerina',
                usage: 'Применение Ye-Katerina'
            }
        },
        'fleximax': {
            url: 'https://minternational.ru/kaliningrad/fleximax',
            name: 'FlexiMax',
            info: {
                main: 'Основная информация о FlexiMax',
                health: 'Польза для здоровья от FlexiMax',
                composition: 'Состав FlexiMax',
                order: 'Как заказать FlexiMax',
                usage: 'Применение FlexiMax'
            }
        }
    };

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
        
        /* Стили для модального окна с вкладками */
        .product-modal {
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 80%;
            max-width: 800px;
            max-height: 80vh;
            background: white;
            border-radius: 10px;
            z-index: 10000;
            display: none;
            flex-direction: column;
            overflow: hidden;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
        }
        .product-modal-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 15px 20px;
            background: #f8f8f8;
            border-bottom: 1px solid #eee;
        }
        .product-modal-title {
            font-size: 20px;
            font-weight: bold;
            margin: 0;
        }
        .product-modal-close {
            background: none;
            border: none;
            font-size: 24px;
            cursor: pointer;
            color: #666;
        }
        .product-modal-tabs {
            display: flex;
            border-bottom: 1px solid #eee;
            background: #f8f8f8;
        }
        .product-modal-tab {
            padding: 10px 15px;
            cursor: pointer;
            border: none;
            background: none;
            font-size: 16px;
            color: #666;
            transition: all 0.3s;
        }
        .product-modal-tab.active {
            color: #007bff;
            border-bottom: 2px solid #007bff;
            font-weight: bold;
        }
        .product-modal-content {
            padding: 20px;
            overflow-y: auto;
            max-height: calc(80vh - 120px);
        }
        .product-modal-tab-content {
            display: none;
        }
        .product-modal-tab-content.active {
            display: block;
        }
        @media (max-width: 768px) {
            .product-modal {
                width: 95%;
                max-height: 90vh;
            }
            .product-modal-header {
                padding: 10px 15px;
            }
            .product-modal-tabs {
                overflow-x: auto;
                white-space: nowrap;
            }
            .product-modal-tab {
                padding: 8px 12px;
                font-size: 14px;
            }
            .product-modal-content {
                padding: 15px;
                max-height: calc(90vh - 110px);
            }
        }
    `;
    document.head.appendChild(styles);

    // Создаем модальное окно для iframe
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

    // Создаем модальное окно для продуктов с вкладками
    const productModal = document.createElement('div');
    productModal.className = 'product-modal';
    productModal.innerHTML = `
        <div class="product-modal-header">
            <h3 class="product-modal-title">Название продукта</h3>
            <button class="product-modal-close">&times;</button>
        </div>
        <div class="product-modal-tabs">
            <button class="product-modal-tab active" data-tab="main">Основная информация</button>
            <button class="product-modal-tab" data-tab="health">Польза для здоровья</button>
            <button class="product-modal-tab" data-tab="composition">Состав</button>
            <button class="product-modal-tab" data-tab="order">Как заказать</button>
            <button class="product-modal-tab" data-tab="usage">Применение</button>
        </div>
        <div class="product-modal-content">
            <div class="product-modal-tab-content active" data-tab="main">
                <p>Основная информация о продукте</p>
            </div>
            <div class="product-modal-tab-content" data-tab="health">
                <p>Польза для здоровья</p>
            </div>
            <div class="product-modal-tab-content" data-tab="composition">
                <p>Состав продукта</p>
            </div>
            <div class="product-modal-tab-content" data-tab="order">
                <p>Как заказать продукт</p>
            </div>
            <div class="product-modal-tab-content" data-tab="usage">
                <p>Применение продукта</p>
            </div>
        </div>
    `;
    document.body.appendChild(productModal);

    // Добавляем затемнение для модального окна продуктов
    const productModalOverlay = document.createElement('div');
    productModalOverlay.className = 'modal-overlay';
    productModalOverlay.style.zIndex = '9999';
    document.body.appendChild(productModalOverlay);

    function openModal(url = mainPageUrl) {
        document.body.classList.add('modal-open');
        modal.style.display = 'block';
        const iframe = modal.querySelector('iframe');
        iframe.src = url;
        
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

    // Функция открытия модального окна продукта
    function openProductModal(productKey) {
        const product = products[productKey];
        if (!product) return;

        document.body.classList.add('modal-open');
        productModalOverlay.style.display = 'block';
        productModal.style.display = 'flex';
        
        // Устанавливаем название продукта
        productModal.querySelector('.product-modal-title').textContent = product.name;
        
        // Заполняем содержимое вкладок
        const tabContents = productModal.querySelectorAll('.product-modal-tab-content');
        tabContents.forEach(content => {
            const tabKey = content.getAttribute('data-tab');
            if (product.info[tabKey]) {
                content.innerHTML = `<p>${product.info[tabKey]}</p>`;
            }
        });
        
        // Активируем первую вкладку
        const tabs = productModal.querySelectorAll('.product-modal-tab');
        tabs.forEach(tab => tab.classList.remove('active'));
        tabs[0].classList.add('active');
        
        tabContents.forEach(content => content.classList.remove('active'));
        tabContents[0].classList.add('active');
    }

    // Функция закрытия модального окна
    function closeModal() {
        document.body.classList.remove('modal-open');
        modal.style.display = 'none';
        modal.querySelector('iframe').src = '';
    }

    // Функция закрытия модального окна продукта
    function closeProductModal() {
        document.body.classList.remove('modal-open');
        productModalOverlay.style.display = 'none';
        productModal.style.display = 'none';
    }

    // Обработчики событий для модального окна
    modal.querySelector('.modal-back').addEventListener('click', closeModal);

    // Обработчики событий для модального окна продукта
    productModal.querySelector('.product-modal-close').addEventListener('click', closeProductModal);
    productModalOverlay.addEventListener('click', closeProductModal);

    // Обработчик переключения вкладок
    productModal.querySelectorAll('.product-modal-tab').forEach(tab => {
        tab.addEventListener('click', function() {
            const tabKey = this.getAttribute('data-tab');
            
            // Активируем выбранную вкладку
            productModal.querySelectorAll('.product-modal-tab').forEach(t => t.classList.remove('active'));
            this.classList.add('active');
            
            // Показываем соответствующий контент
            productModal.querySelectorAll('.product-modal-tab-content').forEach(content => {
                content.classList.remove('active');
                if (content.getAttribute('data-tab') === tabKey) {
                    content.classList.add('active');
                }
            });
        });
    });

    // Обработчик кликов по ссылкам
    document.body.addEventListener('click', function(e) {
        const link = e.target.closest('a');
        if (!link) return;
        
        const href = link.getAttribute('href');
        if (!href) return;
        
        const text = link.textContent.trim().toLowerCase();
        
        // Проверяем ссылки на продукты
        for (const [key, product] of Object.entries(products)) {
            if (href === product.url) {
                e.preventDefault();
                openProductModal(key);
                return;
            }
        }
        
        // Проверяем специальные URL для отзывов и фото
        if (href === 'https://minternational.ru/reg_otzyvy' || href === 'https://minternational.ru/reg_foto') {
            e.preventDefault();
            openModal(href);
            return;
        }
        
        if (text === 'главная' || href === mainPageUrl) {
            e.preventDefault();
            openModal();
            return;
        }
        
        if (modal.style.display !== 'block' && productModal.style.display !== 'flex') {
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