/**
 * A collection of patterns to create a responsive web page
 * https://responsive.page
 * (c) 2021 Nguyen Huu Phuoc (https://twitter.com/nghuuphuoc)
 */

import { Component, h } from '@stencil/core';

@Component({
    tag: 'rp-icon-live'
})
export class RpIconLive {
    render() {
        return (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16">
                <path d="M1.000 5.000 L23.000 5.000 L23.000 19.000 L1.000 19.000 Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
                <path d="M10 14.517L10 9.517" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
                <path d="M12,9.517v1.7a5.959,5.959,0,0,0,1,3.3,5.959,5.959,0,0,0,1-3.3v-1.7" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
                <path d="M6,9.517v4a1,1,0,0,0,1,1H8" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
                <path d="M18,14.5H17a1,1,0,0,1-1-1v-3a1,1,0,0,1,1-1h1" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
                <path d="M16 12.5L18 12.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
            </svg>
        );
    }
}
