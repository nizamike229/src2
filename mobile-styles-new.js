document.addEventListener('DOMContentLoaded', function() {
    var style = document.createElement('style');
    style.textContent = `
        @media screen and (max-width: 768px) {
            body {
                width: 100%;
                margin: 0;
                padding: 0;
                -webkit-text-size-adjust: 100%;
                min-width: 320px !important;
            }
            
            .container {
                width: 100% !important;
                padding: 0 15px;
                box-sizing: border-box;
                margin: 0 auto;
                min-width: 320px !important;
            }
            
            img {
                max-width: 100%;
                height: auto;
            }
            
            .textable {
                font-size: 16px !important;
                line-height: 1.4 !important;
                word-wrap: break-word;
            }
            
            .xs-scale-60,
            .xs-scale-70 {
                transform: none !important;
                width: 100% !important;
            }
            
            .button-container {
                display: block !important;
                width: 100% !important;
                margin: 10px 0 !important;
            }
            
            .button-container .btn {
                display: block !important;
                width: 90% !important;
                margin: 10px auto !important;
                max-width: none !important;
                padding: 12px !important;
                font-size: 18px !important;
            }
            
            .col {
                width: 100% !important;
                display: block !important;
                margin-bottom: 20px !important;
            }
            
            .grid .col {
                float: none !important;
                clear: both !important;
            }
            
            .xs-none {
                display: block !important;
            }
            
            .wrapper1,
            .wrapper2 {
                width: 100% !important;
                max-width: 100% !important;
                padding: 0 !important;
                min-width: 320px !important;
            }
            
            .node {
                padding-left: 10px !important;
                padding-right: 10px !important;
                box-sizing: border-box;
            }
            
            .roundimage {
                text-align: center !important;
            }
            
            .roundimage img {
                max-width: 100%;
                height: auto;
                margin: 0 auto;
            }
            
            .font-header spans {
                font-size: 28px !important;
                line-height: 1.2 !important;
                text-align: center !important;
                display: block;
            }
            
            .spoiler43-container {
                max-height: none !important;
            }
            
            .xs-force-center {
                text-align: center !important;
            }
            
            .xs-force-center * {
                text-align: center !important;
            }
            
            .padding {
                height: 20px !important;
            }
            
            .swiper-slide {
                height: auto !important;
            }
            
            ul {
                padding-left: 20px !important;
                margin: 10px 0 !important;
            }
            
            .metahtml {
                max-width: 100%;
                overflow-x: hidden;
            }
            
            .tabs1-container {
                height: auto !important;
            }
            
            .cont {
                padding: 10px !important;
            }
            
            .area {
                min-width: 320px !important;
            }
            
            .swiper-container {
                height: auto !important;
            }
            
            .swiper-wrapper {
                height: auto !important;
            }
            
            .grid {
                display: block !important;
            }
            
            .gridwrap {
                display: block !important;
            }
            
            [class*="col-"] {
                width: 100% !important;
            }
            
            .node[data-opacity] {
                opacity: 1 !important;
            }
            
            .wrapper1 {
                max-height: 80vh;
                overflow-y: auto;
            }
            
            .font-header {
                font-size: 24px !important;
            }
            
            .node32 {
                padding-top: 10px !important;
                padding-bottom: 10px !important;
            }
            
            .node33 {
                margin-top: 0 !important;
                margin-bottom: 0 !important;
            }
            
            .roundimage img {
                max-width: 80px !important;
                height: auto !important;
            }
            
            .xs-scale-70 {
                transform: scale(0.7);
                transform-origin: left top;
            }
        }
    `;
    document.head.appendChild(style);

    // Перенаправляем все внешние ссылки на секцию контактов
    document.querySelectorAll('a[href*="minternational.ru"]').forEach(function(link) {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector('.node node99').scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Исправляем отображение карточки NutriMax
    var nutrimaxCard = document.querySelector('.node151');
    if (nutrimaxCard) {
        nutrimaxCard.style.display = 'block';
        nutrimaxCard.style.width = '100%';
    }
}); 