<template>
  <div id="locale_selector" class="list-group">
    <button
      type="button"
      class="list-group-item list-group-item-action"
      v-for="locale in supportedLocales"
      :key="locale"
      @click="changeLocale(locale)"
    >
      {{ getLocaleName(locale) }}
      <img
        :src="getLocaleImg(locale)"
        alt="locale_img"
        width="20"
        height="20"
      />
    </button>
  </div>
</template>

<script>
import { Trans } from "@/plugins/Translation";
export default {
  name: "LocaleSelector",
  computed: {
    supportedLocales() {
      return Trans.supportedLocales;
    },
  },
  data() {
    return {
      locales: process.env.VUE_APP_I18N_SUPPORTED_LOCALES.split(","),
    };
  },
  methods: {
    changeLocale(locale) {
      if (this.$i18n.locale !== locale) {
        const to = this.$router.resolve({ params: { locale } });
        return Trans.changeLocale(locale).then(() => {
          this.$router.push(to.location);
        });
      }
    },
    getLocaleName(locale) {
      switch (locale) {
        case "ua":
          return "Українська";
        case "en":
          return "English";
      }
    },
    getLocaleImg(locale) {
      switch (locale) {
        case "ua":
          return require("@/assets/ukraine.png");
        case "en":
          return require("@/assets/united-states.png");
      }
    },
  },
};
</script>

<style scoped>
.list-group {
  -webkit-border-radius: 1.5rem;
  -moz-border-radius: 1.5rem;
  border-radius: 1.5rem;
}
.list-group-item {
  display: flex;
  justify-content: space-between;
}
</style>