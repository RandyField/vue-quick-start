<template>
    <div>
        13880825220
        
    </div>
</template>
<script>
export default {
    data(){
        return {
            message:''
        }
    },
    mounted(){
        this.$bus.$on('on-click',mes=>{
            this.message=mes
        })
    }
}
</script>
<style>

</style>