/**
 * A collection of patterns to create a responsive web page
 * https://responsive.page
 * (c) 2021 Nguyen Huu Phuoc (https://twitter.com/nghuuphuoc)
 */

import { Component, Listen, Prop, State, h } from '@stencil/core';
import { href } from 'stencil-router-v2';

@Component({
    tag: 'rp-pattern-page',
    styleUrl: 'rp-pattern-page.css'
})
export class RpPatternPage {
    @Prop() pattern?: string;
    @State() isNavigationOpen: boolean = false;

    @Listen('clickOutSide')
    clickOutSideHandler() {
        this.isNavigationOpen = false;
    }

    render() {
        return (
            <div class="rp-pattern-page">
                <div class="rp-pattern-page__sidebar">
                    <div>
                        <rp-tooltip tip="Homepage" position="right">
                            <a {...href(`/`)} class="rp-pattern-page__button">
                                <rp-icon-layout />
                            </a>
                        </rp-tooltip>

                        <rp-tooltip tip="Patterns" position="right">
                            <button class="rp-pattern-page__button" onClick={() => this.isNavigationOpen = !this.isNavigationOpen}>
                                <rp-icon-list />
                            </button>
                        </rp-tooltip>
                    </div>
                </div>
                {this.isNavigationOpen && (
                    <div class="rp-pattern-page__patterns">
                        <rp-click-outside>
                            <rp-patterns />
                        </rp-click-outside>
                    </div>
                )}
                <div class="rp-pattern-page__content">
                    {/*
                    Since the content consists of an iframe, <click-outside> can't check if the user clicks outside 
                    of it if user clicks on the iframe. Creating an overlay will fix the issue.
                    */}
                    {this.isNavigationOpen && <div class="rp-pattern-page__overlay" />}
                    <rp-demo-viewer pattern={this.pattern!} />
                </div>
            </div>
        );
    }
}
