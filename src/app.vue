<template>
<body>
  <div id="app">
    <header>
      <h1>{{ sitename }}</h1>
      <button id="cart" @click="showCheckout" :disabled="this.cart.length < 1">
        <i class="fas fa-shopping-cart"></i> Cart({{ this.cart.length }})
      </button>
      <br />
    </header>
    <div v-if="showLesson">
      <lessons :lesson="lesson" @addlesson="addToCart"></lessons>
    </div>
    <div v-else>
      <cart :cart="cart" @removelesson="removelesson"></cart>
    </div>
  </div>
  </body>
</template>

<script>
import lessons from "./Components/Lessons.vue";
import cart from "./Components/Cart.vue";
export default {
  name: "app",
  components: { lessons, cart },
  data() {
    return {
      sitename: "Lessons",
      showLesson: true,
      disabled: false,
      cart: [],
      lesson: []
    };
  },
  methods: {
    showCheckout() {
      this.showProduct = this.showProduct ? false : true;
    },
    addToCart(lesson) {
      this.cart.push(lesson);
    },
    removelesson(lesson) {
      this.cart.splice(this.cart.indexOf(lesson), 1);
    },
    created: function () {
          fetch("https://coursew3.herokuapp.com/collection/Lessons").then(
            function (response) {
              response.json().then(function (json) {
                lesson=json;
              });
            }
          );
        },
  },
};
</script>
