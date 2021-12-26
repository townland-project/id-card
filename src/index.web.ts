import { Caches } from '@townland-project/cache'
import { IDCard } from "."

Caches.Character.OnOpen(async () => {
    let element = await IDCard({
        username: 'ROOT',
        access: 'root',
        dna: '',
        gender: 'male',
        dress: {
            body: 'white-male-body',
            hair: 'long-black-hair',
            eyes: 'male-blue-eyes',
            mouth: 'male-smile',
            tops: 'blue-graphic-t',
            bottoms: 'dark-skinny-jean',
            shoes: 'white-sneakers',
            accessories: 'male-aviators'
        },
    })
    document.getElementById('root')?.appendChild(element)
})