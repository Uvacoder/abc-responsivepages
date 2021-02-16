/**
 * A collection of patterns to create a responsive web page
 * https://responsive.page
 * (c) 2021 Nguyen Huu Phuoc (https://twitter.com/nghuuphuoc)
 */

function randomFromArray<T>(array: T[]): T { 
    return array[Math.floor(Math.random() * array.length)];
};

export default randomFromArray;
