/**
 * A collection of patterns to create a responsive web page
 * https://responsive.page
 * (c) 2021 Nguyen Huu Phuoc (https://twitter.com/nghuuphuoc)
 */

import { Component, h } from '@stencil/core';

@Component({
    tag: 'rp-icon-previous'
})
export class RpIconPrevious {
    render() {
        return (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16">
                <path d="M0.757 12L23.243 12" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
                <path d="M12.743,1,1.1,11.249a1,1,0,0,0,0,1.5L12.743,23" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
            </svg>
        );
    }
}
