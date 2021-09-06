<template>
  <div id="heading">
    <div class="container-fluid">
      <div class="row">
        <div class="col-sm text-center mt-3">
          <p>{{ heading }}</p>
        </div>
        <div class="col-sm">
          <hr />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Heading",
  props: {
    heading: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
.row {
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
}
.col-sm {
  padding: 0;
}
.col-sm > hr {
  margin: 0.75rem 2rem;
}
p {
  color: #2f2f2f;
  font-size: 32px;
  margin: 0;
}
@media screen and (max-width: 768px) {
  p {
    font-size: 20px;
  }
}
</style>