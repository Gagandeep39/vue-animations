<template>
  <ul>
    <transition-group>
      <li v-for="(user, index) in users" :key="index" @click="removeUser(user)">
        {{ user }}
      </li>
    </transition-group>
  </ul>
  <div>
    <input type="text" ref="userName" />
    <button @click="addUser">Add User</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      users: ['Gagan', 'Troye', 'Mary', 'Andy'],
    };
  },
  methods: {
    removeUser(user) {
      this.users = this.users.filter((u) => u !== user);
    },
    addUser() {
      this.users.unshift(this.$refs.userName.value);
    },
  },
};
</script>
<style scoped>
ul {
  list-style: none;
  padding: 0;
  margin: 1rem 0;
}
li {
  border: 1px solid #ccc;
  padding: 1rem;
  text-align: center;
}
</style>
