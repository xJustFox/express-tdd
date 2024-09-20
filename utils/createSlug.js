const posts = [
    {
        title: 'test slug',
        slug: 'test-slug'
    }
]

const createSlug = (obj) => {
    const { title } = obj;

    if (typeof obj != 'object') {
        throw new Error("Formato errato");
    }

    if (title.length < 1) {
        throw new Error("Titolo non presente");
    }

    let baseSlug = `${title}`.toLocaleLowerCase().split(' ').join('-');
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