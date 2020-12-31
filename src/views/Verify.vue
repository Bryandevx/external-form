<template>
	<div class="container">
		<h1>Email verification enabled!</h1>

		<button @click="click">Back</button>
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

			params.auth.confirmation = false;
			params.auth.authenticated = true;

			this.$router
				.push({
					name: "register",
					params,
				})
				.catch(() => {});
		},
	},
};
</script>

<style scoped></style>
