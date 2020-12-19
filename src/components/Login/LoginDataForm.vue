<template>
  <div class="d-flex flex-column justify-content-center align-items-center">
    <div class="d-flex flex-row">
      <div
        class="card text-center shadow-lg p-3 mb-5 bg-white rounded"
        style="width: 350px; height: 271px"
        id="box"
      >
        <h5 class="card-header pt-3 pb-1">Documento de Identificación</h5>
        <div class="card-body">
          <form class="form">
            <div @change="pickUserType" class="form-group">
              <label for="id_type" class="card-text col-form-label">Tipo</label>
              <center>
                <select
                  v-model="form.nameSelected"
                  class="form-control"
                  style="background-color: white; width: 200px; color: black"
                >
                  <option
                    v-for="userType in form.userTypes"
                    :key="userType.type"
                  >
                    {{ userType.name }}
                    <!--Retornar un array de copia y no el original...-->
                  </option>
                </select>
              </center>
            </div>
            <div id="identification_div" @input="submit" class="form-group">
              <label
                id="label_identification"
                for="identification"
                class="card-text col-form-label"
                >Identificacion</label
              >
              <center>
                <input
                  v-model="form.id"
                  type="text"
                  name="identification"
                  id="identification"
                  class="form-control"
                  style="width: 200px"
                />
              </center>
            </div>
            <div class="container">
              <router-link
                :to="{
                  name: 'register',
                  params: {
                    data: {
                      loginData: {
                        id: form.id,
                        userType: form.userTypeSelected,
                      },
                    },
                  },
                }"
                >Siguiente</router-link
              >
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginDataForm",
  data() {
    return {
      customUser: {
        id: "202020",
        status: "register",
      },
      documentLabel: "Identificacion", // cambiar esto a "NULL", para hacer una implementacion dinamica con transiciones
      form: {
        userTypes: [
          {
            type: "NAC",
            name: "Nacional",
            isLegal: true,
          },
          {
            type: "EXT",
            name: "Extranjero",
            isLegal: true,
          },
          {
            type: "INDOC",
            name: "Indocumentado",
            isLegal: false,
          },
        ],
        id: null,
        userTypeSelected: null, // este sera el objeto enviado
        nameSelected: null /* aqui se almacenara solo el name(nacional, extranjero etc..) 
        con este nombre se hara una busqueda en el array userTypes para encontrar el nombre seleccionado y asignar
        el objeto con ese nombre a "userTypeSelected"*/,
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
            userType: this.form.userTypeSelected,
          },
        },
      });
    },
    pickUserType() {
      console.log(this.form.nameSelected);
      let selected = this.form.userTypes.find(
        (element) => element.name === this.form.nameSelected
      );
      this.form.userTypeSelected = selected;
      this.submit();
      //this.getDocumentLabel();
    },
  },
  computed: {
    getDocumentLabel() {
      //Por el momento esto solo esta de adorno...
      if (this.form.userTypeSelected.isLegal) return "Identificaicon";
      else return "Email";
    },
    action() {
      return this.customUser.status;
    },
  },
};
</script>