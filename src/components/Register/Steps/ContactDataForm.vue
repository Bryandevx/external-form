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
            <input type="text" v-if="!masterData.loginData.userType.isLegal" class="form-control" required disabled/>
            <input type="text" v-else v-model="form.email" class="form-control" required>
            <div id="email_error"></div>
            <br />
          </div>

          <div @input=submit class="form-group col-md-3">
            <label class="control-label" for="phone">Teléfono</label><br />
            <input class="form-control" v-model.number="form.phone" required />
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
            <textarea cols="30" rows="3" v-model="form.address"  class="form-control"></textarea>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>



<script>
export default {
  name: "ContactDataForm",
  props:{
    masterData:{
      type:Object,
      required:true,
    },
  },
  data() {
    return {
      form: {
        email: null,
        phone: null,
        distrit: null,
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
            distrit: this.form.distrit,
            address: this.form.address,
          },
        },
      });
    },
  },
  computed: {},
};
</script>