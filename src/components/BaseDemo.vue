
<script>
import BaseChild from './BaseChild'
export default {
    components: {
        BaseChild
    },
    props: {
        index: {
            type: Number
        }
    },
    render: function(createElement){
        // const vNode = createElement("h" + this.index, this.$slots.default)
        // console.log(vNode)
        // return vNode
        return createElement("div", {
            class: {
                boo: false,
                bar: true
            },
            attrs: {
                id: "data",
                index: "1"
            },

        }, [
            "xxxx",
            createElement("span", {
                domProps: {
                    innerHTML: "123123123123"
                },
                on: {
                    click: function(){
                        console.log("点击了 span")
                    }
                },
            }),
            createElement("input", {
                attrs: {
                    type: "text"
                }
            }),
            createElement("base-child", {
                props: {
                    name: "base-child 组件"
                },
                nativeOn: {
                    click: function(){
                        console.log("点击了组件")
                    }
                },
                domProps: {
                    innerHTML: "base-child 组件"
                }
            }),
        ],)
    }
}
</script>