/**
 * A collection of patterns to create a responsive web page
 * https://responsive.page
 * (c) 2021 Nguyen Huu Phuoc (https://twitter.com/nghuuphuoc)
 */

import { Component, Prop, State, h } from '@stencil/core';

import slugify from '../../utils/slugify';
import unslugify from '../../utils/unslugify';
import { ResizeEvent } from '../resize-able/resize-able';
import Orientation from '../Orientation';
import { PATTERNS } from '../Patterns';
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
    @State() orientation: Orientation = Orientation.Portrait;

    private resizeAbleEle!: HTMLResizeAbleElement;
    private frameDemoEle!: HTMLElement;
    private viewerBodyEle!: HTMLElement;
    private browserFrameEle!: HTMLElement;

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

        this.viewerBodyEle.style.width = `${width}px`;
        this.viewerBodyEle.style.height = `${height}px`;

        this.resizeAbleEle.style.width = `${width}px`;
        this.resizeAbleEle.style.height = `${height}px`;

        this.orientation == Orientation.Landscape
            ? (this.browserFrameEle.style.width = `${height}px`)
            : this.browserFrameEle.style.removeProperty('width');

        this.frameDemoEle.style.removeProperty('height');
        this.frameDemoEle.style.removeProperty('width');
        this.frameDemoEle.style.removeProperty('transform');
    }

    handleDidResize = (e: CustomEvent<ResizeEvent>) => {
        const { height, width } = e.detail;
        this.switchTo(width, height);
    }

    handleRotate = () => {
        this.orientation = this.orientation === Orientation.Portrait ? Orientation.Landscape : Orientation.Portrait;
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
        const newHeight = height * scale;
        const newWidth = width * scale;

        this.viewerBodyEle.style.height = `${newHeight}px`;
        this.viewerBodyEle.style.width = `${newWidth}px`;

        this.resizeAbleEle.style.height = `${newHeight}px`;
        this.resizeAbleEle.style.width = `${newWidth}px`;

        // Update the size of the browser frame
        this.orientation == Orientation.Landscape
            ? (this.browserFrameEle.style.width = `${newHeight}px`)
            : this.browserFrameEle.style.removeProperty('width');

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

        const currentIndex = PATTERNS.findIndex(p => slugify(p.name) === this.pattern);
        const previousPattern = currentIndex === 0 ? '' : `/${slugify(PATTERNS[currentIndex - 1].name)}`;
        const nextPattern = currentIndex >= PATTERNS.length - 1 ? '' : `/${slugify(PATTERNS[currentIndex + 1].name)}`;

        return (
            <div class={`demo-viewer ${this.isScreenListOpen ? 'demo-viewer--withsidebar' : ''}`}>
                <div class="demo-viewer__toolbar">
                    <tool-tip tip="Mobile screen (375x667)" position="bottom">
                        <button class="demo-viewer__button" onClick={() => this.switchTo(375, 667)}>
                            <icon-mobile />
                        </button>
                    </tool-tip>

                    <tool-tip tip="Tablet screen (1024x768)" position="bottom">
                        <button class="demo-viewer__button" onClick={() => this.switchTo(1024, 768)}>
                            <icon-tablet />
                        </button>
                    </tool-tip>

                    <tool-tip tip="Laptop screen (1366x768)" position="bottom">
                        <button class="demo-viewer__button" onClick={() => this.switchTo(1366, 768)}>
                            <icon-laptop />
                        </button>
                    </tool-tip>

                    <tool-tip tip="Desktop screen (1920x1080)" position="bottom">
                        <button class="demo-viewer__button" onClick={() => this.switchTo(1920, 1080)}>
                            <icon-desktop />
                        </button>
                    </tool-tip>

                    <div class="demo-viewer__divider" />

                    <tool-tip tip="Other screen sizes" position="bottom">
                        <button class="demo-viewer__button" onClick={this.toggleScreenList}>
                            <icon-screens />
                        </button>
                    </tool-tip>
                </div>

                <div
                    class="demo-viewer__main"
                    ref={ele => this.frameContainer = ele as HTMLElement}
                >
                    <resize-able
                        ref={ele => this.resizeAbleEle = ele as HTMLResizeAbleElement}
                        onResizeEvent={this.handleResize}
                        onDidResizeEvent={this.handleDidResize}
                    >
                        <div
                            class="demo-viewer__body"
                            ref={ele => this.viewerBodyEle = ele as HTMLElement}
                        >
                            <div
                                class={`demo-viewer__browser ${this.orientation === Orientation.Portrait ? 'demo-viewer__browser--portrait' : 'demo-viewer__browser--landscape'}`}
                                ref={ele => this.browserFrameEle = ele as HTMLElement}
                            >
                                <browser-frame
                                    browserTitle={title}
                                    backUrl={previousPattern}
                                    forwardUrl={nextPattern}
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
