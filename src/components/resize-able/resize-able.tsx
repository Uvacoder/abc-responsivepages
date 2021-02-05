import { Component, Event, EventEmitter, h } from '@stencil/core';

export interface ResizeEvent {
    height: number;
    width: number;
}

@Component({
    tag: 'resize-able',
    styleUrl: 'resize-able.css'
})
export class ResizeAble {
    @Event() resizeEvent?: EventEmitter<ResizeEvent>;

    private container!: HTMLElement;
    private overlayEle!: HTMLElement;

    // The current position of mouse
    private x: number = 0;
    private y: number = 0;

    // The dimension of the element
    private w: number = 0;
    private h: number = 0;

    // Handle the mousedown event
    // that's triggered when user drags the resizer
    handleMouseDown = (e: MouseEvent) => {
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
    }

    handleMouseMove = (e: MouseEvent) => {
        // How far the mouse has been moved
        const dx = e.clientX - this.x;
        const dy = e.clientY - this.y;

        this.container.style.userSelect = 'none';

        const newHeight = this.h + dy;
        const newWidth = this.w + dx;

        // Emit the event with new dimension of element
        this.resizeEvent!.emit({
            height: newHeight,
            width: newWidth,
        });
    }

    handleMouseUp = () => {
        this.container.style.removeProperty('user-select');
        this.overlayEle.classList.remove('resize-able__overlay');

        // Remove the handlers of `mousemove` and `mouseup`
        document.removeEventListener('mousemove', this.handleMouseMove);
        document.removeEventListener('mouseup', this.handleMouseUp);
    }

    render() {
        return (
            <div class="resize-able" ref={ele => this.container = ele as HTMLElement}>
                <div class="resize-able__resizer resize-able__resizer--r" onMouseDown={this.handleMouseDown}></div>
                <div class="resize-able__resizer resize-able__resizer--b" onMouseDown={this.handleMouseDown}></div>
                <slot></slot>
                <div ref={ele => this.overlayEle = ele as HTMLElement}></div>
            </div>
        );
    }
}
