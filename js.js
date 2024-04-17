let doc = document
let body = doc.querySelector('body')
let header = doc.querySelector('header')

let yeda = [
    {
        img: './img/Mask Group.png',
        name: 'Хачапури по-аджарски',
        weight: '430 г',
        opisanie: 'Хачапури "Лодочка" с начинкой из расплавленного сыра сулугуни, яйца и масла.',
        price: '470 ₽',
        korzina: './img/Group 7.png'
    },
    {
        img: './img/Mask Group-1.png',
        name: 'Хинкали традиционные (6шт)',
        weight: '350 г',
        opisanie: 'Пряные хинкали с начинкой из ароматной баранины со специями.',
        price: '495 ₽',
        korzina: './img/Group 7.png',
        skidka: '620 ₽'
    },
    {
        img: './img/Mask Group-2.png',
        name: 'Хинкали жаренные (6шт)',
        weight: '350 г',
        opisanie: 'Пряные хинкали с начинкой из ароматной баранины со специями.',
        price: '520 ₽',
        korzina: './img/Group 7.png',
        skidka: '650 ₽'
    },
    {
        img: './img/Mask Group-3.png',
        name: 'Ланч низкокалорийный',
        weight: '450 г',
        opisanie: 'Греческий йогурт с ягодами, 3 хинкали традиционных, салат цезарь, пирожки с уткой, морс',
        price: '1 148 ₽',
        korzina: './img/Group 7.png',
        skidka: '1 435 ₽'
    },
    {
        img: './img/Mask Group-4.png',
        name: 'Хачапури по-мегрельски',
        weight: '430 г',
        opisanie: 'Невероятно ароматная лепёшка с сыром сулугуни внутри и снаружи',
        price: '490 ₽',
        korzina: './img/Group 7.png'
    },
    {
        img: './img/Mask Group-5.png',
        name: 'Котлета с картофелем по-деревенски',
        weight: '350 г',
        opisanie: 'По семейному рецепту: нежнейшее рубленное мясо с экологически чистыми ферме...',
        price: '430 ₽',
        button: '3 вида',
        skidka: '410 ₽ –'
    },
    {
        img: './img/Mask Group-6.png',
        name: 'Хинкали традиционные (6шт)',
        weight: '350 г',
        opisanie: 'Пряные хинкали с начинкой из ароматной баранины со специями.',
        price: '495 ₽',
        korzina: './img/Group 7.png',
        skidka: '620 ₽'
    },
    {
        img: './img/Mask Group-7.png',
        name: 'Хачапури по-мегрельски',
        weight: '430 г',
        opisanie: 'Невероятно ароматная лепёшка с сыром сулугуни внутри и снаружи',
        price: '490 ₽',
        korzina: './img/Group 7.png'
    },
    {
        img: './img/Mask Group-8.png',
        name: 'Хачапури по-аджарски',
        weight: '430 г',
        opisanie: 'Хачапури "Лодочка" с начинкой из расплавленного сыра сулугуни, яйца и масла.',
        price: '470 ₽',
        korzina: './img/Group 7.png'
    },
    {
        img: './img/Mask Group-9.png',
        name: 'Котлета с картофелем по-деревенски',
        weight: '350 г',
        opisanie: 'По семейному рецепту: нежнейшее рубленное мясо с экологически чистыми ферме...',
        price: '430 ₽',
        button: '3 вида',
        skidka: '410 ₽'
    },
    {
        img: './img/Mask Group-10.png',
        name: 'Хинкали жаренные (6шт)',
        weight: '350 г',
        opisanie: 'Пряные хинкали с начинкой из ароматной баранины со специями.',
        price: '520 ₽',
        korzina: './img/Group 7.png',
        skidka: '650 ₽'
    },
    {
        img: './img/Mask Group-11.png',
        name: 'Ланч низкокалорийный',
        weight: '450 г',
        opisanie: 'Греческий йогурт с ягодами, 3 хинкали традиционных, салат цезарь, пирожки с уткой, морс',
        price: '1 148 ₽',
        korzina: './img/Group 7.png',
        skidka: '1 435 ₽'
    }
]

let mem_you = [
    {
        h1: '30%',
        p: 'акция',
        ogon: './img/image 9.png',
        h12: '20%',
    },
    {
        img: './img/image 17.png',
        p: 'Горячие блюда',
        img2: './img/image 18.png',
    },
    {
        img: './img/image 19.png',
        p: 'Супы',
        img2: './img/image 20.png',
    },
    {
        img: './img/image 21.png',
        p: 'Хинкали',
        img2: './img/image 22.png',
    },
    {
        img: './img/image 23.png',
        p: 'Холодные закуски',
        img2: './img/image 24.png',
    },
    {
        img: './img/image 25.png',
        p: 'Салаты',
        img2: './img/image 26.png',
    }
]
for (let item of mem_you) {
    let babay = doc.createElement('p')
    babay.innerText = item.p
    babay.classList.add('babay')
    header.append(babay)
}