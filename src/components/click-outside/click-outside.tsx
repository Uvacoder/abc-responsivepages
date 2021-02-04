import { Component, Event, EventEmitter, h } from '@stencil/core';

@Component({
    tag: 'click-outside'
})
export class ClickOutside {
    @Event() clickOutSide?: EventEmitter;

    private container?: HTMLElement;
    private clickEventHandler?: (e: MouseEvent) => void;

    constructor() {
        this.clickEventHandler = this.handleClickEvent.bind(this);
    }

    handleClickEvent(e: MouseEvent) {
        const { target } = e;
        if (target instanceof HTMLElement && !this.container!.contains(target)) {
            this.clickOutSide!.emit();
        }
    }

    connectedCallback() {
        document.body.addEventListener('click', this.clickEventHandler!);
    }

    disconnectedCallback() {
        document.body.removeEventListener('click', this.clickEventHandler!);
    }

    render() {
        return (
            <div
                ref={ele => this.container = ele}
                style={{ height: '100%', width: '100%' }}
            >
                <slot></slot>
            </div>
        );
    }
}
