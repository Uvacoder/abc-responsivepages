/**
 * A collection of patterns to create a responsive web page
 * https://responsive.page
 * (c) 2021 Nguyen Huu Phuoc (https://twitter.com/nghuuphuoc)
 */

import { Component, Event, EventEmitter, Prop, h } from '@stencil/core';
import { href } from 'stencil-router-v2';

@Component({
    tag: 'browser-frame',
    styleUrl: 'browser-frame.css'
})
export class BrowserFrame {
    @Event() rotateEvent?: EventEmitter;
    @Prop() backUrl?: string;
    @Prop() forwardUrl?: string;
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
                <div class="browser-frame__bar">
                    <tool-tip tip="Previous pattern" position="bottom">
                        <a class={`browser-frame__action ${!this.backUrl! && 'browser-frame__action--disabled'}`} {...href(this.backUrl!)}>
                            <icon-previous />
                        </a>
                    </tool-tip>
                    <tool-tip tip="Next pattern" position="bottom">
                        <a class={`browser-frame__action ${!this.forwardUrl! && 'browser-frame__action--disabled'}`} {...href(this.forwardUrl!)}>
                            <icon-next />
                        </a>
                    </tool-tip>
                    <tool-tip tip="Rotate screen" position="bottom">
                        <button class="browser-frame__action" onClick={this.rotate}>
                            <icon-rotate />
                        </button>
                    </tool-tip>
                    <div class="browser-frame__address"></div>
                </div>
            </div>
        );
    }
}
