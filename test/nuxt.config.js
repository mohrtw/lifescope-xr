export default {
  /*
  ** Headers of the page
  */
  head: {
    title: 'LIFESCOPE',
    description: 'LIFESCOPE XR Test',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '{{escape description }}' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  /*
  ** Customize the progress bar color
  */
  loading: { color: '#2ac1de' },

  babel: {
    presets: ['es2015', 'stage-3']
  },
 modules: [
   '../lib/modules.js'
 ]
}