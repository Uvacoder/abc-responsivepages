import '@stencil/router';
import { Component, h } from '@stencil/core';

@Component({
    tag: 'app-root'
})
export class AppRoot {
    render() {
        return (
            <stencil-router scrollTopOffset={0}>
                <stencil-route-switch>
                    <stencil-route url="/" component="home-page" exact={true}/>
                    <stencil-route url="/patterns/:patternName" routeRender={({ match }) => (
                        <pattern-page pattern={match!.params['patternName']}></pattern-page>
                    )}
                    />
                </stencil-route-switch>
            </stencil-router>
        );
    }
}
