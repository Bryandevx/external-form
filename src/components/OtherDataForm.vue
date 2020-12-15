<template>
  <div
    class="card container mt-3 d-flex justify-content-center"
    style="width: 50rem">
    <h3>Otros Datos</h3>
    <form class="form">
      <div class="form-row mt-2">
        <div class="form-group col-md-4">
          <label class="control-label" for="laboral_condition"
            >Condición Laboral</label
          >
          <select class="custom-select" required>
            <option value="Empleado">Empleado</option>
            <option value="Desempleado">Desempleado</option>
            <option value="Trabajo Ocasional">Trabajo Ocasional</option>
          </select>
        </div>

        <div class="form-group col-md-4">
          <label class="control-label" for="id_civil_status">Estado Civil</label
          ><br />
          <select class="custom-select" required>
            <option value="">Seleccionar</option>
          </select>
        </div>

        <div class="form-group col-md-4">
          <label class="control-label" for="disability">Discapacidad</label>
          <select class="custom-select" required>
            <option value="">Seleccionar</option>
            <option value="Si">Si</option>
            <option value="No">No</option>
          </select>
        </div>
      </div>

      <div class="form-row mt-2">
        <div class="form-group col-md-6">
          <!--especificar el trabajo-->
          <label class="control-label" for="working_ocupation">Ocupación</label
          ><br />
          <input class="form-control" required />
          <div id="especific_job_error"></div>
        </div>

        <div class="form-group col-md-6">
          <!--que solo aparezca lo que sigue cuando digita que tiene discapacidad, el div especific_discapacity-->
          <div id="especific_discapacity"></div>
          <div id="especific_discapacity_error"></div>
        </div>
        <!--si hay error aqui se imprime-->
      </div>
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