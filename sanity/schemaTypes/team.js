export default {
  name: 'team',
  title: 'Team Member',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name (English)',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'nameAr',
      title: 'Name (Arabic)',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'role',
      title: 'Role (English)',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'roleAr',
      title: 'Role (Arabic)',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'bio',
      title: 'Bio (English)',
      type: 'text',
      validation: Rule => Rule.required()
    },
    {
      name: 'bioAr',
      title: 'Bio (Arabic)',
      type: 'text',
      validation: Rule => Rule.required()
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'linkedin',
      title: 'LinkedIn URL',
      type: 'url'
    },
    {
      name: 'twitter',
      title: 'Twitter URL',
      type: 'url'
    },
    {
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Lower numbers appear first',
      validation: Rule => Rule.required().min(1)
    }
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'role',
      media: 'image'
    },
    prepare(selection) {
      const { title, subtitle, media } = selection;
      return {
        title: title || 'Untitled Team Member',
        subtitle: subtitle || 'No role specified',
        media: media
      };
    }
  }
}
