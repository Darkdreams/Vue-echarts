<script>
export default {
    functional: true,
    props: {
        level: {
            type: Number
        }
    },
    render(h, context) {
        console.log(context)
        const { props } = context

        return (
            <div class="level">{props.level}</div>
        )
    }
}
</script>