const slugs = ['test-slug']

const  createSlug = (string) => {
    let baseSlug = `${string}`.toLocaleLowerCase().split(' ').join('-');
    let slug = baseSlug;
    let counter = 1;
    
    while (slugs.find(s => s === slug)) {
        slug = `${baseSlug}-${counter}`;
        counter++;  
    }

    return slug;
}    

module.exports = {
    createSlug
}