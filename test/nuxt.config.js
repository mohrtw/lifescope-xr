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

  build: {
    vendor: [
      'aframe',
      'aframe-layout-component',
      'aframe-geojson-component',
      'lifescope-objects'
    ]
  },
  plugins: [
    '~/plugins/geojson-plugin.js'
  ],
  babel: {
    presets: ['es2015', 'stage-3']
  }
}