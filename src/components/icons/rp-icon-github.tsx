/**
 * A collection of patterns to create a responsive web page
 * https://responsive.page
 * (c) 2021 Nguyen Huu Phuoc (https://twitter.com/nghuuphuoc)
 */

import { Component, h } from '@stencil/core';

@Component({
    tag: 'rp-icon-github'
})
export class RpIconGithub {
    render() {
        return (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                <path d="M12,.5A11.5,11.5,0,0,0,8.365,22.914c.574.1.756-.237.756-.541,0-.275.006-1.037,0-2-3.2.694-3.861-1.515-3.861-1.515a3.043,3.043,0,0,0-1.276-1.682c-1.044-.714.078-.7.078-.7a2.414,2.414,0,0,1,1.762,1.184,2.448,2.448,0,0,0,3.346.956A2.45,2.45,0,0,1,9.9,17.084c-2.553-.292-5.238-1.278-5.238-5.686A4.447,4.447,0,0,1,5.847,8.312a4.126,4.126,0,0,1,.112-3.043s.967-.309,3.162,1.18a10.883,10.883,0,0,1,5.76,0c2.2-1.488,3.159-1.18,3.159-1.18a4.131,4.131,0,0,1,.114,3.043A4.442,4.442,0,0,1,19.337,11.4c0,4.42-2.689,5.391-5.251,5.674a2.727,2.727,0,0,1,.787,2.12v3.184c0,.307.186.647.77.536A11.5,11.5,0,0,0,12,.5Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
            </svg>
        );
    }
}
