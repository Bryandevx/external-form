<template>
	<div class="container">
		<div class="group-form mb-4">
			<div
				class="alert alert-success alert-dismissible fade show"
				role="alert"
			>
				Se envió un código de seguridad a su correo electrónico.
				<button
					type="button"
					class="close"
					data-dismiss="alert"
					aria-label="Close"
				>
					<span aria-hidden="true">&times;</span>
				</button>
			</div>

			<div class="form-row">
				<label for="code-input">Código de Verificación</label>
				<input type="text" class="form-control" id="code-input" />
			</div>
			<div class="form-row">
				<small class="form-text text-muted"
					>Haga <a href="">click</a> para reenviar el código o cambiar
					el correo electrónico.</small
				>
			</div>
		</div>

		<button @click="click">Next</button>
	</div>
</template>

<script>
export default {
	created() {
		console.log(this.$route.params);
	},

	methods: {
		click() {
			let params = this.$route.params;
			params.auth.confirmed = true;

			this.$router
				.push({
					name: "citas",
					params,
				})
				.catch(() => {});
		},
	},
};
</script>

<style scoped></style>
