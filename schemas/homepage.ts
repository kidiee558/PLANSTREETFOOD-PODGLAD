export const homepage = {
  name: 'homepage',
  title: 'Homepage',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Tytuł',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Opis',
      type: 'text',
    },
    {
      name: 'image',
      title: 'Zdjęcie',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ],
};
