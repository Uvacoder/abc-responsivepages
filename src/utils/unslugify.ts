const unslugify = (input: string) => {
    const str = input.split('-').join(' ');
    return `${str.charAt(0).toUpperCase()}${str.slice(1)}`;
};

export default unslugify;
