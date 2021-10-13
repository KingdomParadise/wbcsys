<template>
  <div class="app-content ">
    <div class="content-overlay" />
    <div class="header-navbar-shadow" />
    <div class="content-wrapper">
      <div class="content-header row" />
      <div class="content-body">
        <div class="auth-wrapper auth-basic">
          <div class="auth-inner my-2">
            <!-- Login basic -->
            <div class="card mb-0">
              <div class="card-body">
                
                <!-- Brand logo-->
                <b-link class="brand-logo">
                  <vuexy-logo />
                  <h2 class="brand-text text-primary ms-1">
                    WBC
                  </h2>
                </b-link>
                <!-- /Brand logo-->
                <h4 class="card-title mb-1">
                  WBCシステムへようこそ！ 👋
                </h4>

                <!-- <form
                  class="auth-login-form mt-2"
                  action="dashboard.html"
                  method="POST"
                >
                  <div class="mb-1">
                    <label
                      for="login-email"
                      class="form-label"
                    >ログインID（社員番号）</label>
                    <input
                      id="login_id"
                      type="text"
                      class="form-control"
                      name="login_id"
                      placeholder=""
                      aria-describedby="login-email"
                      tabindex="1"
                      autofocus
                    >
                  </div>

                  <div class="mb-1">
                    <div class="d-flex justify-content-between">
                      <label
                        class="form-label"
                        for="login-password"
                      >パスワード</label>
                    </div>
                    <div class="input-group input-group-merge form-password-toggle">
                      <input
                        id="login_pwd"
                        type="password"
                        class="form-control form-control-merge"
                        name="login_pwd"
                        tabindex="2"
                        placeholder="&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;"
                        aria-describedby="login-password"
                      >
                      <span class="input-group-text cursor-pointer"><i data-feather="eye" /></span>
                    </div>
                  </div>
                  <button
                    class="btn btn-primary w-100"
                    tabindex="4"
                    style="margin-bottom:20px; margin-top:20px;"
                  >
                    ログイン
                  </button>
                </form> -->
                <validation-observer
                  ref="loginForm"
                  #default="{invalid}"
                >
                  <b-form
                    class="auth-login-form mt-2"
                    @submit.prevent="login"
                  >
                    <!-- email -->
                    <b-form-group
                      label="ログインID（社員番号）"
                      label-for="login-email"
                    >
                      <validation-provider
                        #default="{ errors }"
                        name="Email"
                        vid="email"
                        rules="required|email"
                      >
                        <b-form-input
                          id="login-email"
                          v-model="userEmail"
                          :state="errors.length > 0 ? false:null"
                          name="login-email"
                          placeholder="john@example.com"
                        />
                        <small class="text-danger">{{ errors[0] }}</small>
                      </validation-provider>
                    </b-form-group>

                    <!-- forgot password -->
                    <b-form-group>
                      <div class="d-flex justify-content-between">
                        <label for="login-password">パスワード</label>
                      </div>
                      <validation-provider
                        #default="{ errors }"
                        name="Password"
                        vid="password"
                        rules="required"
                      >
                        <b-input-group
                          class="input-group-merge"
                          :class="errors.length > 0 ? 'is-invalid':null"
                        >
                          <b-form-input
                            id="login-password"
                            v-model="password"
                            :state="errors.length > 0 ? false:null"
                            class="form-control-merge"
                            :type="passwordFieldType"
                            name="login-password"
                            placeholder="Password"
                          />
                          <b-input-group-append is-text>
                            <feather-icon
                              class="cursor-pointer"
                              :icon="passwordToggleIcon"
                              @click="togglePasswordVisibility"
                            />
                          </b-input-group-append>
                        </b-input-group>
                        <small class="text-danger">{{ errors[0] }}</small>
                      </validation-provider>
                    </b-form-group>

                    <!-- submit buttons -->
                    <b-button
                      type="submit"
                      variant="primary"
                      block
                      :disabled="invalid"
                    >
                      ログイン
                    </b-button>
                  </b-form>
                </validation-observer>
              </div>
            </div>
            <!-- /Login basic -->
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable global-require */
import { ValidationProvider, ValidationObserver } from 'vee-validate'
import VuexyLogo from '@core/layouts/components/Logo.vue'
import {
  BRow, BCol, BLink, BFormGroup, BFormInput, BInputGroupAppend, BInputGroup, BFormCheckbox, BCardText, BCardTitle, BImg, BForm, BButton, BAlert, VBTooltip,
} from 'bootstrap-vue'
import { required, email } from '@validations'
import ToastificationContent from '@core/components/toastification/ToastificationContent.vue'
import { togglePasswordVisibility } from '@core/mixins/ui/forms'
import useJwt from '@/auth/jwt/useJwt'
import store from '@/store/index'
import { getHomeRouteForLoggedInUser } from '@/auth/utils'

export default {

  name: 'Login',
  directives: {
    'b-tooltip': VBTooltip,
  },
  components: {
    BRow,
    BCol,
    BLink,
    BFormGroup,
    BFormInput,
    BInputGroupAppend,
    BInputGroup,
    BFormCheckbox,
    BCardText,
    BCardTitle,
    BImg,
    BForm,
    BButton,
    BAlert,
    VuexyLogo,
    ValidationProvider,
    ValidationObserver,
  },
  mixins: [togglePasswordVisibility],
  data() {
    return {
      status: '',
      password: 'admin',
      userEmail: 'admin@demo.com',
      sideImg: require('@/assets/images/pages/login-v2.svg'),

      // validation rules
      required,
      email,
    }
  },
  mounted() {
    const scripts = [
      'assets/app-assets/vendors/js/vendors.min.js',
      'assets/app-assets/vendors/js/forms/validation/jquery.validate.min.js',
      'assets/app-assets/js/core/app-menu.js',
      'assets/app-assets/js/core/app.js',
      'assets/app-assets/js/scripts/pages/auth-login.js',
    ]
    scripts.forEach(script => {
      const externalScript = document.createElement('script')
      externalScript.setAttribute('src', script)
      document.head.appendChild(externalScript)
    })
  },
  beforeMount() {
    // this.feather()
  },
    computed: {
    passwordToggleIcon() {
      return this.passwordFieldType === 'password' ? 'EyeIcon' : 'EyeOffIcon'
    },
    imgUrl() {
      if (store.state.appConfig.layout.skin === 'dark') {
        // eslint-disable-next-line vue/no-side-effects-in-computed-properties
        this.sideImg = require('@/assets/images/pages/login-v2-dark.svg')
        return this.sideImg
      }
      return this.sideImg
    },
  },
  methods: {
    login() {
      this.$refs.loginForm.validate().then(success => {
        if (success) {
          useJwt.login({
            email: this.userEmail,
            password: this.password,
          })
            .then(response => {
              const { userData } = response.data
              useJwt.setToken(response.data.accessToken)
              useJwt.setRefreshToken(response.data.refreshToken)
              localStorage.setItem('userData', JSON.stringify(userData))
              this.$ability.update(userData.ability)

              // ? This is just for demo purpose as well.
              // ? Because we are showing eCommerce app's cart items count in navbar
              this.$store.commit('app-ecommerce/UPDATE_CART_ITEMS_COUNT', userData.extras.eCommerceCartItemsCount)

              // ? This is just for demo purpose. Don't think CASL is role based in this case, we used role in if condition just for ease
              this.$router.replace(getHomeRouteForLoggedInUser(userData.role))
                .then(() => {
                  this.$toast({
                    component: ToastificationContent,
                    position: 'top-right',
                    props: {
                      title: `Welcome ${userData.fullName || userData.username}`,
                      icon: 'CoffeeIcon',
                      variant: 'success',
                      text: `You have successfully logged in as ${userData.role}. Now you can start to explore!`,
                    },
                  })
                })
            })
            .catch(error => {
              this.$refs.loginForm.setErrors(error.response.data.error)
            })
        }
      })
    },
  },
}
</script>

<style lang="scss">

@import '@core/scss/vue/pages/page-auth.scss';

/* Vendor CSS */
@import '../../../assets/app-assets/vendors/css/vendors.min.css';

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
