const contactConfig = {
    name: 'Майкл Джексон', 
    phone: '77776814389'
};

function updateContactInfo() {
    const contactElement = document.querySelector('.button-wrapper .btn-legacy .text');
    
    if (contactElement) {
        contactElement.innerHTML = `${contactConfig.name}<br>+${contactConfig.phone}`;
    }
}

document.addEventListener('DOMContentLoaded', updateContactInfo); 