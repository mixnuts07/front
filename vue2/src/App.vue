<template>
  <div>
    <div id="app">
      <img alt="Vue logo" src="./assets/logo.png" />
    </div>
    <hello-world :msg="message" />
    <div id="app-2">
      <span v-bind:title="message">
        Hover your mouse over me for a few seconds to see my dynamically bound
        title!
      </span>
    </div>
    <div id="app-3">
      <span v-if="seen">Now you See me...</span>
    </div>
    <div id="app-4">
      <ol>
        <li v-for="(todo, index) in todos" :key="index">
          {{ todo.text }}
        </li>
      </ol>
    </div>
    <button @click="changeMessage">Click me to Change the Message</button>
    <span>{{ reverseMessage }}</span>
    <div id="app-5">
      <p>{{ message }}</p>
      <button v-on:click="reverseMessage">reverseMessage</button>
    </div>
    <div id="app-6">
      <p>{{ message }}</p>
      <input type="text" v-model="message" />
    </div>
    <todo-item v-for="todo in todos" :key="todo.item" :todo="todo" />
    <button-counter title="test title"></button-counter>
    <blog-post></blog-post>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import BlogPost from "./components/BlogPost.vue";
import ButtonCounter from "./components/ButtonCounter.vue";
import HelloWorld from "./components/HelloWorld.vue";
import TodoItem from "./components/TodoItem.vue";

@Component({
  components: {
    HelloWorld,
    TodoItem,
    ButtonCounter,
    BlogPost,
  },
})
export default class App extends Vue {
  // リアクティブデータプロパティ
  private message: string =
    `You loaded this page on` + new Date().toLocaleString();
  private seen: boolean = true;
  private todos: { text: string }[] = [
    { text: "Learn JavaScript" },
    { text: "Learn Vue" },
    { text: "Build something awesome" },
  ];
  // メソッド(再描画が起きると常に関数を実行する)
  changeMessage() {
    this.message = "Message Has Been Changed!!";
  }
  // 算出プロパティ（this.messageとリアクティブな値を使っている。messageが変更されるときのみ更新される）
  reverseMessage() {
    this.message = this.message.split("").reverse().join("");
  }
  
  enlargeText() {
    console.log("enlargeText");
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
#app-3 {
  color: blueviolet;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
}
</style>
