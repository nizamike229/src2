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
                overflow-x: hidden;
            }
            
            .container {
                width: 100% !important;
                padding: 0 15px;
                box-sizing: border-box;
                margin: 0 auto;
                min-width: 320px !important;
                overflow: visible !important;
            }
            
            img {
                max-width: 100%;
                height: auto;
                display: inline-block;
                vertical-align: middle;
            }
            
            .textable {
                font-size: 16px !important;
                line-height: 1.5 !important;
                word-wrap: break-word;
                width: 100% !important;
                display: block !important;
            }
            
            .xs-scale-60,
            .xs-scale-70 {
                transform: none !important;
                width: 100% !important;
                max-width: 100% !important;
            }
            
            .button-container .btn {
                width: auto;
                min-width: 200px;
                max-width: 300px;
                margin: 10px auto;
                display: block;
                padding: 10px 20px;
            }
            
            .grid .col {
                width: 100% !important;
                margin-bottom: 20px;
                float: none;
                display: block;
            }
            
            .wrapper1,
            .wrapper2 {
                width: 100% !important;
                max-width: 100% !important;
                padding: 0 !important;
                min-width: 320px !important;
                overflow: visible !important;
            }
            
            .node {
                padding-left: 15px !important;
                padding-right: 15px !important;
                box-sizing: border-box;
                display: block !important;
                visibility: visible !important;
                opacity: 1 !important;
            }
            
            .roundimage {
                text-align: center !important;
                margin: 0 auto;
                display: block;
            }
            
            .roundimage img {
                max-width: 100%;
                height: auto;
                margin: 0 auto;
                display: inline-block;
            }
            
            .font-header spans {
                font-size: 24px !important;
                line-height: 1.3 !important;
                text-align: center !important;
                display: block;
                width: 100%;
            }
            
            .spoiler43-container {
                max-height: none !important;
                overflow: visible !important;
            }
            
            .xs-force-center {
                text-align: center !important;
                margin-left: auto !important;
                margin-right: auto !important;
            }
            
            .xs-force-center * {
                text-align: center !important;
                margin-left: auto !important;
                margin-right: auto !important;
            }
            
            .padding {
                height: 15px !important;
                display: block !important;
            }
            
            .swiper-slide {
                height: auto !important;
                visibility: visible !important;
                display: block !important;
            }
            
            ul {
                padding-left: 20px !important;
                margin: 10px 0 !important;
                list-style-position: outside !important;
            }
            
            .metahtml {
                max-width: 100%;
                overflow-x: visible;
                display: block !important;
            }
            
            .tabs1-container {
                height: auto !important;
                overflow: visible !important;
            }
            
            .cont {
                padding: 15px !important;
                box-sizing: border-box;
                overflow: visible !important;
            }
            
            .area {
                min-width: 320px !important;
                overflow: visible !important;
            }
            
            .swiper-container {
                height: auto !important;
                overflow: visible !important;
            }
            
            .swiper-wrapper {
                height: auto !important;
                display: block !important;
                transform: none !important;
            }
            
            .grid {
                display: block !important;
                width: 100% !important;
            }
            
            .gridwrap {
                display: block !important;
                width: 100% !important;
            }
            
            [class*="col-"] {
                width: 100% !important;
                display: block !important;
                float: none !important;
            }
            
            .node[data-opacity] {
                opacity: 1 !important;
                visibility: visible !important;
            }

            /* Дополнительные исправления для видимости контента */
            * {
                visibility: visible !important;
                opacity: 1 !important;
            }

            /* Исправление для flex-контейнеров */
            [class*="flex-"] {
                display: block !important;
                width: 100% !important;
            }

            /* Улучшение читаемости текста */
            p, div, span {
                font-size: 16px !important;
                line-height: 1.5 !important;
                color: inherit !important;
            }
        }
    `;
    document.head.appendChild(style);
}); 