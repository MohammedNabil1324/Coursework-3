<template>
  <main v-for="lesson in lesson" :key="lesson.id">
    <h2>{{ lesson.subject }}</h2>
    <span id="icon"><i :class="lesson.icon"></i></span>
    <p>Location:{{ lesson.location }}</p>
    <p>Price:£{{ lesson.price }}</p>
    <p>Space:{{ lesson.space }}</p>
    <img id="img" v-bind:src="lesson.image" /><br />
    <button
      :id="lesson.id - 1"
      @click="addLesson(lesson)"
      :disabled="lesson.space == 0"
    >
      Add to Cart
    </button>
    <p :disabled="lesson.space != 0">Out of Stock</p>
    <br />
  </main>
</template>
<script>
export default {
  name: "Lessons",
  data() {
    return {
      lesson: {
        created: function () {
          fetch("https://coursew3.herokuapp.com/collection/Lessons").then(
            function (response) {
              response.json().then(function (json) {
                lesson = json;
                console.log(lesson);
              });
            }
          );
        },
      },
    };
  },
  methods: {
    add(lesson) {
      this.$emit("addlesson", lesson);
    },
  },
};
</script>
