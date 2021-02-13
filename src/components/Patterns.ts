/**
 * A collection of patterns to create a responsive web page
 * https://responsive.page
 * (c) 2021 Nguyen Huu Phuoc (https://twitter.com/nghuuphuoc)
 */

export enum Category {
    Layout,
    Navigation,
}

export interface Pattern {
    name: string;
    category: Category;
}

const PATTERNS: Pattern[] = [
    { name: 'Column drop', category: Category.Layout },
    { name: 'Layout shifter', category: Category.Layout },
    { name: 'Mostly fluid', category: Category.Layout },
    { name: 'Tiny tweaks', category: Category.Layout },
];

export {
    PATTERNS,
};
