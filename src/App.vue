<template>
  <div>
    <h2>App 컴포넌트</h2>
    <!-- <CheckboxItem v-for="lang in langs" :name="lang.name" :checked="lang.checked" :key="lang.id"/> -->
    <CheckboxItem v-for="lang in langs" v-bind="lang" :key="lang.id"/>
    <!-- <CheckboxItem v-for="lang in langs" :lang="lang" :key="lang.id"/> -->
  </div>
</template>

<script>
  import Lang from './Lang';
import CheckboxItem from './components/CheckboxItem.vue';
  export default {
    name:"App",
    components:{ CheckboxItem },
    data(){
      return {
        // langs : [
        //   new Lang(1 , "python", false),
        //   new Lang(2 , "java", true),
        //   new Lang(3 , "javascript", false),
        //   new Lang(4 , "C", false),
        //   new Lang(5 , "C#", false),
        // ]
        langs : [
          {id:1 , name:"python", checked :false},
          {id:2 , name:"java", checked :true},
          {id:3 , name:"javascript", checked :false},
          {id:4 , name:"C", checked :false},
          {id:5 , name:"C#", checked :false},
        ]
      }
    }
  }
</script>

<style scoped>

</style>