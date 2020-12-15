<template>
  <div class="container">
    <h3>Personal Data</h3>
    <form @input="submit" class="">
      <input v-model="form.fullName" type="text" placeholder="Full-name" />
      <input v-model="form.birthDate" type="text" placeholder="birth-date" />
      <input v-model=" form.id" type="text" placeholder="id" disabled />
      <input v-model="form.gender" type="text" placeholder="gender" />
    </form>
  </div>
</template>



<script>
export default {
  name: "PersonalDataForm",
  props: {
    masterData: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      form: {
        id: this.masterData.loginData.id,
        fullName: null,
        birthDate: null,
        gender: null,
      },
    };
  },
  validations: {},
  methods: {
    submit() {
      this.$emit("update", {
        data: {
          personalData: {
            id: this.form.id,
            fullName:this.form.fullName,
            birthDate:this.form.birthDate,
            gender:this.form.gender,
          },
        },
      });
    },
  },
  computed: {},
};
</script>