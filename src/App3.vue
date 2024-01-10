<template>
    <div>
        <Sender/>
        <hr/>
        <Receiver/>
        <hr/>
        <Receiver2/>
    </div>
</template>

<script>
    import Receiver from './components/Receiver.vue';
import Receiver2 from './components/Receiver2.vue';
    import Sender from './components/Sender.vue';
    
    export default {
        name: "App3",
        components: { Sender, Receiver, Receiver2 }
    }
</script>

<style scoped>

</style>