<template>
	<div class="container my-4">
		<h1 class="text-center mb-4" v-text="idLabel"></h1>

		<div
			class="alert alert-warning alert-dismissible fade show"
			role="alert"
		>
			Los campos con * son obligatorios.
			<button
				type="button"
				class="close"
				data-dismiss="alert"
				aria-label="Close"
			>
				<span aria-hidden="true">&times;</span>
			</button>
		</div>

		<form @submit.prevent="submit">
			<hr class="hr-text" data-content="Datos Personales" />

			<div class="form-row">
				<div class="form-group col">
					<label>Nombre Completo:</label>
					<input
						v-model="fullname"
						type="text"
						class="form-control"
					/>
				</div>
			</div>

			<div class="form-row">
				<div class="form-group col" v-if="type == 0">
					<label>Cédula:</label>
					<input
						v-model="dni"
						:disabled="type == 0"
						type="text"
						class="form-control"
					/>
				</div>

				<div class="form-group col" v-if="type == 1">
					<label>Pasaporte:</label>
					<input
						v-model="passport"
						type="text"
						class="form-control"
						:disabled="type == 1"
					/>
				</div>

				<div class="form-group col">
					<label>Fecha de Nacimiento:</label>
					<input
						v-model="birthdate"
						class="form-control"
						type="date"
					/>
				</div>

				<div class="form-group col">
					<label>Género:</label>
					<select v-model="genre" class="form-control">
						<option>Masculino</option>
						<option>Femenino</option>
						<option>Otro...</option>
					</select>
				</div>
			</div>

			<hr class="hr-text" data-content="Información de Contacto" />

			<div class="form-row">
				<div class="form-group col">
					<label>Correo Electrónico:</label>
					<input
						v-model="email"
						:disabled="type == 2"
						type="email"
						class="form-control"
					/>
				</div>

				<div class="form-group col">
					<label>Teléfono:</label>
					<input v-model="phone" type="number" class="form-control" />
				</div>
			</div>

			<div class="form-row">
				<div class="form-group col">
					<label>Estado Civil:</label>
					<select v-model="civilStatus" class="form-control">
						<option value="1">Casado (a)</option>
						<option value="2">Soltero (a)</option>
						<option value="3">Juntado (a)</option>
						<option value="4">Viudo (a)</option>
					</select>
				</div>

				<div class="form-group col">
					<label for="">Distrito:</label>
					<select v-model="district" class="form-control">
						<option value="1">La Granja</option>
						<option value="2">Calle Vargas</option>
						<option value="3">Zaragoza</option>
						<option value="4">Buenos Aires</option>
					</select>
				</div>
			</div>

			<div class="form-row">
				<div class="form-group col">
					<label>Dirección Exacta:</label>
					<textarea
						v-model="direction"
						class="form-control"
						name="direction"
					></textarea>
				</div>
			</div>

			<hr class="hr-text" data-content="Otro" />

			<div class="form-row">
				<div class="form-group col">
					<label>Condición Laboral:</label>
					<select v-model="laboralCondition" class="form-control">
						<option value="1">Empleado</option>
						<option value="2">Desempleado</option>
					</select>
				</div>

				<div class="form-group col">
					<div class="form-row">
						<div class="form-group col">
							<label>Discapacidad:</label>
							<select v-model="disability" class="form-control">
								<option value="0">No</option>
								<option value="1">Si</option>
							</select>
						</div>

						<div id="specify" style="display: none;">
							<div class="form-group col">
								<label>Especifique:</label>
								<textarea
									class="form-control"
									name="direction"
								></textarea>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div class="form-row">
				<div class="form-group col">
					<label>Ocupación:</label>
					<textarea
						v-model="ocupation"
						class="form-control"
						name="direction"
					></textarea>
				</div>
			</div>

			<hr class="hr-text" data-content="Familiares" />

			<div
				class="alert alert-warning alert-dismissible fade show"
				role="alert"
			>
				Para llevar un mejor control nos gustaría conocer más de tú
				familia.
				<button
					type="button"
					class="close"
					data-dismiss="alert"
					aria-label="Close"
				>
					<span aria-hidden="true">&times;</span>
				</button>
			</div>

			<button type="submit" class="btn btn-info">Siguiente</button>
		</form>
	</div>
</template>

<script>
export default {
	data() {
		return {
			dni: "",
			passport: "",
			fullname: "",
			birthdate: "",
			genre: "",
			phone: "",
			civilStatus: "1",
			district: "1",
			direction: "",
			laboralCondition: "1",
			disability: "0",
			ocupation: "",
			email: "",
		};
	},

	mounted() {
		console.log(this.$route.params);
		let user = this.$route.params.user;

		this.dni = user.type == 0 ? user.id : "";
		this.passport = user.type == 1 ? user.id : "";
		this.email = user.type == 2 ? user.id : "";
	},

	methods: {
		submit() {
			let params = this.$route.params;
			params.auth.authenticated = true;

			this.$router
				.push({
					name: "verify",
					params,
				})
				.catch(() => {});
		},

		check() {
			console.log(this.$data);
		},
	},

	computed: {
		idLabel: {
			get() {
				const user = this.$route.params.user;

				if (user.type == 0) {
					return "Nacional";
				} else if (user.type == 1) {
					return "Internacional";
				} else {
					return "Indocumentado";
				}
			},
		},

		type: {
			get() {
				return this.$route.params.user.type;
			},
		},
	},
};
</script>
