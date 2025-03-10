// Конфигурация контактных данных
const contactConfig = {
    name: 'Майкл Джексон', 
    phone: '77776814389'
};

function updateContactInfo() {
    const contactElement = document.querySelector('.sweet-alert ~ div strong');
    
    if (contactElement) {
        contactElement.textContent = `${contactConfig.name} ${contactConfig.phone}`;
    }
}

document.addEventListener('DOMContentLoaded', updateContactInfo); 