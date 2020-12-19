<template>
  <div>

    <div class="container">
      <keep-alive>
        <component
          ref="currentStep"
          :is="currentStep"
          @update="processStep"
          :masterData="formData.loginData"
        >
        </component>
      </keep-alive>
    </div>

    <div class="container">
      <div class="progress">
        <div
          class="progress-bar"
          role="progressbar"
          :style="`width: ${progress}%;`"
          aria-valuenow="100"
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>
      </div>
    </div>

    <div class="container">
      <button @click="goPrevStep" class="btn-outlined">Go Back</button>
      <button @click="goNextStep" class="btn">Go Next</button>
    </div>

    <pre><code>{{currentStep}} is Step {{currentStepNumber}}</code></pre>
    <pre><code>{{formData}}</code></pre>
  </div>
</template>



<script>
//import LoginDataForm from "./Steps/LoginDataForm.vue";
import PersonalDataForm from "./Steps/PersonalDataForm.vue";
import ContactDataForm from "./Steps/ContactDataForm.vue";
import OtherDataForm from "./Steps/OtherDataForm.vue";


export default {
  name: "MasterForm",
  components: {
  //  LoginDataForm,
    PersonalDataForm,
    ContactDataForm,
    OtherDataForm,
  },
  data() {
    return {
      currentStepNumber: 1,
      steps: [
        //"LoginDataForm",
        "PersonalDataForm",
        "ContactDataForm",
        "OtherDataForm",
      ],
      formData: {
        loginData: this.$route.params.data.loginData,
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
    goNextStep() {
      this.currentStepNumber += 1;
    },
    goPrevStep() {
      this.currentStepNumber -= 1;
    },
  },
  computed: {
    progress() {
      return (this.currentStepNumber / this.length) * 100;
    },
    currentStep() {
      //retorna el nombre del componente..(loginDataForm, PersonalDataForm,....)
      return this.steps[this.currentStepNumber - 1];
    },
    length() {
      return this.steps.length;
    },
    type(){
      return typeof(this.formData.loginData);
    }
  },
};
</script>