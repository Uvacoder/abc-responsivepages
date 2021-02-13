/**
 * A collection of patterns to create a responsive web page
 * https://responsive.page
 * (c) 2021 Nguyen Huu Phuoc (https://twitter.com/nghuuphuoc)
 */

import { Component, Event, EventEmitter, State, h } from '@stencil/core';

export interface ResizeEvent {
    height: number;
    width: number;
}
enum ResizeDirection {
    Both,
    Horizontal,
    Vertical,
}

@Component({
    tag: 'resize-able',
    styleUrl: 'resize-able.css'
})
export class ResizeAble {
    @Event() resizeEvent?: EventEmitter<ResizeEvent>;
    @Event() didResizeEvent?: EventEmitter<ResizeEvent>;
    @State() newWidth: number = 0;
    @State() newHeight: number = 0;

    private container!: HTMLElement;
    private overlayEle!: HTMLElement;

    // The current position of mouse
    private x: number = 0;
    private y: number = 0;

    // The dimension of the element
    private w: number = 0;
    private h: number = 0;

    private direction?: ResizeDirection;

    getCursorClass = () => {
        switch (this.direction) {
            case ResizeDirection.Both:
                return 'resize-able__body--rb';
            case ResizeDirection.Horizontal:
                return 'resize-able__body--b';
            case ResizeDirection.Vertical:
            default:
                return 'resize-able__body--r';
        }
    }

    // Handle the mousedown event
    // that's triggered when user drags the resizer
    handleMouseDown = (e: MouseEvent, direction: ResizeDirection) => {
        this.direction = direction;

        // Get the current mouse position
        this.x = e.clientX;
        this.y = e.clientY;

        // Calculate the dimension of element
        const styles = window.getComputedStyle(this.container);
        this.w = parseInt(styles.width, 10);
        this.h = parseInt(styles.height, 10);

        // Attach the listeners to `document`
        document.addEventListener('mousemove', this.handleMouseMove);
        document.addEventListener('mouseup', this.handleMouseUp);

        this.overlayEle.classList.add('resize-able__overlay');

        (e.target as HTMLElement).classList.add('resize-able__resizer--resizing');
    }

    handleMouseMove = (e: MouseEvent) => {
        // How far the mouse has been moved
        const dx = this.direction === ResizeDirection.Horizontal ? 0 : e.clientX - this.x;
        const dy = this.direction === ResizeDirection.Vertical ? 0 : e.clientY - this.y;

        this.container.style.userSelect = 'none';

        this.newHeight = this.h + dy;
        this.newWidth = this.w + dx;

        this.container.classList.add('resize-able--resizing');
        document.body.classList.add(this.getCursorClass());

        // Emit the event with new dimension of element
        this.resizeEvent!.emit({
            height: this.newHeight,
            width: this.newWidth,
        });
    }

    handleMouseUp = () => {
        this.container.style.removeProperty('user-select');
        this.overlayEle.classList.remove('resize-able__overlay');
        this.overlayEle.innerHTML = '';

        this.container.classList.remove('resize-able--resizing');
        this.container.querySelector('.resize-able__resizer--resizing')?.classList.remove('resize-able__resizer--resizing');
        document.body.classList.remove(this.getCursorClass());

        this.didResizeEvent!.emit({
            height: this.newHeight,
            width: this.newWidth,
        });

        this.newWidth = 0;
        this.newHeight = 0;

        // Remove the handlers of `mousemove` and `mouseup`
        document.removeEventListener('mousemove', this.handleMouseMove);
        document.removeEventListener('mouseup', this.handleMouseUp);
    }

    render() {
        return (
            <div class="resize-able" ref={ele => this.container = ele as HTMLElement}>
                <div class="resize-able__r">
                    <div class="resize-able__resizer--r" onMouseDown={(e) => this.handleMouseDown(e, ResizeDirection.Vertical)}></div>
                    <div class="resize-able__width">{this.newWidth > 0 ? this.newWidth : ''}</div>
                </div>
                <div class="resize-able__b">
                    <div class="resize-able__resizer--b" onMouseDown={(e) => this.handleMouseDown(e, ResizeDirection.Horizontal)}></div>
                    <div class="resize-able__height">{this.newHeight > 0 ? this.newHeight : ''}</div>
                </div>
                <div class="resize-able__resizer--rb" onMouseDown={(e) => this.handleMouseDown(e, ResizeDirection.Both)}></div>
                <slot></slot>
                <div ref={ele => this.overlayEle = ele as HTMLElement}></div>
            </div>
        );
    }
}
