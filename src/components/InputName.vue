<template>
    <div>
        이름 : <input type="text" v-model="name"/>
        <button @click="$emit('changeName', name, '3')">event send</button>
    </div>
</template>

<script>
    export default {
        name : "InputName",
        data(){
            return {
                name : ""
            }
        },
        // emits : ["changeName"]
        emits : {
            changeName :  (name, num) => {
                console.log(name);
                console.log(num);
                return true;
            }
        }
    }
</script>

<style scoped>

</style>