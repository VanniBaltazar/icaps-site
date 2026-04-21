/**
 * ICAPS – main.js
 * Archivo     : public/js/main.js
 * Descripción : Script principal del sitio web de ICAPS.
 *
 * Módulos incluidos (cada uno envuelto en una IIFE):
 *   1. Menú móvil   – toggle hamburguesa, cierre con ESC / clic
 *   2. Header scroll – sombra dinámica al hacer scroll
 *   3. Formulario    – validación en cliente con estados ARIA
 *   4. Contadores    – animación numérica con IntersectionObserver
 *   5. Año dinámico – año actual en el footer
 *   6. FAQ Accordion – expandir/colapsar preguntas frecuentes
 *   7. Scroll Reveal – animaciones de entrada al viewport
 *   8. Smooth scroll – offset correcto con header sticky
 *
 * Convenciones:
 *   · 'use strict' activa el modo estricto de JS.
 *   · Cada módulo es una IIFE para encapsular variables.
 *   · Compatible con ES5+ para máxima compatibilidad.
 */

'use strict';

/* ──────────────────────────────────────────────────────────────
   1. MENÚ MÓVIL
──────────────────────────────────────────────────────────────── */
(function initMobileMenu() {
  const toggle  = document.getElementById('nav-toggle');
  const menu    = document.getElementById('nav-menu');
  const navLinks = menu ? menu.querySelectorAll('.nav__link') : [];

  if (!toggle || !menu) return;

  /** Abre / cierra el menú y actualiza los atributos ARIA. */
  function setMenuState(isOpen) {
    menu.classList.toggle('is-open', isOpen);
    toggle.setAttribute('aria-expanded', String(isOpen));
    document.body.style.overflow = isOpen ? 'hidden' : '';
  }

  /** Alterna el estado actual del menú */
  function toggleMenu() {
    const isCurrentlyOpen = menu.classList.contains('is-open');
    setMenuState(!isCurrentlyOpen);
  }

  /** Cierra el menú */
  function closeMenu() {
    setMenuState(false);
  }

  // Botón hamburguesa
  toggle.addEventListener('click', toggleMenu);

  // Cierra al hacer clic en cualquier enlace del menú
  navLinks.forEach(function(link) {
    link.addEventListener('click', closeMenu);
  });

  // Cierra al presionar ESC
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && menu.classList.contains('is-open')) {
      closeMenu();
      toggle.focus();
    }
  });

  // Cierra si se redimensiona la ventana a escritorio (≥ 1024px)
  window.addEventListener('resize', function() {
    if (window.innerWidth >= 1024) {
      closeMenu();
    }
  });
})();


/* ──────────────────────────────────────────────────────────────
   2. HEADER: SOMBRA AL HACER SCROLL
──────────────────────────────────────────────────────────────── */
(function initHeaderScroll() {
  const header = document.getElementById('header');
  if (!header) return;

  function updateHeader() {
    header.classList.toggle('is-scrolled', window.scrollY > 10);
  }

  window.addEventListener('scroll', updateHeader, { passive: true });
  updateHeader();
})();


/* ──────────────────────────────────────────────────────────────
   3. VALIDACIÓN DEL FORMULARIO DE CONTACTO
──────────────────────────────────────────────────────────────── */
(function initContactForm() {
  const form       = document.getElementById('contact-form');
  const submitBtn  = document.getElementById('submit-btn');
  const feedback   = document.getElementById('form-feedback');

  if (!form) return;

  var rules = {
    nombre: {
      validate: function(val) {
        if (!val.trim())          return 'El nombre es obligatorio.';
        if (val.trim().length < 3) return 'Mínimo 3 caracteres.';
        return null;
      }
    },
    telefono: {
      validate: function(val) {
        if (!val.trim()) return 'El teléfono es obligatorio.';
        var digits = val.replace(/\D/g, '');
        if (digits.length < 7) return 'El teléfono debe tener al menos 7 dígitos.';
        return null;
      }
    },
    programa: {
      validate: function(val) {
        if (!val) return 'Selecciona un programa de interés.';
        return null;
      }
    },
    privacidad: {
      validate: function(_val, field) {
        if (!field.checked) return 'Debes aceptar para continuar.';
        return null;
      }
    }
  };

  function setFieldError(field, message) {
    var errorEl = document.getElementById(field.id + '-error');
    if (!errorEl) return;

    if (message) {
      errorEl.textContent = message;
      field.classList.add('is-error');
      field.classList.remove('is-valid');
      field.setAttribute('aria-invalid', 'true');
    } else {
      errorEl.textContent = '';
      field.classList.remove('is-error');
      if (field.value || field.checked) {
        field.classList.add('is-valid');
      }
      field.setAttribute('aria-invalid', 'false');
    }
  }

  function validateField(field) {
    var name = field.name;
    if (!rules[name]) return true;

    var error = rules[name].validate(field.value, field);
    setFieldError(field, error);
    return error === null;
  }

  function validateForm() {
    var isValid = true;
    var fieldNames = Object.keys(rules);

    fieldNames.forEach(function(name) {
      var field = form.elements[name];
      if (field) {
        var fieldIsValid = validateField(field);
        if (!fieldIsValid) isValid = false;
      }
    });

    return isValid;
  }

  var fieldNames = Object.keys(rules);
  fieldNames.forEach(function(name) {
    var field = form.elements[name];
    if (!field) return;

    field.addEventListener('blur', function() {
      validateField(field);
    });

    field.addEventListener('input', function() {
      if (field.classList.contains('is-error')) {
        validateField(field);
      }
    });
  });

  form.addEventListener('submit', function(event) {
    event.preventDefault();

    if (!validateForm()) {
      var firstError = form.querySelector('.is-error');
      if (firstError) firstError.focus();
      return;
    }

    submitBtn.disabled = true;
    submitBtn.textContent = 'Enviando…';

    simulateFormSubmit(function(success) {
      submitBtn.disabled = false;
      submitBtn.textContent = 'Enviar Mi Solicitud';

      showFeedback(
        success,
        success
          ? '¡Gracias! Tu solicitud fue enviada con éxito. Te contactaremos pronto por WhatsApp.'
          : 'Ocurrió un error al enviar. Por favor intenta de nuevo.'
      );

      if (success) {
        form.reset();
        Array.from(form.elements).forEach(function(el) {
          el.classList.remove('is-valid', 'is-error');
          el.removeAttribute('aria-invalid');
        });
      }
    });
  });

  function simulateFormSubmit(callback) {
    setTimeout(function() {
      callback(true);
    }, 1200);
  }

  function showFeedback(success, message) {
    if (!feedback) return;
    feedback.removeAttribute('hidden');
    feedback.textContent = message;
    feedback.className = 'form-feedback ' + (success ? 'is-success' : 'is-error');
    feedback.scrollIntoView({ behavior: 'smooth', block: 'nearest' });

    setTimeout(function() {
      feedback.setAttribute('hidden', '');
      feedback.textContent = '';
      feedback.className = 'form-feedback';
    }, 6000);
  }
})();


/* ──────────────────────────────────────────────────────────────
   4. ANIMACIÓN DE CONTADORES (Stats)
──────────────────────────────────────────────────────────────── */
(function initCounters() {
  var counters = document.querySelectorAll('.stats__number[data-target]');
  if (!counters.length) return;

  var DURATION = 1800;

  function animateCounter(el) {
    var target    = parseInt(el.getAttribute('data-target'), 10);
    var prefix    = el.getAttribute('data-prefix') || '';
    var startTime = null;

    function step(timestamp) {
      if (!startTime) startTime = timestamp;
      var elapsed  = timestamp - startTime;
      var progress = Math.min(elapsed / DURATION, 1);
      // Easing: easeOutQuart
      var ease = 1 - Math.pow(1 - progress, 4);
      var current = Math.floor(ease * target);
      el.textContent = prefix + current.toLocaleString('es-MX');

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        el.textContent = prefix + target.toLocaleString('es-MX');
      }
    }

    requestAnimationFrame(step);
  }

  if ('IntersectionObserver' in window) {
    var observer = new IntersectionObserver(function(entries, obs) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.4 });

    counters.forEach(function(el) { observer.observe(el); });
  } else {
    counters.forEach(function(el) {
      var prefix = el.getAttribute('data-prefix') || '';
      el.textContent = prefix + parseInt(el.getAttribute('data-target'), 10).toLocaleString('es-MX');
    });
  }
})();


/* ──────────────────────────────────────────────────────────────
   5. AÑO DINÁMICO EN EL FOOTER
──────────────────────────────────────────────────────────────── */
(function setCurrentYear() {
  var yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
})();


/* ──────────────────────────────────────────────────────────────
   6. FAQ ACCORDION
   Cada pregunta alterna su estado abierto/cerrado.
   Se cierra la pregunta anterior al abrir una nueva para
   mantener la interfaz limpia y enfocada.
──────────────────────────────────────────────────────────────── */
(function initFAQ() {
  var faqItems = document.querySelectorAll('.faq-item');
  if (!faqItems.length) return;

  faqItems.forEach(function(item) {
    var btn = item.querySelector('.faq-item__question');
    if (!btn) return;

    btn.addEventListener('click', function() {
      var isOpen = item.classList.contains('is-open');

      // Cierra todas las demás
      faqItems.forEach(function(otherItem) {
        if (otherItem !== item) {
          otherItem.classList.remove('is-open');
          var otherBtn = otherItem.querySelector('.faq-item__question');
          if (otherBtn) otherBtn.setAttribute('aria-expanded', 'false');
        }
      });

      // Toggle la actual
      item.classList.toggle('is-open', !isOpen);
      btn.setAttribute('aria-expanded', String(!isOpen));
    });
  });
})();


/* ──────────────────────────────────────────────────────────────
   7. SCROLL REVEAL ANIMATIONS
   Usa IntersectionObserver para detectar cuando los elementos
   con clase .reveal entran en el viewport y les añade
   .is-visible para disparar las animaciones CSS.
──────────────────────────────────────────────────────────────── */
(function initScrollReveal() {
  var revealElements = document.querySelectorAll('.reveal');
  if (!revealElements.length) return;

  // Respeta la preferencia del usuario de reducir movimiento
  var prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReducedMotion) {
    revealElements.forEach(function(el) {
      el.classList.add('is-visible');
    });
    return;
  }

  if ('IntersectionObserver' in window) {
    var observer = new IntersectionObserver(function(entries, obs) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          obs.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -40px 0px'
    });

    revealElements.forEach(function(el) {
      observer.observe(el);
    });
  } else {
    // Fallback: mostrar todo de inmediato
    revealElements.forEach(function(el) {
      el.classList.add('is-visible');
    });
  }
})();


/* ──────────────────────────────────────────────────────────────
   8. SMOOTH SCROLL CON OFFSET
   Corrige el scroll suave para compensar la altura del
   header sticky, evitando que la sección quede parcialmente
   cubierta por la navegación.
──────────────────────────────────────────────────────────────── */
(function initSmoothScroll() {
  var header = document.getElementById('header');
  if (!header) return;

  document.querySelectorAll('a[href^="#"]').forEach(function(link) {
    link.addEventListener('click', function(e) {
      var targetId = this.getAttribute('href');
      if (!targetId || targetId === '#') return;

      var targetEl = document.querySelector(targetId);
      if (!targetEl) return;

      e.preventDefault();
      var headerHeight = header.offsetHeight;
      var targetPosition = targetEl.getBoundingClientRect().top + window.scrollY - headerHeight - 16;

      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });

      // Actualiza la URL sin recargar
      if (history.pushState) {
        history.pushState(null, null, targetId);
      }
    });
  });
})();
