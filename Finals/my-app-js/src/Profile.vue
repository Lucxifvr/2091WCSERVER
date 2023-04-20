<template>
    <div id="profile">
      <div id="todo-card">
        <div class="container">
          <div class="alert alert-primar" role="alert">
            <h1>{{ msg6 }}</h1>
            <body>
  
    <div class="left"></div>
    <div class="stuff">
      <br /><br />
      <h1>Resume</h1>
      <h2>Kiana Joi Malong</h2>
      <hr />
      <br />
      <br />
      <h1>Profile</h1>
      <br />

      <div>
        <h3>Objective</h3>
        <li>trained in conflict resolution</li>
        <li>Highly motivated to do the task</li>
      </div>
      <br />
      <br />
      <h4>Course: Information Technology (Web Development)</h4>
 
    </div>
  </body>


          </div>
        </div>
      </div>
    </div>
  </template>

<style>



#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
* {
  max-width: 600px;
  margin: auto;
}

/*body {
    min-width: 500px;
}*/

div {
  border-radius: 5px;
}


</style>

<script>
export default {
  name: 'profile',
  data() {
    return {
      msg6: '',
    };
  },
};
</script>