<template>
  <div class="hello">Helloyiuyiuiuiuiuiuiuiui {{who}}</div>
</template>
<script>
module.exports = {
  name:'mycomponent',
  data: function() {
    return {
      who: 'world'
    }
  },
  mounted()
        {
            console.log('Hello World')
        }
}
</script>
<style>
.hello {
  background-color: #ffe;
}
</style>