/**
 * A collection of patterns to create a responsive web page
 * https://responsive.page
 * (c) 2021 Nguyen Huu Phuoc (https://twitter.com/nghuuphuoc)
 */

export enum Category {
    Navigation,
}

export interface Pattern {
    name: string;
    category: Category;
}

const PATTERNS: Pattern[] = [
    { name: 'Column drop', category: Category.Navigation },
    { name: 'Layout shifter', category: Category.Navigation },
    { name: 'Mostly fluid', category: Category.Navigation },
    { name: 'Tiny tweaks', category: Category.Navigation },
];

export {
    PATTERNS,
};
