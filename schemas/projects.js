export default {
    name: 'project',
    title: 'Project',
    type: 'document',
    fields: [
        {
            name: '',
            title: '',
            type: '',
        },
        {
            name: 'title',
            title: 'Title',
            type: 'string',
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 100
            }
        },
        {
            name: 'image',
            title: 'Project Screenshot',
            type: 'image',
            options: {
                hotspot: true
            }
        },
        {
            name: 'description',
            title: 'Description',
            type: 'text',
        },
        {
            name: 'author',
            title: 'Author',
            type: 'reference',
            to: {type: 'author'}
        },
    ]
}