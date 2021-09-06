<template>
  <div id="home">
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
import Header from "@/components/Header";
import Disciplines from "@/components/Disciplines";
import News from "@/components/News";
import SideNav from "@/components/SideNav";
import Footer from "@/components/Footer";
export default {
  name: "Home",
  components: {
    Header,
    Disciplines,
    News,
    SideNav,
    Footer,
  },
};
</script>

<style type="scss" scoped>
</style>