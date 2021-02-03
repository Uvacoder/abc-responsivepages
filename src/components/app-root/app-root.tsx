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
