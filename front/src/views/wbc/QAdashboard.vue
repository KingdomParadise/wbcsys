<template>
  <section id="wbc-qa-dashboard">
    <b-row>
      <b-col cols="12">
        <b-card no-body>
          <b-card-body>
            <b-row>
              <b-col sm="3">
                <b-input-group class="input-group-merge">
                  <b-form-input placeholder="Search Product" />
                  <b-input-group-append is-text>
                    <feather-icon icon="SearchIcon" />
                  </b-input-group-append>
                </b-input-group>
              </b-col>
            </b-row>
            <b-row class="mt-3">
              <b-col sm="8">
                <div class="qa-textarea p-1">
                  <b-form-textarea
                    id="textarea-default"
                    class="mb-1"
                    placeholder="質問内容"
                    rows="5"
                  />
                  <b-row>
                    <b-col lg="7">
                      <b-button-group
                        size="sm"
                      >
                        <b-button
                          v-ripple.400="'rgba(113, 102, 240, 0.15)'"
                          variant="outline-primary"
                        >
                          タグ
                        </b-button>
                        <b-button
                          v-ripple.400="'rgba(113, 102, 240, 0.15)'"
                          variant="outline-primary"
                        >
                          タグ1
                        </b-button>
                        <b-button
                          v-ripple.400="'rgba(113, 102, 240, 0.15)'"
                          variant="outline-primary"
                        >
                          タグ2
                        </b-button>
                        <b-button
                          v-ripple.400="'rgba(113, 102, 240, 0.15)'"
                          variant="outline-primary"
                        >
                          タグ3
                        </b-button>
                      </b-button-group>
                    </b-col>
                    <b-col lg="5">
                      <div class="d-flex align-items-center">
                        <feather-icon class="mr-2" icon="UploadIcon"></feather-icon>
                        <b-form-checkbox
                          v-model="selected"
                          value=""
                          class="custom-control-primary"
                        >
                          匿名投稿
                        </b-form-checkbox>
                        <b-button size="sm" class="ml-auto" variant="outline-primary">
                          送信
                        </b-button>
                      </div>
                    </b-col>
                  </b-row>
                </div>
              </b-col>
            </b-row>
          </b-card-body>
        </b-card>
        <b-card no-body>
          <b-card-body>
            <app-collapse accordion>
              <app-collapse-item title="Accordion Item 1">
                Cheesecake cotton candy bonbon muffin cupcake tiramisu croissant. Tootsie roll sweet candy bear claw chupa chups lollipop toffee. Macaroon donut liquorice powder candy carrot cake macaroon fruitcake. Cookie toffee lollipop cotton candy ice cream dragée soufflé. Cake tiramisu lollipop wafer pie soufflé dessert tart. Biscuit ice cream pie apple pie topping oat cake dessert. Soufflé icing caramels. Chocolate cake icing ice cream macaroon pie cheesecake liquorice apple pie.
              </app-collapse-item>
              <app-collapse-item title="Accordion Item 2">
                Cheesecake cotton candy bonbon muffin cupcake tiramisu croissant. Tootsie roll sweet candy bear claw chupa chups lollipop toffee. Macaroon donut liquorice powder candy carrot cake macaroon fruitcake. Cookie toffee lollipop cotton candy ice cream dragée soufflé. Cake tiramisu lollipop wafer pie soufflé dessert tart. Biscuit ice cream pie apple pie topping oat cake dessert. Soufflé icing caramels. Chocolate cake icing ice cream macaroon pie cheesecake liquorice apple pie.
              </app-collapse-item>
              <app-collapse-item title="Accordion Item 3">
                Cheesecake cotton candy bonbon muffin cupcake tiramisu croissant. Tootsie roll sweet candy bear claw chupa chups lollipop toffee. Macaroon donut liquorice powder candy carrot cake macaroon fruitcake. Cookie toffee lollipop cotton candy ice cream dragée soufflé. Cake tiramisu lollipop wafer pie soufflé dessert tart. Biscuit ice cream pie apple pie topping oat cake dessert. Soufflé icing caramels. Chocolate cake icing ice cream macaroon pie cheesecake liquorice apple pie.
              </app-collapse-item>
              <app-collapse-item title="Accordion Item 4">
                Cheesecake cotton candy bonbon muffin cupcake tiramisu croissant. Tootsie roll sweet candy bear claw chupa chups lollipop toffee. Macaroon donut liquorice powder candy carrot cake macaroon fruitcake. Cookie toffee lollipop cotton candy ice cream dragée soufflé. Cake tiramisu lollipop wafer pie soufflé dessert tart. Biscuit ice cream pie apple pie topping oat cake dessert. Soufflé icing caramels. Chocolate cake icing ice cream macaroon pie cheesecake liquorice apple pie.
              </app-collapse-item>
            </app-collapse>
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
  BButtonGroup,
  BFormInput, 
  BFormGroup, 
  BFormSelect, 
  BForm, 
  BFormTextarea,
  BInputGroup,
  BInputGroupAppend,
  BTabs,
  BTab,
  BFormCheckbox
} from 'bootstrap-vue'
import Ripple from 'vue-ripple-directive'

import AppCollapse from '@core/components/app-collapse/AppCollapse.vue'
import AppCollapseItem from '@core/components/app-collapse/AppCollapseItem.vue'

export default {
  components: {
    BRow,
    BCol,
    BCard,
    BCardHeader,
    BCardBody,
    BCardTitle,
    BButton,
    BButtonGroup,
    BFormInput,
    BFormGroup,
    BFormSelect,
    BFormTextarea,
    BForm,
    BInputGroup,
    BInputGroupAppend,
    BTabs,
    BTab,
    BFormCheckbox,
    AppCollapse,
    AppCollapseItem,
  },
  directives: {
    Ripple,
  },
  data() {
    return {
      selected: true,
    }
  },
  created() {

  },
}
</script>

<style lang="scss">
@import '@core/scss/vue/libs/chart-apex.scss';
.qa-textarea {
  border: 1px solid #d8d6de;
  border-radius: 0.35rem;
}
.QA-textarea-outline{
	padding: 0.571rem 1rem;
	margin-top:1.5vw;
	display: flex;
}
.QA-textarea{
	border: 1px solid #d8d6de;
	border-radius: 0.357rem;
}
.QA-textarea-btngroup{
	margin-top:1vw;
	margin-bottom:0.3vw;
}
.QA-textarea-btngroup .btnrow .btn-group .btn{
	margin-top:0.4rem;
	margin-bottom:0.4rem;
	padding: 0.1rem 0.5rem !important;
	border-color: #d8d6de !important;
	color:#454447;
}
.QA-textarea-btngroup .processbtn .uploadbtn{
	margin-right: 1rem;
}
.QA-textarea-btngroup .processbtn button{
	margin-top:0.4rem;
	margin-bottom:0.4rem;
	padding-top: 0.2rem !important;
	padding-bottom: 0.2rem !important;
	border-color: #d8d6de !important;
	color:#454447;
	float:right;
}
.user-info-sub{
	margin-left: 5vw;
}
.nitanda-name, .nitanda-fix{
	color: rgb(0, 131, 218);
}
.nitanda-fix{
	cursor:pointer;
}
.nitanda-delete{
	color: rgb(243, 45, 45);
	cursor: pointer;
}
.nitanda-sublist{
	margin-bottom:2.5vw;
}
.nitanda-subinfo{
	margin-left:3vw;
}
.score, .favourite, .showallcomments, .fix, .delete{
	cursor:pointer;
}
.score:hover, .favourite:hover, .showallcomments:hover{
	color:rgb(3, 3, 3);
	font-weight: 600;
}
.fix:hover, .delete:hover{
	font-weight: 600;
}
.user-info p span{
	margin-left:1.5vw;
}
.list-adjust{
	margin-bottom: 2vw !important;
}
.checkbox-adjust{
	display: inline-block;
	padding-top: 0.5vw;
	margin-right:2vw;
}
.history-list{
	max-height: 10vw;
	overflow-y:scroll;
}

</style>
