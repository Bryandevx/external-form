<template>
  <div class="container">
    <h3>Datos De Contacto</h3>
    <form class="form">
      <div
        class="card container mt-3 d-flex justify-content-center"
        style="width: 50rem"
      >
        <div @input="submit" class="form-row">
          <div class="form-group col-md-6">
            <label class="control-label" for="mail">Correo</label><br />

            <input
              type="text"
              v-if="!masterData.userType.isLegal && masterData.email"
              v-model="form.email"
              class="form-control"
              disabled
            />

            <input
              type="text"
              v-else
              v-model="form.email"
              @blur="$v.form.email.$touch()"
              class="form-control"
              required
            />
            <div v-if="$v.form.email.$error" class="">
              <p v-if="!$v.form.email.required" class="error text-danger">
                Email is required
              </p>
              <p v-else-if="!$v.form.email.email" class="error text-danger">
                Invalid email format
              </p>
            </div>
            <br />
          </div>

          <div @input="submit" class="form-group col-md-3">
            <label class="control-label" for="phone">Teléfono</label><br />
            <input
              class="form-control"
              @blur="$v.form.phone.$touch()"
              v-model.number="form.phone"
              maxlength="9"
              required
            />

            <div v-if="$v.form.phone.$error" class="">
              <p v-if="!$v.form.phone.minLength" class="error text-danger">
                Phone number must contain 9 digits
              </p>
              <p v-else-if="!$v.form.phone.integer" class="error text-danger">
                Phone number only accepts numbers
              </p>
              <p v-else-if="!$v.form.phone.required" class="error text-danger">
                Phone number is required
              </p>
            </div>
          </div>

          <div @change="submit" class="form-group col-md-3">
            <label class="control-label" for="distrit_id"
              >Distrito de Residencia</label
            ><br />
            <select v-model="form.distrit" class="custom-select" required>
              <option value="Distrito#1">Distrito#1</option>
              <option value="Distrito#2">Distrito#2</option>
              <option value="Distrito#3">Distrito#3</option>
              <option value="Distrito#4">Distrito#4</option>
            </select>
          </div>
        </div>

        <div @input="submit" class="form-row mt-2">
          <div class="form-group col-md-12">
            <label class="control-label" for="direction">Dirección Exacta</label
            ><br />
            <textarea
              cols="30"
              rows="3"
              v-model="form.address"
              class="form-control"
            ></textarea>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>



<script>
import { required, email, integer, minLength } from "vuelidate/lib/validators";
//import { db } from '@/api/users_db.js'
export default {
  name: "ContactDataForm",
  props: {
    masterData: {
      type: Object,
    },
  },
  data() {
    return {
      form: {
        email: this.masterData.email,
        phone: null,
        distrit: null,
        address: null,
      },
    };
  },

  validations: {
    form: {
      email: {
        required,
        email,
        isUnique(value) {
          // simulate async call, fail for all logins with even length
          return new Promise((resolve) => {
            setTimeout(() => {
              resolve(typeof value === "string" && value.length % 2 !== 0);
            }, 2000)
          });
        },
      },
      phone: {
        required,
        integer,
        minLength: minLength(8),
      },
    },
  },

  methods: {
    submit() {
      this.$emit("update", {
        data: {
          contactData: {
            email: this.form.email,
            phone: this.form.phone,
            distrit: this.form.distrit,
            address: this.form.address,
          },
        },
        valid: !this.$v.form.$invalid,
      });
    },
  },
  computed: {},
};
</script>