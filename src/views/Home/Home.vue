<template>
  <div class="home">
    <Intern v-for="intern of interns" :key="intern.id" :intern="intern" />
    <NewIntern />
  </div>
</template>

<script>

export default {
  name: 'Home',
  components: {
    Intern: () => import(/* webpackChunkName: "Intern" */ '../../components/organisms/Intern/Intern.vue'),
    NewIntern: () => import(/* webpackChunkName: "NewIntern" */ '../../components/organisms/NewIntern/NewIntern.vue'),
  },
  data() {
    return {
      interns: ''
    };
  },
  methods: {
    async getData () {
      let res = await this.$axios.get('users?per_page=12');
      this.interns = res.data.data;
    }
  },
  created () {
    this.getData();
  },
};
</script>
<style lang="scss" scoped src="./Home.scss" />

