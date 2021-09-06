<template>
  <div id="header-photo">
    <img src="@/assets/kpi.jpg" alt="kpi" />
  </div>
</template>

<script>
export default {
  name: "HeaderPhoto",
};
</script>

<style scoped>
#header-photo {
  width: 100%;
  max-height: 800px;
  -webkit-border-radius: 0 0 1.5rem 1.5rem;
  -moz-border-radius: 0 0 1.5rem 1.5rem;
  border-radius: 0 0 1.5rem 1.5rem;
}
img {
  width: 100%;
  height: auto;
  max-height: 800px;
  -webkit-border-radius: 0 0 1.5rem 1.5rem;
  -moz-border-radius: 0 0 1.5rem 1.5rem;
  border-radius: 0 0 1.5rem 1.5rem;
}
</style>