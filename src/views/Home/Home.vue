<template>
  <div class="home">
    <Intern v-for="intern of currentPage" :key="intern.id" :intern="intern" />
    <NewIntern />
    <Pagination />
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'Home',
  components: {
    Intern: () => import(/* webpackChunkName: "Intern" */ '../../components/organisms/Intern/Intern.vue'),
    NewIntern: () => import(/* webpackChunkName: "NewIntern" */ '../../components/organisms/NewIntern/NewIntern.vue'),
    Pagination: () => import(/* webpackChunkName: "Pagination" */ '../../components/organisms/Pagination/Pagination.vue'),
  },
  data() {
    return {
      page: 1
    }
  },
  created () {
    this.getInterns(1);
  },
  computed: {
    currentPage() {
      return this.$store.state.currentPage
    }
  },
  methods: {
    ...mapActions(['getInterns']),
    goToNextPage () {
      this.page += 1;
      this.getInterns(this.page);
    },
    goToPrevPage () {
      if(this.page > 1) {
        this.page -= 1;
        this.getInterns(this.page);
      }
    },
  },
};
</script>
<style lang="scss" src="./Home.scss" />

