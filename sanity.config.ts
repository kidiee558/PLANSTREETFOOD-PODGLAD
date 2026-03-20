import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import { homepage } from './schemas/homepage';

export default defineConfig({
  name: 'default',
  title: 'PLAN Street Food CMS',

  projectId: '5526z05j',
  dataset: 'production',
  basePath: '/studio',

  plugins: [deskTool()],

  schema: {
    types: [homepage],
  },
});
