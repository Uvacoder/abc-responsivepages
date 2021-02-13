import { Component, Event, EventEmitter, h } from '@stencil/core';

export interface ResizeEvent {
    height: number;
    width: number;
}
enum ResizeDirection {
    Horizontal = 'Horizontal',
    Vertical = 'Vertical',
}

@Component({
    tag: 'resize-able',
    styleUrl: 'resize-able.css'
})
export class ResizeAble {
    @Event() resizeEvent?: EventEmitter<ResizeEvent>;
    @Event() didResizeEvent?: EventEmitter<ResizeEvent>;

    private container!: HTMLElement;
    private overlayEle!: HTMLElement;

    // The current position of mouse
    private x: number = 0;
    private y: number = 0;

    // The dimension of the element
    private w: number = 0;
    private h: number = 0;

    private newWidth: number = 0;
    private newHeight: number = 0;

    private direction?: ResizeDirection;

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

        // Emit the event with new dimension of element
        this.resizeEvent!.emit({
            height: this.newHeight,
            width: this.newWidth,
        });
    }

    handleMouseUp = () => {
        this.container.style.removeProperty('user-select');
        this.overlayEle.classList.remove('resize-able__overlay');

        this.container.classList.remove('resize-able--resizing');
        this.container.querySelector('.resize-able__resizer--resizing')?.classList.remove('resize-able__resizer--resizing');

        this.didResizeEvent!.emit({
            height: this.newHeight,
            width: this.newWidth,
        });

        // Remove the handlers of `mousemove` and `mouseup`
        document.removeEventListener('mousemove', this.handleMouseMove);
        document.removeEventListener('mouseup', this.handleMouseUp);
    }

    render() {
        return (
            <div class="resize-able" ref={ele => this.container = ele as HTMLElement}>
                <div class="resize-able__resizer resize-able__resizer--r" onMouseDown={(e) => this.handleMouseDown(e, ResizeDirection.Vertical)}></div>
                <div class="resize-able__resizer resize-able__resizer--b" onMouseDown={(e) => this.handleMouseDown(e, ResizeDirection.Horizontal)}></div>
                <slot></slot>
                <div ref={ele => this.overlayEle = ele as HTMLElement}></div>
            </div>
        );
    }
}
