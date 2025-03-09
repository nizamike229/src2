document.addEventListener('DOMContentLoaded', function() {
    var style = document.createElement('style');
    style.textContent = `
        @media screen and (max-width: 768px) {
            html, body {
                width: 100%;
                margin: 0;
                padding: 0;
                overflow-x: hidden;
                -webkit-text-size-adjust: 100%;
                min-width: 320px !important;
                height: auto !important;
                position: relative;
            }
            
            .container {
                width: 100% !important;
                padding: 0 10px;
                box-sizing: border-box;
                margin: 0 auto;
                min-width: 320px !important;
            }
            
            img {
                max-width: 100%;
                height: auto;
            }
            
            .textable {
                font-size: 14px !important;
                line-height: 1.4 !important;
                margin: 5px 0 !important;
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
                padding: 8px 15px !important;
                font-size: 16px !important;
                width: auto !important;
                min-width: 200px;
                max-width: 90% !important;
                margin: 5px auto !important;
            }
            
            .col {
                width: 100% !important;
                display: block !important;
                margin-bottom: 20px !important;
            }
            
            .grid .col {
                padding: 5px !important;
                margin-bottom: 10px !important;
            }
            
            .xs-none {
                display: block !important;
            }
            
            .wrapper1,
            .wrapper2 {
                padding: 5px !important;
                margin: 0 !important;
            }
            
            .node {
                transform: scale(0.9);
                transform-origin: top center;
                margin-bottom: 10px !important;
            }
            
            .roundimage {
                text-align: center !important;
            }
            
            .roundimage img {
                max-width: 60px !important;
                height: auto !important;
            }
            
            .font-header spans {
                font-size: 24px !important;
                line-height: 1.2 !important;
            }
            
            .spoiler43-container {
                padding: 5px !important;
            }
            
            .xs-force-center {
                text-align: center !important;
            }
            
            .xs-force-center * {
                text-align: center !important;
            }
            
            .padding {
                height: 10px !important;
            }
            
            .swiper-container,
            .swiper-wrapper,
            .swiper-slide {
                height: auto !important;
                min-height: 0 !important;
            }
            
            .grid {
                display: block !important;
            }
            
            .gridwrap {
                margin: 0 !important;
                padding: 5px !important;
            }
            
            [class*="col-"] {
                width: 100% !important;
            }
            
            .node[data-opacity] {
                opacity: 1 !important;
            }
            
            .wrapper1,
            .wrapper2 {
                height: auto !important;
                min-height: 0 !important;
                overflow: visible !important;
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
            
            .td.icon {
                width: 30px !important;
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
            
            .node151 {
                transform: scale(0.9);
                transform-origin: top center;
            }
            
            .section-clear.background-fixed {
                position: relative !important;
                height: auto !important;
            }
            
            ul {
                padding-left: 15px !important;
                margin: 5px 0 !important;
            }
            
            .metahtml {
                max-width: 100%;
                overflow-x: hidden;
            }
            
            .tabs1-container {
                height: auto !important;
            }
            
            .cont {
                padding: 5px !important;
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