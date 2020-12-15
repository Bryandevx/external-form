<template>
  <div class="container">
    <h3>Contact Data</h3>
    <form @input="submit">
      <input v-model="form.email" type="text" placeholder="email " />
      <input v-model="form.phone" type="text" placeholder="phone" />
      <input v-model="form.address" type="text" placeholder="address" />
    </form>
  </div>
</template>



<script>
export default {
  name: "ContactDataForm",
  data() {
    return {
      form: {
        email: null,
        phone: null,
        address: null,
      },
    };
  },
  methods: {
    submit() {
      this.$emit("update", {
        data: {
          contactData: {
            email: this.form.email,
            phone: this.form.phone,
            address: this.form.address,
          },
        },
      });
    },
  },
  computed: {},
};
</script>