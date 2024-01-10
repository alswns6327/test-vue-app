<template>
    <div>
        <h2>Receiver</h2>
        msg : <span>{{ msg }}</span>
    </div>
</template>

<script>
    export default {
        name: "Receiver",
        data(){
            return {
                msg : ""
            }
        },
        created () {
            this.emitter.on("message", this.receiveHandler);
        },
        methods : {
            receiveHandler(msg){
                this.msg = msg;
            }
        }
    }
</script>

<style scoped>

</style>