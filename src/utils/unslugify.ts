/**
 * A collection of patterns to create a responsive web page
 * https://responsive.page
 * (c) 2021 Nguyen Huu Phuoc (https://twitter.com/nghuuphuoc)
 */

const unslugify = (input: string) => {
    const str = input.split('-').join(' ');
    return `${str.charAt(0).toUpperCase()}${str.slice(1)}`;
};

export default unslugify;
