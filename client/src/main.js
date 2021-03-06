// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api
import { library } from '@fortawesome/fontawesome-svg-core';
import { faMapMarkedAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import DefaultLayout from '~/layouts/Default.vue'
import './styles/theme/theme.scss'

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
  head.meta.push(
    {
      name: "google-site-verification",
      content: "-DHI0MeNsBW2unPUGPs6_DCB72kCd-VryHE2JQ1sijM",
    },
  );
  // FontAwesome
  library.add(faMapMarkedAlt);
  Vue.component('font-awesome-icon', FontAwesomeIcon);
}
