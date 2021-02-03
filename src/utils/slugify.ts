const slugify = (str: string) => str.toLowerCase().split(' ').join('-');
export default slugify;