<template>
  <div>
    <login-data-form v-if="currentStep === 1" @update="processStep">
    </login-data-form>

    <personal-data-form
      v-if="currentStep === 2"
      @update="processStep"
      :masterData="formData"
    ></personal-data-form>

    <contact-data-form
      v-if="currentStep === 3"
      @update="processStep"
    ></contact-data-form>

    <other-data-form
      v-if="currentStep=== 4"
      @update="processStep"
    ></other-data-form>

    <div class="progress-bar">
      <div :style="`width: ${progress}%;`"></div>
    </div>

    <div class="container">
      <button @click="decreaseStep" class="btn-outlined">Go Back</button>
      <button @click="increaseStep" class="btn">Go Next</button>
    </div>

    <pre><code>{{currentStep}}</code></pre>
    <pre><code>{{formData}}</code></pre>
  </div>
</template>



<script>
import ContactDataForm from "./ContactDataForm.vue";
import LoginDataForm from "./LoginDataForm.vue";
import OtherDataForm from "./OtherDataForm.vue";
import PersonalDataForm from "./PersonalDataForm.vue";

export default {
  name: "MasterForm",
  components: {
    LoginDataForm,
    PersonalDataForm,
    ContactDataForm,
    OtherDataForm,
  },
  data() {
    return {
      currentStep: 1,
      formData: {
        loginData: null,
        personalData: null,
        contactData: null,
        otherData: null,
      },
    };
  },
  validations: {},
  methods: {
    processStep(step) {
      console.log("here processing some steps!!");
      Object.assign(this.formData, step.data);
    },
    increaseStep() {
      this.currentStep += 1;
    },
    decreaseStep() {
      this.currentStep -= 1;
    },
  },
  computed: {
    progress() {
      return (this.currentStep / 4) * 100;
    },
  },
};
</script>