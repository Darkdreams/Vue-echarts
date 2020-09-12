<template>
    <div>
        Page one
    </div>
</template>

<script>
export default {
    props: {
        newData: Object,
        msg: {
            type: String,
            default: "这是子组件自己的默认数据, 如果显示此句话,说明父组件数据为空"
        }
    },
    data: function() {
        return {
            
        }
    },
    mounted() {
        // console.log(this)
    },
}
</script>