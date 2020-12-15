<template>
  <div class="container">
    <h3>Datos De Contacto</h3>
    <form class="form">
      <div
        class="card container mt-3 d-flex justify-content-center"
        style="width: 50rem"
      >
        <div class="form-row">
          <div class="form-group col-md-6">
            <label class="control-label" for="mail">Correo</label><br />
            <input class="form-control" required />
            <div id="email_error"></div>
            <br />
          </div>

          <div class="form-group col-md-3">
            <label class="control-label" for="phone">Teléfono</label><br />
            <input class="form-control" required />
          </div>

          <div class="form-group col-md-3">
            <label class="control-label" for="distrit_id"
              >Distrito de Residencia</label
            ><br />
            <select class="custom-select" required></select>
          </div>
        </div>

        <div class="form-row mt-2">
          <div class="form-group col-md-12">
            <label class="control-label" for="direction">Dirección Exacta</label
            ><br />
            <textarea cols="30" rows="3" class="form-control"></textarea>
          </div>
        </div>
      </div>
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