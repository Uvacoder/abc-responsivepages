/**
 * A collection of patterns to create a responsive web page
 * https://responsive.page
 * (c) 2021 Nguyen Huu Phuoc (https://twitter.com/nghuuphuoc)
 */

import { Component, Prop, State, h } from '@stencil/core';

import unslugify from '../../utils/unslugify';
import { ResizeEvent } from '../resize-able/resize-able';
import { ScreenSize } from '../ScreenSize';

interface DOMRectReadOnly {
    readonly x: number;
    readonly y: number;
    readonly width: number;
    readonly height: number;
    readonly top: number;
    readonly right: number;
    readonly bottom: number;
    readonly left: number;
}

declare global {    
    interface ResizeObserverCallback {
        (entries: ResizeObserverEntry[], observer: ResizeObserver): void
    }

    interface ResizeObserverEntry {
        readonly target: Element;
        readonly contentRect: DOMRectReadOnly;
    }

    interface ResizeObserver {
        observe(target: Element): void;
        unobserve(target: Element): void;
        disconnect(): void;
    }
}

declare var ResizeObserver: {
    prototype: ResizeObserver;
    new(callback: ResizeObserverCallback): ResizeObserver;
}

@Component({
    tag: 'demo-viewer',
    styleUrl: 'demo-viewer.css'
})
export class DemoViewer {
    @Prop() pattern?: string;

    @State() isScreenListOpen: boolean = false;

    private resizeAbleEle!: HTMLResizeAbleElement;
    private frameDemoEle!: HTMLElement;

    private frameContainer!: HTMLElement;
    private frameContainerWidth: number = 0;
    private frameContainerHeight: number = 0;
    private resizeObserver!: ResizeObserver;

    private demoHeight: number = 0;
    private demoWidth: number = 0;

    handleChangeScreenSize = (e: CustomEvent<ScreenSize>) => {
        const { height, width } = e.detail;
        this.switchTo(width, height);
    }

    handleResize = (e: CustomEvent<ResizeEvent>) => {
        const { height, width } = e.detail;

        this.resizeAbleEle.style.width = `${width}px`;
        this.resizeAbleEle.style.height = `${height}px`;

        this.frameDemoEle.style.removeProperty('height');
        this.frameDemoEle.style.removeProperty('width');
    }

    handleDidResize = (e: CustomEvent<ResizeEvent>) => {
        const { height, width } = e.detail;
        this.switchTo(width, height);
    }

    handleRotate = () => {
        this.switchTo(this.demoHeight, this.demoWidth);
    }

    componentDidLoad() {
        const padding = parseInt(window.getComputedStyle(this.frameContainer).padding);
        const { height, width } = this.frameContainer.getBoundingClientRect();
        const containerHeight = height - padding * 2;
        const containerWidth = width - padding * 2;

        this.frameContainerHeight = containerHeight;
        this.frameContainerWidth = containerWidth;

        this.switchTo(containerWidth, containerHeight);

        // Automatically update the size of container
        this.resizeObserver = new ResizeObserver(entries => {
            entries.forEach(entry => {
                const { height, width } = entry.contentRect;
                this.frameContainerHeight = height;
                this.frameContainerWidth = width;
            });
        });
        this.resizeObserver.observe(this.frameContainer);
    }

    disconnectedCallback() {
        this.resizeObserver.disconnect();
    }

    switchTo(width: number, height: number) {
        const scale = this.calculateScale(width, height);

        this.demoHeight = height;
        this.demoWidth = width;

        // Set the size for resizable element
        this.resizeAbleEle.style.width = `${width * scale}px`;
        this.resizeAbleEle.style.height = `${height * scale}px`;

        // Set the frame size
        this.frameDemoEle.style.width = `${width}px`;
        this.frameDemoEle.style.height = `${height}px`;
        this.frameDemoEle.style.transform = scale === 1
                ? 'scale(1)'
                : `translate(${width * (scale - 1) / 2}px, ${height * (scale - 1) / 2}px) scale(${scale})`;
    }

    // Calculate the scale to make sure the frame fit best in the container
    calculateScale = (w: number, h: number) => {
        const minScale = Math.min(this.frameContainerWidth / w, this.frameContainerHeight / h);
        return Math.min(minScale, 1);
    };

    toggleScreenList = () => {
        this.frameContainer.style.removeProperty('height');
        this.frameContainer.style.removeProperty('width');

        this.isScreenListOpen = !this.isScreenListOpen;
    }

    render() {
        const url = `/patterns/${this.pattern!}.html`;
        const title = unslugify(this.pattern!);

        return (
            <div class={`demo-viewer ${this.isScreenListOpen ? 'demo-viewer--withsidebar' : ''}`}>
                <div class="demo-viewer__toolbar">
                    <tool-tip tip="Mobile screen (375x667)" position="bottom">
                        <button class="demo-viewer__button" onClick={() => this.switchTo(375, 667)}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                                <path d="M12,21.25h0a.25.25,0,0,1,.25.25h0a.25.25,0,0,1-.25.25h0a.25.25,0,0,1-.25-.25h0a.25.25,0,0,1,.25-.25" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round"></path>
                                <path d="M5.500 0.500 L18.500 0.500 L18.500 23.500 L5.500 23.500 Z" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round"></path>
                                <path d="M18.5 19.5L5.5 19.5" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round"></path>
                                <path d="M18.5 4.5L5.5 4.5" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round"></path>
                                <path d="M10.5 2.5L13.5 2.5" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round"></path>
                            </svg>
                        </button>
                    </tool-tip>

                    <tool-tip tip="Tablet screen (1024x768)" position="bottom">
                        <button class="demo-viewer__button" onClick={() => this.switchTo(1024, 768)}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                                <path d="M3.500 0.500 L20.500 0.500 L20.500 23.500 L3.500 23.500 Z" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round"></path>
                                <path d="M20.498 19.5L3.502 19.5" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round"></path>
                                <path d="M20.498 4.5L3.502 4.5" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round"></path>
                                <path d="M12,21a.25.25,0,0,1,.25.25h0a.25.25,0,0,1-.25.25h0a.25.25,0,0,1-.25-.25h0A.25.25,0,0,1,12,21" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round"></path>
                                <path d="M12 21L12 21" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round"></path>
                                <path d="M12,2.5a.25.25,0,0,1,.25.25h0A.25.25,0,0,1,12,3h0a.25.25,0,0,1-.25-.25h0A.25.25,0,0,1,12,2.5" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round"></path>
                                <path d="M12 2.5L12 2.5" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round"></path>
                            </svg>
                        </button>
                    </tool-tip>

                    <tool-tip tip="Laptop screen (1366x768)" position="bottom">
                        <button class="demo-viewer__button" onClick={() => this.switchTo(1366, 768)}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                                <path d="M8.5,16.5c0,1.1,1.567,2,3.5,2s3.5-.9,3.5-2h5V5.167A1.667,1.667,0,0,0,18.833,3.5H5.167A1.667,1.667,0,0,0,3.5,5.167V16.5Z" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round"></path>
                                <path d="M15.5,16.5c0,1.1-1.567,2-3.5,2s-3.5-.9-3.5-2H.5a5.281,5.281,0,0,0,5.123,4H18.377a5.281,5.281,0,0,0,5.123-4Z" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round"></path>
                            </svg>
                        </button>
                    </tool-tip>

                    <tool-tip tip="Desktop screen (1920x1080)" position="bottom">
                        <button class="demo-viewer__button" onClick={() => this.switchTo(1920, 1080)}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                                <path d="M9,22.5a6.979,6.979,0,0,0,1.5-4" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round"></path>
                                <path d="M15,22.5a6.979,6.979,0,0,1-1.5-4" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round"></path>
                                <path d="M7.499 22.5L16.499 22.5" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round"></path>
                                <path d="M0.5 15.5L23.5 15.5" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round"></path>
                                <path d="M0.500 1.500 L23.500 1.500 L23.500 18.500 L0.500 18.500 Z" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round"></path>
                            </svg>
                        </button>
                    </tool-tip>

                    <div class="demo-viewer__divider" />

                    <tool-tip tip="Other screen sizes" position="bottom">
                        <button class="demo-viewer__button" onClick={this.toggleScreenList}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                                <path d="M5.579,4A1.469,1.469,0,0,1,7,3H22a1.546,1.546,0,0,1,1.5,1.588V16.412A1.546,1.546,0,0,1,22,18H8.5" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round"></path>
                                <path d="M10 20L19 20" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round"></path>
                                <path d="M14.5 18L14.5 20" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round"></path>
                                <path d="M13.5 14L23.5 14" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round"></path>
                                <path d="M3.5,9V7a1,1,0,0,1,1-1h6a1,1,0,0,1,1,1v8a1,1,0,0,1-1,1h-2" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round"></path>
                                <path d="M8.5 14L11.5 14" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round"></path>
                                <path d="M0.500 11.000 L6.500 11.000 L6.500 20.000 L0.500 20.000 Z" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round"></path>
                                <path d="M0.5 18L6.5 18" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round"></path>
                                <path d="M0.5 13L6.5 13" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round"></path>
                                <path d="M3.499 8.001L11.499 8.001" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round"></path>
                            </svg>
                        </button>
                    </tool-tip>
                </div>

                <div class="demo-viewer__main" ref={ele => this.frameContainer = ele as HTMLElement}>
                    <resize-able
                        ref={ele => this.resizeAbleEle = ele as HTMLResizeAbleElement}
                        onResizeEvent={this.handleResize}
                        onDidResizeEvent={this.handleDidResize}
                    >
                        <div class="demo-viewer__body">
                            <div class="demo-viewer__browser">
                                <browser-frame
                                    browserTitle={title}
                                    onRotateEvent={this.handleRotate}
                                />
                            </div>
                            <iframe
                                class="demo-viewer__frame"
                                ref={ele => this.frameDemoEle = ele as HTMLElement}
                                src={url}
                            />
                        </div>
                    </resize-able>
                </div>

                {this.isScreenListOpen && (
                    <div class="demo-viewer__screens">
                        <screen-list onChooseScreenSizeEvent={this.handleChangeScreenSize} />
                    </div>
                )}
            </div>
        );
    }
}
