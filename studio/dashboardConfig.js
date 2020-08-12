export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f3455ca797786d172774771',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-gq7n4ts8',
                  apiId: 'd6766cab-5d1f-4f0f-b8d8-2e33b49fe120'
                },
                {
                  buildHookId: '5f3455cb25bb64a9f39e430b',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-bdzgpc33',
                  apiId: 'f9936211-16cc-4226-8184-f6f76a498e3c'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Zac-Wood/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-bdzgpc33.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
