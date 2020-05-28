<template>
  <div class="pagination">
    <SquareButton @click.native="goToPrevPage" :iconSrc="require('@/assets/icons/prev.svg')" />
    <span class="pagination__counter">{{ `${page} / ${totalPages}` }}</span>
    <SquareButton @click.native="goToNextPage" :iconSrc="require('@/assets/icons/next.svg')" />
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  name: 'Pagination',
  components: {
    SquareButton: () => import(/* webpackChunkName: "SquareButton" */ '@/components/atoms/SquareButton/SquareButton.vue'),
  },
  data() {
    return {
      page: 1
    }
  },
  computed: {
    ...mapState(['totalPages'])
  },
  methods: {
    ...mapActions(['getInterns']),
    goToNextPage () {
      if(this.page < this.totalPages) {
        this.page += 1;
        this.getInterns(this.page);
      }
    },
    goToPrevPage () {
      if(this.page > 1) {
        this.page -= 1;
        this.getInterns(this.page);
      }
    },
  },
}
</script>

<style lang="scss" src='./Pagination.scss' />
