<template>
  <h2>Checkout</h2>
  <div v-for="lesson in cart" :key="lesson.id">
    {{ lesson.Topic }} <button @click="remove(lesson)">remove</button>
  </div>
  <br>
  <form>
    <label>Name:</label>
    <input v-model="detail" id="detail" type="text" required /><br />
    <label>Phone Number:</label>
    <input v-model="detail1" id="detail1" type="text" required /><br />
  </form>
  <button :disabled="detail && detail1 === ''" @click="submitForm">
    Checkout
  </button>
</template>
<script>
export default {
  name: "cart",
  props: ["cart"],
  emits:["removelesson"],
  data() {
    return {
      detail: "",
      detail1: "",
    };
  },
  methods: {
    remove(lesson) {
      this.$emit("removelesson", lesson);
      lesson.Spaces=lesson.Spaces+1;
      if(this.cart.length==0){
        this.showLesson=true;
      }
    },
    submitForm: function () {
      var Name = document.getElementById("detail").value;
      var PhoneNumber = document.getElementById("detail1").value;
      var NameRegex = /^[a-z ,.'-]+$/i;
      var PhoneRegex =
        /^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$/;
      var NameResult = NameRegex.test(Name);
      var PhoneResult = PhoneRegex.test(PhoneNumber);
      alert("Name Approval:" + NameResult + ", Phone Approval: " + PhoneResult);
      if (NameResult == "True" && PhoneResult == "True") {
        window.history.go(0);
      }
    },
  },
};
</script>
