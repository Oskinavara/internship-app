<template>
  <div class="home">

  </div>
</template>

<script>

export default {
  name: 'Home',
  components: {
  },
  data() {
    return {
      apiData: ''
    };
  },
  methods: {
    async get(index) {
      let response = await this.$axios.get(
        `users?page=${index}&per_page=30]`
      );
      this.apiData = [...this.apiData, response.data];
    },
    async post() {
      await this.$axios.post('users', {
        name: 'morpheus',
        job: 'leader'
      });
    }
  }
};
</script>
