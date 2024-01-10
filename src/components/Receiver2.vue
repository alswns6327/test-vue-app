<template>
    <div>
        <h2>Receiver2</h2>
        <span>{{ msg }}</span>
    </div>
</template>

<script>
    export default {
        name : "Receiver2",
        data(){
            return {
                msg : ""
            }
        },
        created() {
            this.emitter.on("message", this.receiveHandler)
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