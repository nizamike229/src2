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
            
            .button-container .btn {
                width: 100%;
                max-width: 300px;
                margin: 10px auto;
                display: block;
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
        }
    `;
    document.head.appendChild(style);
}); 