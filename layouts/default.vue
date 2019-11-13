<template>
  <div>
    <custom-header />
    <nuxt />
  </div>
</template>

<script>
  import customHeader from "../components/customHeader";

  export default {
      components: {customHeader}
  }
</script>

<style>
 body {
   font-family: 'muli', sans-serif;
 }
</style>
