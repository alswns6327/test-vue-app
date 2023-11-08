<template>
    <li>
        <input type="checkbox" :checked="checked"/> {{id}} - {{name}} {{ defaultTest[0] }}
        <!-- <input type="checkbox" :checked="lang.checked"/> {{lang.name}} -->
    </li>
</template>

<script>
    import Lang from '@/Lang';
    export default {
        name:"CheckboxItem",
        data(){
            return{
                
            };
        },
        // props : ["name", "checked"],
        // props : ["lang"],
        props : {
            id : [Number, String],
            // name : String,
            name : {
                validator(v) {
                    return typeof(v) !== "string" ? 
                        false :
                        v.trim().length>=4 ? true : false
                }
            },
            checked : {
                type : Boolean,
                required : false,
                default : false
            },
            defaultTest : {
                type : Array,
                required : false,
                default () {
                    return ['1', '2'];
                }
            }
            // lang : Lang
        },
        created(){
            
        }
    }
</script>

<style scoped>

</style>