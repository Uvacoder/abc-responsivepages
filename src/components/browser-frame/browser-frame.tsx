/**
 * A collection of patterns to create a responsive web page
 * https://responsive.page
 * (c) 2021 Nguyen Huu Phuoc (https://twitter.com/nghuuphuoc)
 */

import { Component, Event, EventEmitter, Prop, h } from '@stencil/core';

@Component({
    tag: 'browser-frame',
    styleUrl: 'browser-frame.css'
})
export class BrowserFrame {
    @Event() rotateEvent?: EventEmitter;
    @Prop() browserTitle?: string;

    rotate = () => {
        this.rotateEvent!.emit();
    }

    render() {
        return (
            <div class="browser-frame">
                <div class="browser-frame__tabs">
                    <div class="browser-frame__buttons">
                        <div class="browser-frame__button browser-frame__button--close"></div>
                        <div class="browser-frame__button browser-frame__button--min"></div>
                        <div class="browser-frame__button browser-frame__button--full"></div>
                    </div>
                    <div class="browser-frame__tab">
                        <div class="browser-frame__round--left"></div>
                        <div class="browser-frame__round--right"></div>
                        <div class="browser-frame__title">{this.browserTitle!}</div>
                    </div>
                </div>
                <div class="browser-frame__bottom"></div>
                <div class="browser-frame__bar">
                    <tool-tip tip="Rotate screen" position="bottom">
                        <button class="browser-frame__action" onClick={this.rotate}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                                <path d="M7.000 3.500 L17.000 3.500 L17.000 20.500 L7.000 20.500 Z" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" transform="translate(-4.971 12) rotate(-45)"></path>
                                <path d="M5.282 12.353L12.353 5.282" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round"></path>
                                <path d="M12.353 19.425L19.425 12.353" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round"></path>
                                <path d="M5.989 8.818L8.818 5.989" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round"></path>
                                <path d="M6.5 23.498L9 21.5 6.5 19.498" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round"></path>
                                <path d="M9,21.5c-3.462.654-7.5-1.5-8.5-5" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round"></path>
                                <path d="M17.5 0.502L15 2.5 17.5 4.502" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round"></path>
                                <path d="M15,2.5c3.462-.654,7.5,1.5,8.5,5" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round"></path>
                            </svg>
                        </button>
                    </tool-tip>
                </div>
            </div>
        );
    }
}
