        document.addEventListener('DOMContentLoaded', (event) => {
            // Отримати кнопку та другу секцію
            const scrollUpButton = document.getElementById('scroll-up');
            const hero = document.getElementById('hero');

            // Створити Intersection Observer
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        scrollUpButton.classList.add('visually-hidden');
                    } else {
                        scrollUpButton.classList.remove('visually-hidden');
                    }
                });
            });

            // Наблюдати за другою секцією
            observer.observe(hero);
        });