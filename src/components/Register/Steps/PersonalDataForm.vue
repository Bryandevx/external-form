<template>
  <div class="container">
    <h3>Datos Personales</h3>
    <div
      class="card container mt-3 d-flex justify-content-center"
      style="width: 50rem; height: 271px"
    >
      <form @input="submit" class="form">
        <div class="form-group col-md-12">
          <label class="control-label" for="name">Nombre Completo</label><br />
          <input
            v-model="$v.form.fullName.$model"
            class="form-control"
            required
          />
          <div v-if="$v.form.fullName.$error" class="">
            <p v-if="!$v.form.fullName.required" class="error text-danger">
              Full name is required
            </p>
            <p
              v-else-if="!$v.form.fullName.minLength"
              class="error text-danger"
            >
              Name must have 5 characters
            </p>
          </div>
        </div>

        <div class="form-row mt-2">
          <div class="form-group col-md-4">
            <label class="control-label" for="identification">
              Identificacion
            </label>

            <input
              type="text"
              v-if="masterData.userType.isLegal === true && masterData.id"
              v-model="form.id"
              class="form-control"
              disabled
            />
            <input v-else type="text" class="form-control" disabled />
          </div>

          <div @change="submit" class="form-group col-md-4">
            <label class="control-label" for="birth_date"
              >Fecha de Nacimiento</label
            ><br />
            <input
              v-model="form.birthDate"
              @blur="$v.form.birthDate.$touch()"
              class="form-control"
              type="date"
              name="birth_date"
              id="birth_date"
              required
            />
            <div v-if="$v.form.birthDate.$error" class="">
              <p v-if="!$v.form.birthDate.required" class="error text-danger">Field is required</p>
            </div>
          </div>

          <div @change="submit" class="form-group col-md-4">
            <label class="control-label" for="gender">Género</label><br />
            <select v-model="form.gender" class="custom-select" required>
              <option value="Femenino">Femenino</option>
              <option value="Masculino">Masculino</option>
              <option value="Intersex">Intersex</option>
            </select>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>



<script>
import { required, minLength } from "vuelidate/lib/validators";
export default {
  name: "PersonalDataForm",
  props: {
    masterData: {
      type: Object,
    },
  },
  data() {
    return {
      form: {
        id: this.masterData.id,
        fullName: null,
        birthDate: null, // validar que sea tipo fecha...
        gender: null,
      },
    };
  },
  validations: {
    form: {
      fullName: {
        required,
        minLength: minLength(5),
      },
      birthDate:{
        required
      }
    },
  },
  methods: {
    submit() {
      this.$emit("update", {
        data: {
          personalData: {
            id: this.form.id,
            fullName: this.form.fullName,
            birthDate: this.form.birthDate,
            gender: this.form.gender,
          },
        },
      });
    },
  },
  computed: {},
};
</script>