document.addEventListener('DOMContentLoaded', function() {
    var style = document.createElement('style');
    style.textContent = `
        @media screen and (max-width: 768px) {
            body {
                width: 100%;
                margin: 0;
                padding: 0;
                -webkit-text-size-adjust: 100%;
            }
            
            .container {
                width: 100% !important;
                padding: 0 15px;
                box-sizing: border-box;
            }
            
            img {
                max-width: 100%;
                height: auto;
            }
            
            .textable {
                font-size: 16px !important;
                line-height: 1.4 !important;
            }
            
            .xs-scale-60,
            .xs-scale-70 {
                transform: none !important;
            }
            
            .button-container .btn {
                width: 100%;
                max-width: 300px;
                margin: 10px auto;
            }
            
            .grid .col {
                width: 100% !important;
                margin-bottom: 20px;
            }
            
            .wrapper1,
            .wrapper2 {
                width: 100% !important;
                max-width: 100% !important;
            }
            
            .node {
                padding-left: 10px !important;
                padding-right: 10px !important;
            }
            
            .roundimage img {
                max-width: 100%;
                height: auto;
            }
            
            .font-header spans {
                font-size: 24px !important;
            }
            
            .spoiler43-container {
                max-height: none !important;
            }
        }
    `;
    document.head.appendChild(style);
}); 