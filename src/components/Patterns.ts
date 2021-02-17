/**
 * A collection of patterns to create a responsive web page
 * https://responsive.page
 * (c) 2021 Nguyen Huu Phuoc (https://twitter.com/nghuuphuoc)
 */

export enum Category {
    Data,
    Layout,
    Navigation,
}

export interface Pattern {
    name: string;
    category: Category;
}

const PATTERNS: Pattern[] = [
    // Data
    { name: 'Definition list', category: Category.Data },
    { name: 'List numbers', category: Category.Data },
    { name: 'Table', category: Category.Data },
    // Layout
    { name: 'Column drop', category: Category.Layout },
    { name: 'CSS grid', category: Category.Layout },
    { name: 'Layout shifter', category: Category.Layout },
    { name: 'Mostly fluid', category: Category.Layout },
    { name: 'Tiny tweaks', category: Category.Layout },
];

export {
    PATTERNS,
};
