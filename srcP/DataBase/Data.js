const emojiBem = '../assets/humores/happy.png';
const emojiNervous = '../assets/humores/terrible.png';
const emojiTriste = '../assets/humores/sad.png';
const atividades = [
  {
    festa: require('../assets/atividades/party.png'),
    esporte: require('../assets/atividades/sports.png'),
    cozinhar: require('../assets/atividades/cooking.png')
  },
]

export const Data = [
    { 
        id: '1', 
        emoji: require(emojiBem), 
        data: 'hoje, 23 de Janeiro', 
        humor: 'bem', 
        hora: '8:35',
        atividade1_icone: atividades[0].festa, 
        nomeAtividade1: 'festa',
        atividade2_icone: atividades[0].esporte,
        nomeAtividade2: 'esportes',
        atividade3_icone: atividades[0].cozinhar,
        nomeAtividade3: 'cozinhar',
        descricao: 'Hoje foi um dia muito bom. Joguei futebol no parque, cozinhei uma lasanha para minha família. E à noite, fui à festa de aniversário do meu amigo.'
      },

      { 
        id: '2', 
        emoji: require(emojiNervous), 
        data: 'ONTEM, 22 DE JANEIRO',
        humor: 'mal',
        hora: '8:35',
        atividade1_icone: atividades[0].festa, 
        nomeAtividade1: 'festa',
        atividade2_icone: atividades[0].esporte,
        nomeAtividade2: 'esportes',
        atividade3_icone: atividades[0].cozinhar,
        nomeAtividade3: 'cozinhar',
        descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '
          
      },

      { 
        id: '3', 
        emoji: require(emojiTriste), 
        data: '21 de janeiro',
        humor: 'triste',
        hora: '8:35',
  
        atividade1_icone: atividades[0].festa, 
        nomeAtividade1: 'festa',
        atividade2_icone: atividades[0].esporte,
        nomeAtividade2: 'esportes',
        atividade3_icone: atividades[0].cozinhar,
        nomeAtividade3: 'cozinhar',
        descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '
      },

      { 
        id: '4', 
        emoji: require(emojiBem), 
        data: '20 de janeiro',
        humor: 'bem',
        hora: '8:35',
    
        atividade1_icone: atividades[0].festa, 
        nomeAtividade1: 'festa',
        atividade2_icone: atividades[0].esporte,
        nomeAtividade2: 'esportes',
        atividade3_icone: atividades[0].cozinhar,
        nomeAtividade3: 'cozinhar',
        descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '
      },

      { 
        id: '5', emoji: require(emojiBem), 
        data: '19 de janeiro',
        humor: 'bem',
        hora: '8:35',
    
        atividade1_icone: atividades[0].festa, 
        nomeAtividade1: 'festa',
        atividade2_icone: atividades[0].esporte,
        nomeAtividade2: 'esportes',
        atividade3_icone: atividades[0].cozinhar,
        nomeAtividade3: 'cozinhar',
        descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '
      },

      { 
        id: '6',
        emoji: require(emojiBem), 
        data: '18 de Janeiro',
        humor: 'bem',
        hora: '8:35',
    
        atividade1_icone: atividades[0].festa, 
        nomeAtividade1: 'festa',
        atividade2_icone: atividades[0].esporte,
        nomeAtividade2: 'esportes',
        atividade3_icone: atividades[0].cozinhar,
        nomeAtividade3: 'cozinhar',
        descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '
      },
];