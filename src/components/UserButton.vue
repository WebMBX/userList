<template>
  <div>
    <span
      v-if="status"
      button
      class="btn-cont btn-cont__btn--red"
      @click="$store.dispatch('setUserStatus', { id, status: !status })"
    >
      -
    </span>
    <span
      v-else
      button
      class="btn-cont btn-cont__btn--blue"
      @click="$store.dispatch('setUserStatus', { id, status: !status })"
    >
      +
    </span>
  </div>
</template>

<script>
export default {
  props: ['id', 'status'],
};
</script>

<style lang="scss" scoped>
.btn-cont {
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  border: none;
  font-size: inherit;
  padding-right: 4px;
  line-height: 6px;
  &:hover {
    cursor: pointer;
  }
  &.btn-cont__btn--red {
    color: red;
  }
  &.btn-cont__btn--blue {
    color: blue;
  }
}
</style>
