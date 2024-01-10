<template>
    <div>
        <h2>Sender</h2>
        <input type="text" v-model="msg"/>
        <button @click="senderMsg">send</button>
    </div>
</template>

<script>
    export default {
        name : "Sender",
        data(){
            return {
                msg : ""
            }
        },  
        methods : {
            senderMsg(){
                this.emitter.emit("message", this.msg + " " + Date.now());
            }
        }
    }
</script>

<style scoped>

</style>