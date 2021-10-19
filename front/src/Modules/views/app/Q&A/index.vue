<template>
  <section id="qa">
    <qa-question></qa-question>
    <qa-answers></qa-answers>
  </section>
</template>
<script>
import { defineComponent } from '@vue/composition-api'
import QaAnswers from '@/Modules/components/app/Q&A/AnswersInfo.vue'
import QaQuestion from "@/Modules/components/app/Q&A/QuestionInfo.vue"

export default defineComponent({
  components: {
    QaQuestion,
    QaAnswers
  },
  setup() {
    
  },
})
</script>
