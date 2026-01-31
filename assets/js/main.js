/**
 * Portfolio Professor - Main JavaScript
 * =====================================
 * Funcionalidades interativas do site
 * Vanilla JS (ES6+) - Sem dependências externas
 */

// Aguarda o DOM carregar completamente
document.addEventListener('DOMContentLoaded', () => {
    // Inicializa todos os módulos
    initThemeToggle();
    initMobileMenu();
    initSmoothScroll();
    initHeaderScroll();
    initScrollAnimations();
    initBackToTop();
    initDisciplineFilter();
    initPublicationFilter();
    initActiveNavigation();
    initContactForm();
});

/* ============================================
   Theme Toggle (Claro/Escuro)
   ============================================ */
function initThemeToggle() {
    const themeToggle = document.getElementById('theme-toggle');
    const html = document.documentElement;

    // Verifica preferência salva ou preferência do sistema
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    // Aplica tema inicial
    if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
        html.classList.add('dark');
    }

    // Event listener para alternar tema
    themeToggle?.addEventListener('click', () => {
        html.classList.toggle('dark');

        // Salva preferência no localStorage
        const isDark = html.classList.contains('dark');
        localStorage.setItem('theme', isDark ? 'dark' : 'light');

        // Anuncia mudança para leitores de tela
        const message = isDark ? 'Tema escuro ativado' : 'Tema claro ativado';
        announceToScreenReader(message);
    });

    // Escuta mudanças na preferência do sistema
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
        if (!localStorage.getItem('theme')) {
            html.classList.toggle('dark', e.matches);
        }
    });
}

/* ============================================
   Mobile Menu (Hamburger)
   ============================================ */
function initMobileMenu() {
    const menuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const menuLinks = mobileMenu?.querySelectorAll('a');

    // Alterna menu ao clicar no botão
    menuBtn?.addEventListener('click', () => {
        const isOpen = mobileMenu.classList.toggle('hidden');

        // Atualiza atributos de acessibilidade
        menuBtn.setAttribute('aria-expanded', !isOpen);

        // Altera ícone
        const icon = menuBtn.querySelector('i');
        icon.classList.toggle('fa-bars');
        icon.classList.toggle('fa-times');
    });

    // Fecha menu ao clicar em um link
    menuLinks?.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
            menuBtn.setAttribute('aria-expanded', 'false');

            const icon = menuBtn.querySelector('i');
            icon.classList.add('fa-bars');
            icon.classList.remove('fa-times');
        });
    });

    // Fecha menu ao pressionar Escape
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && !mobileMenu?.classList.contains('hidden')) {
            mobileMenu.classList.add('hidden');
            menuBtn?.setAttribute('aria-expanded', 'false');
            menuBtn?.focus();
        }
    });
}

/* ============================================
   Smooth Scroll (Navegação suave)
   ============================================ */
function initSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');

            // Ignora links sem destino
            if (href === '#') return;

            const target = document.querySelector(href);

            if (target) {
                e.preventDefault();

                // Calcula offset considerando o header fixo
                const headerHeight = document.getElementById('header')?.offsetHeight || 0;
                const targetPosition = target.offsetTop - headerHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });

                // Move foco para o destino (acessibilidade)
                target.setAttribute('tabindex', '-1');
                target.focus({ preventScroll: true });
            }
        });
    });
}

/* ============================================
   Header Scroll Effect
   ============================================ */
function initHeaderScroll() {
    const header = document.getElementById('header');
    let lastScrollY = window.scrollY;
    let ticking = false;

    function updateHeader() {
        const scrollY = window.scrollY;

        // Adiciona classe 'scrolled' após rolar 100px
        if (scrollY > 100) {
            header?.classList.add('scrolled');
        } else {
            header?.classList.remove('scrolled');
        }

        lastScrollY = scrollY;
        ticking = false;
    }

    // Usa requestAnimationFrame para melhor performance
    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(updateHeader);
            ticking = true;
        }
    }, { passive: true });
}

/* ============================================
   Scroll Animations (Fade-in ao aparecer)
   ============================================ */
function initScrollAnimations() {
    const animatedElements = document.querySelectorAll('.animate-on-scroll');

    // Configuração do Intersection Observer
    const observerOptions = {
        root: null,
        rootMargin: '0px 0px -50px 0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Para de observar após animar
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observa todos os elementos animados
    animatedElements.forEach(el => observer.observe(el));
}

/* ============================================
   Back to Top Button
   ============================================ */
function initBackToTop() {
    const backToTopBtn = document.getElementById('back-to-top');
    let ticking = false;

    function toggleButton() {
        if (window.scrollY > 500) {
            backToTopBtn?.classList.add('visible');
        } else {
            backToTopBtn?.classList.remove('visible');
        }
        ticking = false;
    }

    // Mostra/esconde botão baseado no scroll
    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(toggleButton);
            ticking = true;
        }
    }, { passive: true });

    // Volta ao topo ao clicar
    backToTopBtn?.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

/* ============================================
   Discipline Filter (Filtro de disciplinas)
   ============================================ */
function initDisciplineFilter() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const disciplineCards = document.querySelectorAll('.discipline-card');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active de todos os botões
            filterBtns.forEach(b => b.classList.remove('active'));

            // Adiciona active no botão clicado
            btn.classList.add('active');

            // Obtém categoria do filtro
            const filter = btn.dataset.filter;

            // Filtra os cards
            disciplineCards.forEach(card => {
                const category = card.dataset.category;

                if (filter === 'all' || category === filter) {
                    card.style.display = 'block';
                    // Reaplica animação
                    card.classList.remove('visible');
                    setTimeout(() => card.classList.add('visible'), 50);
                } else {
                    card.style.display = 'none';
                }
            });

            // Anuncia para leitores de tela
            const filterName = btn.textContent.trim();
            announceToScreenReader(`Filtro aplicado: ${filterName}`);
        });
    });
}

/* ============================================
   Publication Filter (Filtro de publicações)
   ============================================ */
function initPublicationFilter() {
    const filterBtns = document.querySelectorAll('.pub-filter-btn');
    const publications = document.querySelectorAll('.publication-card');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active de todos os botões
            filterBtns.forEach(b => b.classList.remove('active'));

            // Adiciona active no botão clicado
            btn.classList.add('active');

            // Obtém tipo do filtro
            const filter = btn.dataset.filter;

            // Filtra as publicações
            publications.forEach(pub => {
                const type = pub.dataset.type;

                if (filter === 'all' || type === filter) {
                    pub.style.display = 'block';
                    // Reaplica animação
                    pub.classList.remove('visible');
                    setTimeout(() => pub.classList.add('visible'), 50);
                } else {
                    pub.style.display = 'none';
                }
            });

            // Anuncia para leitores de tela
            const filterName = btn.textContent.trim();
            announceToScreenReader(`Mostrando: ${filterName}`);
        });
    });
}

/* ============================================
   Active Navigation (Destaque da seção atual)
   ============================================ */
function initActiveNavigation() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    let ticking = false;

    function updateActiveNav() {
        const scrollY = window.scrollY;
        const headerHeight = document.getElementById('header')?.offsetHeight || 0;

        sections.forEach(section => {
            const sectionTop = section.offsetTop - headerHeight - 100;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');

            if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
                // Remove active de todos os links
                navLinks.forEach(link => link.classList.remove('active'));

                // Adiciona active no link correspondente
                const activeLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);
                activeLink?.classList.add('active');
            }
        });

        ticking = false;
    }

    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(updateActiveNav);
            ticking = true;
        }
    }, { passive: true });
}

/* ============================================
   Contact Form (Formulário de contato)
   ============================================ */
function initContactForm() {
    const form = document.getElementById('contact-form');

    form?.addEventListener('submit', (e) => {
        // Validação básica (HTML5 já faz isso, mas reforçamos)
        const name = form.querySelector('#name');
        const email = form.querySelector('#email');
        const message = form.querySelector('#message');

        // Verifica campos obrigatórios
        if (!name?.value.trim() || !email?.value.trim() || !message?.value.trim()) {
            e.preventDefault();
            announceToScreenReader('Por favor, preencha todos os campos obrigatórios.');
            return;
        }

        // Validação de email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email.value)) {
            e.preventDefault();
            announceToScreenReader('Por favor, insira um email válido.');
            email.focus();
            return;
        }

        // Se chegou aqui, o formulário será enviado normalmente
        // Para integração com Formspree/Netlify, deixe o action do form configurado

        // Feedback visual (opcional - depende da integração)
        announceToScreenReader('Enviando mensagem...');
    });
}

/* ============================================
   Utility Functions (Funções utilitárias)
   ============================================ */

/**
 * Anuncia mensagem para leitores de tela
 * @param {string} message - Mensagem a ser anunciada
 */
function announceToScreenReader(message) {
    const announcement = document.createElement('div');
    announcement.setAttribute('role', 'status');
    announcement.setAttribute('aria-live', 'polite');
    announcement.setAttribute('aria-atomic', 'true');
    announcement.classList.add('sr-only');
    announcement.textContent = message;

    document.body.appendChild(announcement);

    // Remove após anunciar
    setTimeout(() => {
        announcement.remove();
    }, 1000);
}

/**
 * Debounce function para otimizar eventos frequentes
 * @param {Function} func - Função a ser executada
 * @param {number} wait - Tempo de espera em ms
 * @returns {Function}
 */
function debounce(func, wait = 100) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

/**
 * Verifica se um elemento está visível na viewport
 * @param {HTMLElement} element - Elemento a verificar
 * @returns {boolean}
 */
function isElementInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

/* ============================================
   Lazy Loading para Imagens (Otimização)
   ============================================ */
function initLazyLoading() {
    // Verifica suporte nativo
    if ('loading' in HTMLImageElement.prototype) {
        // Navegador suporta lazy loading nativo
        const images = document.querySelectorAll('img[data-src]');
        images.forEach(img => {
            img.src = img.dataset.src;
        });
    } else {
        // Fallback com Intersection Observer
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    imageObserver.unobserve(img);
                }
            });
        });

        const lazyImages = document.querySelectorAll('img[data-src]');
        lazyImages.forEach(img => imageObserver.observe(img));
    }
}

/* ============================================
   Keyboard Navigation (Acessibilidade)
   ============================================ */
document.addEventListener('keydown', (e) => {
    // Navegação com Tab e Enter em elementos interativos
    if (e.key === 'Enter' || e.key === ' ') {
        const focused = document.activeElement;

        // Se for um botão de filtro, aciona o clique
        if (focused?.classList.contains('filter-btn') ||
            focused?.classList.contains('pub-filter-btn')) {
            e.preventDefault();
            focused.click();
        }
    }
});

/* ============================================
   Console Welcome Message
   ============================================ */
console.log(
    '%c Portfolio Professor %c\n' +
    'Desenvolvido com HTML5, Tailwind CSS e JavaScript Vanilla\n' +
    'Tema claro/escuro | Responsivo | Acessível',
    'background: #1e40af; color: white; padding: 10px 20px; font-size: 16px; font-weight: bold;',
    ''
);
