const Event = [
    {
        nome: "Tech Hoje!",
        descricao: "Evento regional de tecnologia onde se discute as tecnologias atuais com vários entusiastas da área",
        periodo: "dia 22/02 até 25/02",
        local: "praça de eventos João Pessoa",
        tema: "Tecnologia",
        programacao: [
            "Palestras",
            "Workshops",
            "feira de tecnologia"
        ],
        foto: "",
        comite: "Federação TecnoMais",
        sitioEvento: "João Pessoa",
        sessoesTecnicas: {
            ApresentacaoVideo: false,
            ApresentacaoPresencial: true,
            ApresentacoesHibridas: true
        },
        preco: 130
    },
    {
        nome: "TechTudo",
        descricao: "O TechTudo é uma feira de exposição para atrair pessoas para a área empolgante da tecnologia!",
        periodo: "dia 12/05 até 14/05",
        local: "Imperial Recepções",
        tema: "Tecnologia",
        programacao: [
            "Apresentações",
            "Workshops"
        ],
        foto: "",
        comite: "Paraíba Educa",
        sitioEvento: "Cajazeiras",
        sessoesTecnicas: {
            ApresentacaoVideo: false,
            ApresentacaoPresencial: true,
            ApresentacoesHibridas: false
        },
        preco: 30
    },
    {
        nome: "Programa Mais",
        descricao: "Evento Nacional que acontece no Brasil, trazendo novidades internacionais do mundo da tecnologia!",
        periodo: "dia 28/010 até 29/10",
        local: "PUC-SP",
        tema: "Tecnologia",
        programacao: [
            "Palestras",
            "Workshops",
            "feira de tecnologia",
            "Apresentação de projetos"
        ],
        foto: "",
        comite: "Congresso Brasileiro de Computação",
        sitioEvento: "São Paulo",
        sessoesTecnicas: {
            ApresentacaoVideo: true,
            ApresentacaoPresencial: true,
            ApresentacoesHibridas: true
        },
        preco: 110
    },
    {
        nome: "Campus DEV",
        descricao: "Gosta de Tecnologia? O Campus DEV é um intensivão de tecnologias para a carreira dev, participe agora!!",
        periodo: "dia 02/06 até 04/06",
        local: "IFPB - João Pessoa",
        tema: "Tecnologia",
        programacao: [
            "Workshops",
            "Aulas",
            "Atividades"
        ],
        foto: "",
        comite: "IFPB",
        sitioEvento: "João Pessoa",
        sessoesTecnicas: {
            ApresentacaoVideo: false,
            ApresentacaoPresencial: true,
            ApresentacoesHibridas: false
        },
        preco: 55
    },
    {
        nome: "Carreira Tech",
        descricao: "Evento online para a formação de desenvolvedores, voltado para construção de uma boa carreira na área da tecnologia.",
        periodo: "dia 24/03 até 25/03",
        local: "Online",
        tema: "Tecnologia e Carreira",
        programacao: [
            "Palestras",
            "Apresentações",
            "Aulas"
        ],
        foto: "",
        comite: "Movimento MEJ",
        sitioEvento: "Online",
        sessoesTecnicas: {
            ApresentacaoVideo: true,
            ApresentacaoPresencial: false,
            ApresentacoesHibridas: false
        },
        preco: 15
    },
    {
        nome: "Tico e Tech",
        descricao: "Para todos da área da tecnologia que gostam de um debate sobre o futuro da tecnologia o Tico e Tech é para você!",
        periodo: "dia 07/04 até 08/04",
        local: "Online",
        tema: "Tecnologia",
        programacao: [
            "Palestras",
            "apresentações",
            "debate"
        ],
        foto: "",
        comite: "ExpoTech",
        sitioEvento: "Online",
        sessoesTecnicas: {
            ApresentacaoVideo: true,
            ApresentacaoPresencial: false,
            ApresentacoesHibridas: false
        },
        preco: 25
    }
]

module.exports = Event;