document.addEventListener('DOMContentLoaded', function() {
    // Находим все ссылки, ведущие на внешние сайты
    document.querySelectorAll('a').forEach(function(link) {
        if (link.href.includes('minternational.ru') || 
            link.href.includes('api.whatsapp.com') ||
            link.href.includes('http')) {
            
            link.addEventListener('click', function(e) {
                e.preventDefault();
                
                // Прокручиваем к секции контактов
                const contactSection = document.querySelector('.node node99') || 
                                    document.querySelector('[href*="whatsapp.com"]').closest('.node');
                
                if (contactSection) {
                    contactSection.scrollIntoView({ 
                        behavior: 'smooth',
                        block: 'center'
                    });
                }
            });
        }
    });
}); 