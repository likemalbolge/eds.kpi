<template>
  <div id="article" class="card mb-3">
    <div class="row g-0">
      <div class="col-md-4">
        <img
          src="/img/atom_dark.102586ac.svg"
          alt="kpi"
          class="img-fluid rounded-start"
        />
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </p>
          <p class="card-text">
            <small class="text-muted">Last updated 3 mins ago</small>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Article",
};
</script>

<style scoped>
#article {
  border-radius: 0.75rem !important;
  width: 100%;
}
img {
  height: 100%;
}
@media screen and (max-width: 767px) {
  img {
    border-top-left-radius: 0.75rem !important;
    border-top-right-radius: 0.75rem !important;
  }
}
</style>