import express from 'express';
import {Nuxt, Builder} from 'nuxt';
import nuxtConfig from './nuxt.config.js';

const nuxt = new Nuxt(nuxtConfig);
const builder = new Builder(nuxt);

const server = express();

const listenPort = 3009;

Promise.resolve().then(async function() {
    builder.build();

    server.use(nuxt.render);

    server.listen(listenPort);
});