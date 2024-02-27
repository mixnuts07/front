<template>
  <div>
    <h1>Blog Post</h1>
    <div v-for="post in posts" :key="post.id">
      <button @click="enlargeText">{{ post.title }}</button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Emit } from "vue-property-decorator";
export default class BlogPost extends Vue {
  posts: [
    { id: 1, title: "My journey with Vue" },
    { id: 2, title: "Blogging with Vue" },
    { id: 3, title: "Why Vue is so fun" }
  ];
  postFontSize: 1;

  @Emit("enlargeText")
  largeText() {
    this.postFontSize += 1;
  }
}
</script>
