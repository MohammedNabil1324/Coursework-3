<template>
  <div id="app">
    <header>
      <h1>{{ sitename }}</h1>
      <button id="cart" @click="showCheckout" :disabled="this.cart.length < 1">
        <i class="fas fa-shopping-cart"></i> Cart({{ this.cart.length }})
      </button>
      <br />
    </header>
    <div v-if="showLesson">
      <lesson-list :lesson="lesson" @addlesson="addToCart"></lesson-list>
    </div>
    <div v-else>
      <checkout :cart="cart" @removelesson="removeProduct"></checkout>
    </div>
  </div>
</template>

<script>
import lessons from "/src/Components/Lessons.vue";
import cart from "/src/Components/Cart.vue";
export default {
  name: "app",
  components: { lessons, cart },
  data() {
    return {
      sitename: "Lessons",
      showLesson: true,
      disabled: false,
      cart: [],
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
    showCheckout() {
      this.showProduct = this.showProduct ? false : true;
    },
    addToCart(lesson) {
      this.cart.push(lesson);
      this.lesson[e.target.id].space = this.lesson[e.target.id].space - 1;
      if (this.lesson[e.target.id].space == 0) {
        disabled = true;
      }
    },
    removeProduct(lesson) {
      this.cart.splice(this.cart.indexOf(lesson), 1);
      this.lesson[e.target.id].space = this.lesson[e.target.id].space + 1;
    },
  },
};
</script>
