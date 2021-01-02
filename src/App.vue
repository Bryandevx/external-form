<template>
	<div id="app" class="mt-4">
		<div class="main-form container">
			<router-view />
		</div>
	</div>
</template>

<style>
body {
	font-family: "Century Gothic", CenturyGothic, AppleGothic, sans-serif;
	background-color: #f0f3f7;
}

.main-form {
	background-color: #ffffff;
	margin: 100px auto;
	padding: 40px;
	width: 70%;
	min-width: 300px;
}

.box {
	background-color: #f0f3f7;
}

.step {
	display: none;
}

.required:after {
	content: " *";
	color: red;
}

.circle {
	height: 15px;
	width: 15px;
	margin: 0 2px;
	background-color: #bbbbbb;
	border: none;
	border-radius: 50%;
	display: inline-block;
	opacity: 0.5;
}

/* Mark the active step: */
.circle.active {
	opacity: 1;
	background-color: #4caf50;
}

/* Linea con información en el centro */
.hr-text {
	line-height: 1em;
	position: relative;
	outline: 0;
	border: 0;
	color: black;
	text-align: center;
	height: 1.5em;
	opacity: 0.5;
}

.hr-text:before {
	content: "";
	background: -webkit-gradient(
		linear,
		left top,
		right top,
		from(transparent),
		color-stop(#818078),
		to(transparent)
	);
	background: linear-gradient(to right, transparent, #818078, transparent);
	position: absolute;
	left: 0;
	top: 50%;
	width: 100%;
	height: 1px;
}

.hr-text:after {
	content: attr(data-content);
	position: relative;
	display: inline-block;
	color: black;
	padding: 0 0.5em;
	line-height: 1.5em;
	color: #818078;
	background-color: #fcfcfa;
}
/* 
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
}

#nav {
	padding: 30px;
}

#nav a {
	font-weight: bold;
	color: #2c3e50;
}

#nav a.router-link-exact-active {
	color: #42b983;
} */
</style>
