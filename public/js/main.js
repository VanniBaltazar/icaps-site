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
 *
 * Convenciones:
 *   · 'use strict' activa el modo estricto de JS, que lanza
 *     errores en prácticas inseguras (variables no declaradas,
 *     asignaciones a propiedades de solo lectura, etc.).
 *   · Cada módulo es una IIFE para encapsular variables y
 *     evitar contaminar el ámbito global (window).
 *   · Compatible con ES5+ para máxima compatibilidad.
 */

'use strict';

/* ──────────────────────────────────────────────────────────────
   1. MENÚ MÓVIL
   Patrón IIFE (Immediately Invoked Function Expression):
   La función se ejecuta inmediatamente al cargarse el script.
   Todas las variables internas (toggle, menu, navLinks) quedan
   en un ámbito privado y no contaminan el objeto global window.
──────────────────────────────────────────────────────────────── */
(function initMobileMenu() {
  const toggle  = document.getElementById('nav-toggle');
  const menu    = document.getElementById('nav-menu');
  const navLinks = menu ? menu.querySelectorAll('.nav__link') : [];

  if (!toggle || !menu) return;

  /** Abre / cierra el menú y actualiza los atributos ARIA.
   *  aria-expanded="true/false" es la forma estándar de comunicar
   *  el estado abierto/cerrado a lectores de pantalla como NVDA
   *  o VoiceOver. Sin este atributo, los usuarios de teclado no
   *  saben si el menú está visible o no.
   */
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
  // Buena práctica de accesibilidad: los componentes que capturan
  // el foco (menús, modales, drawers) deben cerrarse con ESC.
  // toggle.focus() devuelve el foco al botón que abrió el menú,
  // lo que permite al usuario de teclado continuar navegando.
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && menu.classList.contains('is-open')) {
      closeMenu();
      toggle.focus();   // devuelve el foco al botón (accesibilidad)
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
   Se usa { passive: true } en el listener del scroll.
   Esto le indica al navegador que el evento NO llamará a
   preventDefault(), permitiéndole optimizar el scroll para
   mayor fluidez (especialmente en dispositivos táctiles).
──────────────────────────────────────────────────────────────── */
(function initHeaderScroll() {
  const header = document.getElementById('header');
  if (!header) return;

  function updateHeader() {
    header.classList.toggle('is-scrolled', window.scrollY > 10);
  }

  window.addEventListener('scroll', updateHeader, { passive: true });
  updateHeader(); // estado inicial
})();


/* ──────────────────────────────────────────────────────────────
   3. VALIDACIÓN DEL FORMULARIO DE CONTACTO
   Se usa novalidate en el HTML + validación manual en JS para:
     · Controlar completamente los mensajes de error (diseño
       personalizado con .is-error, colores de marca).
     · Añadir aria-invalid y aria-describedby para accesibilidad.
     · Validar en tiempo real (evento blur) y al enviar.
     · Los mensajes de error en spans con aria-live="polite"
       son anunciados por lectores de pantalla automáticamente.
──────────────────────────────────────────────────────────────── */
(function initContactForm() {
  const form       = document.getElementById('contact-form');
  const submitBtn  = document.getElementById('submit-btn');
  const feedback   = document.getElementById('form-feedback');

  if (!form) return;

  /* ── Reglas de validación ──
     Cada propiedad del objeto es el name del campo en el formulario.
     La función validate recibe el valor (y el elemento completo para
     campos especiales como checkbox) y devuelve:
       · null          → el campo es válido.
       · string (error) → el mensaje de error a mostrar.
     El regex de email usa un patrón básico (no exhaustivo) adecuado
     para formularios: verifica la estructura usuario@dominio.tld.
  */
  var rules = {
    nombre: {
      validate: function(val) {
        if (!val.trim())          return 'El nombre es obligatorio.';
        if (val.trim().length < 3) return 'Mínimo 3 caracteres.';
        return null;
      }
    },
    email: {
      validate: function(val) {
        if (!val.trim()) return 'El correo electrónico es obligatorio.';
        // Formato básico de email
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
        if (!emailRegex.test(val.trim())) return 'Ingresa un correo válido.';
        return null;
      }
    },
    telefono: {
      validate: function(val) {
        if (!val.trim()) return null; // opcional
        // Sólo dígitos, espacios, guiones y paréntesis; mínimo 7 dígitos
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
    mensaje: {
      validate: function(val) {
        if (val.length > 500) return 'Máximo 500 caracteres.';
        return null;
      }
    },
    privacidad: {
      validate: function(_val, field) {
        if (!field.checked) return 'Debes aceptar el Aviso de Privacidad.';
        return null;
      }
    }
  };

  /* ── Muestra / limpia un error para un campo ──
     Al detectar un error:
       · Inserta el texto en el span con id="{campo}-error".
       · Añade .is-error al campo (borde rojo en CSS).
       · Establece aria-invalid="true" para que lectores de
         pantalla anuncien el campo como inválido.
     Al limpiar el error:
       · Elimina el texto de error.
       · Añade .is-valid al campo (borde verde).
       · Establece aria-invalid="false".
  */
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

  /* ── Valida un campo individual y devuelve true si es válido ── */
  function validateField(field) {
    var name = field.name;
    if (!rules[name]) return true;

    var error = rules[name].validate(field.value, field);
    setFieldError(field, error);
    return error === null;
  }

  /* ── Valida todo el formulario ── */
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

  /* ── Validación en tiempo real (al salir del campo) ── */
  var fieldNames = Object.keys(rules);
  fieldNames.forEach(function(name) {
    var field = form.elements[name];
    if (!field) return;

    field.addEventListener('blur', function() {
      validateField(field);
    });

    // Limpia error al empezar a corregir
    field.addEventListener('input', function() {
      if (field.classList.contains('is-error')) {
        validateField(field);
      }
    });
  });

  /* ── Envio del formulario ──
     event.preventDefault() evita el comportamiento nativo de
     recarga de página del formulario.
     Se deshabilita el botón de envío inmediatamente para prevenir
     dobles envíos si el usuario hace clic múltiples veces.
     Tras recibir la respuesta se vuelve a habilitar siempre,
     tanto en éxito como en error. */
  form.addEventListener('submit', function(event) {
    event.preventDefault();

    if (!validateForm()) {
      // Foco en el primer campo con error
      var firstError = form.querySelector('.is-error');
      if (firstError) firstError.focus();
      return;
    }

    // Deshabilita el botón para evitar doble envío
    submitBtn.disabled = true;
    submitBtn.textContent = 'Enviando…';

    // Simula el envío (aquí integrarías Firebase / tu backend)
    simulateFormSubmit(function(success) {
      submitBtn.disabled = false;
      submitBtn.textContent = 'Enviar solicitud';

      showFeedback(
        success,
        success
          ? '¡Gracias! Tu solicitud fue enviada con éxito. Te contactaremos pronto.'
          : 'Ocurrió un error al enviar. Por favor intenta de nuevo.'
      );

      if (success) {
        form.reset();
        // Limpia estados visuales de validación
        Array.from(form.elements).forEach(function(el) {
          el.classList.remove('is-valid', 'is-error');
          el.removeAttribute('aria-invalid');
        });
      }
    });
  });

  /* ── Simula el envío asíncrono (reemplaza con Firebase / fetch) ──
     Este es un PLACEHOLDER de integración.
     Para conectar con un backend real, reemplaza esta función por
     una llamada fetch() a tu API o por Firebase Functions:

     function simulateFormSubmit(callback) {
       var datos = {
         nombre:   form.elements['nombre'].value,
         email:    form.elements['email'].value,
         programa: form.elements['programa'].value,
         mensaje:  form.elements['mensaje'].value
       };
       fetch('/api/contacto', {
         method: 'POST',
         headers: { 'Content-Type': 'application/json' },
         body: JSON.stringify(datos)
       })
       .then(function(res) { callback(res.ok); })
       .catch(function()   { callback(false);  });
     }
  */
  function simulateFormSubmit(callback) {
    setTimeout(function() {
      callback(true); // Cambia a false para simular un error
    }, 1200);
  }

  /* ── Muestra el mensaje de feedback ── */
  function showFeedback(success, message) {
    if (!feedback) return;
    feedback.removeAttribute('hidden');
    feedback.textContent = message;
    feedback.className = 'form-feedback ' + (success ? 'is-success' : 'is-error');
    feedback.scrollIntoView({ behavior: 'smooth', block: 'nearest' });

    // Oculta el mensaje después de 6 segundos
    setTimeout(function() {
      feedback.setAttribute('hidden', '');
      feedback.textContent = '';
      feedback.className = 'form-feedback';
    }, 6000);
  }
})();


/* ──────────────────────────────────────────────────────────────
   4. ANIMACIÓN DE CONTADORES (Stats)

   IntersectionObserver detecta cuando un elemento entra en el
   viewport (sin necesidad de escuchar el evento scroll).
   Ventajas sobre el scroll + getBoundingClientRect():
     · No bloquea el hilo principal (asincrónico).
     · Más eficiente en batería en dispositivos móviles.
     · API nativa del navegador, sin librerías externas.

   obs.unobserve(el) detiene la observación del elemento una
   vez que la animación ya se ejecutó (evita re-animar).

   requestAnimationFrame (rAF): forma nativa de crear animaciones
   fluidas. El navegador llama a la función step() antes de cada
   repintado de pantalla (∼60fps). Es más eficiente que setInterval.

   Easing easeOutQuart: fórmula 1 - (1-t)^4
   Hace que la animación empiece rápido y se desacelere al final,
   imitando el movimiento físico natural.

   Hay un fallback para navegadores sin IntersectionObserver:
   simplemente muestra el número final sin animar.
──────────────────────────────────────────────────────────────── */
(function initCounters() {
  var counters = document.querySelectorAll('.stats__number[data-target]');
  if (!counters.length) return;

  var DURATION = 1800; // ms

  function animateCounter(el) {
    var target   = parseInt(el.getAttribute('data-target'), 10);
    var start    = 0;
    var startTime = null;

    function step(timestamp) {
      if (!startTime) startTime = timestamp;
      var elapsed  = timestamp - startTime;
      var progress = Math.min(elapsed / DURATION, 1);
      // Easing: easeOutQuart
      var ease = 1 - Math.pow(1 - progress, 4);
      el.textContent = Math.floor(ease * target).toLocaleString('es-MX');

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        el.textContent = target.toLocaleString('es-MX');
      }
    }

    requestAnimationFrame(step);
  }

  // Observa cuando la sección de stats entra en el viewport
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
    // Fallback para navegadores sin IntersectionObserver
    counters.forEach(function(el) {
      el.textContent = parseInt(el.getAttribute('data-target'), 10).toLocaleString('es-MX');
    });
  }
})();


/* ──────────────────────────────────────────────────────────────
   5. AÑO DINÁMICO EN EL FOOTER
   Se obtiene el año actual con new Date().getFullYear() e
   inserta el valor en el span#year del footer. De esta forma
   el copyright siempre estará actualizado sin modificar el HTML.
──────────────────────────────────────────────────────────────── */
(function setCurrentYear() {
  var yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
})();
