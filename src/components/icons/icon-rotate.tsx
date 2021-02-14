/**
 * A collection of patterns to create a responsive web page
 * https://responsive.page
 * (c) 2021 Nguyen Huu Phuoc (https://twitter.com/nghuuphuoc)
 */

import { Component, h } from '@stencil/core';

@Component({
    tag: 'icon-rotate'
})
export class IconRotate {
    render() {
        return (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16">
                <path d="M7.000 3.500 L17.000 3.500 L17.000 20.500 L7.000 20.500 Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" transform="translate(-4.971 12) rotate(-45)"></path>
                <path d="M5.282 12.353L12.353 5.282" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
                <path d="M12.353 19.425L19.425 12.353" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
                <path d="M5.989 8.818L8.818 5.989" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
                <path d="M6.5 23.498L9 21.5 6.5 19.498" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
                <path d="M9,21.5c-3.462.654-7.5-1.5-8.5-5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
                <path d="M17.5 0.502L15 2.5 17.5 4.502" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
                <path d="M15,2.5c3.462-.654,7.5,1.5,8.5,5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
            </svg>
        );
    }
}
