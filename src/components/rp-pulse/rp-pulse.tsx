/**
 * A collection of patterns to create a responsive web page
 * https://responsive.page
 * (c) 2021 Nguyen Huu Phuoc (https://twitter.com/nghuuphuoc)
 */

import { Component, h } from '@stencil/core';

@Component({
    tag: 'rp-pulse',
    styleUrl: 'rp-pulse.css'
})
export class RpPulse {
    render() {
        return (
            <div class="rp-pulse">
                <div class="rp-pulse__circle rp-pulse__circle--outer"></div>
                <div class="rp-pulse__circle rp-pulse__circle--inner"></div>
            </div>
        );
    }
}
