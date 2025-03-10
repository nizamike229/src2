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
                main: 'MiMax — это растительная смесь с высокими антиоксидантными свойствами. Антиоксидантное действие астаксантина в 6000 раз сильнее, чем у витамина С и в 1000 раз выше, чем у витамина Е. MiMax содержит множество мощных ингредиентов, которые восстанавливают повреждения, вызванные свободными радикалами, и усиливают нашу способность нейтрализовать свободные радикалы. MIMAX - СУПЕР МОЩНЫЙ ПРОДУКТ для оздоровления всех систем организма.',
                health: '<ul style="list-style-type: disc; padding-left: 20px; margin: 0;"><li>Омоложение</li><li>Противовоспалительное средство</li><li>Повышает иммунитет</li><li>Повышает уровень энергии</li><li>Улучшает пищеварение</li><li>Регулирует уровень холестерина и глюкозы в крови</li><li>Защита и улучшение зрения</li><li>Укрепление функции сердца и печени</li><li>Уменьшает повреждение ДНК</li><li>Улучшает метаболизм</li><li>Устраняет симптомы усталости глаз</li><li>Улучшает состояние кожи</li><li>Снижает эректильную дисфункцию</li><li>Защита желудочно-кишечной функции</li><li>Анти-старение и окисление</li></ul>',
                composition: 'Астаксантин, ягоды облепихи, экстракт сосновой коры, черника, полифенолы яблочного экстракта, ресвератрол - экстракт виноградных косточек. ПОЛИФЕНОЛЫ ЭКСТРАКТА ЯБЛОКА: Полифенолы экстракта яблока богаты полифенолами, клетчаткой, витамином С и многочисленными олигомерами, которые являются мощными антиоксидантами. Его помощь в борьбе со старением, защита желудочно-кишечной функции и контроль веса, поскольку он обеспечивает сытость.<br><br>ЧЕРНИЧНЫЙ ПОРОШОК: Черника (порошок) является одним из самых богатых пищевых источников антиоксидантов, уменьшает повреждение ДНК, замедляет процесс старения и помогает предотвратить воспаление мочевыводящих путей. Он также помогает регулировать уровень холестерина, поддерживать общее здоровье глаз и хорошее самочувствие.<br><br>ЭКСТРАКТ ЯГОД ОБЛЕПИХИ: Ягоды облепихи – это терпкие ярко-оранжевые ягоды, которые имеют долгую историю традиционного употребления в Азии, России и Европе на протяжении более 1500 лет. С высоким содержанием антиоксидантов, витамина С, витамина Е, бета-каротина, ресвератрола и омега-3,6,7,9. Он защищает функции сердца и печени, улучшает пищеварение, улучшает состояние кожи, улучшает зрение и уменьшает сухость глаз.<br><br>АСТАКСАНТИН: Астаксантин — это мощный природный каротиноидный пигмент, вырабатываемый микроводорослями, признанный одним из самых мощных обнаруженных антиоксидантов, укрепляющий здоровье кожи, улучшающий зрение, поддерживающий функцию мозга и облегчающий симптомы менопаузы.<br><br>ЭКСТРАКТ СОСНЫ: Сосны являются наиболее распространенным хвойным деревом из рода растений Pinus, которое насчитывает более 120 видов по всему миру и обладает высокими антиоксидантными свойствами. Он помогает регулировать уровень глюкозы в крови, уменьшает воспаление, замедляет процесс старения и снижает эректильную дисфункцию.<br><br>ЭКСТРАКТ ВИНОГРАДНОЙ КОСТОЧКИ: Виноградные косточки содержат фенольные кислоты, антоцианы, флавоноиды и олигомерные проантоцианидиновые комплексы (ОРС), которые улучшают кровообращение, усиливают обмен веществ, регулируют артериальное давление, противовоспалительны и защищают функцию печени.',
                usage: 'Страна происхождения Малайзия<br>Изготовитель: M international Sdn.Bhd. (1304378-W)<br>Срок годности 24 месяца с даты изготовления.<br><br>После завтрака под язык высыпаем и рассасываем подольше. Либо разводим на пол стакана теплой воды и выпиваем. Если у вас есть хронические заболевания, то начинать с 0,3 пакетика или с 0,5 пакетика.'
            }
        },
        'blumax': {
            url: 'https://minternational.ru/kz/blumax',
            name: 'BluMax',
            info: {
                main: 'BluMax - это уникальный продукт для очищения организма на клеточном уровне. Он эффективно выводит токсины, шлаки и тяжелые металлы, восстанавливает микрофлору кишечника и улучшает общее состояние организма. BluMax содержит натуральные компоненты, которые помогают очистить кровь, лимфу и межклеточное пространство.',
                health: 'Очищение организма от токсинов и шлаков, Восстановление микрофлоры кишечника, Улучшение пищеварения, Повышение иммунитета, Нормализация обмена веществ, Снижение веса, Улучшение состояния кожи, Повышение энергии и жизненного тонуса, Профилактика заболеваний ЖКТ, Улучшение работы печени и почек.',
                composition: 'Спирулина, Хлорелла, Морские водоросли, Пребиотики, Пробиотики, Ферменты, Клетчатка, Экстракты лекарственных растений, Витамины и минералы. Все компоненты BluMax тщательно отобраны и сбалансированы для максимального эффекта очищения и восстановления организма.',
                usage: 'Страна происхождения Малайзия<br>Изготовитель: M international Sdn.Bhd.<br>Срок годности 24 месяца с даты изготовления.<br><br>Принимать 1 пакетик в день, растворив в стакане теплой воды. Лучше всего принимать утром натощак или вечером перед сном. Курс приема - 30 дней. Для максимального эффекта рекомендуется повторять курс 2-3 раза в год.'
            }
        },
        'nutrimax': {
            url: 'https://minternational.ru/kz/nutrimax',
            name: 'NutriMax',
            info: {
                main: 'NutriMax - это комплексный продукт для полноценного питания организма на клеточном уровне. Он содержит все необходимые витамины, минералы, аминокислоты и другие питательные вещества, которые обеспечивают оптимальное функционирование всех систем организма. NutriMax помогает восполнить дефицит питательных веществ и повысить жизненный тонус.',
                health: 'Полноценное питание организма, Восполнение дефицита витаминов и минералов, Повышение иммунитета, Улучшение обмена веществ, Повышение энергии и работоспособности, Улучшение состояния кожи, волос и ногтей, Поддержка здоровья сердечно-сосудистой системы, Улучшение работы мозга и нервной системы, Поддержка здоровья опорно-двигательного аппарата, Замедление процессов старения.',
                composition: 'Комплекс витаминов (A, B, C, D, E, K), Минералы (кальций, магний, цинк, селен, железо и др.), Аминокислоты, Омега-3, 6, 9 жирные кислоты, Антиоксиданты, Ферменты, Пребиотики, Экстракты лекарственных растений, Натуральные фруктовые и овощные концентраты.',
                usage: 'Страна происхождения Малайзия<br>Изготовитель: M international Sdn.Bhd.<br>Срок годности 24 месяца с даты изготовления.<br><br>Принимать 1 пакетик в день, растворив в стакане воды или сока. Можно принимать в любое время дня, лучше всего во время еды. Курс приема - 30 дней. Для поддержания оптимального уровня питательных веществ рекомендуется принимать постоянно.'
            }
        },
        'yekaterina': {
            url: 'https://minternational.ru/kaliningrad/yekaterina',
            name: 'Ye-Katerina',
            info: {
                main: 'Ye-Katerina - это специализированный продукт для женского здоровья. Он помогает нормализовать гормональный фон, облегчить симптомы ПМС и менопаузы, улучшить состояние репродуктивной системы. Ye-Katerina содержит натуральные фитоэстрогены и другие компоненты, которые поддерживают женское здоровье на всех этапах жизни.',
                health: 'Нормализация гормонального фона, Облегчение симптомов ПМС, Облегчение симптомов менопаузы (приливы, раздражительность, бессонница), Поддержка репродуктивной функции, Улучшение состояния кожи, волос и ногтей, Повышение либидо, Улучшение эмоционального состояния, Профилактика остеопороза, Поддержка здоровья молочных желез, Общее укрепление женского здоровья.',
                composition: 'Фитоэстрогены (изофлавоны сои, красного клевера), Экстракт цимицифуги, Экстракт дикого ямса, Витамины группы B, Витамин D, Кальций, Магний, Цинк, Омега-3 жирные кислоты, Антиоксиданты, Экстракты лекарственных растений (шалфей, хмель, боровая матка).',
                usage: 'Страна происхождения Малайзия<br>Изготовитель: M international Sdn.Bhd.<br>Срок годности 24 месяца с даты изготовления.<br><br>Принимать 1 пакетик в день, растворив в стакане теплой воды. Лучше всего принимать утром или вечером, независимо от приема пищи. Курс приема - 30 дней. Для максимального эффекта рекомендуется принимать курсами 3-4 раза в год или постоянно при выраженных симптомах.'
            }
        },
        'fleximax': {
            url: 'https://minternational.ru/kaliningrad/fleximax',
            name: 'FlexiMax',
            info: {
                main: 'FlexiMax - это специализированный продукт для здоровья суставов и опорно-двигательного аппарата. Он помогает уменьшить воспаление, снять боль, восстановить хрящевую ткань и улучшить подвижность суставов. FlexiMax содержит натуральные компоненты, которые способствуют регенерации тканей и улучшению общего состояния суставов.',
                health: 'Уменьшение воспаления в суставах, Снятие боли, Восстановление хрящевой ткани, Улучшение подвижности суставов, Укрепление связок и сухожилий, Профилактика дегенеративных заболеваний суставов, Улучшение кровообращения в тканях суставов, Снижение риска травм, Поддержка здоровья позвоночника, Общее укрепление опорно-двигательного аппарата.',
                composition: 'Глюкозамин, Хондроитин, MSM (метилсульфонилметан), Коллаген, Гиалуроновая кислота, Куркумин, Босвеллия, Имбирь, Витамин C, Витамин D, Кальций, Магний, Цинк, Марганец, Омега-3 жирные кислоты, Экстракты лекарственных растений с противовоспалительным действием.',
                usage: 'Страна происхождения Малайзия<br>Изготовитель: M international Sdn.Bhd.<br>Срок годности 24 месяца с даты изготовления.<br><br>Принимать 1 пакетик в день, растворив в стакане теплой воды. Лучше всего принимать во время еды для лучшего усвоения. Курс приема - 30 дней. Для максимального эффекта рекомендуется принимать курсами 2-3 раза в год или постоянно при хронических заболеваниях суставов.'
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
            border: 2px solid #4CAF50;
        }
        .product-modal-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 15px 20px;
            background: #4CAF50;
            color: white;
            border-bottom: 1px solid #43A047;
        }
        .product-modal-title {
            font-size: 20px;
            font-weight: bold;
            margin: 0;
            color: white;
        }
        .product-modal-close {
            background: none;
            border: none;
            font-size: 24px;
            cursor: pointer;
            color: white;
        }
        .product-modal-tabs {
            display: flex;
            border-bottom: 1px solid #E8F5E9;
            background: #E8F5E9;
        }
        .product-modal-tab {
            padding: 10px 15px;
            cursor: pointer;
            border: none;
            background: none;
            font-size: 16px;
            color: #388E3C;
            transition: all 0.3s;
        }
        .product-modal-tab.active {
            color: #4CAF50;
            border-bottom: 2px solid #4CAF50;
            font-weight: bold;
            background: white;
        }
        .product-modal-content {
            padding: 20px;
            overflow-y: auto;
            max-height: calc(80vh - 120px);
            background: white;
        }
        .product-modal-tab-content {
            display: none;
        }
        .product-modal-tab-content.active {
            display: block;
        }
        .product-modal-tab-content p {
            color: #333;
            line-height: 1.6;
            margin-bottom: 15px;
        }
        .product-modal-tab-content ul {
            margin-top: 0;
            margin-bottom: 15px;
        }
        .product-modal-tab-content li {
            margin-bottom: 8px;
            color: #333;
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