/**
 * A collection of patterns to create a responsive web page
 * https://responsive.page
 * (c) 2021 Nguyen Huu Phuoc (https://twitter.com/nghuuphuoc)
 */

import { Component, Prop, State, Watch, h } from '@stencil/core';

@Component({
    tag: 'rp-pattern-source'
})
export class RpPatternSource {
    @Prop() pattern?: string;
    @State() source?: string;

    @Watch('pattern')
    watchHandler(newValue: string, _: string) {
        this.fetchSource(newValue!);
    }

    fetchSource = (pattern: string) => {
        const url = `/patterns/${pattern}.html`;
        return fetch(url).then(response => response.text()).then(html => {
            this.source = html;
        });
    }

    componentWillLoad() {
        return this.fetchSource(this.pattern!);
    }

    render() {
        return (
            <rp-highlight-code source={this.source} />
        );
    }
}
