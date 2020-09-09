<template>
  <div class="home">
    <template v-if="!$store.state.isError">
    <div class="home__left-side">
      <HourGlass v-if="$store.state.isLoading" />
      <UserList v-else :data="$store.state.users"/>
    </div>
    <div class="home__right-side">
      <UserList :data="$store.getters.getIncludedUsers"/>
    </div>
    </template>
    <div v-else>При загрузке данных произошла ошибка..</div>
  </div>
</template>

<script>
// @ is an alias to /src
import UserList from '@/components/UserList.vue';
import { HourGlass } from 'vue-loading-spinner';

export default {
  name: 'Home',
  components: {
    UserList,
    HourGlass,
  },

  mounted() {
    this.$store.dispatch('fetchUsers');
  },
};
</script>

<style lang="scss" scoped>
.home {
display: flex;
}

.home__left-side {
  padding: 20px;
  display: flex;
  justify-content: flex-end;
  width: 65%;
  background: #dcf2f2;
}
.home__right-side {
  padding: 20px;
  display: flex;
  justify-content: flex-start;
  width: 35%;
  background: #d3ffc7;
}
</style>
