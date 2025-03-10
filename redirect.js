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
                main: 'Продукт, который поддерживает общее здоровое развитие. BluMAX содержит сине-зеленые водоросли - Aphanizomenon-aquae (AFA) и шампиньоны, которые поддерживают нашу иммунную систему в борьбе с вирусами и бактериями. BluMax также богат витамином С, который является сильным антиоксидантом и играет решающую роль в иммунной системе. В BluMax более 60 минералов и много витаминов. Он сам по себе полезен и для сосудов, и для работы головного мозга, иммунитета, для костей и суставов, от отставания в развитии. В нём водоросли с нейропептидами. Все мозговые нарушения, вывод тяжёлых металлов, восстановление от гипоксии мозга за счёт большого количества органического железа, который несёт с собой кислород к тканям.',
                health: '<ul style="list-style-type: disc; padding-left: 20px; margin: 0;"><li><strong>Сине-зеленые водоросли (AFA)</strong><br>Aphanizomenon flos-aquae (AFA) представляет собой пресноводную одноклеточную сине-зеленую водоросль (цианофиту), богатую фикоцианином (РС), фотосинтетическим пигментом с антиоксидантными и противовоспалительными свойствами. AFA помогает повысить иммунитет за счет увеличения переноса иммунных клеток для удаления вторгшихся патогенов, инфицированных или трансформированных клеток. Кроме того, AFA содержит значительную концентрацию фенилэтиламина (ФЭА), эндогенного нейромодулирующего соединения, повышающего концентрацию и облегчающего депрессию.</li><li><strong>Витамин С</strong><br>Витамин С является водорастворимым витамином, естественным образом присутствующим в некоторых продуктах. Наше тело не может синтезировать витамин С, поэтому он является важным диетическим компонентом. Витамин С имеет решающее значение для нашей иммунной системы, стимулируя выработку лейкоцитов, известных как лимфоциты и фагоциты, которые помогают защитить организм от инфекции. Витамин С является сильным и высокоэффективным антиоксидантом. Он защищает клетки организма от повреждения окислителями, образующимися при нормальном клеточном метаболизме, а также в результате воздействия токсинов и загрязняющих веществ, и может снизить риск хронических заболеваний, таких как болезни сердца. Дефицит витамина С приводит к ослаблению иммунитета и повышенной восприимчивости к инфекциям.</li></ul>',
                composition: 'Спирулина, Хлорелла, Морские водоросли, Пребиотики, Пробиотики, Ферменты, Клетчатка, Экстракты лекарственных растений, Витамины и минералы. Все компоненты BluMax тщательно отобраны и сбалансированы для максимального эффекта очищения и восстановления организма.',
                usage: 'Страна происхождения - Малайзия<br>Изготовитель: M international Sdn.Bhd. (1304378-W)<br>Срок годности 24 месяца с даты изготовления.<br><br>После обеда (с 15:00 до 19:00) под язык высыпаем и рассасываем подольше. Либо разводим на пол стакана теплой воды и выпиваем. Если у вас есть хронические заболевания, то начинать с 0,3 пакетика или с 0,5 пакетика.'
            }
        },
        'nutrimax': {
            url: 'https://minternational.ru/kz/nutrimax',
            name: 'NutriMax',
            info: {
                main: 'Продукт, который поддерживает общее здоровое развитие. NutriMAX — это комбинация белков растительного происхождения (соевого белка и зеленых бобов), щелочного мультизеленого порошка, кальция растительного происхождения и пребиотика (ФОС), которые служат вам здоровой и питательной заменой еды и фитнес-напитком.',
                health: '<ul style="list-style-type: disc; padding-left: 20px; margin: 0;"><li>Увеличение мышечной массы и силы</li><li>Строит и восстанавливает ткани тела</li><li>Укрепляет кости и зубы</li><li>Помощь в управлении весом</li><li>Обеспечивает полноту помощи пищеварению</li><li>Помощь в регенерации клеток и мышц</li><li>Уменьшает риск рака молочной железы</li><li>Рост и развитие</li><li>Помогает снизить уровень холестерина</li><li>Антиоксидант</li></ul><p style="margin-top: 15px;"><strong>Рекомендуется:</strong></p><ul style="list-style-type: disc; padding-left: 20px; margin: 0;"><li>Вегетарианцам</li><li>Спортсменам</li><li>Пожилым людям</li><li>Для лечения ожирения или недостаточного веса</li><li>Тем, кто пропускает завтрак</li></ul>',
                composition: 'NutriMAX - содержит соевый порошок, экстракт ростков пшеницы, экстракт травы ячменя, спирулина, экстракт хлореллы, экстракт моринги, экстракт люцерны. Фруктоолигосахарид. Порошок зеленой фасоли, Соевый протеиновый порошок, Экстракт кальция морских водорослей, Стевия. NutriMAX- это полноценное питание организма.<br><br>Соя богата витаминами В1,В2, В3, B5, B6, B9, С. Минералами кальций, фосфор, железо, магний, калий и цинк. Также в составе есть незаменимые жирные кислоты Омега-3 и Омега-6 и фитонутриентами. Экстракт травы ячменя является отличным источником клетчатки, очищает наш организм от токсинов. Экстракт травы ячменя значительно снижает вероятность рака толстой кишки. Экстракт травы ячменя содержит медь, которая образует гемоглобин и эритроциты. Также в составе ячменя есть селен, который улучшает состояние нашего сердца и поджелудочной железы.<br><br><strong>Спирулина</strong> - содержит группу витамина В2 и ВЗ активно участвуют в обмене веществ, В12 способствует выробтке энергии в организме. Фолиевая кислота В9 благотворно влияет на сердце и репродуктивую систему. Спирулина - позволяет повысить уровень оксида азота в крови, который расслабляет и расширяет кровеносные сосуды.<br><br>Спирулина содержит:<br>Аминокислоты - является строительным материалом для мышц.<br>Хлорофилл - способствует укреплению сердечно-сосудистой системы и иммунитета.<br>Цистин - помогает очистить кровь и вывести токсины из организма.<br><br>Экстракт <strong>хлореллы</strong> - содержит более 20 аминокислот. Прежде отличается беспроценттым содержанием белка-55% от сухой массы. Хлорелла ценнейший источник витаминов- А, В1,В2, В6, С, К, РР, Е, пантетоневой кислоты, фолиевой кислоты, биотина, а также микро-макроэлементов кальция, фосфора, магния, калия, меди, железа, серы, цинка, кобальта. Кроме того клетки хлореллы содержат много йода.<br><br><strong>Люцерна</strong> - содержит сапонины, которые блокируют поглощение "плохого" холестерина и препятствует образованию атеролсклеротических бляшек. (закупорки артерий) Люцерна оказывает на организм антимикробный, противовоспалительный, лимфодренажный, антиоксидантный эффект. Люцерна содержит хлорофилл, который способствует очищению (детоксикацию) всего организма.',
                usage: 'Страна происхождения - Малайзия<br>Изготовитель: M international Sdn.Bhd. (1304378-W)<br>Срок годности 24 месяца с даты изготовления.<br><br>Заменяем прием пищи: либо завтрак, либо ужин. Если ужин, то не позже 19:00. Если вы совмещаете с GreenMAX, и хотите сброс веса, то заменяем ужин и перед сном GreenMАХ. Разводим 1 пакет на 180 мл теплой воды и выпиваем.<br>NutriМАХ лучше размешивать в шейкере.'
            }
        },
        'yekaterina': {
            url: 'https://minternational.ru/kaliningrad/yekaterina',
            name: 'Ye-Katerina',
            info: {
                main: 'Женская гигиена так же важна, как и личная гигиена!\nПредставляем гель для женской гигиены Ye-Katerina,\nразработанный в Малайзии, со 100% натуральным состав\nидеально смешанных экстрактов трав с уникальными\nсвойствами. Ye-Katerina не только помогает поддерживат\nчистоту и свежесть интимной зоны, но и помогает облегчи\nобщий менструальный и вагинальный дискомфорт.\nПрофилактика женских заболеваний:\nМолочница\nВоспаление\nЦистит\nНедержание\nПовышение чувствительности\nМиома\nГеморрой',
                health: '<ul style="list-style-type: disc; padding-left: 20px; margin: 0;"><li>Тонизирует и подтягивает стенки влагалища</li><li>Укрепляет ткани груди после нескольких месяцев использования</li><li>Улучшает и регулирует менструальный цикл</li><li>Регулирует гормональный дисбаланс</li><li>Устраняет боли при менструации и расстройства менструального цикла</li><li>Регулирует менструальный цикл и устраняет гормональный дисбаланс. Облегчает менопаузу</li><li>Повышение сексуальности и повышение уровня эстрогена</li><li>Ликвидирует неприятные выделения и запахи</li><li>Устраняет сухость влагалища и кандидоз</li><li>Устраняет вагинальный зуд и раздражение влагалища</li><li>Профилактика всех застойных образований (миом, кист, фиброаденом, мастопатии)</li></ul>',
                composition: 'Ye-Katerina COCTAB. 100% натуральный<br><br>• Касип фатима (Labisia Pumila) Небольшое древесное листовое растение, произрастает в Малазии. Одно из лучших и полезных для здоровья женщин растение, особенно в послеродовой период, во время цикла менструации и менопаузы. Используется для повышения жизненной силы, преодоления усталости и улучшения тонуса мышц влагалища, используется как заживляющее средство, т.к., обладает высокими регинерирущими свойствами, имеет противоопухолевый эффект, предотвращает окисление ДНК в клетках здоровых тканей, предупреждая их перерождение. Обладает сужающим и смазочным действием. Улучшает сексуальную функцию. Регулирует менструальный цикл, устраняет боли и расстройства менструального цикла. Облегчает симптомы менопаузы<br><br>• Пуэрария дольчатая (Pueraria Mirifica) - лианоподобное растение. Имеет высокий антимутагенный эффект. Обладает значительным цитотоксическим эффектом в отношении линии клеток рака молочных желез человека.<br>Оздоравливает женскую половую сферу, восстанавливает водный баланс кожи, благодаря чему кожные покровы приобретают упругость. Способствует выработке коллагена, увеличивает объем груди т.к. фитоэстрогены способствуют накоплению в ней жировой ткани, подтягивается силуэт фигуры, укрепляет мышцы женских половых органов, возвращает чувствительность интимных мест и помогает получать настоящее удовольствие от полового акта. Улучшает состояние при опущении матки оказывает губительное влияние на грибки и болезнетворные бактерии устраняет излишки слизи в половых органах нормализует менструацию очищает матку после месячных кровотечений и родов заживляет дефекты слизистых оболочек, эрозии, лечит раны, язвы на коже устраняет зуд и неприятные ощущения снимает тянущие ощущения в нижней части живота.<br><br>• Дубовые галлы (Quercus Infectoria) - Дуб инфекторный. Является чрезвычайно полезным для женщин. Дает мгновенный сужающий эффект на стенках влагалища. Нейтрализует нежелательные микроорганизмы. Позволяет бороться со свободными радикалами, чтобы тонизировать стенки влагалища. Помогает обратить вспять потерю эластичности, вызванную старением, гормональными изменениями и родами.<br><br>• Экстракт перца бетеля (Daun Sirih) Сжимает вагинальный канал. Борется с неприятными запахами.<br><br>• Экстракт чеснока (Органический чеснок) Уменьшает количество свободных радикалов в кровотоке. Улучшает кровообращение по всему организму. Используется в качестве лекарства от импотенции.<br><br>• Лаванда. Является антисептиком, природным антибиотиком, детоксикатором, запах лаванды успокаивает, снимает боль и оказывает расслабляющее действие. Уменьшает воспаление, снимает спазмы, стресс и обладает противовирусными свойствами.',
                usage: 'Страна происхождения Малайзия<br>Изготовитель: M international Sdn.Bhd. (1304378-W)<br>Срок годности 24 месяца с даты изготовления.<br><br>На 30 секунд горошину геля нанести на клитор, затем намылить всю слизистую до ануса, через 3-5 минут, обязательно смыть. Это действенная профилактика и лечение геморроя.<br><br>При уже поставленном диагнозе (миомы, кисты, мастопатии, эрозия матки) наносить на слизистую на 30 минут 3 раза в день, и обязательно смывать. Либо вытирать влажной салфеткой.'
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