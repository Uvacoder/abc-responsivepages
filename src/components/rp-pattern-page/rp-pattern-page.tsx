/**
 * A collection of patterns to create a responsive web page
 * https://responsive.page
 * (c) 2021 Nguyen Huu Phuoc (https://twitter.com/nghuuphuoc)
 */

import { Component, Prop, h } from '@stencil/core';

@Component({
    tag: 'rp-pattern-page'
})
export class RpPatternPage {
    @Prop() pattern?: string;

    render() {
        return (
            <rp-layout>
                <rp-demo-viewer pattern={this.pattern!} />
            </rp-layout>
        );
    }
}
