/**
 * A collection of patterns to create a responsive web page
 * https://responsive.page
 * (c) 2021 Nguyen Huu Phuoc (https://twitter.com/nghuuphuoc)
 */

import { Component, Event, EventEmitter, h } from '@stencil/core';

import { ScreenCategory, ScreenSize, SCREEN_SIZES } from '../ScreenSize';

type GroupByCategory = { [key: number]: ScreenSize[] };

@Component({
    tag: 'rp-screens',
    styleUrl: 'rp-screens.css'
})
export class RpScreens {
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
            <div class="rp-screens">
            {
                Object.keys(groups).map((_, category) => (
                    <div>
                        <div class="rp-screens__category">{this.renderCategory(category)}</div>
                        {
                            (groups[category] as ScreenSize[]).map(size => (
                                [
                                    <button class="rp-screens__size" onClick={() => this.choose(size)}>
                                        <span>{`${size.width} x ${size.height}`}</span>
                                        <span class="rp-screens__popularity">{`${size.popularity}%`}</span>
                                    </button>,
                                    <div class="rp-screens__devices">
                                    {
                                        size.devices.map(device => (
                                            <button class="rp-screens__device" onClick={() => this.choose(size)}>{device}</button>
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
