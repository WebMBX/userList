<template>
  <div class="user-list">
    <input
      class="user-list__input-search"
      type="text"
      v-model="searchText"
      placeholder="Поиск"
      @input="throttleSearch"
    />
    <template v-for="user in users">
      <User :user="user" :key="user.id" />
    </template>
  </div>
</template>

<script>
import User from '@/components/User.vue';

export default {
  components: {
    User,
  },
  props: ['data'],
  data() {
    return {
      search: '',
      searchText: '',
      filtered: [],
    };
  },

  methods: {
    throttleSearch() {
      setTimeout(this.filterUsersBySearch, 300);
    },
    filterUsersBySearch() {
      this.search = this.searchText;
    },
  },

  computed: {
    users() {
      return this.search.trim()
        ? this.data.filter((el) => el.name.toLowerCase()
          .indexOf(this.search.toLowerCase()) !== -1)
        : this.data;
    },
  },
};
</script>

<style lang="scss" scoped>
.user-list {
  width: 340px;
  padding: 0 10px;
}
.user-list__input-search {
  width: calc(100% - 10px);
  padding: 8px 4px;
  border-radius: 4px;
  border: 1px solid #ddd;
}
</style>
