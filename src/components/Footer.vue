<template>
    <footer class="footer">公共底部: <span>{{this.msg}}</span></footer>
</template>
<script>
export default {
    name: "footerMod",
    props: {
        msg: {
            type: String,
            default: "这是子组件自己的默认数据, 如果显示此句话,说明父组件数据为空"
        }
    },
    // created: function() {
    //     console.log(this.msg)
    // },
    // render: function(h, context){
    //     console.log(h, context)
    //     return (
    //         <footer class="footer">公共底部: <span>{this.msg}</span></footer>
    //     )
    // }
}
</script>

<style scoped>
footer {
    background: red;
    margin-top: 50px;
    font-size: 2em;
}
</style>