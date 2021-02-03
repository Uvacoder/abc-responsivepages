import { Component, Prop, ComponentInterface, h } from '@stencil/core';

@Component({
    tag: 'demo-viewer'
})
export class DemoViewer implements ComponentInterface {
    @Prop() url?: string;

    render() {
        return (
            <iframe src={this.url} />
        );
    }
}
