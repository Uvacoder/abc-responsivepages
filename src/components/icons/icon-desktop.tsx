/**
 * A collection of patterns to create a responsive web page
 * https://responsive.page
 * (c) 2021 Nguyen Huu Phuoc (https://twitter.com/nghuuphuoc)
 */

import { Component, h } from '@stencil/core';

@Component({
    tag: 'icon-desktop'
})
export class IconDesktop {
    render() {
        return (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                <path d="M9,22.5a6.979,6.979,0,0,0,1.5-4" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
                <path d="M15,22.5a6.979,6.979,0,0,1-1.5-4" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
                <path d="M7.499 22.5L16.499 22.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
                <path d="M0.5 15.5L23.5 15.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
                <path d="M0.500 1.500 L23.500 1.500 L23.500 18.500 L0.500 18.500 Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
            </svg>
        );
    }
}
