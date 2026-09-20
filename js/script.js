/**
 * PORTFÓLIO PSICÓLOGO CLÍNICO
 * Alexandre Teixeira do Nascimento Silva - CRP 13/14462
 * Script simples de interatividade, tema claro/escuro e WhatsApp
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Inicializa o Modo Claro e Escuro (Dark Mode)
  setupThemeToggle();

  // 2. Aplicação das configurações dinâmicas
  applySiteConfig();

  // 3. Ações de clique para o WhatsApp
  setupWhatsAppButtons();

  // 4. Menu Mobile
  setupMobileMenu();

  // 5. Scroll suave e cabeçalho ativo
  setupScrollEffects();
});

/**
 * Gerencia a alternância entre modo claro e escuro
 */
function setupThemeToggle() {
  const themeToggleBtn = document.getElementById('themeToggle');
  const root = document.documentElement;

  // 1. Verifica tema salvo no localStorage ou preferência do sistema
  const savedTheme = localStorage.getItem('portfolio_theme');
  const systemPrefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  const initialTheme = savedTheme ? savedTheme : (systemPrefersDark ? 'dark' : 'light');
  root.setAttribute('data-theme', initialTheme);

  // 2. Evento do botão de alternância
  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const currentTheme = root.getAttribute('data-theme') || 'light';
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      
      root.setAttribute('data-theme', newTheme);
      localStorage.setItem('portfolio_theme', newTheme);
    });
  }

  // 3. Escuta alterações no sistema se o usuário não tiver salvo escolha manual
  if (window.matchMedia) {
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
      if (!localStorage.getItem('portfolio_theme')) {
        const autoTheme = e.matches ? 'dark' : 'light';
        root.setAttribute('data-theme', autoTheme);
      }
    });
  }
}

/**
 * Aplica os dados de SITE_CONFIG no HTML
 */
function applySiteConfig() {
  if (typeof SITE_CONFIG === 'undefined') return;

  // Atualiza textos
  document.querySelectorAll('[data-config]').forEach(el => {
    const key = el.getAttribute('data-config');
    if (SITE_CONFIG[key]) {
      el.textContent = SITE_CONFIG[key];
    }
  });

  // Atualiza links (ex: Instagram, etc.)
  document.querySelectorAll('[data-config-link]').forEach(el => {
    const key = el.getAttribute('data-config-link');
    if (SITE_CONFIG[key]) {
      el.href = SITE_CONFIG[key];
    }
  });

  // Atualiza fotos / imagens
  document.querySelectorAll('[data-config-img]').forEach(img => {
    const key = img.getAttribute('data-config-img');
    if (SITE_CONFIG[key]) {
      img.src = SITE_CONFIG[key];
    }
  });
}

/**
 * Constrói o link oficial do WhatsApp
 */
function getWhatsAppUrl(customMessage) {
  const number = (typeof SITE_CONFIG !== 'undefined' && SITE_CONFIG.whatsappNumero)
    ? SITE_CONFIG.whatsappNumero
    : '5583986736686';

  const defaultMsg = (typeof SITE_CONFIG !== 'undefined' && SITE_CONFIG.whatsappMensagemPadrao)
    ? SITE_CONFIG.whatsappMensagemPadrao
    : 'Olá, Alexandre! Gostaria de informações sobre agendamento de consulta.';

  const message = customMessage || defaultMsg;
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}

/**
 * Configura todos os botões de ação do WhatsApp
 */
function setupWhatsAppButtons() {
  document.querySelectorAll('[data-whatsapp-action]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const customMsg = btn.getAttribute('data-whatsapp-msg');
      const url = getWhatsAppUrl(customMsg);
      window.open(url, '_blank', 'noopener,noreferrer');
    });
  });
}

/**
 * Menu móvel (hambúrguer)
 */
function setupMobileMenu() {
  const hamburger = document.getElementById('hamburgerBtn');
  const navMenu = document.getElementById('navMenu');

  if (!hamburger || !navMenu) return;

  hamburger.addEventListener('click', () => {
    const isOpen = navMenu.classList.toggle('open');
    hamburger.setAttribute('aria-expanded', isOpen);
  });

  // Fecha o menu ao clicar em qualquer item
  navMenu.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
    });
  });
}

/**
 * Efeitos de rolagem e destaque da navegação
 */
function setupScrollEffects() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-menu .nav-link');

  window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset;

    let currentSection = '';
    sections.forEach(section => {
      const top = section.offsetTop - 100;
      const height = section.offsetHeight;
      if (scrollY >= top && scrollY < top + height) {
        currentSection = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${currentSection}`) {
        link.classList.add('active');
      }
    });
  });
}
