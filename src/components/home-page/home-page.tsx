/**
 * A collection of patterns to create a responsive web page
 * https://responsive.page
 * (c) 2021 Nguyen Huu Phuoc (https://twitter.com/nghuuphuoc)
 */

import { Component, h } from '@stencil/core';
import { href } from 'stencil-router-v2';
import { PATTERNS } from '../Patterns';
import slugify from '../../utils/slugify';

@Component({
    tag: 'home-page',
    styleUrl: 'home-page.css'
})
export class HomePage {
    render() {
        return (
            <div class="home-page">
                <div class="home-page__hero">
                    <h1>Responsive design patterns</h1>
                </div>

                <ul>
                {
                    PATTERNS.map(pattern => (
                        <li><a {...href(`/${slugify(pattern.name)}`)}>{pattern.name}</a></li>
                    ))
                }
                </ul>
            </div>
        );
    }
}
