module.exports = {
    title: 'Bliss Jaspis',
    description: 'Blog pribadi dalam menuangkan keluh kesah di dalam dunia Computer Science.',
    markdown: {
        lineNumbers: true
    },
    themeConfig: {
        nav: [
            {
                text: 'Laravel', link: '/laravel/'
            },
            {
                text: 'Elixir', link: '/elixir/'
            },
            {
                text: 'Haskell', link: '/haskell/'
            },
            {
                text: 'Python', link: '/python/'
            },
            {
                text: 'Dart', link: '/dart/'
            }
        ],
        docsRepo: 'blissjaspis/jaspis',
        docsDir: '',
        docsBranch: 'master',
        editLinks: true,
        editLinkText: 'Help us improve this page!'
    },
}