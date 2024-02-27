<template>
  <div>
    <button @click="count++">
      You clicked me {{ count }} times tiles is {{ title }}
    </button>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.component("button-counter", {
  // dataは関数でなければならない...各インスタンスが返されるデータオブジェクトの独立したコピーを保持できるため。
  data: function () {
    return {
      count: 0,
    };
  },
  props: {
    title: String,
  },
});
</script>
