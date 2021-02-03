import { Component, Prop, ComponentInterface, h } from '@stencil/core';

@Component({
    tag: 'pattern-page'
})
export class PatternPage implements ComponentInterface {
    @Prop() pattern?: string;

    render() {
        return (
            <demo-viewer url={`/assets/${this.pattern}.html`}></demo-viewer>
        );
    }
}
