import { Component, ComponentHelper, RenderOnInit } from '@townland-project/dom'
import { ICDNAssetsItem, ICharacter } from '@townland-project/interfaces'
import { GenerateCharacter } from '@townland-project/character-dom/src'

import JsBarcode from 'jsbarcode'

@Component({
    id: 'tl-id-card',
    template: require('./component.htmlx'),
    style: require('./component.scssx')
})
export class IdCardComponent extends ComponentHelper implements RenderOnInit {

    constructor(private character: ICharacter, private assets: ICDNAssetsItem) {
        super()
    }

    RenderOnInit(): void {
        this.GenerateBarcode()
        this.GenerateImage()
    }

    GenerateBarcode() {
        JsBarcode("#tl-id-card-barcode", '0000000', {
            width: 2,
            height: 40,
            background: 'transparent',
            displayValue: false
        });
    }

    GenerateImage() {
        GenerateCharacter(this.character, this.assets)
            .then((element) => document.getElementById('tl-id-card-image')?.appendChild(element))
    }
}