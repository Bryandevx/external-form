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
                  <option selected disabled value="default">Seleccione</option>
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
            <div
              v-show="form.userTypeSelected"
              id="identification_div"
              @input="submit"
              class="form-group"
            >
              <label
                id="label_identification"
                for="identification"
                class="card-text col-form-label"
                >{{documentLabel}}</label
              >
              <center>
                <input
                  v-model="form.id"
                  v-show="
                    !form.userTypeSelected ||
                    form.userTypeSelected.isLegal === true
                  "
                  type="text"
                  name="identification"
                  id="identification"
                  class="form-control"
                  style="width: 200px"
                  :disabled="!form.userTypeSelected"
                />
                <!--"!form.userTypeSelected" verifica si la data es null-->
                <input
                  v-show="
                    form.userTypeSelected &&
                    form.userTypeSelected.isLegal === false
                  "
                  v-model="form.email"
                  type="text"
                  name="identification"
                  id="identification"
                  class="form-control"
                  style="width: 200px"
                  :disabled="!form.userTypeSelected"
                />
              </center>
            </div>
            <div class="container">
              <button class="btn btn-primary" @click="nextRoute">
                Continuar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { required, numeric, minLength } from 'vuelidate/lib/validators';
import { globalUser } from '@/main.js'
import { db } from '@/api/users_db.js'
export default {
  name: "LoginDataForm",
  data() {
    return {
      route: "home",
      documentLabel: "",
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
        email: null,
        userTypeSelected: null, // este sera el objeto enviado
        nameSelected: null /* aqui se almacenara solo el name(nacional, extranjero etc..) 
        con este nombre se hara una busqueda en el array userTypes para encontrar el nombre seleccionado y asignar
        el objeto con ese nombre a "userTypeSelected"*/,
      },
    };
  },
  validations: {
    form: {
      id:{
        required,
        minLength: minLength(9),
        numeric
        
      },
    }
  },
  methods: {
    submit() {
      this.$emit("update", {
        data: {
          loginData: {
            id: this.form.id,
            email: this.form.email,
            userType: this.form.userTypeSelected,
          },
        },
      });
    },
    pickUserType() {
      this.form.email = null;
      this.form.id = null;
      console.log(this.form.nameSelected);
      let selected = this.form.userTypes.find(
        (element) => element.name === this.form.nameSelected
      );
      this.form.userTypeSelected = selected;
      this.submit();
      this.getDocumentLabel();
    },
    findUser() {
    },
    nextRoute() {
      console.log(db.user)
      let user = db.find(
        (element) => element.id === this.form.id
      );
      if (typeof user !== "undefined") {
        if (user.status === "pending") {
          this.route = "verify";
          globalUser.userData = user;
        } else {
          this.route = "citas";
          globalUser.userData = user;
        }
      } else {
        globalUser.userData = 'guest'
        this.route = "register";
      }
      this.$router.push({
        name: this.route,
        params: {
          data: {
            loginData: {
              id: this.form.id,
              email: this.form.email,
              userType: this.form.userTypeSelected,
            },
          },
        },
      });
    },
    getDocumentLabel() {
      //Por el momento esto solo esta de adorno...
      if (this.form.userTypeSelected.isLegal) {
        this.documentLabel = "Identificacion";
      } else this.documentLabel = "Email";
    },
  },
  computed: {},
};
</script>