<template>
    <div>
        <InputName @changeName="changeNameHandler"/>
    </div>
    <br/>
    <span>parent name : {{ parentName }}</span>
    <span>num : {{ num }}</span>
</template>

<script>
    import InputName from '@/components/InputName.vue';
    export default {
        name : "App2",
        data(){
            return {
                parentName : "1212", num : '1'
            }
        },
        methods : {
            changeNameHandler(name, num){
                this.parentName = name;
                this.num = num;
            }
        },
        components : {InputName}
    }
</script>

<style scoped>

</style>