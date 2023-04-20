<template>
    <div id="education">
        <div id="todo-card">
            <div class= "container">
                <div class="alert alert-primar" role="alert">
                   <br>
                   <br>
                    <h1 style="font-size: 200%;">{{msg6}}</h1>
                   
                    <body>
  

  <div class="stuff">
    <br />

    <div>
      <h3>Schools</h3>
      <li>Mary Help</li>
      <li>Holy Family Academy</li>
      <li>Holy Angel University</li>
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

#education{
    background-color: #f0e4e4ef;
}

</style>



<script>
export default {
    name:'education',
    data(){
       return{
        msg6:"My Education: "
       }
    }
}
</script>