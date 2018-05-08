<template>
  <gallery/>
</template>

<script>
import axios from 'axios';

export default {
    async asyncData (context) {
      console.log("asyncData");
      debugger; // eslint-disable-line
            
      var testVar = await axios("http://localhost:3009/test/content.json");
      testVar = testVar.data;     
      var result = [];
      var someData = testVar.forEach(element => {
        var item = new context.store.state.LSObjs.Content(element);
        result.push(item);
          //console.log(item instanceof context.app.LSObj.LSObj);
          //console.log(item)
        });
        //console.log(context.app.LSObj)
        //console.log(result)
        return { LSObjs: result };
      }
    
  }
</script>