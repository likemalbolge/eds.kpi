<template>
  <div id="navbar">
    <HeaderLogos />
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse w-100" id="navbarSupportedContent">
        <ul class="navbar-nav w-100">
          <li class="nav-item">
            <router-link class="nav-link" :to="$i18nRoute({ name: 'Home' })">{{
              $t("header.home")
            }}</router-link>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              {{ $t("header.general_info") }}
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li>
                <router-link
                  class="dropdown-item"
                  :to="$i18nRoute({ name: 'Home' })"
                  >{{ $t("general_info.regulation") }}</router-link
                >
              </li>
              <li><hr class="dropdown-divider" /></li>
              <li>
                <router-link
                  class="dropdown-item"
                  :to="$i18nRoute({ name: 'Home' })"
                  >{{ $t("general_info.history") }}</router-link
                >
              </li>
              <li><hr class="dropdown-divider" /></li>
              <li>
                <router-link
                  class="dropdown-item"
                  :to="$i18nRoute({ name: 'Home' })"
                  >{{ $t("general_info.administration") }}</router-link
                >
              </li>
              <li><hr class="dropdown-divider" /></li>
              <li>
                <router-link
                  class="dropdown-item"
                  :to="$i18nRoute({ name: 'Home' })"
                  >{{ $t("general_info.laboratories") }}</router-link
                >
              </li>
              <li><hr class="dropdown-divider" /></li>
              <li>
                <router-link
                  class="dropdown-item"
                  :to="$i18nRoute({ name: 'Home' })"
                  >{{ $t("general_info.achievements") }}</router-link
                >
              </li>
              <li><hr class="dropdown-divider" /></li>
              <li>
                <router-link
                  class="dropdown-item"
                  :to="$i18nRoute({ name: 'Home' })"
                  >{{ $t("general_info.teachers") }}</router-link
                >
              </li>
              <li><hr class="dropdown-divider" /></li>
              <li>
                <router-link
                  class="dropdown-item"
                  :to="$i18nRoute({ name: 'Home' })"
                  >{{ $t("general_info.employment") }}</router-link
                >
              </li>
              <li><hr class="dropdown-divider" /></li>
              <li>
                <router-link
                  class="dropdown-item"
                  :to="$i18nRoute({ name: 'Home' })"
                  >{{ $t("general_info.trade_union") }}</router-link
                >
              </li>
              <li><hr class="dropdown-divider" /></li>
              <li>
                <router-link
                  class="dropdown-item"
                  :to="$i18nRoute({ name: 'Home' })"
                  >{{ $t("general_info.honor_code") }}</router-link
                >
              </li>
              <li><hr class="dropdown-divider" /></li>
              <li>
                <router-link
                  class="dropdown-item"
                  :to="$i18nRoute({ name: 'Home' })"
                  >{{ $t("general_info.contacts") }}</router-link
                >
              </li>
            </ul>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="$i18nRoute({ name: 'Home' })">{{
              $t("header.admission")
            }}</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="$i18nRoute({ name: 'Home' })">{{
              $t("header.education")
            }}</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="$i18nRoute({ name: 'Home' })">{{
              $t("header.science")
            }}</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="$i18nRoute({ name: 'Home' })">{{
              $t("header.teachers")
            }}</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="$i18nRoute({ name: 'Home' })">{{
              $t("header.students_life")
            }}</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="$i18nRoute({ name: 'Home' })">{{
              $t("header.partnership")
            }}</router-link>
          </li>
        </ul>
      </div>
    </nav>
    <HeaderPhoto />
  </div>
</template>

<script>
import HeaderLogos from "@/components/HeaderLogos";
import HeaderPhoto from "@/components/HeaderPhoto";
export default {
  name: "Header",
  components: {
    HeaderLogos,
    HeaderPhoto,
  },
  watch: {
    $route(to, from) {
      if ($("#navbarSupportedContent").hasClass("show")) {
        $("#navbarSupportedContent").removeClass("show");
      }
    },
  },
};
</script>

<style scoped>
.navbar {
  height: 50px;
  background-color: #1e40af !important;
  padding: 0;
}
button {
  margin: 0.25rem;
}
#navbarSupportedContent {
  background-color: #1e40af !important;
  z-index: 3;
}
ul {
  justify-content: space-around;
}
a {
  text-align: center;
  /*text-transform: uppercase;*/
  color: white !important;
}
.dropdown-menu > li {
  border: none;
}
.dropdown-menu > li > a {
  color: black !important;
}
.navbar-toggler {
  border: none;
}
@media screen and (max-width: 992px) {
  #navbarSupportedContent {
    -webkit-border-radius: 0 0 1.5rem 1.5rem;
    -moz-border-radius: 0 0 1.5rem 1.5rem;
    border-radius: 0 0 1.5rem 1.5rem;
  }
}
@media screen and (min-width: 991px) {
  li.nav-item:hover {
    -webkit-transition: all 0.5s;
    -moz-transition: all 0.5s;
    -o-transition: all 0.5s;
    transition: all 0.5s;
    border-bottom: 1px solid #60a5fa;
  }
}
</style>