        document.addEventListener('DOMContentLoaded', (event) => {
            // Отримати кнопку та другу секцію
            const scrollUpButton = document.getElementById('scroll-up');
            const keyFeatures = document.getElementById('key-features');

            // Створити Intersection Observer
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        scrollUpButton.classList.add('show');
                    } else {
                        scrollUpButton.classList.remove('show');
                    }
                });
            });

            // Наблюдати за другою секцією
            observer.observe(keyFeatures);
        });