<template>
  <div class="hello">
    <div class="container">
      <div class="">
        <div class="col-md-12">
          <div class="card">
            <div class="card-body">
              <h1>Hello</h1>
              <P>{{ stateData }}</P>

              <router-link to="/update" class="btn btn-outline-secondary">
                Next
              </router-link>
              <br />
              <br />
              Post test! <br />
              <input :value="message" @input="updateMessage">
              <span v-for="post in posts">
                <p style="color: red">
                  {{ post.id }} {{ post.title }} {{ post.completed }}
                </p>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      posts: [],
      stateData: "",
      message: "Hallow World!",
    };
  },

  mounted() {
    this.stateData = this.$store.getters.getMessage;
  },

  async created() {
    axios
      .get("https://jsonplaceholder.typicode.com/todos")
      .then((response) => {
        this.posts = response.data;
      })
      .catch((e) => {});
  },

methods: {
  updateMessage (e) {
    this.$store.commit('updateMessage', e.target.value)
  }
}, 

};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
