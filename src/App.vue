<template>
  <main>
    <div class="nav">
      <routerLink :to="{ name: 'Home' }">Home</routerLink>
      <routerLink :to="{ name: 'Users' }">Users</routerLink>
      <routerLink :to="{ name: 'Employes' }">Employes</routerLink>
    </div>
    <div class="viwer">
      <router-view/>
    </div>
  </main>
  

</template>

<script>

export default {
  name: 'App',
 
}
</script>

<style>
* {
  box-sizing: border-box;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
main {
  display: flex;
  min-height: 100vh;
}
.nav {
  display: flex;
  gap: 0.8em;
  flex-direction: column;
  padding: 0.5em 0.4em;
  width: 120px;
  background-color: #747373;
}
.nav a {
  display: block;
  text-decoration: none;
  color: white;
  font-weight: 800;
  padding: 0.4em 0.7em;

}
.nav a:hover {
  background-color: rgb(201, 198, 67); 
  color: rgba(41, 107, 249, 0.905);
  border-radius: 5px;
}
.nav a.router-link-exact-active {
  color: rgb(1, 132, 1); 
  background-color: rgba(188, 237, 113, 0.748);
  border-radius: 6px;

}
.viwer {
  width:calc(100% - 120px);
  background-color:#d7f48fe2;

}
</style>
