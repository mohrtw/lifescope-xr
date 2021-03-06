import Vue from 'vue';
import VueRouter from 'vue-router';
import store from './store';
import { VueHammer } from 'vue2-hammer';

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import './lib/three/three';
import BufferGeometryUtils from './lib/three/BufferGeometryUtils';
THREE.BufferGeometryUtils = BufferGeometryUtils;

import io from 'socket.io-client';
import 'aframe';
import 'networked-aframe';
import 'aframe-extras';
import 'aframe-font-awesome';
import 'aframe-gui';
import 'aframe-input-mapping-component';
import 'aframe-super-keyboard';
import 'aframe-sun-sky';
import 'aframe-teleport-controls';

import 'nipplejs';
import 'particles.js';
import WebFont from 'webfontloader';

window.WebFont = WebFont;

import { registerAframeComponents } from './components/aframe/index.js';
import './directives';

import setupFontAwesome from './util/setupFontAwesome.js';
import registerAframeInput from './controls/registerAframeInput.js';

import App from './App.vue';

registerAframeComponents();
setupFontAwesome();
registerAframeInput();
const ICE_SERVERS = Object.keys(CONFIG.iceServers).map(x => CONFIG.iceServers[x]);
NAF.adapters.setIceServers(ICE_SERVERS);

Vue.use(VueRouter);
var router = new VueRouter({
  mode: 'history',
  routes: []
});

// ignore elements for Firefox
// core elements
['a-scene', 'a-assets', 'a-entity'].forEach((val,index) => {Vue.config.ignoredElements.push(val)});
// primitives
Object.keys(AFRAME.primitives.primitives).forEach(function(key,index) {
  Vue.config.ignoredElements.push(key);
});


// mobile swipe controls
Vue.use(VueHammer);

var app = new Vue({
    el: '#app',
    store,
    router: router,
    render: h => h(App)
  });
  