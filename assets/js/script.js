
document.addEventListener('DOMContentLoaded', () => {

    // --- 1. ハンバーガーメニュー ---
    const hamburger = document.getElementById('js-hamburger');
    const nav = document.getElementById('js-nav');
    const navLinks = document.querySelectorAll('.nav__link, .nav__btn');

    if (hamburger && nav) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('is-active');
            nav.classList.toggle('is-active');
        });

        // メニューリンクをクリックしたら閉じる
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('is-active');
                nav.classList.remove('is-active');
            });
        });
    }

    // --- 2. スムーススクロール ---
    const smoothScrollTriggers = document.querySelectorAll('a[href^="#"]');

    smoothScrollTriggers.forEach(trigger => {
        trigger.addEventListener('click', (e) => {
            e.preventDefault();
            const href = trigger.getAttribute('href');
            const targetElement = document.querySelector(href === "#" || href === "" ? 'html' : href);

            if (targetElement) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - headerHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // --- 3. FAQ アコーディオン ---
    const faqTriggers = document.querySelectorAll('.js-accordion');

    faqTriggers.forEach(trigger => {
        trigger.addEventListener('click', () => {
            trigger.classList.toggle('is-open');
            const content = trigger.nextElementSibling;

            if (trigger.classList.contains('is-open')) {
                content.style.maxHeight = content.scrollHeight + 'px';
            } else {
                content.style.maxHeight = null;
            }
        });
    });
});