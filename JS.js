const music = document.getElementById('background-music');
const toggle = document.querySelector('.music-toggle');
const volumeControl = document.getElementById('volume');
const button = document.getElementById('romantic-btn');
const message = document.getElementById('romantic-message');

button.addEventListener('click', () => {
    // Показываем сообщение с анимацией
    message.style.display = 'block';
});

// Обработчик нажатия на кнопку включения/выключения музыки
toggle.addEventListener('click', () => {
    console.log('Кнопка нажата');
    if (music.paused) {
        music.play();
        toggle.textContent = '🎵 Выключить музыку';
    } else {
        music.pause();
        toggle.textContent = '🎵 Включить музыку';
    }
});

// Обработчик изменения громкости
volumeControl.addEventListener('input', () => {
    // Устанавливаем громкость в пределах [0, 1]
    music.volume = Math.min(Math.max(volumeControl.value, 0), 1);
});

// Устанавливаем громкость на значение ползунка при загрузке
music.volume = volumeControl.value;

// Логирование событий play и pause для аудио
music.addEventListener('play', () => {
    console.log('Музыка начала играть');
});

music.addEventListener('pause', () => {
    console.log('Музыка остановлена');
});


window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    setTimeout(() => {
        preloader.style.opacity = '0'; // Плавное исчезновение
        setTimeout(() => {
            preloader.style.display = 'none'; // После исчезновения скрываем элемент
        }, 1000); // Задержка, чтобы анимация исчезновения успела пройти
    }, 2700);
});



function createSnowflakes() {
    const container = document.getElementById('snowflakes-container');
    if (!container) {
        console.error('Контейнер для снежинок не найден!');
        return;
    }

    const numberOfSnowflakes = 30; // Количество снежинок на экране

    for (let i = 0; i < numberOfSnowflakes; i++) {
        const snowflake = document.createElement('div');
        snowflake.classList.add('snowflake');

        // Случайные начальные значения для каждой снежинки
        snowflake.style.left = Math.random() * 100 + 'vw'; // Случайное положение по горизонтали
        snowflake.style.animationDuration = Math.random() * 5 + 5 + 's'; // Случайная скорость
        snowflake.style.animationDelay = Math.random() * 5 + 's'; // Задержка перед началом анимации

        // Добавляем смайлик ❄️ в снежинку
        snowflake.textContent = '❄️';

        container.appendChild(snowflake);
    }
}

// Вызов функции создания снежинок при загрузке страницы
window.addEventListener('load', () => {
    createSnowflakes();
});
