import cardinal from "../Assets/cardinal.png";
import customTag from "../Assets/custom-tag.png";
import diamondHoe from "../Assets/diamond-hoe.png";
import elite from "../Assets/elite.png";
import fly from "../Assets/fly.png";
import prime from "../Assets/prime.png";
import tripwireHook from "../Assets/tripwire-hook.png";
import woodenHoe from "../Assets/wooden-hoe.png";
import goldenHoe from "../Assets/golden-hoe.png";

export const products = [
    {
        id: 11,
        name: 'Prime',
        price: 60
    },
    {
        id: 21,
        name: 'Cardinal',
        price: 40
    },
    {
        id: 31,
        name: 'Elite',
        price: 20
    },
    {
        id: 21,
        name: '/fly',
        price: 15
        
    },
    {
        id: 22,
        name: 'Custom Tag',
        price: 15
    },
    {
        id: 31,
        name: 'Ae Crate',
        price: 1
    },
    {
        id: 32,
        name: 'Mythical Crate',
        price: 2
    },
    {
        id: 33,
        name: 'Cosmetic Crate',
        price: 3
    },
    {
        id: 41,
        name: 'Creator Wand',
        price: 50
    },
    {
        id: 42,
        name: 'Heroic Wand',
        price: 30
    },
    {
        id: 43,
        name: 'Mystic Wand',
        price: 15
    }
]

export const ranks = [
    {
        id: 11,
        name: 'Prime',
        price: 60,
        img: prime
    },
    {
        id: 21,
        name: 'Cardinal',
        price: 40,
        img: cardinal
    },
    {
        id: 31,
        name: 'Elite',
        price: 20,
        img: elite
    }
];

export const perks = [
    {
        id: 21,
        name: '/fly',
        price: 15,
        img: fly
    },
    {
        id: 22,
        name: 'Custom Tag',
        price: 15,
        img: customTag
    }
];

export const crates = [
    {
        id: 31,
        name: 'Ae Crate',
        price: 1,
        img: tripwireHook
    },
    {
        id: 32,
        name: 'Mythical Crate',
        price: 2,
        img: tripwireHook
    },
    {
        id: 33,
        name: 'Cosmetic Crate',
        price: 3,
        img: tripwireHook
    }
]

export const items = [
    {
        id: 41,
        name: 'Creator Wand',
        price: 50,
        img: diamondHoe
    },
    {
        id: 42,
        name: 'Heroic Wand',
        price: 30,
        img: goldenHoe
    },
    {
        id: 43,
        name: 'Mystic Wand',
        price: 15,
        img: woodenHoe
    }
]

// export default products;