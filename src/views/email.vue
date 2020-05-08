<template>
    <div class="email">
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
            this.$bus.$emit('on-click','hello')
            // this.$emit('on-click','hahhwadfhsadfsdaa')
        }
    },
    mounted(){
        console.log(this.$bus);       
    }
}
</script>
<style>
.email{
    border: 1px solid red;
}
</style>