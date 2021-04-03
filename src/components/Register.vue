<template>
  <div>
    Registeration
    <div class="container">
      <form @submit.prevent="register">
        <label><b>Email</b></label>
        <input type="email" v-model="email" />
        <label><b>Password</b></label>
        <input type="password" v-model="password" />
        <button type="submit">Register</button>
      </form>
    </div>
  </div>
</template>

<script>
import { fb } from "../firebase";
export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    register() {
      fb.auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then(() => {
          alert("Registred");
          this.email = "";
          this.password = "";
        })
        .catch(function (error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          if (errorCode == "auth/weak-password") {
            alert("The password is too weak.");
          } else {
            alert(errorMessage);
          }
          console.log(error);
        });
    },
  },
};
</script>

<style scoped>
input[type="email"],
input[type="password"] {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  box-sizing: border-box;
}
button {
  background-color: #4caf50;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 50%;
}
button:hover {
  opacity: 0.8;
}
.container {
  padding: 16px 116px 316px 116px;
}
</style>
