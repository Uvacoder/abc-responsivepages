import { Component, Prop, h } from '@stencil/core';

@Component({
    tag: 'pattern-page'
})
export class PatternPage {
    @Prop() pattern?: string;

    render() {
        return (
            <demo-viewer url={`/assets/${this.pattern}.html`}></demo-viewer>
        );
    }
}
