const  createSlug = (string) => {
    let slug = '';

    if (typeof string !== 'string') {
        slug = `${string}`;
    } else {
        slug = string;
    }

    return slug.toLocaleLowerCase();
}    

module.exports = {
    createSlug
}