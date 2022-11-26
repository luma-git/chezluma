import { defineStore } from 'pinia'

export const useChristmas = defineStore('Christmas', {
    state: () => ({
        christmas: {
            title: "Liste de Noël 2022",
            subtitle: "Ma liste de souhaits pour ce Noël. Vous pouvez filtrer mes souhaits par prix ou par préférénce. Plus il y a de coeurs, plus j'aime !",
            emoji: '🎄',
            preferenceImage: 'heart.png',
            list: [
                /*{
                    title: "",
                    description: "",
                    price: 0,
                    preference: 1,
                    link: '',
                    image: ''
                },*/
                {
                    title: "Raspberry Pi4",
                    description: "Un truc génial pour faire joujou sous le sapin. Malheureusement en rupture de stock pour le moment.",
                    price: 96,
                    preference: 3,
                    link: 'https://www.kubii.fr/raspberry-pi-4-modele-b/2689-kit-raspberry-pi4-budget-kubii-3272496298668.html',
                    image: 'https://www.kubii.fr/9114-large_default/kit-raspberry-pi4-budget-kubii.jpg'
                },
                {
                    title: "Les lettres du Père Noël de Tolkien",
                    description: "Pour rêver de mondes fantastiques grâce à la plume magique de Tolkien.",
                    price: 29,
                    preference: 4,
                    link: 'https://www.cultura.com/p-lettres-du-pere-noel-9782267046809.html',
                    image: 'https://cdn.cultura.com/cdn-cgi/image/width=1280/media/pim/TITELIVE/15_9782267046809_1_75.jpg'
                },
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
                {
                    title: "Lightfall tome 1",
                    description: "Un roman graphique qui me fait de l'oeil depuis longtemps.",
                    price: 19,
                    preference: 3,
                    link: 'https://www.cultura.com/p-lightfall-la-derniere-flamme-9782075152594.html',
                    image: 'https://cdn.cultura.com/cdn-cgi/image/width=1280/media/pim/TITELIVE/23_9782075152594_1_75.jpg'
                },
                {
                    title: "Everdell",
                    description: "Un jeu facile d'accès dans un univers enchanteur, pouvant se jouer à 2 ou même seul.",
                    price: 53,
                    preference: 2,
                    link: 'https://www.philibertnet.com/fr/starling-games/84458-everdell-610585962435.html',
                    image: 'https://cdn2.philibertnet.com/538270-large_default/everdell.jpg'
                },
                {
                    title: "Mug Ratus",
                    description: "Trop choupi ce mug merch de la streameuse Ultia.",
                    price: 15,
                    preference: 3,
                    link: 'https://boutiqueultia.com/products/tasse-rat',
                    image: 'https://cdn.shopify.com/s/files/1/0587/0872/1796/products/TasseRat.jpg?v=1665145975&width=1946'
                },
                {
                    title: "Intégrale Kaamelott en DVD",
                    description: "Merci Zizi, au revoir messieurs dames.",
                    price: 89,
                    preference: 4,
                    link: 'https://www.fnac.com/a12584723/Kaamelott-Les-Six-Livres-L-integrale-de-la-serie-Coffret-DVD-Alexandre-Astier-DVD-Zone-2',
                    image: 'https://static.fnac-static.com/multimedia/Images/FR/NR/e1/6b/9c/10251233/1540-1/tsp20180823170206/Kaamelott-Les-Six-Livres-L-integrale-de-la-serie-Coffret-DVD.jpg'
                }
            ],
            filters: {
                allItems: true,
                onPrice: [
                    {
                        filter: 10,
                        isActive: false
                    },
                    {
                        filter: 20,
                        isActive: false
                    },
                    {
                        filter: 50,
                        isActive: false
                    },
                    {
                        filter: 100,
                        isActive: false
                    }
                ],
                onPreference: [
                    {
                        filter: 4,
                        isActive: false
                    },
                    {
                        filter: 3,
                        isActive: false
                    },
                    {
                        filter: 2,
                        isActive: false
                    },
                    {
                        filter: 1,
                        isActive: false
                    },
                ]
            }
        }
    }),
    getters: {

    },
    actions: {

    },
})
