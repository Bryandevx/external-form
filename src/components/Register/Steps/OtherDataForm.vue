<template>
  <div class="container">
    <h3>Otros Datos</h3>
    <div
      class="card container mt-3 d-flex justify-content-center"
      style="width: 50rem; height: 271px"
    >
      <form class="form">
        <div class="form-row mt-2">
          <div @change="submit" class="form-group col-md-4">
            <label class="control-label" for="laboral_condition"
              >Condición Laboral</label
            >
            <select v-model="form.jobStatus" class="custom-select" required>
              <option value="Empleado">Empleado</option>
              <option value="Desempleado">Desempleado</option>
              <option value="Trabajo Ocasional">Trabajo Ocasional</option>
            </select>
          </div>

          <div @change="submit" class="form-group col-md-4">
            <label class="control-label" for="id_civil_status"
              >Estado Civil</label
            ><br />
            <select v-model="form.civilStatus" class="custom-select" required>
              <option value="Soltero">Soltero</option>
              <option value="Casado">Casado</option>
              <option value="Divorciado">Divorciado</option>
              <option value="Union Libre">Union Libre</option>
            </select>
          </div>

          <div @change="submit" class="form-group col-md-4">
            <label class="control-label" for="disability">Discapacidad</label>
            <select v-model="form.disability" class="custom-select" required>
              <option value="">Seleccionar</option>
              <option value="Si">Si</option>
              <option value="No">No</option>
            </select>
          </div>
        </div>

        <div class="form-row mt-2">
          <div @input="submit" class="form-group col-md-6">
            <!--especificar el trabajo-->
            <label class="control-label" for="working_ocupation"
              >Ocupación</label
            ><br />
            <input v-model="form.occupation" class="form-control" required />
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
  </div>
</template>



<script>
export default {
  name: "OtherDataForm",
  props: {
  },
  data() {
    return {
      form: {
        civilStatus: null,
        disability: null,
        jobStatus: null,
        occupation: null,
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
            jobStatus: this.form.jobStatus,
            occupation: this.form.occupation,
          },
        },
      });
    },
  },
  computed: {},
};
</script>