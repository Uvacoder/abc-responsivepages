import { Component, Prop, State, Watch, h } from '@stencil/core';

import unslugify from '../../utils/unslugify';
import { ResizeEvent } from '../resize-able/resize-able';
import { ScreenSize } from '../ScreenSize';

@Component({
    tag: 'demo-viewer',
    styleUrl: 'demo-viewer.css'
})
export class DemoViewer {
    @Prop() pattern?: string;
    @Prop() screenSize?: ScreenSize;

    @State() frameWidth?: number;
    @State() frameHeight?: number;
    @State() scale: number = 1;

    private browerFrameEle!: HTMLBrowserFrameElement;
    private frameDemoEle!: HTMLElement;

    private frameContainer!: HTMLElement;
    private frameContainerWidth: number = 0;
    private frameContainerHeight: number = 0;

    @Watch('screenSize')
    watchScreenSize(newValue: ScreenSize, _: ScreenSize) {
        this.switchTo(newValue.width, newValue.height);
    }

    handleResize = (e: CustomEvent<ResizeEvent>) => {
        const { height, width } = e.detail;

        this.browerFrameEle.style.height = `${height}px`;
        this.browerFrameEle.style.width = `${width}px`;

        const scale = this.calculateScale(width, height);

        this.frameDemoEle.style.height = `${height}px`;
        this.frameDemoEle.style.width = `${width}px`;
        this.frameDemoEle.style.transform = scale === 1
                ? 'scale(1)'
                : `translate(${width * (scale - 1) / 2}px, ${height * (scale - 1) / 2}px) scale(${scale})`;
    }

    handleDidResize = (e: CustomEvent<ResizeEvent>) => {
        const { height, width } = e.detail;
        this.switchTo(width, height);
    }

    componentDidLoad() {
        const rect = this.frameContainer.getBoundingClientRect();
        this.frameContainerWidth = rect.width;
        this.frameContainerHeight = rect.height;
        
        // Set the size for container
        this.frameContainer.style.width = `${this.frameContainerWidth}px`;
        this.frameContainer.style.height = `${this.frameContainerHeight}px`;
    }

    switchTo(width: number, height: number) {
        this.scale = this.calculateScale(width, height);

        // Set the frame size
        this.frameWidth = width;
        this.frameHeight = height;
    }

    // Calculate the scale to make sure the frame fit best in the container
    calculateScale = (w: number, h: number) => {
        const minScale = Math.min(this.frameContainerWidth / w, this.frameContainerHeight / h);
        return Math.min(minScale, 1);
    };

    render() {
        const url = `/patterns/${this.pattern!}.html`;
        const title = unslugify(this.pattern!);

        return (
            <div class="demo-viewer">
                <div class="demo-viewer__toolbar">
                    {/* iPhone 6-7-8 */}
                    <tool-tip tip="iPhone screen" position="bottom">
                        <button class="demo-viewer__switch" onClick={() => this.switchTo(375, 667)}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                                <path d="M12,21.25h0a.25.25,0,0,1,.25.25h0a.25.25,0,0,1-.25.25h0a.25.25,0,0,1-.25-.25h0a.25.25,0,0,1,.25-.25" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round"></path>
                                <path d="M5.500 0.500 L18.500 0.500 L18.500 23.500 L5.500 23.500 Z" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round"></path>
                                <path d="M18.5 19.5L5.5 19.5" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round"></path>
                                <path d="M18.5 4.5L5.5 4.5" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round"></path>
                                <path d="M10.5 2.5L13.5 2.5" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round"></path>
                            </svg>
                        </button>
                    </tool-tip>

                    {/* Apple iPad Mini, Apple iPad 1/2/3/4 */}
                    <tool-tip tip="iPad screen" position="bottom">
                        <button class="demo-viewer__switch" onClick={() => this.switchTo(1024, 768)}>
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

                    {/* Apple Macbook 13" */}
                    <tool-tip tip="Macbook 13 screen" position="bottom">
                        <button class="demo-viewer__switch" onClick={() => this.switchTo(1366, 768)}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                                <path d="M8.5,16.5c0,1.1,1.567,2,3.5,2s3.5-.9,3.5-2h5V5.167A1.667,1.667,0,0,0,18.833,3.5H5.167A1.667,1.667,0,0,0,3.5,5.167V16.5Z" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round"></path>
                                <path d="M15.5,16.5c0,1.1-1.567,2-3.5,2s-3.5-.9-3.5-2H.5a5.281,5.281,0,0,0,5.123,4H18.377a5.281,5.281,0,0,0,5.123-4Z" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round"></path>
                            </svg>
                        </button>
                    </tool-tip>

                    {/* Desktop monitors in 24" to 27" */}
                    <tool-tip tip="Desktop screen" position="bottom">
                        <button class="demo-viewer__switch" onClick={() => this.switchTo(1920, 1080)}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                                <path d="M9,22.5a6.979,6.979,0,0,0,1.5-4" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round"></path>
                                <path d="M15,22.5a6.979,6.979,0,0,1-1.5-4" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round"></path>
                                <path d="M7.499 22.5L16.499 22.5" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round"></path>
                                <path d="M0.5 15.5L23.5 15.5" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round"></path>
                                <path d="M0.500 1.500 L23.500 1.500 L23.500 18.500 L0.500 18.500 Z" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round"></path>
                            </svg>
                        </button>
                    </tool-tip>
                </div>
                <div class="demo-viewer__body" ref={ele => this.frameContainer = ele as HTMLElement}>
                    <browser-frame
                        ref={ele => this.browerFrameEle = ele as HTMLBrowserFrameElement}
                        style={{
                            height: this.frameHeight ? `${this.frameHeight * this.scale}px` : '100%',
                            width: this.frameWidth ? `${this.frameWidth * this.scale}px` : '100%',
                        }}
                        browserTitle={title}
                    >
                        <resize-able
                            onResizeEvent={this.handleResize}
                            onDidResizeEvent={this.handleDidResize}
                        >
                            <iframe
                                class="demo-viewer__frame"
                                ref={ele => this.frameDemoEle = ele as HTMLElement}
                                style={{
                                    width: `${this.frameWidth}px`,
                                    height: `${this.frameHeight}px`,
                                    transform: this.scale === 1 ? 'scale(1)' : `translate(${this.frameWidth! * (this.scale - 1) / 2}px, ${this.frameHeight! * (this.scale - 1) / 2}px) scale(${this.scale})`,
                                }}
                                src={url}
                            />
                        </resize-able>
                    </browser-frame>
                </div>
            </div>
        );
    }
}
