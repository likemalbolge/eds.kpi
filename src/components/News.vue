<template>
  <div id="news">
    <Heading :heading="$t('main.news')" />
    <div class="row">
      <div
        class="col-lg-6 col-md-12"
        v-for="article in articles"
        :key="article.id"
      >
        <Article />
      </div>
    </div>
  </div>
</template>

<script>
import Heading from "@/components/Heading";
import Article from "@/components/Article";
export default {
  name: "News",
  components: {
    Heading,
    Article,
  },
  data() {
    return {
      articles: [
        {
          id: 1,
          title: "Title",
          description: "Desc",
        },
        {
          id: 2,
          title: "Title",
          description: "Desc",
        },
        {
          id: 3,
          title: "Title",
          description: "Desc",
        },
        {
          id: 4,
          title: "Title",
          description: "Desc",
        },
      ],
    };
  },
};
</script>

<style scoped>
</style>