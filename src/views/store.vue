<template>
  <div>
    <!-- <a-input v-model="inputValue"></a-input>-->
    <a-input @input="handleInput" :value="inputValue"></a-input>
    {{inputValue}}
    <a-show :content="inputValue"></a-show>
  </div>
</template>

<script>
import AInput from "_c/AInput.vue";
import AShow from "_c/AShow.vue";
export default {
  name: "store",
  data() {
    return {
      inputValue: "123123"
    };
  },
  components: {
    AInput,
    AShow
  },
  methods:{
      handleInput(val){
          this.inputValue=val
      }
  }
};
</script>

<style>
</style>