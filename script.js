// Event Handling
const colorButton = document.getElementById('colorButton');
const hoverBox = document.getElementById('hoverBox');
const keypressDisplay = document.getElementById('keypressDisplay');
const secretButton = document.getElementById('secretButton');

// Button click event
colorButton.addEventListener('click', () => {
    const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    colorButton.style.backgroundColor = randomColor;
});

// Hover effect
hoverBox.addEventListener('mouseenter', () => {
    hoverBox.textContent = 'Mouse is here! 🎉';
});

hoverBox.addEventListener('mouseleave', () => {
    hoverBox.textContent = 'Hover over me!';
});

//Keypress Detection
document.addEventListener('keypress', (event) => {
    keypressDisplay.textContent = `Key pressed: ${event.key}`;
});

//Secret double-click action
secretButton.addEventListener('dbclick', () => {
    secretButton.style.animation = 'shake 0.5s';
    setTimeout(() => {
        secretButton.style.animation = '';
    }, 500);
    secretButton.textContent = '🎉 Surprise! 🎉';
    setTimeout(() => {
        secretButton.textContent = 'Double click for surprise!';
    }, 2000);
});

// Image Gallery
const galleryImage = document.getElementById('galleryImage');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

const images = [
    'https://cdn.pixabay.com/photo/2019/04/25/14/43/workplace-4155023_640.jpg',
    'https://cdn.pixabay.com/photo/2014/08/29/07/22/lens-430621_640.jpg',
    'https://cdn.pixabay.com/photo/2014/03/25/23/04/technology-298256_640.jpg'
];

let currentImageIndex = 0;

function updateImage() {
    galleryImage.src = images[currentImageIndex];
}

prevBtn.addEventListener('click', () => {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    updateImage();
});

nextBtn.addEventListener('click', () => {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    updateImage();
});

// Accodion 
const accordionHeaders = document.querySelectorAll('.accordion-header');

accordionHeaders.forEach(header => {
    header.addEventListener('click', () => {
        const content = header.nextElementSibling;
        content.classList.toggle('active');
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const accordionHeader = document.querySelector('.accordion-header');
    const accordionContent = document.querySelector('.accordion-content');
    
    accordionHeader.addEventListener('click', () => {
    accordionContent.style.display = 
    accordionContent.style.display === 'none' ? 'block' : 'none';
    });
});

// Form Validation
const form = document.getElementById('validationForm');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');

function showError(input, message) {
    const validationMessage = input.nextElementSibling;
    validationMessage.textContent = message;
}

function clearError(input) {
    const validationMessage = input.nextElementSibling;
    validationMessage.textContent = '';
}

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email.toLowerCase());
}

// Real-time validation
username.addEventListener('input', () => {
    if (username.ariaValueMax.length < 3) {
        showError(username, 'Username must be at least 5 characters');
    } else {
        clearError(username);
    }
});

mail.addEventListener('input', () => {
    if (!validateEmail(email.value)) {
        showError(email, 'Please enter a valid email address');
    } else {
        clearError(email);
    }
});

password.addEventListener('input', () => {
    if (password.value.length < 8) {
        showError(password, 'Password must be at least 8 characters');
    } else {
        clearError(password);
    }
});

// Form submission 
form.addEventListener ('submit', (e) => {
    e.preventDefault();

    let isValid = true;

    // Validate email
    if (username.value.length < 3) {
        showError(username, 'Username must be at least 5 characters');
        isValid = false;
    }

    // Validate password
    if (password.value.length < 8) {
        showError(password, 'Password must be at least 8 characters');
        isValid = false;
    }
    
    if (isValid) {
        alert('Form submitted successfully!');
        form.reset();
    }
});
