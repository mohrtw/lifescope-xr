import Vue from 'vue'
const {resolve} = require('path');

const gallery = require(resolve(__dirname, 'components/gallery.vue'));

// import carousel from '../components/carousel/carousel.vue'
// import map from '../components/map/map.vue'

Vue.component('gallery', gallery);
// Vue.component('carousel', carousel);
// Vue.component('map', map);

export default async function ({ router, store }) {

}