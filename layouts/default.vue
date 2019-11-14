<template>
  <div>
    <custom-header/>
    <nuxt/>
    <custom-footer/>
  </div>
</template>

<script>
    import customHeader from "../components/customHeader";
    import customFooter from "../components/customFooter";

    export default {
        components: {customHeader, customFooter}
    }
</script>

<style>
  @import url('https://fonts.googleapis.com/css?family=Muli:300,400,700&display=swap');

  body {
    font-family: 'Muli', sans-serif;
    margin: 0;
    padding: 0;
  }

</style>
