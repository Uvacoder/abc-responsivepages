export enum ScreenCategory {
    ExtraSmall,
    Small,
    Medium,
    Large,
    ExtraLarge,
    SuperLarge,
}

export interface ScreenSize {
    height: number;
    width: number;
    devices: string[];
    group: ScreenCategory;
    popularity: number;
}

// Thanks https://screensizemap.com/ for creating 
// this awesome data source of screen sizes
export const SCREEN_SIZES: ScreenSize[] = [
    // ExtraSmall
    {
        height: 480,
        width: 320,
        devices: [
            'Apple iPhone 3GS',
            'Apple iPhone 4/4S',
        ],
        group: ScreenCategory.ExtraSmall,
        popularity: 2,
    },
    {
        height: 553,
        width: 320,
        devices: [
            'Galaxy S/S2',
            'Samsung Galaxy S3 mini',
        ],
        group: ScreenCategory.ExtraSmall,
        popularity: 2,
    },
    {
        height: 568,
        width: 320,
        devices: [
            'Apple iPhone 5c/5s',
        ],
        group: ScreenCategory.ExtraSmall,
        popularity: 2,
    },
    {
        height: 640,
        width: 360,
        devices: [
            'Samsung S3/S4',
            'Samsung Galaxy Note',
        ],
        group: ScreenCategory.ExtraSmall,
        popularity: 19.89,
    },
    {
        height: 720,
        width: 360,
        devices: [
            'Samsung Galaxy Note 9',
            'Samsung Galaxy S4/S5/S6',
            'ACER Liquid E2',
            'HTC Desire 700',
            'HTC One',
            'LG Optimus L9 P760',
            'Motorola RAZR MAXX',
        ],
        group: ScreenCategory.ExtraSmall,
        popularity: 2.35,
    },
    {
        height: 667,
        width: 375,
        devices: [
            'Apple iPhone 6/7/8',
        ],
        group: ScreenCategory.ExtraSmall,
        popularity: 5,
    },
    {
        height: 640,
        width: 384,
        devices: [
            'BlackBerry Z10',
            'LG Nexus 4',
            'Nokia Lumia 1020',
            'Nokia Lumia 920',
            'Nokia Lumia 925',
        ],
        group: ScreenCategory.ExtraSmall,
        popularity: 2,
    },
    {
        height: 640,
        width: 400,
        devices: [
            'Samsung Galaxy Note',
        ],
        group: ScreenCategory.ExtraSmall,
        popularity: 2,
    },
    {
        height: 736,
        width: 414,
        devices: [
            'Apple iPhone Plus 6/7/8',
        ],
        group: ScreenCategory.ExtraSmall,
        popularity: 2.38,
    },
    // Small
    {
        height: 800,
        width: 480,
        devices: [
            'Alcatel One Touch T10',
            'Panasonic T44',
        ],
        group: ScreenCategory.Small,
        popularity: 2,
    },
    {
        height: 960,
        width: 540,
        devices: [
            'Motorola Moto E, VIVO Y51L',
            'HTC Evo 3D',
        ],
        group: ScreenCategory.Small,
        popularity: 2,
    },
    {
        height: 960,
        width: 600,
        devices: [
            'Nexus 7',
            'Barnes & Noble Nook HD',
        ],
        group: ScreenCategory.Small,
        popularity: 2,
    },
    {
        height: 1024,
        width: 600,
        devices: [
            'Amazon Kindle Fire 1st Gen',
            'Samsung Galaxy Tab 2',
        ],
        group: ScreenCategory.Small,
        popularity: 2,
    },
    // Medium
    {
        height: 1280,
        width: 720,
        devices: [
            'Samsung A5',
            'Samsung Z3',
            'Samsung Galaxy J7',
            'Motorola Moto G',
            'LG Phoenix 2',
            'Sony Xperia M4',
        ],
        group: ScreenCategory.Medium,
        popularity: 2,
    },
    {
        height: 1024,
        width: 768,
        devices: [
            'Apple iPad Mini',
            'Apple iPad 1/2/3/4',
        ],
        group: ScreenCategory.Medium,
        popularity: 2.5,
    },
    {
        height: 1366,
        width: 768,
        devices: [
            'Panasonic BT-LH1850',
        ],
        group: ScreenCategory.Medium,
        popularity: 2,
    },
    {
        height: 1280,
        width: 800,
        devices: [
            'Dell Venue 8',
            'Samsung Galaxy Tab 10',
        ],
        group: ScreenCategory.Medium,
        popularity: 2,
    },
    // Large 
    {
        height: 540,
        width: 960,
        devices: [
            'Sony Xperia C4',
            'Sony Xperia Z Ultra',
        ],
        group: ScreenCategory.Large,
        popularity: 2,
    },
    {
        height: 600,
        width: 1024,
        devices: [
            'Amazon Fire 7-Tablet',
            'Tablet Huawei Mediapad T3',
        ],
        group: ScreenCategory.Large,
        popularity: 2,
    },
    {
        height: 768,
        width: 1024,
        devices: [
            'Apple iPad Mini',
            'Apple iPad 1/2/3/4',
        ],
        group: ScreenCategory.Large,
        popularity: 2,
    },
    // ExtraLarge
    {
        height: 800,
        width: 1280,
        devices: [
            'Laptops with 13 to 15"',
            'Lenovo IdeaPad',
            'HP x2 210 G2',
        ],
        group: ScreenCategory.ExtraLarge,
        popularity: 2.07,
    },
    {
        height: 768,
        width: 1366,
        devices: [
            'Apple Macbook 13"',
        ],
        group: ScreenCategory.ExtraLarge,
        popularity: 10.95,
    },
    {
        height: 900,
        width: 1440,
        devices: [
            'Apple Macbook Pro 15"',
            'HP Notebook 17"',
        ],
        group: ScreenCategory.ExtraLarge,
        popularity: 2.9,
    },
    // SuperLarge
    {
        height: 864,
        width: 1536,
        devices: [
            'IBM ThinkPad',
            'HP Notebook 17"',
        ],
        group: ScreenCategory.SuperLarge,
        popularity: 2.4,
    },
    {
        height: 900,
        width: 1600,
        devices: [
            'Desktop monitors in 14" to 19"',
        ],
        group: ScreenCategory.SuperLarge,
        popularity: 2.21,
    },
    {
        height: 1080,
        width: 1680,
        devices: [
            'Desktop monitors in 20" to 22"',
        ],
        group: ScreenCategory.SuperLarge,
        popularity: 2,
    },
    {
        height: 1080,
        width: 1920,
        devices: [
            'Desktop monitors in 24" to 27"',
        ],
        group: ScreenCategory.SuperLarge,
        popularity: 8.51,
    },
    {
        height: 1200,
        width: 1920,
        devices: [
            'Desktop monitors in 24" to 27"',
        ],
        group: ScreenCategory.SuperLarge,
        popularity: 2,
    },
    {
        height: 1440,
        width: 2560,
        devices: [
            'Apple iMac 27-inch (5K)',
        ],
        group: ScreenCategory.SuperLarge,
        popularity: 2,
    },
];
