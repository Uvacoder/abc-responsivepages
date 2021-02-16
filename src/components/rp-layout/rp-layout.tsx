/**
 * A collection of patterns to create a responsive web page
 * https://responsive.page
 * (c) 2021 Nguyen Huu Phuoc (https://twitter.com/nghuuphuoc)
 */

import { Component, State, h } from '@stencil/core';
import { href } from 'stencil-router-v2';

@Component({
    tag: 'rp-layout',
    styleUrl: 'rp-layout.css'
})
export class RpLayout {
    @State() isNavigationOpen: boolean = true;

    render() {
        return (
            <div class="rp-layout">
                <div class="rp-layout__sidebar">
                    <div>
                        <rp-tooltip tip="Homepage" position="right">
                            <a {...href(`/`)} class="rp-layout__button">
                                <rp-icon-layout />
                            </a>
                        </rp-tooltip>

                        <rp-tooltip tip="Patterns" position="right">
                            <button class="rp-layout__button" onClick={() => this.isNavigationOpen = !this.isNavigationOpen}>
                                <rp-icon-list />
                            </button>
                        </rp-tooltip>
                    </div>
                </div>
                <div class={`rp-layout__patterns ${this.isNavigationOpen ? '' : 'rp-layout__patterns--hidden'}`}>
                    <rp-click-outside>
                        <rp-patterns />
                    </rp-click-outside>
                </div>
                <div class="rp-layout__content">
                    <slot></slot>
                </div>
            </div>
        );
    }
}
