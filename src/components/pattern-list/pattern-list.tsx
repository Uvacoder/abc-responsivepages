/**
 * A collection of patterns to create a responsive web page
 * https://responsive.page
 * (c) 2021 Nguyen Huu Phuoc (https://twitter.com/nghuuphuoc)
 */

import { Component, h } from '@stencil/core';
import { href } from 'stencil-router-v2';

import PATTERNS from '../Patterns';
import slugify from '../../utils/slugify';

@Component({
    tag: 'pattern-list',
    styleUrl: 'pattern-list.css'
})
export class PatternList {
    render() {
        return (
            <div class="pattern-list">
                <ul>
                {
                    PATTERNS.map(pattern => (
                        <li><a class="pattern-list__link" {...href(`/${slugify(pattern)}`)}>{pattern}</a></li>
                    ))
                }
                </ul>
            </div>
        );
    }
}
