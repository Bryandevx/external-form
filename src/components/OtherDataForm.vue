<template>
  <div class="container">
    <h3>Other Data</h3>
    <form @input="submit">
      <input
        v-model="form.civilStatus"
        type="text"
        placeholder="civil-status"
      />
      <input v-model="form.disability" type="text" placeholder="disability" />
      <input v-model="form.job" type="text" placeholder="job" />
    </form>
  </div>
</template>



<script>
export default {
  name: "OtherDataForm",
  data() {
    return {
      form: {
        civilStatus: null,
        disability: null,
        job: null,
      },
    };
  },
  methods: {
    submit() {
      this.$emit("update", {
        data: {
          otherData: {
            civilStatus: this.form.civilStatus,
            disability: this.form.disability,
            job: this.form.job,
          },
        },
      });
    },
  },
  computed: {},
};
</script>