export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
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
                  buildHookId: '5f4b4c4d5bf9308a92ad35bc',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-ykz2y2zx',
                  apiId: '16a326ce-7630-45f3-87cc-fb358bf41102'
                },
                {
                  buildHookId: '5f4b4c4d281ab6a4e95f5e31',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-2cgumvfp',
                  apiId: '6f6a4d8b-f2f0-451a-a8da-39d1931ecedf'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/CloudGin/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-2cgumvfp.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
