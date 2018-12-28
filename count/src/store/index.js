import Vue from 'vue';
import Vuex from 'vuex';
import createLogger from 'vuex/dist/logger';
import app from './modules/app';

Vue.use(Vuex);

export default new Vuex.Store({
    modules:{
        app
    },
    state:{
        a:100,
        b:200
    },
    plugins:[createLogger()]
})