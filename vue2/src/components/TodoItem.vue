<template>
  <div class="todo-item">
    <ol>
      <li>This is a todo-item component</li>
      <li>{{ todo.text }}</li>
    </ol>
    <h1>{{ message }}</h1>
    <h1>{{ reverseMessage }}</h1>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";
@Component
export default class TodoItem extends Vue {
  @Prop({ required: true }) private todo!: { text: string };
  private message = "これはリバースされるのかなぁ？";
  // 算出getter関数
  get reverseMessage() {
    return this.message.split("").reverse().join("");
  }
}
</script>

<style scoped>
.todo-item {
  color: red;
}
</style>
