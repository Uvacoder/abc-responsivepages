import { Component, Prop, h } from '@stencil/core';
import { href } from 'stencil-router-v2';

import unslugify from '../../utils/unslugify';

@Component({
    tag: 'pattern-page',
    styleUrl: 'pattern-page.css'
})
export class PatternPage {
    @Prop() pattern?: string;

    render() {
        return (
            <demo-viewer url={`/patterns/${this.pattern}.html`}>
                <div class="pattern-page__breadcumb" slot="leftnav"><a {...href(`/`)}>Home</a> → {unslugify(this.pattern!)}</div>
            </demo-viewer>
        );
    }
}
