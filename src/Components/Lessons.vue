<template>
  <main v-for="lesson in lesson" :key="lesson.id">
    <h2>{{ lesson.Topic }}</h2>
    <span id="icon"><i :class="lesson.Icon"></i></span>
    <p>Location:{{ lesson.Location }}</p>
    <p>Price:£{{ lesson.Price }}</p>
    <p>Space:{{ lesson.Spaces }}</p>
    <img id="img" v-bind:src="lesson.Image" /><br />
    <button
      :id="lesson.id - 1"
      @click="add(lesson)"
      :disabled="lesson.Spaces == 0"
    >
      Add to Cart
    </button>
    <span v-if="lesson.Spaces == 0"> All out! </span>
    <br />
  </main>
</template>
<script>
export default {
  name: "Lessons",
  props: ["lesson"],
  emits: ["addlesson"],
  data() {
    return {};
  },
  methods: {
    add(lesson) {
      this.$emit("addlesson", lesson);
      lesson.Spaces = lesson.Spaces - 1;
    },
  },
};
</script>
