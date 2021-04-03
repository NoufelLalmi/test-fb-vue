<template>
  <div class="hello">
    <button @click="logout">Log out</button>
    <h1>{{ msg }}</h1>
    <h2>Your IDtoken is :</h2>
    <p>{{ idToken }}</p>
  </div>
</template>

<script>
import { fb } from "../firebase";
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  data() {
    return {
      idToken: "",
    };
  },
  created() {
    this.idToken = fb.auth().currentUser.getIdToken();
  },
  methods: {
    logout() {
      fb.auth()
        .signOut()
        .then(() => {
           alert("Sign-out successful.")
           this.$router.replace("/")
        })
        .catch((error) => {
          console.log(error)
        });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
