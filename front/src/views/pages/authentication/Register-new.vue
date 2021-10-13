<template>
  <layout-horizontal>

    <router-view />

    <app-customizer
      v-if="showCustomizer"
      slot="customizer"
    />
  </layout-horizontal>
</temp:


<script>
import LayoutHorizontal from '@core/layouts/layout-horizontal/LayoutHorizontal.vue'
import LayoutVertical from '@core/layouts/layout-vertical/LayoutVertical.vue'
import AppCustomizer from '@core/layouts/components/app-customizer/AppCustomizer.vue'
import { $themeConfig } from '@themeConfig'

export default {
  components: {
    LayoutVertical,
    LayoutHorizontal,
    AppCustomizer,
  },
  data() {
    return {
      showCustomizer: $themeConfig.layout.customizer,
    }
  },
  mounted() {
    const scripts = [
      'assets/app-assets/vendors/js/vendors.min.js',
      'assets/app-assets/vendors/js/forms/select/select2.full.min.js',
      'assets/app-assets/vendors/js/extensions/sweetalert2.all.min.js',
      'assets/app-assets/vendors/js/forms/validation/jquery.validate.min.js',
      'assets/app-assets/vendors/js/forms/cleave/cleave.min.js',
      'assets/app-assets/vendors/js/forms/cleave/addons/cleave-phone.us.js',
      'assets/app-assets/js/core/app-menu.js',
      'assets/app-assets/js/core/app.js',
      'assets/app-assets/js/scripts/pages/page-account-settings-account.js',
    ]
    scripts.forEach(script => {
      const externalScript = document.createElement('script')
      externalScript.setAttribute('src', script)
      document.head.appendChild(externalScript)
    })
  },
}
</script>


<style lang="scss">

// @import '@core/scss/vue/pages/page-auth.scss';

/* Vendor CSS */
@import '../../../assets/app-assets/vendors/css/vendors.min.css';
@import '../../../assets/app-assets/vendors/css/forms/select/select2.min.css';
@import '../../../assets/app-assets/vendors/css/animate/animate.min.css';
@import '../../../assets/app-assets/vendors/css/extensions/sweetalert2.min.css';

/* Theme CSS */
@import '../../../assets/app-assets/css/bootstrap.css';
@import '../../../assets/app-assets/css/bootstrap-extended.css';
@import '../../../assets/app-assets/css/colors.css';
@import '../../../assets/app-assets/css/components.css';
@import '../../../assets/app-assets/css/themes/dark-layout.css';
@import '../../../assets/app-assets/css/themes/bordered-layout.css';
@import '../../../assets/app-assets/css/themes/semi-dark-layout.css';

/* Page CSS */
@import '../../../assets/app-assets/css/core/menu/menu-types/vertical-menu.css';
@import '../../../assets/app-assets/css/plugins/forms/form-validation.css';
@import '../../../assets/app-assets/css/pages/authentication.css';

/* Custom CSS */
@import '../../../assets/app-assets/css/style.css';

</style>

