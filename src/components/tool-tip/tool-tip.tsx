/**
 * A collection of patterns to create a responsive web page
 * https://responsive.page
 * (c) 2021 Nguyen Huu Phuoc (https://twitter.com/nghuuphuoc)
 */

import { Component, Prop, h } from '@stencil/core';

@Component({
    tag: 'tool-tip',
    styleUrl: 'tool-tip.css'
})
export class ToolTip {
    // Possible positions are `top` (default), `right`, `bottom` and `left`
    @Prop() position: string = 'top';
    @Prop() tip?: string;

    render() {
        return (
            <div
                class={`tool-tip tool-tip--${this.position}`}
                data-text={`${this.tip!}`}
            >
                <slot></slot>
            </div>
        );
    }
}
