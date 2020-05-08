<template>
    <div>
        287572291@qq.com
        <button @click="handleClick">按我</button>
        {{message}}
    </div>
</template>
<script>
export default {
    data(){
        return {
            message:''
        }
    },
    methods:{
        handleClick(){
            console.log(this)
            console.log(this.$bus);
            
            this.$bus.$emit('on-click','hello')
            // this.$emit('on-click','hahhwadfhsadfsdaa')

        }
    },
    mounted(){
        this.$on('on-click',mes=>{
            this.message=mes
        })
    }
}
</script>
<style>

</style>