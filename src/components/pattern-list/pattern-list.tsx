/**
 * A collection of patterns to create a responsive web page
 * https://responsive.page
 * (c) 2021 Nguyen Huu Phuoc (https://twitter.com/nghuuphuoc)
 */

import { Component, h } from '@stencil/core';
import { href } from 'stencil-router-v2';

import { PATTERNS, Category, Pattern } from '../Patterns';
import slugify from '../../utils/slugify';

type GroupByCategory = { [key: number]: Pattern[] };

@Component({
    tag: 'pattern-list',
    styleUrl: 'pattern-list.css'
})
export class PatternList {
    renderCategory = (category: number) => {
        switch (category) {
            case Category.Layout: return 'Layout';
            case Category.Navigation: return 'Navigation';
            default: return 'Uncategoried';
        }
    }

    render() {
        const groups = PATTERNS.reduce(
            (acc, item) => {
                acc[item.category] = [...(acc[item.category] || []), item];
                return acc;
            },
            {} as GroupByCategory
        );

        return (
            <div class="pattern-list">
            {
                Object.keys(groups).map((_, category) => (
                    <div>
                        <div class="pattern-list__category">{this.renderCategory(category)}</div>
                        <ul>
                        {
                            (groups[category] as Pattern[]).map(pattern => (
                                <li><a class="pattern-list__link" {...href(`/${slugify(pattern.name)}`)}>{pattern.name}</a></li>
                            ))
                        }
                        </ul>
                    </div>
                ))
            }
            </div>
        );
    }
}
