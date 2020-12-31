<template>
	<div class="main-form container">
		<div class="group-form">
			<form @submit.prevent="submit">
				<div class="row">
					<label>Tipo de Identificación</label>

					<select class="form-control" v-model="user.type">
						<option value="0">Nacional</option>
						<option value="1">Internacional</option>
						<option value="2">Indocumentado</option>
					</select>
				</div>

				<div class="row mt-4 mb-4">
					<label v-text="idLabel"></label>
					<input
						v-model="user.id"
						maxlength="9"
						type="number"
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
			user: {
				id: "",
				type: 0,
			},

			auth: {
				logged: true,
				authenticated: false,
				confirmed: false,
			},
		};
	},

	methods: {
		submit() {
			const user = db.find((element) => element.id === this.user.id); // Petición AJAX

			let next = "";

			if (typeof user !== "undefined") {
				this.authenticated = true;

				if (user.status == "pending") {
					next = "verify";
				} else {
					next = "citas";
					this.confirmed = true;
				}
			} else {
				next = "register";
			}

			this.$router.push({
				name: next,
				params: {
					auth: this.auth,
					user: this.user,
				},
			});
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
