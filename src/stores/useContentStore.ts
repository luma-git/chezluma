import { defineStore } from 'pinia'

export const useContent = defineStore('Content', {
    state: () => ({
        home: {
            title: "Chez Luma",
            subtitle: "Une tartine perdue dans le cyberespace... Mes projets perso de code, mes créations en tous genres et mon blog.",
            emoji: '🍞',
            cards: [
                {
                    title: "Blog",
                    description: "Mon journal où je blablate sur mes découvertes et mes créations du moment.",
                    link: 'blog',
                    emoji: '✒️'
                },
                {
                    title: "Mastodon",
                    description: "Mon compte sur le réseau social Mastodon.",
                    link: 'mastodon',
                    emoji: '🐘'
                },
                /*{
                    title: "Liste de Noël 2022",
                    description: "Ma liste de souhaits pour Noël. Essentiellement pour les cadeaux de moi à moi 😊",
                    link: 'liste-de-noel',
                    emoji: '🎄'
                },*/
            ]
        }
    }),
    getters: {

    },
    actions: {

    },
})
