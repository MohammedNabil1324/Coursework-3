<template>
  <div id="app">
    <header>
      <script src="https://unpkg.com/vue"></script>
      <link rel="stylesheet" href="CSS/style.css" />
      <link rel="manifest" href="index.webmanifest" />
      <script src="index.js"></script>
      <h1>{{ sitename }}</h1>
      <button id="cart" @click="showCheckout" :disabled="cartCount < 1">
        <i class="fas fa-shopping-cart"></i> Cart({{ cartCount }})
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
import lessons from "/Components/Lessons.vue";
import cart from "/Components/Cart.vue";
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
    computed: {
      cartCount: function () {
        return this.cart.length || "";
      },
    },
  },
};
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("service-worker.js");
}
</script>
