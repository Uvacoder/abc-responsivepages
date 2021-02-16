/**
 * A collection of patterns to create a responsive web page
 * https://responsive.page
 * (c) 2021 Nguyen Huu Phuoc (https://twitter.com/nghuuphuoc)
 */

import { Component, h } from '@stencil/core';
import { PATTERNS } from '../Patterns';
import randomFromArray from '../../utils/randomFromArray';
import slugify from '../../utils/slugify';

@Component({
    tag: 'rp-index-page',
    styleUrl: 'rp-index-page.css'
})
export class RpIndexPage {
    render() {
        const pattern = slugify(randomFromArray(PATTERNS).name);
        return (
            <rp-layout>
                <rp-demo-viewer pattern={pattern!} />
                <div class="rp-layout__overlay">
                    <div class="rp-index-page__hero">
                        <h1 class="rp-index-page__heading">
                            Responsive Design Patterns
                        </h1>
                        <div class="rp-index-page__desc">
                            A collection of patterns to create a responsive web page
                        </div>

                        <div class="rp-index-page__cta">
                            <a href="https://github.com/phuoc-ng/responsive-page" target="_blank">GitHub</a>
                        </div>
                    </div>

                    <div class="rp-index-page__navigate">
                        <rp-tooltip tip="Navigate between patterns" position="bottom">
                            <rp-pulse />
                        </rp-tooltip>
                    </div>
                    <div class="rp-index-page__rotate">
                        <rp-tooltip tip="Rotate screen" position="bottom">
                            <rp-pulse />
                        </rp-tooltip>
                    </div>
                    <div class="rp-index-page__source">
                        <rp-tooltip tip="View pattern implementation" position="bottom">
                            <rp-pulse />
                        </rp-tooltip>
                    </div>
                    <div class="rp-index-page__screen">
                        <rp-tooltip tip="Switch screen" position="bottom">
                            <rp-pulse />
                        </rp-tooltip>
                    </div>
                    <div class="rp-index-page__screens">
                        <rp-tooltip tip="Choose from screens" position="bottom">
                            <rp-pulse />
                        </rp-tooltip>
                    </div>
                    <div class="rp-index-page__resize--r">
                        <rp-tooltip tip="Resize the screen" position="bottom">
                            <rp-pulse />
                        </rp-tooltip>
                    </div>
                    <div class="rp-index-page__resize--b">
                        <rp-tooltip tip="Resize the screen" position="bottom">
                            <rp-pulse />
                        </rp-tooltip>
                    </div>
                    <div class="rp-index-page__resize--rb">
                        <rp-tooltip tip="Resize the screen" position="bottom">
                            <rp-pulse />
                        </rp-tooltip>
                    </div>
                </div>
            </rp-layout>
        );
    }
}
