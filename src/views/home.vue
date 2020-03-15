<template>
  <div>
    Home页面
    食物<b>{{food}}</b>
    <button @click="handleClick('back')">上一页</button>
    <button @click="handleClick('push')">下一页</button>
    <button @click="handleClick('replace')">替换</button>
  </div>
</template>
<script>
export default {
  props:{
    food:{
      type:String,
      default:"noddles"
    }
  },
  methods: {
    handleClick(type) {
      if (type === "back") {
        this.$router.back();
      } else if (type === "push") {
        // this.$router.push("/parent"); //1.路径

        // this.$router.push({
        //   name: "parent",
        //   query:{
        //     name:'randy'//增加参数 形如http://localhost:8080/#/parent?name=randy
        //   }
        // }); //2.使用命名-query

        // this.$router.push({
        //   name: "argu",
        //   params:{
        //     name:'randy'
        //   }
        // }); //3.使用命名-动态

        const name = "randy";
        this.$router.push({
          path: `/argu/${name}`
        }); //4.使用命名-动态-es模板语法
      } else if (type === "replace") {
        this.$router.replace({
          name: "parent"
        });
      }
    }
  }
};
</script>
<style>
</style>