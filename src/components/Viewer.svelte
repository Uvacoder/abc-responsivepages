<script>
const DEVICES = {
    IPHONE_X: {
        name: 'iPhone X', 
        width: 375, 
        height: 812,
    },
    IPAD_PRO: {
        name: 'iPad Pro',
        width: 1024,
        height: 1366
    },
    DEKSTOP: {
        name: 'Dekstop',
        width: 0,
        height: 0,
    },
};

let width = DEVICES.DEKSTOP.width;
let height = DEVICES.DEKSTOP.height;

const switchTo = (device) => {
    width = DEVICES[device].width;
    height = DEVICES[device].height;
};


// Props
// -----
export let slug;
</script>

<div class="h-screen flex flex-col">
    <div class="border-b flex items-center justify-center py-2">
        <button class="hover:bg-gray-200 mx-1 p-1 rounded" on:click={() => switchTo('IPHONE_X')}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                <path d="M12,21.25h0a.25.25,0,0,1,.25.25h0a.25.25,0,0,1-.25.25h0a.25.25,0,0,1-.25-.25h0a.25.25,0,0,1,.25-.25" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round"></path>
                <path d="M5.500 0.500 L18.500 0.500 L18.500 23.500 L5.500 23.500 Z" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round"></path>
                <path d="M18.5 19.5L5.5 19.5" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round"></path>
                <path d="M18.5 4.5L5.5 4.5" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round"></path>
                <path d="M10.5 2.5L13.5 2.5" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round"></path>
            </svg>
        </button>

        <button class="hover:bg-gray-200 mx-1 p-1 rounded" on:click={() => switchTo('IPAD_PRO')}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                <path d="M3.500 0.500 L20.500 0.500 L20.500 23.500 L3.500 23.500 Z" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round"></path>
                <path d="M20.498 19.5L3.502 19.5" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round"></path>
                <path d="M20.498 4.5L3.502 4.5" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round"></path>
                <path d="M12,21a.25.25,0,0,1,.25.25h0a.25.25,0,0,1-.25.25h0a.25.25,0,0,1-.25-.25h0A.25.25,0,0,1,12,21" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round"></path>
                <path d="M12 21L12 21" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round"></path>
                <path d="M12,2.5a.25.25,0,0,1,.25.25h0A.25.25,0,0,1,12,3h0a.25.25,0,0,1-.25-.25h0A.25.25,0,0,1,12,2.5" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round"></path>
                <path d="M12 2.5L12 2.5" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round"></path>
            </svg>
        </button>

        <button class="hover:bg-gray-200 mx-1 p-1 rounded" on:click={() => switchTo('DEKSTOP')}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                <path d="M9,22.5a6.979,6.979,0,0,0,1.5-4" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round"></path>
                <path d="M15,22.5a6.979,6.979,0,0,1-1.5-4" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round"></path>
                <path d="M7.499 22.5L16.499 22.5" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round"></path>
                <path d="M0.5 15.5L23.5 15.5" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round"></path>
                <path d="M0.500 1.500 L23.500 1.500 L23.500 18.500 L0.500 18.500 Z" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round"></path>
            </svg>
        </button>
    </div>

    <div class="flex-1 overflow-auto p-4">
        <iframe
            class="border border-gray-1 rounded"
            title="Pattern"
            src={`/${slug}`}
            width={width === 0 ? '100%' : width}
            height={height === 0 ? '100%' : height}
        />
    </div>
</div>
