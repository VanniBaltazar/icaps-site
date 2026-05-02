'use client';
import React from 'react';
import ProgramCard from './ProgramCard';

const programsData = [
  {
    title: 'Bachillerato',
    level: 'Nivel Medio Superior',
    description: 'Concluye tu bachillerato con opciones flexibles que se adaptan a tu ritmo de vida. Modalidades escolarizada y semi-escolarizada con horarios matutinos y vespertinos.',
    schedules: ['L–V Escolarizada', 'Semi-escolarizada'],
    iconColorClass: 'programa-card__icono--prepa',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
        <path d="M22 10v6M2 10l10-5 10 5-10 5-10-5z"/>
        <path d="M6 12v5c3.33 2 8.67 2 12 0v-5"/>
      </svg>
    ),
    detailedInfo: {
      modalidades: [
        {
          name: 'Escolarizado',
          schedules: [
            { day: 'Lunes a Viernes', time: '9:00am a 1:40pm', cost: '$1,000 Inscripción (trimestral) + $950 mensual' }
          ]
        },
        {
          name: 'Semi-escolarizado',
          schedules: [
            { day: 'Lunes a Jueves', time: '12:00pm a 2:30pm', cost: 'Sin Inscripción, $2,500 cada 3 meses' },
            { day: 'Viernes', time: '9:00am a 2:40pm', cost: 'Sin Inscripción, $2,000 cada 3 meses' },
            { day: 'Sábado', time: '2:00pm a 7:30pm', cost: 'Sin Inscripción, $2,000 cada 3 meses' }
          ]
        }
      ],
      requisitos: [
        'Acta de Nacimiento',
        'CURP',
        'Certificado de Secundaria',
        'Comprobante de Domicilio',
        'Copia de INE del Padre o Tutor'
      ]
    }
  },
  {
    title: 'Lic. en Administración de Empresas',
    level: 'Licenciatura',
    description: 'Desarrolla habilidades gerenciales y de liderazgo para dirigir organizaciones exitosas en entornos locales y globales con visión estratégica.',
    schedules: ['Domingos'],
    iconColorClass: 'programa-card__icono--admin',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
        <rect x="2" y="7" width="20" height="14" rx="2"/>
        <path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2"/>
        <line x1="12" y1="12" x2="12" y2="16"/>
        <line x1="10" y1="14" x2="14" y2="14"/>
      </svg>
    )
  },
  {
    title: 'Lic. en Derecho',
    level: 'Licenciatura',
    description: 'Fórmate como profesional jurídico capaz de analizar, interpretar y aplicar normas con ética y responsabilidad en el ámbito público y privado.',
    schedules: ['Sábados'],
    iconColorClass: 'programa-card__icono--derecho',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
        <path d="M12 2L3 7v5c0 5.25 3.75 10.15 9 11.25C17.25 22.15 21 17.25 21 12V7l-9-5z"/>
      </svg>
    )
  },
  {
    title: 'Lic. en Psicopedagogía',
    level: 'Licenciatura',
    description: 'Comprende los procesos de aprendizaje y desarrollo humano para intervenir de manera efectiva en contextos educativos, clínicos y organizacionales.',
    schedules: ['Sábados'],
    iconColorClass: 'programa-card__icono--psico',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
        <circle cx="12" cy="8" r="4"/>
        <path d="M12 12c-4.5 0-8 2-8 4.5V18h16v-1.5c0-2.5-3.5-4.5-8-4.5z"/>
        <path d="M19 3s1 1 1 3-1 3-1 3"/>
        <path d="M5 3S4 4 4 6s1 3 1 3"/>
      </svg>
    )
  },
  {
    title: 'Lic. en Comercio Exterior',
    level: 'Licenciatura',
    description: 'Domina las operaciones de importación, exportación y logística internacional. Prepárate para el mundo globalizado con enfoque en negocios transfronterizos.',
    schedules: ['Domingos'],
    iconColorClass: 'programa-card__icono--comercio',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
        <circle cx="12" cy="12" r="10"/>
        <line x1="2" y1="12" x2="22" y2="12"/>
        <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10A15.3 15.3 0 0112 2z"/>
      </svg>
    )
  },
  {
    title: 'Lic. en Contaduría Pública',
    level: 'Licenciatura',
    description: 'Gestiona la información financiera y fiscal de empresas e instituciones. Formación sólida en contabilidad, auditoría, finanzas y normativas vigentes.',
    schedules: ['Domingos'],
    iconColorClass: 'programa-card__icono--conta',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
        <rect x="4" y="4" width="16" height="16" rx="2"/>
        <path d="M4 9h16"/>
        <path d="M9 9v11"/>
      </svg>
    )
  },
  {
    title: 'Maestría en Educación',
    level: 'Posgrado',
    description: 'Desarrolle una visión estratégica de la enseñanza y conviértase en un referente del sector educativo con metodologías de vanguardia y liderazgo institucional.',
    schedules: ['Viernes 16:00–20:00'],
    iconColorClass: 'programa-card__icono--maestria',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
        <path d="M12 3L1 9l11 6 9-4.91V17M1 9v7"/>
        <path d="M5 12v5c3.33 2 8.67 2 12 0v-5"/>
      </svg>
    ),
    detailedInfo: {
      tipo: 'posgrado',
      perfil: [
        { label: 'Innovación Pedagógica', desc: 'Implementación de metodologías de vanguardia en el aula.' },
        { label: 'Liderazgo Institucional', desc: 'Gestión y dirección efectiva de proyectos y equipos educativos.' },
      ],
      programaDetalles: [
        { icon: '🎓', label: 'Duración', value: '5 Cuatrimestres' },
        { icon: '📅', label: 'Inicio de Ciclo', value: 'Noviembre 2025' },
        { icon: '🕓', label: 'Modalidad y Horario', value: 'Viernes 16:00 – 20:00 hrs' },
      ],
      inversion: {
        mensualidad: '$1,650.00',
        inscripcion: '$2,000.00',
        descuento: '50% de descuento en inscripción pagando con un mes de anticipación',
      },
      requisitos: [
        'Acta de nacimiento actualizada (original y 3 copias)',
        'Clave Única de Registro de Población (CURP)',
        'Certificado de estudios de Licenciatura',
      ],
      contacto: {
        telefonos: ['2299 31 44 11', '2293 97 87 28'],
        ubicacion: 'Arista #966, Esquina Madero, Colonia Centro',
        horarios: 'Lunes a sábado de 9:00 a 17:30 horas',
      },
    }
  }
];

export default function ProgramsGrid() {
  return (
    <div className="programas-grid">
      {programsData.map((prog, index) => (
        <ProgramCard 
          key={index}
          delayIndex={index}
          {...prog}
        />
      ))}
    </div>
  );
}
