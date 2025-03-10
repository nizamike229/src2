const contactConfig = {
    name: 'Майкл Джексон', 
    phone: '77776814389'
};

function updateContactInfo() {
    const contactElements = document.querySelectorAll('.textable.gray-theme p span strong');
    
    contactElements.forEach(element => {
        if (element) {
            element.textContent = `${contactConfig.name} ${contactConfig.phone}`;
        }
    });
}

document.addEventListener('DOMContentLoaded', updateContactInfo); 