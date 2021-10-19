<template>
  <section id="wbc-register">
    <b-row>
      <b-col cols="12">
        <b-card no-body>
          <b-card-header class="border-bottom">
            <b-card-title>
              新規ユーザ登録
            </b-card-title>
          </b-card-header >
          <b-card-body class="mt-2">
            <div class="d-flex mb-2">
              <b-img :src="require('@/assets/images/profile/user-uploads/user-02.jpg')" rounded class="mr-2" width="300" height="300" />
              <div class="d-flex align-items-end mt-75 ms-1">
                <div>
                  <label for="user-avatar-upload" class="btn btn-sm btn-primary mb-75 mr-1">アップロード</label>
                  <input type="file" id="user-avatar-upload" hidden accept="image/*" />
                  <b-button
                    variant="outline-primary"
                    size="sm"
                    class="mb-75"
                  >
                    リセット
                  </b-button>
                  <p class="mb-0">許可されるファイルタイプ: png, jpg, jpeg.</p>
                </div>
              </div>
            </div>
            <b-form @submit.prevent>
              <b-row>
                <b-col md="6">
                  <b-form-group
                    label="社員ID（ログインID）"
                    label-for="employee-id"
                  >
                    <b-form-input
                      id="employee-id"
                      placeholder="社員ID"
                    />
                  </b-form-group>
                </b-col>
                <b-col md="6">
                  <b-form-group
                    label="ユーザ名"
                    label-for="username"
                  >
                    <b-form-input
                      id="username"
                      placeholder="ユーザ名"
                    />
                  </b-form-group>
                </b-col>
                <b-col md="6">
                  <b-form-group
                    label="メールアドレス"
                    label-for="email-address"
                  >
                    <b-form-input
                      id="email-address"
                      type="email"
                      placeholder="メールアドレス"
                    />
                  </b-form-group>
                </b-col>
                <b-col md="6">
                  <b-form-group
                    label="パスワード"
                    label-for="password"
                  >
                    <b-form-input
                      type="password"
                      id="password"
                      placeholder="パスワード"
                    />
                  </b-form-group>
                </b-col>
                <b-col md="6">
                  <b-form-group
                    label="入社日"
                    label-for="hire-date"
                  >
                    <b-form-input
                      id="hire-date"
                      placeholder="入社日"
                    />
                  </b-form-group>
                </b-col>
                <b-col md="6">
                  <b-form-group
                    label="退社日"
                    label-for="leaving-date"
                  >
                    <b-form-input
                      id="leaving-date"
                      placeholder="退社日"
                    />
                  </b-form-group>
                </b-col>
                <b-col md="6">
                  <b-form-group
                    label="所属部署"
                    label-for="department"
                  >
                    <b-form-select
                      id="department"
                      placeholder="所属部署"
                      :options="departmentOptions"
                    />
                  </b-form-group>
                </b-col>
                <b-col md="6">
                  <b-form-group
                    label="役職"
                    label-for="director"
                  >
                    <b-form-select
                      id="director"
                      placeholder="役職"
                      :options="directorOptions"
                    />
                  </b-form-group>
                </b-col>
                <b-col md="6">
                  <b-form-group
                    label="等級"
                    label-for="grade"
                  >
                    <b-form-input
                      id="grade"
                      placeholder="等級"
                    />
                  </b-form-group>
                </b-col>
                <b-col md="6">
                  <b-form-group
                    label="所属サークル"
                    label-for="affiliation-circle"
                  >
                    <b-form-input
                      id="affiliation-circle"
                      placeholder="所属サークル"
                    />
                  </b-form-group>
                </b-col>
                <b-col md="6">
                  <b-form-group
                    label="備考"
                    label-for="remarks"
                  >
                    <b-form-textarea
                      id="remarks"
                      placeholder="備考"
                      rows="10"
                    />
                  </b-form-group>
                </b-col>
                <b-col md="6">
                  <b-form-group
                    label="自分の目標"
                    label-for="mygoal"
                  >
                    <b-form-textarea
                      id="mygoal"
                      placeholder="自分の目標"
                      rows="10"
                    />
                  </b-form-group>
                </b-col>
                <b-col cols="12" class="mt-1">
                  <b-button
                    v-ripple.400="'rgba(255, 255, 255, 0.15)'"
                    type="submit"
                    variant="primary"
                    class="mr-1"
                  >
                    登録
                  </b-button>
                  <b-button
                    v-ripple.400="'rgba(186, 191, 199, 0.15)'"
                    type="reset"
                    variant="outline-secondary"
                  >
                    破棄
                  </b-button>
                </b-col>
              </b-row>
            </b-form>
          </b-card-body>
        </b-card>
      </b-col>
    </b-row>
  </section>
</template>

<script>
import { 
  BRow, 
  BCol, 
  BCard, 
  BCardHeader, 
  BCardBody, 
  BCardTitle, 
  BButton, 
  BFormInput, 
  BFormGroup, 
  BFormSelect, 
  BForm, 
  BFormTextarea,
  BImg
} from 'bootstrap-vue'
import Ripple from 'vue-ripple-directive'

export default {
  components: {
    BRow,
    BCol,
    BCard,
    BCardHeader,
    BCardBody,
    BCardTitle,
    BButton,
    BFormInput,
    BFormGroup,
    BFormSelect,
    BFormTextarea,
    BForm,
    BImg
  },
  directives: {
    Ripple
  },
  data() {
    return {
      departmentOptions: [
        "部署",
        "部署1",
        "部署1",
        "部署1",
        "部署1",
        "部署1",
        "部署1",
      ],
      directorOptions: [
        "役職",
        "役職1",
        "役職1",
        "役職1",
        "役職1",
        "役職1",
        "役職1",
      ],
    }
  },
  created() {

  },
}
</script>

<style lang="scss">
</style>
