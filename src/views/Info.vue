<template>
  <div class="info">

    <div class="info__left-side">
      <div class="user-info" v-if="userInfo">
        <h2 class="user-info__name">{{userInfo.name}}</h2>
        <span class="user-info__phone">Телефон: {{userInfo.phone}}</span>
        <span class="user-info__address">Адрес: {{`${userInfo.address.city},
          ${userInfo.address.street}, ${userInfo.address.suite}`}}</span>
          <div class="user-info__btn">
            <UserButton :id="userInfo.id" :status="userInfo.status" />
          </div>
      </div>
    </div>

    <div class="info__right-side">
      <UserList :data="$store.getters.getIncludedUsers"/>
    </div>
  </div>

</template>

<script>
import UserList from '../components/UserList.vue';
import UserButton from '../components/UserButton.vue';

export default {
  components: {
    UserList,
    UserButton,
  },

  mounted() {
    if (this.$store.state.users.length === 0) this.$store.dispatch('fetchUsers');
  },
  computed: {
    userInfo() {
      return this.$store.getters.getUserInfo(this.$route.params.id);
    },
  },
};
</script>

<style lang="scss" scoped>
.info {
display: flex;
}

.info__left-side {
  padding: 20px;
  display: flex;
  justify-content: flex-end;
  width: 65%;
  background: #dcf2f2;
}
.info__right-side {
  padding: 20px;
  display: flex;
  justify-content: flex-start;
  width: 35%;
  background: #d3ffc7;
}

.user-info {
  background-color: #fff;
  height: fit-content;
  padding: 14px;
  width: 340px;
}
.user-info__phone,
.user-info__address {
  display: block;
  text-align: left;
}
.user-info__btn {
    display: flex;
    justify-content: flex-end;
    margin-top: 20px;
    margin-bottom: 10px;
    font-size: 34px;
}
</style>
