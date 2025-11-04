// Получаем элементы
const button = document.querySelector('.cool-button');
const message = document.getElementById('message');

// Добавляем обработчик события
button.addEventListener('click', function() {
    const messages = [
        'Отлично! Ты молодец! 🎉',
        'Так держать! У тебя прекрасно получается! 💪',
        'Потрясающе! Ты настоящий разработчик! ✨',
        'Ура! С каждым днем ты становишься лучше! 🚀',
        'Восхитительно! Продолжай в том же духе! 🌟',
        'Браво! Твои навыки растут с каждой минутой! 👏'
    ];
    
    // Выбираем случайное сообщение
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    
    // Показываем сообщение с анимацией
    message.textContent = randomMessage;
    message.style.opacity = '0';
    message.style.transform = 'translateY(-10px)';
    
    setTimeout(() => {
        message.style.transition = 'all 0.5s ease';
        message.style.opacity = '1';
        message.style.transform = 'translateY(0)';
    }, 10);
});

// Плавная прокрутка для навигации
document.querySelectorAll('.main-nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Анимация появления секций при скролле
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
}, observerOptions);

// Наблюдаем за секциями
document.querySelectorAll('section').forEach(section => {
    section.style.opacity = "0";
    section.style.transform = "translateY(30px)";
    section.style.transition = "all 0.8s ease-out";
    observer.observe(section);
});

// Анимация для skill bars
const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fillBar 2s ease-in-out';
        }
    });
}, { threshold: 0.5 });

document.querySelectorAll('.progress').forEach(bar => {
    skillObserver.observe(bar);
});

console.log('🚀 Сайт загружен! Добро пожаловать!');
