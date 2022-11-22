import { defineStore } from 'pinia'

export const useContent = defineStore('Content', {
    state: () => ({
        home: {
            title: "Chez Luma",
            subtitle: "Bienvenue dans mon univers",
            emoji: '🔮',
            cards: [
                {
                    title: "Liste de Noël 2022",
                    description: "Ma liste de souhaits. Des choses que j'aime. Pas de charbon SVP.",
                    link: 'liste-de-noel',
                    emoji: '🎄'
                },
                {
                    title: "Création de pendentifs",
                    description: "Je me suis récemment lancé dans la création de pendentifs avec des cristaux. Voici mes dernières créations.",
                    link: 'pendentifs',
                    emoji: '💎'
                }
            ]
        }
    }),
    getters: {

    },
    actions: {

    },
})
