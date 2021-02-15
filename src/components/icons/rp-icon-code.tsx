/**
 * A collection of patterns to create a responsive web page
 * https://responsive.page
 * (c) 2021 Nguyen Huu Phuoc (https://twitter.com/nghuuphuoc)
 */

import { Component, h } from '@stencil/core';

@Component({
    tag: 'rp-icon-code'
})
export class RpIconCode {
    render() {
        return (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16">
                <path d="M0.500 2.500 L23.500 2.500 L23.500 21.500 L0.500 21.500 Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
                <path d="M0.5 7.5L23.5 7.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
                <path d="M4,4.75A.25.25,0,1,1,3.75,5,.25.25,0,0,1,4,4.75" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
                <path d="M7,4.75A.25.25,0,1,1,6.75,5,.25.25,0,0,1,7,4.75" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
                <path d="M10,4.75A.25.25,0,1,1,9.75,5,.25.25,0,0,1,10,4.75" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
                <path d="M8.5,11.5a2,2,0,0,0-2,2v1a2,2,0,0,0,2,2" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
                <path d="M12.5,11.5h-1a1,1,0,0,0-1,1c0,1.5,2,1.5,2,3a1,1,0,0,1-1,1h-1" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
                <path d="M16.5,11.5h-1a1,1,0,0,0-1,1c0,1.5,2,1.5,2,3a1,1,0,0,1-1,1h-1" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
            </svg>
        );
    }
}
