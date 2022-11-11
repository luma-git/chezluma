import { defineStore } from 'pinia'

export const useChristmas = defineStore('Christmas', {
    state: () => ({
        christmas: {
            title: "Liste de Noël 2022",
            subtitle: "Ma liste de souhaits pour ce Noël. Chaque article non acheté rendra triste un chaton. Pensez-y avant d'être radin.",
            image: {
                name: 'christmas.png',
                alt: ''
            },
            preferenceImage: 'heart.png',
            list: [
                {
                    title: "Monopoly Animal Crossing",
                    description: "Pour redécouvrir ce jeu mythique dans l'univers d'Animal Crossing.",
                    price: 27,
                    preference: 3,
                    link: 'https://www.cultura.com/p-monopoly-animal-crossing-5010993896806.html',
                    image: 'https://images.p-nintendo.com/o/2021/07/60e3842b18ebc4.jpg'
                },
                {
                    title: "Dixit",
                    description: "Un jeu de société poétique qui promet de beaux moments.",
                    price: 30,
                    preference: 2,
                    link: 'https://www.philibertnet.com/fr/libellud/9145-dixit-9782370990822.html',
                    image: 'https://cdn2.philibertnet.com/509638-large_default/dixit.jpg'
                },
                {
                    title: "Simplissime desserts",
                    description: "Pour régaler toute la famille, les amis et les collègues.",
                    price: 15,
                    preference: 1,
                    link: 'https://livre.fnac.com/a9872460/Simplissime-Le-livre-de-desserts-les-faciles-du-monde-Simplissime-desserts-Jean-Francois-Mallet',
                    image: 'https://cdn.cultura.com/cdn-cgi/image/width=1280/media/pim/TITELIVE/84_9782011356437_1_75.jpg'
                },
            ]
        }
    }),
    getters: {

    },
    actions: {

    },
})
