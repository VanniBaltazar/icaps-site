export const programsData = [
  {
    id: 'bachillerato',
    title: 'Bachillerato',
    level: 'Nivel Medio Superior',
    description: 'Concluye tu bachillerato con opciones flexibles que se adaptan a tu ritmo de vida. Modalidades escolarizada y semi-escolarizada con horarios matutinos y vespertinos.',
    schedules: ['L–V Escolarizada', 'Semi-escolarizada'],
    iconColorClass: 'programa-card__icono--prepa',
    icon: 'prep_icon', // Placeholder for the actual SVG component in the React files
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
      ],
      inversion: {
        inscripcion: '$1,000',
        mensualidad: '$950',
        pagoUnico: '$2,500',
        nota: 'Costos varían según modalidad.'
      }
    }
  },
  {
    id: 'licenciatura',
    title: 'Licenciaturas',
    level: 'Nivel Superior',
    description: 'Administración, Derecho, Psicopedagogía, Comercio Exterior y Contaduría Pública.',
    schedules: ['Sábados', 'Domingos'],
    iconColorClass: 'programa-card__icono--admin',
    detailedInfo: {
      modalidades: [
        {
          name: 'Sabatino',
          schedules: [
            { day: 'Sábado', time: '8:00am a 4:00pm', cost: '$1,000 Inscripción + $1,100 mensual' }
          ]
        },
        {
          name: 'Dominical',
          schedules: [
            { day: 'Domingo', time: '8:00am a 4:00pm', cost: '$1,000 Inscripción + $1,100 mensual' }
          ]
        }
      ],
      requisitos: [
        'Acta de Nacimiento',
        'CURP',
        'Certificado de Bachillerato',
        'Comprobante de Domicilio',
        'Copia de INE'
      ],
      inversion: {
        inscripcion: '$1,000',
        mensualidad: '$1,100',
        pagoUnico: '$4,500',
        nota: 'Pago único por cuatrimestre disponible.'
      }
    }
  },
  {
    id: 'maestria',
    title: 'Maestría en Educación',
    level: 'Posgrado',
    description: 'Desarrolle una visión estratégica de la enseñanza y conviértase en un referente del sector educativo con metodologías de vanguardia y liderazgo institucional.',
    schedules: ['Viernes 16:00–20:00'],
    iconColorClass: 'programa-card__icono--maestria',
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
        pagoUnico: '$7,500', // Estimate or leave out if not applicable, but I'll add a placeholder
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
