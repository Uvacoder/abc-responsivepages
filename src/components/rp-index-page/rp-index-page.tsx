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
                </div>
            </rp-layout>
        );
    }
}
