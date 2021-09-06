<template>
  <div id="footer" class="container-fluid">
    <div class="row info w-100">
      <div class="col-md-2 col-sm-12 logo">
        <img
          src="@/assets/logo kpi.png"
          alt="kpi_logo"
          width="100"
          height="100"
        />
      </div>
      <div class="col-md-7 col-sm-12 text">
        <p>
          КПІ ім. Ігоря Сікорського, Факультет електроніки, Кафедра електронних
          пристроїв та систем 2020 ©
        </p>
        <p>Адреса: Україна, 03056, м.Київ-56, вул. Політехнічна, 16</p>
        <p>Телефон кафедри: (044) 204-90-70, (044) 204-82-93</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style type="scss" scoped>
#footer {
  background-color: #1d4ed8;
  height: 200px;
  display: flex;
  align-items: center;
}
p {
  color: white;
}
.info {
  align-items: center;
}
.logo {
  display: flex;
  flex-direction: row;
  justify-content: center;
}
@media screen and (max-width: 767px) {
  .logo,
  .text {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .text {
    margin-top: 0.5rem;
    flex-direction: column;
  }
  .text > p {
    text-align: center;
  }
  img {
    width: 64px;
    height: 64px;
  }
  p {
    font-size: 10px;
  }
}
</style>