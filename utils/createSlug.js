const createSlug = (obj, posts) => {
    let { title } = obj;
    
    if (!title || !posts) {
        throw new Error();
    }
    
    if (typeof title !== 'string') {
        title = title+"";
    }

    if (title.length < 1) {
        throw new Error();
    }

    if (title.match(/[!£$%&/()=?^_:;*§éç°]/)) {
        throw new Error();
    }
    
    let baseSlug = title.toLocaleLowerCase().split(' ').join('-');
    let slug = baseSlug;
    let counter = 1;
    
    while (posts.find(p => p.slug === slug)) {
        slug = `${baseSlug}-${counter}`;
        counter++;
    }

    return slug;
}

module.exports = {
    createSlug
}