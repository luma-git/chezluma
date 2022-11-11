import { defineStore } from 'pinia'

export const useContent = defineStore('Content', {
    state: () => ({
        home: {
            title: "Chez Luma",
            subtitle: "Bonjour, je suis une petite fille faite de pixels. J'ai été possédée par l'esprit de ma créatrice, Luma. Elle m'a chargée de vous souhaiter la bienvenue sur ce site. Si ça vous intéresse, il a été créé avec VueJS.",
            image: {
                name: 'paula.png',
                alt: ''
            },
            cards: [
                {
                    title: "Liste de Noël 2022",
                    description: "Ma liste de souhaits. Des choses que j'aime. Pas de charbon SVP.",
                    link: 'liste-de-noel',
                    image: {
                        name: 'christmas.png',
                        alt: ''
                    }
                }
            ]
        }
    }),
    getters: {

    },
    actions: {

    },
})
