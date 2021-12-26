import { IdCardComponent } from './components/id-card'
import { ICDNAssets, ICharacter } from '@townland-project/interfaces'
import { RenderComponent } from '@townland-project/dom'
import { Caches } from '@townland-project/cache'

export async function IDCard(character: ICharacter): Promise<HTMLElement> {
    let res = await Caches.Character.GetJson('https://cdn.townland.xyz/character.json')
    let assets: ICDNAssets = await res?.json()
    return RenderComponent(IdCardComponent, {
        Values: {
            character: character,
            assets: assets.item
        }
    })
}