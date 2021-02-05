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
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                                    <path d="M0.500 16.500 L10.500 16.500 L10.500 23.500 L0.500 23.500 Z" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round"></path>
                                    <path d="M13.500 10.500 L23.500 10.500 L23.500 23.500 L13.500 23.500 Z" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" transform="translate(37 34) rotate(180)"></path><path d="M13.500 0.500 L23.500 0.500 L23.500 7.500 L13.500 7.500 Z" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" transform="translate(37 8) rotate(180)"></path>
                                    <path d="M0.500 0.500 L10.500 0.500 L10.500 13.500 L0.500 13.500 Z" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round"></path>
                                </svg>
                            </a>
                        </tool-tip>

                        <tool-tip tip="Patterns" position="right">
                            <button class="pattern-page__button" onClick={() => this.isNavigationOpen = !this.isNavigationOpen}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                                    <path d="M21 7L3 7" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round"></path>
                                    <path d="M21 12L3 12" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round"></path>
                                    <path d="M21 17L3 17" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round"></path>
                                </svg>
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
                    <demo-viewer url={`/patterns/${this.pattern}.html`}></demo-viewer>
                </div>
            </div>
        );
    }
}
