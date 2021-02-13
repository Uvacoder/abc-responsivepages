/**
 * A collection of patterns to create a responsive web page
 * https://responsive.page
 * (c) 2021 Nguyen Huu Phuoc (https://twitter.com/nghuuphuoc)
 */

import { Component, Event, EventEmitter, h } from '@stencil/core';

@Component({
    tag: 'click-outside'
})
export class ClickOutside {
    @Event() clickOutSide?: EventEmitter;

    private container!: HTMLElement;

    handleClickEvent = (e: MouseEvent) => {
        const { target } = e;
        if (target instanceof HTMLElement && !this.container.contains(target)) {
            this.clickOutSide!.emit();
        }
    }

    connectedCallback() {
        document.body.addEventListener('click', this.handleClickEvent!);
    }

    disconnectedCallback() {
        document.body.removeEventListener('click', this.handleClickEvent!);
    }

    render() {
        return (
            <div
                ref={ele => this.container = ele as HTMLElement}
                style={{ height: '100%', width: '100%' }}
            >
                <slot></slot>
            </div>
        );
    }
}
