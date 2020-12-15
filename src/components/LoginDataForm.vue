<template>
  <div class="container">
    <h3>Login Data</h3>
    <form @input="submit" class="form">
      <div class="form-group">
        <label for="id" class="form-label">Identificacion</label>
        <input v-model="form.id" type="text" placeholder="ID" />
      </div>

      <div class="form-group">
        <label for="id" class="form-label">Usuario</label>
        <input v-model="form.userType" type="text" placeholder="user-type" />
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "LoginDataForm",
  data() {
    return {
      form: {
        id: null,
        userType: null,
      },
    };
  },
  validations: {},
  methods: {
    submit() {
      this.$emit("update", {
        data: {
          loginData: {
            id: this.form.id,
            userType: this.form.userType,
          },
        },
      });
    },
  },
};
</script>