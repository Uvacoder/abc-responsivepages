/**
 * A collection of patterns to create a responsive web page
 * https://responsive.page
 * (c) 2021 Nguyen Huu Phuoc (https://twitter.com/nghuuphuoc)
 */

import { Build, Component, Prop, State, h } from '@stencil/core';

import BrowserTab from '../BrowserTab';
import { ResizeEvent } from '../rp-resizable/rp-resizable';
import slugify from '../../utils/slugify';
import unslugify from '../../utils/unslugify';
import ResizeObserver from './ResizeObserver';
import Orientation from '../Orientation';
import { PATTERNS } from '../Patterns';
import { ScreenSize } from '../ScreenSize';

const PATTERN_URL_PREFIX = 'https://github.com/phuoc-ng/responsive-page/blob/main';

@Component({
    tag: 'rp-demo-viewer',
    styleUrl: 'rp-demo-viewer.css'
})
export class RpDemoViewer {
    @Prop() pattern?: string;
    @State() isScreenListOpen: boolean = false;
    @State() orientation: Orientation = Orientation.Portrait;
    @State() scale: number = 1;
    @State() demoHeight: number = 0;
    @State() demoWidth: number = 0;    
    @State() currentTab: BrowserTab = BrowserTab.Demo;

    private resizableEle!: HTMLRpResizableElement;
    private frameDemoEle!: HTMLElement;
    private viewerBodyEle!: HTMLElement;
    private browserFrameEle!: HTMLElement;

    private frameContainer!: HTMLElement;
    private frameContainerWidth: number = 0;
    private frameContainerHeight: number = 0;
    private resizeObserver?: ResizeObserver;
    private setInitialSize: boolean = false;

    handleChangeScreenSize = (e: CustomEvent<ScreenSize>) => {
        const { height, width } = e.detail;
        this.switchTo(width, height);
    }

    handleResize = (e: CustomEvent<ResizeEvent>) => {
        const { height, width } = e.detail;

        this.scale = 1;
        this.demoHeight = height;
        this.demoWidth = width;

        this.viewerBodyEle.style.width = `${width}px`;
        this.viewerBodyEle.style.height = `${height}px`;

        this.resizableEle.style.width = `${width}px`;
        this.resizableEle.style.height = `${height}px`;

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

    handleActivateTab = (e: CustomEvent<number>) => {
        this.currentTab = e.detail;
    }

    componentDidLoad() {
        if (!Build.isBrowser) {
            // Because `ResizeObserver` isn't available in prerendering mode
            return;
        }

        // Automatically update the size of container
        this.resizeObserver = new ResizeObserver(entries => {
            entries.forEach(entry => {
                const { height, width } = entry.contentRect;
                this.frameContainerHeight = height;
                this.frameContainerWidth = width;

                if (!this.setInitialSize) {
                    this.setInitialSize = true;
                    this.switchTo(width, height);
                }
            });
        });
        this.resizeObserver.observe(this.frameContainer);
    }

    disconnectedCallback() {
        this.resizeObserver?.disconnect();
    }

    switchTo(width: number, height: number) {
        const scale = this.calculateScale(width, height);

        this.scale = scale;
        this.demoHeight = height;
        this.demoWidth = width;

        // Set the size for resizable element
        const newHeight = height * scale;
        const newWidth = width * scale;

        this.viewerBodyEle.style.height = `${newHeight}px`;
        this.viewerBodyEle.style.width = `${newWidth}px`;

        this.resizableEle.style.height = `${newHeight}px`;
        this.resizableEle.style.width = `${newWidth}px`;

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

    isSelectedSize = (height: number, width: number) => (this.demoHeight === height && this.demoWidth === width) || (this.demoHeight === width && this.demoWidth === height)

    render() {
        const url = `/patterns/${this.pattern!}.html`;
        const title = unslugify(this.pattern!);

        const currentIndex = PATTERNS.findIndex(p => slugify(p.name) === this.pattern);
        const previousPattern = currentIndex === 0 ? '' : `/${slugify(PATTERNS[currentIndex - 1].name)}`;
        const nextPattern = currentIndex >= PATTERNS.length - 1 ? '' : `/${slugify(PATTERNS[currentIndex + 1].name)}`;

        return (
            <div class={`rp-demo-viewer ${this.isScreenListOpen ? 'rp-demo-viewer--withsidebar' : ''}`}>
                <div class="rp-demo-viewer__toolbar">
                    <rp-tooltip tip="Mobile screen (375x667)" position="bottom">
                        <button
                            class={`rp-demo-viewer__button ${this.isSelectedSize(375, 667) ? 'rp-demo-viewer__button--selected' : ''}`}
                            onClick={() => this.switchTo(375, 667)}
                        >
                            <rp-icon-mobile />
                        </button>
                    </rp-tooltip>

                    <rp-tooltip tip="Tablet screen (1024x768)" position="bottom">
                        <button
                            class={`rp-demo-viewer__button ${this.isSelectedSize(1024, 768) ? 'rp-demo-viewer__button--selected' : ''}`}
                            onClick={() => this.switchTo(1024, 768)}
                        >
                            <rp-icon-tablet />
                        </button>
                    </rp-tooltip>

                    <rp-tooltip tip="Laptop screen (1366x768)" position="bottom">
                        <button
                            class={`rp-demo-viewer__button ${this.isSelectedSize(1366, 768) ? 'rp-demo-viewer__button--selected' : ''}`}
                            onClick={() => this.switchTo(1366, 768)}
                        >
                            <rp-icon-laptop />
                        </button>
                    </rp-tooltip>

                    <rp-tooltip tip="Desktop screen (1920x1080)" position="bottom">
                        <button
                            class={`rp-demo-viewer__button ${this.isSelectedSize(1920, 1080) ? 'rp-demo-viewer__button--selected' : ''}`}
                            onClick={() => this.switchTo(1920, 1080)}
                        >
                            <rp-icon-desktop />
                        </button>
                    </rp-tooltip>

                    <div class="rp-demo-viewer__divider" />

                    <rp-tooltip tip="Other screen sizes" position="bottom">
                        <button class="rp-demo-viewer__button" onClick={this.toggleScreenList}>
                            <rp-icon-screens />
                        </button>
                    </rp-tooltip>
                </div>

                <div
                    class="rp-demo-viewer__main"
                    ref={ele => this.frameContainer = ele as HTMLElement}
                >
                    <rp-resizable
                        ref={ele => this.resizableEle = ele as HTMLRpResizableElement}
                        onResizeEvent={this.handleResize}
                        onDidResizeEvent={this.handleDidResize}
                    >
                        <div
                            class="rp-demo-viewer__body"
                            ref={ele => this.viewerBodyEle = ele as HTMLElement}
                        >
                            <div
                                class={`rp-demo-viewer__browser ${this.orientation === Orientation.Portrait ? 'rp-demo-viewer__browser--portrait' : 'rp-demo-viewer__browser--landscape'}`}
                                ref={ele => this.browserFrameEle = ele as HTMLElement}
                            >
                                <rp-browser-frame
                                    browserTitle={title}
                                    backUrl={previousPattern}
                                    currentTab={this.currentTab}
                                    forwardUrl={nextPattern}
                                    url={this.currentTab === BrowserTab.Demo ? '' : `${PATTERN_URL_PREFIX}${url}`}
                                    onRotateEvent={this.handleRotate}
                                    onActivateTabEvent={this.handleActivateTab}
                                />
                            </div>
                            {
                                this.currentTab === BrowserTab.Demo && [
                                    this.scale !== 1 && <div class="demo_viewer__zoom">Zoom: {Math.floor(this.scale * 100)}%</div>,
                                    <iframe
                                        class="rp-demo-viewer__frame"
                                        ref={ele => this.frameDemoEle = ele as HTMLElement}
                                        src={url}
                                    />
                                ]
                            }
                            {
                                this.currentTab === BrowserTab.Source && (
                                    <div class="rp-demo-viewer__code">
                                        <rp-pattern-source pattern={this.pattern} />
                                    </div>
                                )
                            }
                        </div>
                    </rp-resizable>
                </div>

                {this.isScreenListOpen && (
                    <div class="rp-demo-viewer__screens">
                        <rp-screens onChooseScreenSizeEvent={this.handleChangeScreenSize} />
                    </div>
                )}
            </div>
        );
    }
}
