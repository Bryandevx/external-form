<template>
  <div class="container d-flex justify-content-center align-items-center">

      <div
        class="card text-center shadow-lg p-3 mb-5 bg-white rounded"
        style="width: 350px"
        id="box"
      >
        <h5 class="card-header pt-3 pb-1">Documento de Identificación</h5>
        <div class="card-body">
          <form class="form">
            <div @change="submit" class="form-group">
              <label for="id_type" class="card-text col-form-label">Tipo</label>
              <center>
                <select
                  v-model="form.userType"
                  class="form-control"
                  style="background-color: white; width: 200px; color: black">
                  <option value="Nacional">Nacional</option>
                  <option value="Extranjero">Extranjero</option>
                  <option value="Indocumentado">Indocumentado</option>
                </select>
              </center>
            </div>

            <div @input="submit" class="form-group">
              <label
                id="label_identification"
                for="identification"
                class="card-text col-form-label"
                >Identificación</label
              >
              <center>
                <input
                  v-model="form.id"
                  class="form-control"
                  style="width: 200px"
                />
              </center>
            </div>
          </form>
        </div>
      </div>
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