<template>
  <div class="user-cont">
    <div class="user-cont__label">
      <router-link :to="`/info/${user.id}`">{{ user.name }}</router-link>
    </div>
    <UserButton class="user-cont__btn" :id="user.id" :status="user.status" />
  </div>
</template>

<script>
import UserButton from '@/components/UserButton.vue';

export default {
  components: {
    UserButton,
  },
  props: ['user'],
  methods: {
    changeUserStatus(status) {
      console.log(status);
    },
  },
};
</script>

<style lang="scss" scoped>
.user-cont {
  display: flex;
  padding: 2px 6px;
  justify-content: space-between;
  border: 1px solid #eee;
  margin-top: 10px;
  background: #fff;
  border-radius: 4px;
}
.user-cont__label {
  a {
    color: #111;
    text-decoration: none;
  }
}
.user-cont__btn {
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  border: none;
  font-size: 24px;
  padding-right: 4px;
  line-height: 6px;
}
</style>
