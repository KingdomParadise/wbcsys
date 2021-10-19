<template>
  <b-nav-item-dropdown
    right
    toggle-class="d-flex align-items-center dropdown-user-link"
    class="dropdown-user"
  >
    <template #button-content>
      <div class="d-sm-flex d-none user-nav ml-2">
        <p class="user-name font-weight-bolder mb-0">
          
        </p>
        <span class="user-status">
          {{userData ? userData.employee_name : ''}}
        </span>
      </div>
      <b-avatar
        size="40"
        variant="light-primary"
        badge
        class="badge-minimal"
        badge-variant="success"
      >
        <feather-icon
          icon="UserIcon"
          size="22"
        />
      </b-avatar>
    </template>

    <b-dropdown-item
      link-class="d-flex align-items-center"
    >
      <feather-icon
        size="16"
        icon="UserIcon"
        class="mr-50"
      />
      <span>プロフィール</span>
    </b-dropdown-item>
    <b-dropdown-item
      link-class="d-flex align-items-center"
    >
      <feather-icon
        size="16"
        icon="SettingsIcon"
        class="mr-50"
      />
      <span>設定</span>
    </b-dropdown-item>
    <b-dropdown-item
      link-class="d-flex align-items-center"
      @click="logout"
    >
      <feather-icon
        size="16"
        icon="LogOutIcon"
        class="mr-50"
      />
      <span>ログアウト</span>
    </b-dropdown-item></b-nav-item-dropdown>
</template>

<script>
import {
  BNavItemDropdown, BDropdownItem, BDropdownDivider, BAvatar,
} from 'bootstrap-vue'
import Cookies from 'js-cookie'
import { mapGetters } from 'vuex'

export default {
  components: {
    BNavItemDropdown,
    BDropdownItem,
    BDropdownDivider,
    BAvatar,
  },
  data() {
    return {
    }
  },
  computed: {
    ...mapGetters({
      userData: 'auth/user'
    })
  },
  methods: {
    logout() {
      this.$store.dispatch('auth/logout')
    },
  },
  mounted() {
    this.$store.dispatch('auth/getUser')
  }
}
</script>
