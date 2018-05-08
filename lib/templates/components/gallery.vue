<template>
  <div>
      hello
  </div>
</template>

<script>

export default {
    
    // Lifecycle hooks
    // https://vuejs.org/v2/api/#Options-Lifecycle-Hooks
    beforeCreate () {
        console.log("beforeCreate")
    },
    created () {
        //  data observation, computed properties, methods, watch/event callbacks
        console.log("created")
        //this.geoCoord = this.contentToGeoPoints(this.content)
    },
    beforeMount () {
        console.log("beforeMount")
    },
    mounted () {
        // el is replaced by the newly created vm.$el
        console.log("mounted")
    
        this.$nextTick(function () {
        // Code that will run only after the
        // entire view has been rendered
        console.log("mounted nextTick")
        })
    },
    beforeUpdate () {
        console.log("beforeUpdate")
    },
    updated () {
        console.log("updated")
    },
    beforeDestroy () {
        console.log("beforeDestroy")
    },
    destroyed () {
        console.log("destroyed")
    }
}
</script>
