export const conversations = [
  {
    id: 1,
    userId: 1, // Elena
    messages: [
      {
        id: 1,
        sender: 2, // Marco
        text: '¡Hola! Vi que te gustó la última de Dua Lipa, ¡a mí también!',
        timestamp: '10:40'
      },
      {
        id: 2,
        sender: 1, // Elena
        text: '¡Siii! Es un temazo. ¿Cuál es tu parte favorita?',
        timestamp: '10:41'
      },
      {
        id: 3,
        sender: 2, // Marco
        songId: 3, // Levitating
        text: 'Esta, ¡obvio! Me pone de buen humor al instante.',
        timestamp: '10:42'
      },
    ]
  },
  {
    id: 2,
    userId: 2, // Marco
    messages: [
      {
        id: 1,
        sender: 1, // Elena
        text: 'Hola, ¿todo bien?',
        timestamp: 'Ayer'
      },
    ]
  },
  {
    id: 3,
    userId: 3, // Sofia
    messages: [
      {
        id: 1,
        sender: 4, // David
        text: 'Jajaja, no la conocía pero es un temazo.',
        timestamp: '2d'
      },
    ]
  },
  {
    id: 4,
    userId: 4, // David
    messages: [
      {
        id: 1,
        sender: 3, // Sofia
        text: 'Tenemos que ir a un concierto juntos.',
        timestamp: '4d'
      },
       {
        id: 2,
        sender: 3, // Sofia
        text: 'Vi que The Lumineers vienen pronto.',
        timestamp: '4d'
      },
       {
        id: 3,
        sender: 3, // Sofia
        text: '¿Te apuntas?',
        timestamp: '4d'
      },
    ]
  }
];
