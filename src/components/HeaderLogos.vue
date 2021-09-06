<template>
  <div id="header-logos" class="container-fluid">
    <div class="row w-100">
      <div class="col-sm">
        <img
          src="@/assets/logo kpi.png"
          alt="kpi logo"
          width="100"
          height="100"
        />
        <p>{{ $t("main.faculty") }}</p>
      </div>
      <div class="col-sm">
        <img src="@/assets/atom.svg" alt="atom" width="100" height="100" />
        <p>{{ $t("main.department") }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeaderLogos",
};
</script>

<style scoped>
#header-logos {
  height: 120px;
  background-color: #1d4ed8;
  display: flex;
  align-items: center;
}
.row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-left: 3rem;
  margin-right: 3rem;
}
.col-sm {
  align-items: center;
  justify-content: center;
  display: flex !important;
}
p {
  margin: 0 1rem;
  color: white;
  font-size: 24px;
}
@media screen and (max-width: 940px) {
  img {
    width: 64px;
    height: 64px;
  }
  p {
    font-size: 18px;
    text-align: center;
  }
}
@media screen and (max-width: 576px) {
  img {
    width: 32px;
    height: 32px;
  }
  p {
    font-size: 12px;
    text-align: center;
  }
  #header-logos {
    height: 100px;
  }
}
@media screen and (max-width: 350px) {
  img {
    width: 16px;
    height: 16px;
  }
  p {
    font-size: 10px;
    text-align: center;
  }
  #header-logos {
    height: 70px;
  }
}
</style>