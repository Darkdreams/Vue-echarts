<template>
    <div>
        <button @click="handlerClick">点击</button>
        {{ storeCount }}
        {{ doubleCount }}
        {{ addCount(10) }}
    </div>
</template>

<script>
import { mapState, mapGetters} from "vuex"

export default {
    data() {
        return {
            count: this.$store.state.count
        }
    },
    computed: {
        ...mapState({
            storeCount: "count"
        }),
        ...mapGetters(["doubleCount", "addCount"])
    },
    created() {
        console.log(this.$store)
    },
    methods: {
        handlerClick() {
            const num = Math.floor(Math.random() * 10)
            console.log(num)
            this.$store.commit("countIncrement", num)
        }
    }
}
</script>