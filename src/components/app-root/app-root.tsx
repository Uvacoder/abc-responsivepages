/**
 * A collection of patterns to create a responsive web page
 * https://responsive.page
 * (c) 2021 Nguyen Huu Phuoc (https://twitter.com/nghuuphuoc)
 */

import { createRouter, match, Route } from 'stencil-router-v2';
import { Component, h } from '@stencil/core';

const Router = createRouter();

@Component({
    tag: 'app-root'
})
export class AppRoot {
    render() {
        return (
            <Router.Switch>
                <Route path="/"><home-page /></Route>
                <Route
                    path={match('/:pattern')}
                    render={({pattern}) => <pattern-page pattern={pattern} />}
                />
            </Router.Switch>
        );
    }
}
