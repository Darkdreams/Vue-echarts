<script>
export default {
    props: {
        name: String
    },
    render(h) {
        return h("div", {
            class: "child"
        },[this.name])
    }
}
</script>