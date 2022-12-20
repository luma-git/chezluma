import { defineStore } from 'pinia'

export const useContent = defineStore('Content', {
    state: () => ({
        home: {
            title: "Chez Luma",
            subtitle: "Une tartine perdue dans le cyberespace... Mes projets perso de code, mes créations en tous genres et bientôt un blog.",
            emoji: '🍞',
            cards: [
                {
                    title: "Blog",
                    description: "Mon journal où je blablate sur mes découvertes et mes créations du moment.",
                    link: 'blog',
                    emoji: '✒️'
                },
                {
                    title: "Liste de Noël 2022",
                    description: "Ma liste de souhaits pour Noël. Essentiellement pour les cadeaux de moi à moi 😊",
                    link: 'liste-de-noel',
                    emoji: '🎄'
                },
                /*{
                    title: "Création de pendentifs",
                    description: "Je me suis récemment lancé dans la création de pendentifs avec des cristaux. Voici mes dernières créations.",
                    link: 'pendentifs',
                    emoji: '💎'
                },*/
            ]
        }
    }),
    getters: {

    },
    actions: {

    },
})
