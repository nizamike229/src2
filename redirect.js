document.addEventListener('DOMContentLoaded', function() {
    document.body.addEventListener('click', function(e) {
        const link = e.target.closest('a');
        if (!link) return;
        
        const href = link.getAttribute('href');
        if (!href) return;
        
        // Проверяем, содержит ли ссылка домен minternational
        if (href.includes('minternational')) {
            e.preventDefault();
            
            // Плавная прокрутка к секции контактов
            const contactSection = document.querySelector('.node96');
            if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' });
            }
        }
    });
}); 