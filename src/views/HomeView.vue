<template>
    <h1>Counter App</h1>
<h3 id="counter-info">{{ counter }}</h3>
<button v-on:click="counter++">Incrementar</button>
</template>

<script lang="ts" setup>
import { ref  } from "vue";

const counter = ref(0)

</script>
