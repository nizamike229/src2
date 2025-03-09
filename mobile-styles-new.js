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
            
            /* Фиксируем высоту шапки */
            .node32.section-clear {
                max-height: 300px !important;
                overflow: hidden !important;
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
            
            /* Уменьшаем масштаб в шапке */
            .xs-scale-60,
            .xs-scale-70 {
                transform: scale(0.6) !important;
                transform-origin: center top !important;
                width: 100% !important;
                margin-bottom: -20px !important;
            }
            
            /* Уменьшаем кнопки в шапке */
            .node32 .button-container .btn {
                padding: 8px 15px !important;
                font-size: 14px !important;
                min-height: 0 !important;
                line-height: 1.2 !important;
                margin: 5px auto !important;
            }
            
            /* Делаем карточки адаптивными */
            .node[class*="node1"] {
                width: 100% !important;
                max-width: 100% !important;
                margin: 10px 0 !important;
                transform: scale(0.9) !important;
                transform-origin: center top !important;
            }
            
            /* Специально для карточки NutriMax */
            .node151 {
                transform: scale(0.8) !important;
                transform-origin: center top !important;
                margin: 0 auto !important;
                width: 90% !important;
            }
            
            /* Уменьшаем изображения в карточках */
            .node[class*="node1"] img {
                max-width: 90% !important;
                height: auto !important;
                object-fit: contain !important;
                margin: 0 auto !important;
                display: block !important;
            }
            
            /* Кнопка заказать */
            .button-container .btn {
                width: auto !important;
                max-width: 90% !important;
                margin: 10px auto !important;
                display: block !important;
                padding: 8px 15px !important;
                font-size: 16px !important;
                white-space: normal !important;
            }
            
            .grid .col {
                width: 100% !important;
                margin-bottom: 20px;
                float: none;
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
                max-width: 80% !important;
                height: auto;
                margin: 0 auto;
            }
            
            /* Уменьшаем заголовки */
            .font-header spans {
                font-size: 22px !important;
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
                height: 15px !important;
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
        }
    `;
    document.head.appendChild(style);
}); 