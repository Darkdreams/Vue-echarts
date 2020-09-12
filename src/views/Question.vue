<template>
    <div v-if="question">
        <div class="title">{{ question.title }}</div>

        <div class="arrow" >
            <div
                 v-for="other in otherQuestionList"
                :key="other.id"
                :class="other.type"
                @click="handlerClick(other.id)"
            >{{other.title}}</div>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        id: [String, Number],
        nameData: String
    },
    data(){
        return {
            question: null,
        }
    },
    methods: {
        handlerClick(id) {
            // console.log(id,this.$route)

            const { name } = this.$route
            this.$router.push({
                name,
                params: {
                    id
                }
            })
        },
        getData() {
            // const { id } = this.$route.params
            const { id } = this
            this.$axios.get(`/question/${id}`).then( res => {
                // console.log(res)
                this.question = res
            })
        }
    },
    mounted() {
        // this.getData()
        console.log(this.$route)
        console.log(this, this.nameData)
    },
    computed: {
        otherQuestionList() {
            const arr = []

            if(this.question.prev) {
                const { prev, prevId } = this.question

                arr.push({
                    type: "prev",
                    id: prevId,
                    title: prev
                })
            }

            if(this.question.next) {
                const { next, nextId } = this.question
                
                arr.push({
                    type: "next",
                    id: nextId,
                    title: next
                })
            }

            return arr;
        }
    },
    watch: {
        "$route": {
            handler() {
                this.getData()
            },
            immediate: true
        }
    }
}
</script>

<style scoped>
.title {
    margin-top: 50px;
    font-size: 24px;
}

.arrow {
    margin-top: 200px;
}
.arrow .prev {
    float: left;
}
.arrow .next {
    float: right;
}
</style>