<template>
    <div id="skills">
      <div id="todo-card">
        <div class="container">
          <div class="alert alert-primar" role="alert">
            <br>
            <h1 style="font-size: 200%;">{{ msg6 }}</h1>

<body>
  

  <div class="stuff">
    <br />

    <div>
      <h3>Training/Seminars</h3>
      <li>CodeGeeks</li>
      <li>Redhat</li>
      <li>Cisco</li>
      <li>W3Schools</li>
    </div>
    <br>
    <br>
    <div>
      <h3>Programming Languages</h3>
      <li>PHP</li>
      <li>Linux</li>
      <li>Javascript</li>
      <li>Python</li>
      <li>NodeJS</li>
    </div>

  </div>
</body>

<br>




          </div>
        </div>
      </div>
    </div>
  </template>


<style>
#skills{
    background-color: aliceblue;
    height: auto;
}

</style>



  <script>
  export default {
    name: 'skills',
    data() {
      return {
        msg6: 'My Skills:',
      };
    },
  };
  </script>