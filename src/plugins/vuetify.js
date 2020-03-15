import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    options: {
      customProperties: true,
    },
    themes: {
      light: {
        primary: '#9b59b6',
        secondary: '#2c3e50',
        accent: '#7f8c8d',
        background: '#95a5a6',
        error: '#FF5252',
        info: '#2196F3',
        success: '#4CAF50',
        warning: '#FFC107',

      },
    },
  },
  icons: {
    iconfont: 'fa',
  },
});
