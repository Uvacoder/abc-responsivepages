/**
 * A collection of patterns to create a responsive web page
 * https://responsive.page
 * (c) 2021 Nguyen Huu Phuoc (https://twitter.com/nghuuphuoc)
 */

import { Component, Prop, State, h } from '@stencil/core';

@Component({
    tag: 'rp-pattern-source'
})
export class RpPatternSource {
    @Prop() pattern?: string;
    @State() source?: string;

    componentWillLoad() {
        const url = `/patterns/${this.pattern!}.html`;
        return fetch(url).then(response => response.text()).then(html => {
            this.source = html;
        });  
    }

    render() {
        return (
            <rp-highlight-code source={this.source} />
        );
    }
}
