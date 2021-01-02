<template>
	<div>
		<div
			class="row alert"
			:class="`alert-${this.alert.type}`"
			role="alert"
			v-if="this.alert.show"
		>
			{{ this.alert.message }}
		</div>

		<div class="group-form">
			<form @submit.prevent="submit">
				<div class="row">
					<label>Tipo de Identificación</label>
					<select
						@change="reset"
						class="form-control"
						v-model="user.type"
					>
						<option value="0">Nacional</option>
						<option value="1">Internacional</option>
						<option value="2">Indocumentado</option>
					</select>
				</div>

				<div class="row mt-4 mb-4">
					<label v-text="idLabel"></label>

					<input
						v-if="user.type == 0"
						v-model="dni"
						type="number"
						class="form-control"
					/>

					<input
						v-if="user.type == 1"
						v-model="passport"
						type="text"
						class="form-control"
					/>

					<input
						v-if="user.type == 2"
						v-model="email"
						type="email"
						class="form-control"
					/>
				</div>

				<div class="row mt-4 mb-4">
					<div style="overflow:auto">
						<div style="float:right">
							<button class="btn btn-success" type="submit">
								Siguiente
							</button>
						</div>
					</div>
				</div>
			</form>
		</div>
	</div>
</template>

<script>
import { db } from "@/api/users_db.js";

export default {
	data() {
		return {
			dni: "",
			email: "",
			passport: "",

			user: {
				id: "",
				type: 0,
			},

			auth: {
				logged: false,
				authenticated: false,
				confirmed: false,
			},

			alert: {
				show: false,
				type: "",
				message: "",
			},
		};
	},

	methods: {
		submit() {
			if (this.dni != "") {
				this.user.id = this.dni;
			} else if (this.passport != "") {
				this.user.id = this.passport;
			} else if (this.email != "") {
				this.user.id = this.email;
			} else {
				return;
			}

			this.auth.logged = true;

			const user = db.find((element) => element.id === this.user.id); // Petición AJAX

			let next = "";

			if (typeof user !== "undefined") {
				this.auth.authenticated = true;

				if (user.status == "pending") {
					next = "verify";
				} else {
					if (user.status == "unblockec") {
						next = "citas";
						this.auth.confirmed = true;
					} else {
						this.showAlert(
							"danger",
							"El usuario está temporalmente bloqueado"
						);
					}
				}
			} else {
				next = "register";
			}

			this.$router
				.push({
					name: next,
					params: {
						auth: this.auth,
						user: this.user,
					},
				})
				.catch(() => {});
		},

		reset() {
			this.dni = "";
			this.email = "";
			this.passport = "";
		},

		showAlert(type, message) {
			this.alert.show = true;
			this.alert.type = type;
			this.alert.message = message;
		},
	},

	computed: {
		idLabel: {
			get() {
				if (this.user.type == 0) {
					return "Cédula";
				} else if (this.user.type == 1) {
					return "Pasaporte";
				} else {
					return "Correo Electrónico";
				}
			},
		},
	},
};
</script>
