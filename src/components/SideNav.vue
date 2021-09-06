<template>
  <div id="sidenav">
    <div class="list-group">
      <router-link
        :to="$i18nRoute({ name: 'Home' })"
        class="list-group-item list-group-item-action"
        >A second link item</router-link
      >
      <router-link
        :to="$i18nRoute({ name: 'Home' })"
        class="list-group-item list-group-item-action"
        >A second link item</router-link
      >
      <router-link
        :to="$i18nRoute({ name: 'Home' })"
        class="list-group-item list-group-item-action"
        >A second link item</router-link
      >
      <router-link
        :to="$i18nRoute({ name: 'Home' })"
        class="list-group-item list-group-item-action"
        >A second link item</router-link
      >
      <router-link
        :to="$i18nRoute({ name: 'Home' })"
        class="list-group-item list-group-item-action"
        >A second link item</router-link
      >
      <router-link
        :to="$i18nRoute({ name: 'Home' })"
        class="list-group-item list-group-item-action"
        >{{ $t("sidenav.contacts") }}
        <img
          src="@/assets/phone-call.png"
          alt="phone-call"
          width="20"
          height="20"
      /></router-link>
      <router-link
        :to="$i18nRoute({ name: 'Home' })"
        class="list-group-item list-group-item-action"
        >{{ $t("sidenav.schedule")
        }}<img
          src="@/assets/calendar.png"
          alt="calendar"
          width="20"
          height="20"
      /></router-link>
    </div>
    <LocaleSelector />
  </div>
</template>

<script>
import LocaleSelector from "./LocaleSelector";

export default {
  name: "SideNav",
  components: {
    LocaleSelector,
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