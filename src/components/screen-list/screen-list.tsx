/**
 * A collection of patterns to create a responsive web page
 * https://responsive.page
 * (c) 2021 Nguyen Huu Phuoc (https://twitter.com/nghuuphuoc)
 */

import { Component, Event, EventEmitter, h } from '@stencil/core';

import { ScreenCategory, ScreenSize, SCREEN_SIZES } from '../ScreenSize';

type GroupByCategory = { [key: number]: ScreenSize[] };

@Component({
    tag: 'screen-list',
    styleUrl: 'screen-list.css'
})
export class ScreenList {
    @Event() chooseScreenSizeEvent?: EventEmitter<ScreenSize>;

    choose = (size: ScreenSize) => {
        this.chooseScreenSizeEvent!.emit(size);
    }

    renderCategory = (category: number) => {
        switch (category) {
            case ScreenCategory.ExtraSmall: return 'Extra Small';
            case ScreenCategory.Small: return 'Small';
            case ScreenCategory.Medium: return 'Medium';
            case ScreenCategory.Large: return 'Large';
            case ScreenCategory.ExtraLarge: return 'Extra Large';
            case ScreenCategory.SuperLarge: return 'Super Large';
            default: return 'n/a';
        }
    }

    render() {
        const groups = SCREEN_SIZES.reduce(
            (acc, item) => {
                acc[item.group] = [...(acc[item.group] || []), item];
                return acc;
            },
            {} as GroupByCategory
        );

        return (
            <div class="screen-list">
            {
                Object.keys(groups).map((_, category) => (
                    <div>
                        <div class="screen-list__category">{this.renderCategory(category)}</div>
                        {
                            (groups[category] as ScreenSize[]).map(size => (
                                [
                                    <button class="screen-list__size" onClick={() => this.choose(size)}>
                                        <span>{`${size.width} x ${size.height}`}</span>
                                        <span class="screen-list__popularity">{`${size.popularity}%`}</span>
                                    </button>,
                                    <div class="screen-list__devices">
                                    {
                                        size.devices.map(device => (
                                            <button class="screen-list__device" onClick={() => this.choose(size)}>{device}</button>
                                        ))
                                    }
                                    </div>
                                ]
                            ))
                        }
                    </div>
                ))
            }
            </div>
        );
    }
}
