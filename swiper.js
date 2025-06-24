document.addEventListener('DOMContentLoaded', function() {
    const swiper = new Swiper('.swiper-container', {
        loop: true,
        // Убираем автопрокрутку
        // autoplay: false, // можно просто удалить этот параметр
        
        // Настройки пагинации
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            // Добавляем кастомные классы
            bulletClass: 'indicator',
            bulletActiveClass: 'active'
        }
    });
});