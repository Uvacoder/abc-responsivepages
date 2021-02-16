/**
 * A collection of patterns to create a responsive web page
 * https://responsive.page
 * (c) 2021 Nguyen Huu Phuoc (https://twitter.com/nghuuphuoc)
 */

import { Component, Prop, h } from '@stencil/core';
import Prism from 'prismjs';

@Component({
    tag: 'rp-highlight-code'
})
export class RpHighlightCode {
    @Prop() source?: string;
    private codeEle!: HTMLElement;

    componentDidRender() {
        this.codeEle.innerHTML = Prism.highlight(this.source!, Prism.languages.html, 'html');
    }

    render() {
        return (
            <pre><code class="language-html" ref={ele => this.codeEle = ele as HTMLElement} /></pre>
        );
    }
}
