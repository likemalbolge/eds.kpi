<template>
  <div id="disciplines">
    <div class="container-fluid">
      <Heading :heading="$t('main.disciplines')" />
      <div class="container mt-3">
        <div class="row disc-row">
          <div
            class="col-lg-3 col-md-4 col-sm-12 d-flex align-items-stretch mb-3"
          >
            <div class="card bg-dark text-white">
              <img src="@/assets/tek.png" class="card-img" alt="tek" />
              <div class="card-img-overlay">
                <h5 class="card-title">{{ $t("disciplines.ect") }}</h5>
              </div>
            </div>
          </div>
          <div
            class="col-lg-3 col-md-4 col-sm-12 d-flex align-items-stretch mb-3"
          >
            <div class="card bg-dark text-white">
              <img src="@/assets/mpt.jpg" class="card-img" alt="tek" />
              <div class="card-img-overlay">
                <h5 class="card-title">{{ $t("disciplines.mpt") }}</h5>
              </div>
            </div>
          </div>
          <div
            class="col-lg-3 col-md-4 col-sm-12 d-flex align-items-stretch mb-3"
          >
            <div class="card bg-dark text-white">
              <img src="@/assets/ptam.jpg" class="card-img" alt="tek" />
              <div class="card-img-overlay">
                <h5 class="card-title">{{ $t("disciplines.paal") }}</h5>
              </div>
            </div>
          </div>
          <div
            class="col-lg-3 col-md-4 col-sm-12 d-flex align-items-stretch mb-3"
          >
            <div class="card bg-dark text-white">
              <img src="@/assets/kve.jpg" class="card-img" alt="tek" />
              <div class="card-img-overlay">
                <h5 class="card-title">{{ $t("disciplines.ltaqe") }}</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Heading from "@/components/Heading";
export default {
  name: "Disciplines",
  components: {
    Heading,
  },
};
</script>

<style scoped>
.disc-row {
  justify-content: space-between;
}
.card,
.card-img-overlay,
.card > img {
  -webkit-border-radius: 0.75rem;
  -moz-border-radius: 0.75rem;
  border-radius: 0.75rem;
}
.card {
  border: none;
  width: 100%;
}
.card > img {
  width: 100%;
  height: 100%;
}
.card-img-overlay {
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-color: rgba(0, 0, 0, 0.7);
}
</style>