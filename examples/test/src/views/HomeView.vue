<script setup lang="ts">
import { ref } from 'vue';

const text = ref<string>('你好');

const clickHander = () => {
  text.value = '张三';
};
</script>

<template>
  <main>
    <div @click="clickHander">{{ text }}</div>
    <div id="aaa">bbb</div>
  </main>
</template>
