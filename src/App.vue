<template>
  <div id="app">
    <Preloader v-if="loading" />
    <Header />
    <Disciplines />
    <div class="container-fluid">
      <div class="row content-wrapper">
        <div class="col-md-4 col-sm-12">
          <SideNav class="mt-5" />
        </div>
        <div class="col-md-8 col-sm-12">
          <News />
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Preloader from "@/components/Preloader";
import Header from "@/components/Header";
import Disciplines from "./components/Disciplines";
import News from "@/components/News";
import SideNav from "@/components/SideNav";
import Footer from "@/components/Footer";
export default {
  name: "App",
  components: {
    Preloader,
    Header,
    Disciplines,
    News,
    SideNav,
    Footer,
  },
  data() {
    return {
      loading: true,
    };
  },
  mounted() {
    setTimeout(() => {
      this.loading = false;
    }, 1000);
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Comfortaa:wght@300&display=swap");
* {
  font-family: "Roboto", sans-serif;
  background-color: #e2e2e2;
}
.content-wrapper {
  align-items: stretch;
}
</style>