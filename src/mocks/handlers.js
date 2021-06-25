import { graphql } from 'msw'

export const handlers = [
  // Mock Contentful GraphQL queries
  graphql.query('contentfulRomanoHomePage', (req, res, ctx) => {
    return res(
      ctx.data({
        contentfulRomanoHomePage: {
          heroImageTitle: 'Romano Law - Professional Legal Services',
          heroImage1: {
            gatsbyImageData: {
              layout: 'FULL_WIDTH',
              images: {
                fallback: {
                  src: '/test-hero-image.jpg',
                  srcSet: '/test-hero-image.jpg 1920w',
                  sizes: '100vw'
                }
              },
              width: 1920,
              height: 1080
            }
          }
        }
      })
    )
  }),

  graphql.query('contentfulRomanoInnerPage', (req, res, ctx) => {
    return res(
      ctx.data({
        contentfulRomanoInnerPage: {
          slug: 'test-page',
          title: 'Test Inner Page',
          heroImage: {
            gatsbyImageData: {
              layout: 'FULL_WIDTH',
              images: {
                fallback: {
                  src: '/test-inner-hero.jpg',
                  srcSet: '/test-inner-hero.jpg 1920w',
                  sizes: '100vw'
                }
              },
              width: 1920,
              height: 1080
            }
          },
          mainBlurb: {
            raw: JSON.stringify({
              nodeType: 'document',
              data: {},
              content: [
                {
                  nodeType: 'paragraph',
                  content: [
                    {
                      nodeType: 'text',
                      value: 'This is a test main blurb for the inner page.',
                      marks: [],
                      data: {}
                    }
                  ],
                  data: {}
                }
              ]
            })
          },
          pageContent: {
            raw: JSON.stringify({
              nodeType: 'document',
              data: {},
              content: [
                {
                  nodeType: 'heading-2',
                  content: [
                    {
                      nodeType: 'text',
                      value: 'Test Section',
                      marks: [],
                      data: {}
                    }
                  ],
                  data: {}
                },
                {
                  nodeType: 'paragraph',
                  content: [
                    {
                      nodeType: 'text',
                      value: 'This is test content for the inner page.',
                      marks: [],
                      data: {}
                    }
                  ],
                  data: {}
                }
              ]
            })
          }
        }
      })
    )
  }),

  // Mock Instagram images query
  graphql.query('InstagramImages', (req, res, ctx) => {
    return res(
      ctx.data({
        allFile: {
          nodes: [
            {
              childImageSharp: {
                gatsbyImageData: {
                  layout: 'FIXED',
                  images: {
                    fallback: {
                      src: '/test-instagram-1.jpg',
                      srcSet: '/test-instagram-1.jpg 329w',
                      sizes: '329px'
                    }
                  },
                  width: 329,
                  height: 329
                }
              }
            },
            {
              childImageSharp: {
                gatsbyImageData: {
                  layout: 'FIXED',
                  images: {
                    fallback: {
                      src: '/test-instagram-2.jpg',
                      srcSet: '/test-instagram-2.jpg 329w',
                      sizes: '329px'
                    }
                  },
                  width: 329,
                  height: 329
                }
              }
            }
          ]
        }
      })
    )
  }),

  // Mock other static queries as needed
  graphql.query('FeaturedOnImages', (req, res, ctx) => {
    return res(
      ctx.data({
        allFile: {
          nodes: [
            {
              childImageSharp: {
                gatsbyImageData: {
                  layout: 'FIXED',
                  images: {
                    fallback: {
                      src: '/test-featured-1.jpg',
                      srcSet: '/test-featured-1.jpg 200w',
                      sizes: '200px'
                    }
                  },
                  width: 200,
                  height: 100
                }
              }
            }
          ]
        }
      })
    )
  })
]
