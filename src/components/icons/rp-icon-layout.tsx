/**
 * A collection of patterns to create a responsive web page
 * https://responsive.page
 * (c) 2021 Nguyen Huu Phuoc (https://twitter.com/nghuuphuoc)
 */

import { Component, Prop, h } from '@stencil/core';

@Component({
    tag: 'rp-icon-layout'
})
export class RpIconLayout {
    @Prop() size?: number = 24;

    render() {
        return (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={this.size} height={this.size}>
                <path d="M0.500 16.500 L10.500 16.500 L10.500 23.500 L0.500 23.500 Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
                <path d="M13.500 10.500 L23.500 10.500 L23.500 23.500 L13.500 23.500 Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" transform="translate(37 34) rotate(180)"></path><path d="M13.500 0.500 L23.500 0.500 L23.500 7.500 L13.500 7.500 Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" transform="translate(37 8) rotate(180)"></path>
                <path d="M0.500 0.500 L10.500 0.500 L10.500 13.500 L0.500 13.500 Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
            </svg>
        );
    }
}
