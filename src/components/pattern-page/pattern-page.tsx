/**
 * A collection of patterns to create a responsive web page
 * https://responsive.page
 * (c) 2021 Nguyen Huu Phuoc (https://twitter.com/nghuuphuoc)
 */

import { Component, Listen, Prop, State, h } from '@stencil/core';
import { href } from 'stencil-router-v2';

@Component({
    tag: 'pattern-page',
    styleUrl: 'pattern-page.css'
})
export class PatternPage {
    @Prop() pattern?: string;
    @State() isNavigationOpen: boolean = false;

    @Listen('clickOutSide')
    clickOutSideHandler() {
        this.isNavigationOpen = false;
    }

    render() {
        return (
            <div class="pattern-page">
                <div class="pattern-page__sidebar">
                    <div>
                        <tool-tip tip="Homepage" position="right">
                            <a {...href(`/`)} class="pattern-page__button">
                                <icon-layout />
                            </a>
                        </tool-tip>

                        <tool-tip tip="Patterns" position="right">
                            <button class="pattern-page__button" onClick={() => this.isNavigationOpen = !this.isNavigationOpen}>
                                <icon-list />
                            </button>
                        </tool-tip>
                    </div>
                </div>
                {this.isNavigationOpen && (
                    <div class="pattern-page__patterns">
                        <click-outside>
                            <pattern-list />
                        </click-outside>
                    </div>
                )}
                <div class="pattern-page__content">
                    {/*
                    Since the content consists of an iframe, <click-outside> can't check if the user clicks outside 
                    of it if user clicks on the iframe. Creating an overlay will fix the issue.
                    */}
                    {this.isNavigationOpen && <div class="pattern-page__overlay" />}
                    <demo-viewer pattern={this.pattern!} />
                </div>
            </div>
        );
    }
}
