module.exports = {
  siteMetadata: {
    title: `Developer Community Stats`,
    author: `Developer Community Stats`,
    description: `Personal blog and pet projects of Developer Community Stats. Learn javascript, React, AWS, Go and much more. Use different open source tools and online apps dedicated for visualization and increasing productivity.`,
    siteUrl: `https://subeshbhandari.com/`,
    social: {
      twitter: `subeshb1`,
      facebook: `subesh`,
      instagram: `subeshb1`,
    },
  },
  plugins: [
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        // CommonMark mode (default: true)
        commonmark: true,
        // Footnotes mode (default: true)
        footnotes: true,
        // Pedantic mode (default: true)
        pedantic: true,
        // GitHub Flavored Markdown mode (default: true)
        gfm: true,
        // Plugins configs
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 900,
              quality: 75,
              showCaptions: ['alt', 'title'],
              markdownCaptions: true,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          {
            resolve: `gatsby-remark-copy-linked-files`,
          },

          {
            resolve: `gatsby-remark-smartypants`,
          },
          {
            resolve: `gatsby-remark-reading-time`,
          },
          {
            resolve: 'gatsby-remark-autolink-headers',
            options: {
              offsetY: `200`,
              enableCustomId: true,
              icon: `<svg aria-hidden="true" height="20" version="1.1" viewBox="0 0 16 16" width="20"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>`,
            },
          },
          {
            resolve: `gatsby-remark-vscode`,
            options: {
              theme: {
                default: 'Light+ (default light)',
                parentSelector: {
                  // Any CSS selector will work!
                  '.code-dark-plus': 'Dark+ (default dark)',
                  '.code-light-plus': 'Light+ (default light)',
                  '.code-tomorrow-night-blue': 'Tomorrow Night Blue',
                  '.code-red': 'Red',
                  '.code-abyss': 'Abyss',
                  '.code-dark-visual-studio': 'Dark (Visual Studio)',
                  '.code-light-visual-studio': 'Light (Visual Studio)',
                  '.code-high-contrast': 'High Contrast',
                  '.code-kimbie-dark': 'Kimbie Dark',
                  '.code-monokai-dimmed': 'Monokai Dimmed',
                  '.code-monokai': 'Monokai',
                  '.code-quiet-light': 'Quiet Light',
                  '.code-solarized-dark': 'Solarized Dark',
                  '.code-solarized-light': 'Solarized Light',
                  '.code-synth-wave-84': `SynthWave '84`,
                },
              },
              extensions: ['synthwave-vscode'],
              inlineCode: {
                marker: '•',
                theme: {
                  default: 'Light+ (default light)',
                  parentSelector: {
                    // Any CSS selector will work!
                    '.theme-dark': 'Dark+ (default dark)',
                  },
                },
              },
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-transition-link`,
    },
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        // Setting a color is optional.
        color: `tomato`,
        // Disable the loading spinner.
        showSpinner: true,
      },
    },
    `gatsby-plugin-emotion`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/readme-profiles`,
        name: `readme`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/assets`,
        name: `assets`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_TRACKING_KEY,
      },
    },
    // {
    //   resolve: `gatsby-plugin-feed`,
    //   options: {
    //     query: `
    //       {
    //         site {
    //           siteMetadata {
    //             title
    //             description
    //             siteUrl
    //           }
    //         }
    //       }
    //     `,
    //   },
    // },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Developer Community Stats`,
        short_name: `Developer`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `minimal-ui`,
      },
    },
    // `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        exclude: [`/app/nepali-date*`],
      },
    },
    {
      resolve: 'gatsby-plugin-html-attributes',
      options: {
        lang: 'en',
      },
    },
  ],
}
