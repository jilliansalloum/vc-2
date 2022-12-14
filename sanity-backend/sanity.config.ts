import {createConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {schemaTypes} from './schemas'

export default createConfig({
  name: 'default',
  title: 'virtcl2',

  projectId: '880clny7',
  dataset: 'production',

  plugins: [deskTool()],

  schema: {
    types: schemaTypes,
  },
})
