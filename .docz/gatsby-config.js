const { mergeWith } = require('docz-utils')
const fs = require('fs-extra')

let custom = {}
const hasGatsbyConfig = fs.existsSync('./gatsby-config.custom.js')

if (hasGatsbyConfig) {
  try {
    custom = require('./gatsby-config.custom')
  } catch (err) {
    console.error(
      `Failed to load your gatsby-config.js file : `,
      JSON.stringify(err),
    )
  }
}

const config = {
  pathPrefix: '/',

  siteMetadata: {
    title: 'Docz Example Typescript',
    description: 'My awesome app using docz',
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-typescript',
      options: {
        isTSX: true,
        allExtensions: true,
      },
    },
    {
      resolve: 'gatsby-theme-docz',
      options: {
        themeConfig: {},
        src: './',
        gatsbyRoot: null,
        themesDir: 'src',
        mdxExtensions: ['.md', '.mdx'],
        docgenConfig: {},
        menu: [],
        mdPlugins: [],
        hastPlugins: [],
        ignore: [],
        typescript: true,
        ts: false,
        propsParser: true,
        'props-parser': true,
        debug: false,
        native: false,
        openBrowser: null,
        o: null,
        open: null,
        'open-browser': null,
        root: '/Users/sisir/code/deckun/epic-guide-reliability/.docz',
        base: '/',
        source: './',
        'gatsby-root': null,
        files: '**/*.{md,markdown,mdx}',
        public: '/public',
        dest: '.docz/dist',
        d: '.docz/dist',
        editBranch: 'master',
        eb: 'master',
        'edit-branch': 'master',
        config: '',
        title: 'Docz Example Typescript',
        description: 'My awesome app using docz',
        host: 'localhost',
        port: 3001,
        p: 3000,
        separator: '-',
        paths: {
          root: '/Users/sisir/code/deckun/epic-guide-reliability',
          templates:
            '/Users/sisir/code/deckun/epic-guide-reliability/node_modules/docz-core/dist/templates',
          docz: '/Users/sisir/code/deckun/epic-guide-reliability/.docz',
          cache: '/Users/sisir/code/deckun/epic-guide-reliability/.docz/.cache',
          app: '/Users/sisir/code/deckun/epic-guide-reliability/.docz/app',
          appPackageJson:
            '/Users/sisir/code/deckun/epic-guide-reliability/package.json',
          appTsConfig:
            '/Users/sisir/code/deckun/epic-guide-reliability/tsconfig.json',
          gatsbyConfig:
            '/Users/sisir/code/deckun/epic-guide-reliability/gatsby-config.js',
          gatsbyBrowser:
            '/Users/sisir/code/deckun/epic-guide-reliability/gatsby-browser.js',
          gatsbyNode:
            '/Users/sisir/code/deckun/epic-guide-reliability/gatsby-node.js',
          gatsbySSR:
            '/Users/sisir/code/deckun/epic-guide-reliability/gatsby-ssr.js',
          importsJs:
            '/Users/sisir/code/deckun/epic-guide-reliability/.docz/app/imports.js',
          rootJs:
            '/Users/sisir/code/deckun/epic-guide-reliability/.docz/app/root.jsx',
          indexJs:
            '/Users/sisir/code/deckun/epic-guide-reliability/.docz/app/index.jsx',
          indexHtml:
            '/Users/sisir/code/deckun/epic-guide-reliability/.docz/app/index.html',
          db:
            '/Users/sisir/code/deckun/epic-guide-reliability/.docz/app/db.json',
        },
      },
    },
  ],
}

const merge = mergeWith((objValue, srcValue) => {
  if (Array.isArray(objValue)) {
    return objValue.concat(srcValue)
  }
})

module.exports = merge(config, custom)
