<template>
  <div class="my-daily-page">
    {{ count }}
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  data() {
    return {
    }
  },
  computed: mapGetters([
    'name',
    'sex',
    'birthday',
    'address',
    'count'
  ])
}
</script>

<style scoped></style>
