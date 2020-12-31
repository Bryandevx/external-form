<template>
	<div class="container my-4">
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
			<!-- Primera Parte del Formulario -->

			<div class="form-row">
				<div class="form-group col">
					<label class="required" for="name-input"
						>Nombre Completo:</label
					>
					<input type="text" class="form-control" id="name-input" />
				</div>
			</div>

			<div class="form-row">
				<div class="form-group col">
					<label class="required" for="dni-input-2">Cédula:</label>
					<input
						v-model="user.id"
						type="text"
						class="form-control"
						id="dni-input-2"
					/>
				</div>

				<div class="form-group col">
					<label for="birth-date-input">Fecha de Nacimiento:</label>
					<input class="form-control" type="date" />
				</div>

				<div class="form-group col">
					<label for="genre">Género:</label>
					<select id="genre" class="form-control">
						<option>Masculino</option>
						<option>Femenino</option>
						<option>Otro...</option>
					</select>
				</div>
			</div>

			<hr class="hr-text" data-content="Información de Contacto" />
			<!-- Primera Parte del Formulario -->

			<div class="form-row">
				<div class="form-group col">
					<label class="required" for="email-input"
						>Correo Electrónico:</label
					>
					<input type="email" class="form-control" id="email-input" />
				</div>

				<div class="form-group col">
					<label for="phone-input">Teléfono:</label>
					<input
						type="number"
						class="form-control"
						id="phone-input"
					/>
				</div>
			</div>

			<div class="form-row">
				<div class="form-group col">
					<label for="genre">Estado Civil:</label>
					<select id="genre" class="form-control"> </select>
				</div>

				<div class="form-group col">
					<label for="">Distrito:</label>
					<select class="form-control"> </select>
				</div>
			</div>

			<div class="form-row">
				<div class="form-group col">
					<label for="direction-input">Dirección Exacta:</label>
					<textarea
						class="form-control"
						name="direction"
						id="direction-input"
					></textarea>
				</div>
			</div>

			<hr class="hr-text" data-content="Otro" />
			<!-- Segunda Parte del Formulario -->

			<div class="form-row">
				<div class="form-group col">
					<label for="genre">Condición Laboral:</label>

					<select id="genre" class="form-control">
						<option>Empleado</option>
						<option>Desempleado</option>
					</select>
				</div>

				<div class="form-group col">
					<div class="form-row">
						<div class="form-group col">
							<label for="disability-input">Discapacidad:</label>

							<select id="disability-input" class="form-control">
								<option>Si</option>
								<option>No</option>
							</select>
						</div>

						<div id="specify" style="display: none;">
							<div class="form-group col">
								<label for="specify-input">Especifique:</label>
								<textarea
									class="form-control"
									name="direction"
									id="specify-input"
								></textarea>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div class="form-row">
				<div class="form-group col">
					<label for="direction-input">Ocupación:</label>
					<textarea
						class="form-control"
						name="direction"
						id="direction-input"
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
			fullname: "",
			user: {
				id: "",
				type: "",
			},
		};
	},

	mounted() {
		this.user = this.$route.params.user;
	},

	methods: {
		submit() {
			let params = this.$route.params;
			params.auth.authenticated = true;

			this.$router.push({
				name: "verify",
				params,
			});
		},
	},
};
</script>
