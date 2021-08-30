import { v4 as uuidV4 } from "uuid";

export const MenuInitialState = {
    branchs: [
        {
            id: uuidV4(),
            name: "Home",
            icon: "fas fa-home",
            active: true
        },
        {
            id: uuidV4(),
            name: "Steak",
            icon: "fas fa-drumstick-bite",
            active: false
        },
        {
            id: uuidV4(),
            name: "Salad",
            icon: "fas fa-carrot",
            active: false
        },
        {
            id: uuidV4(),
            name: "Drink",
            icon: "fas fa-cocktail",
            active: false
        },
        {
            id: uuidV4(),
            name: "Dessert",
            icon: "fas fa-ice-cream",
            active: false
        }
    ],
    foods: {
        steak: [
            {
                id: uuidV4(),
                name: "Steak 1",
                img: "/images/steak-1.jpeg",
                price: 12,
                isBig: true,
                isSm: false
            },
            {
                id: uuidV4(),
                name: "Steak 2",
                img: "/images/steak-2.jpeg",
                price: 132,
                isBig: true,
                isSm: false
            },
            {
                id: uuidV4(),
                name: "Steak 3",
                img: "/images/steak-3.jpeg",
                price: 72,
                isBig: true,
                isSm: false
            },
            {
                id: uuidV4(),
                name: "Steak 4",
                img: "/images/steak-4.jpeg",
                price: 142,
                isBig: true,
                isSm: false
            },
            {
                id: uuidV4(),
                name: "Steak 5",
                img: "/images/steak-5.jpeg",
                price: 1230,
                isBig: true,
                isSm: false
            }
        ],
        salad: [
            {
                id: uuidV4(),
                name: "Salad 1",
                img: "/images/salad-1.jpeg",
                price: 12,
                isBig: true,
                isSm: false
            },
            {
                id: uuidV4(),
                name: "Salad 2",
                img: "/images/salad-2.jpeg",
                price: 132,
                isBig: true,
                isSm: false
            },
            {
                id: uuidV4(),
                name: "Salad 3",
                img: "/images/salad-3.jpeg",
                price: 72,
                isBig: true,
                isSm: false
            },
            {
                id: uuidV4(),
                name: "Salad 4",
                img: "/images/salad-4.jpeg",
                price: 142,
                isBig: true,
                isSm: false
            },
            {
                id: uuidV4(),
                name: "Salad 5",
                img: "/images/salad-5.jpeg",
                price: 1230,
                isBig: true,
                isSm: false
            }
        ]
    }
};