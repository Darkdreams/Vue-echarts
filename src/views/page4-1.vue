<template>
    <div>
        <ul>
            <router-link 
                tag="li"
                v-for="question in qusitionList" 
                :key="question.id"
                :to="{
                    name: 'question', 
                    params: {
                        id: question.id,
                        nameData: '这是给子组件的内容'
                    }
                }"
            >{{ question.title }}</router-link>
        </ul>
    </div>
</template>

<script>
// import axios from 'axios'

export default {
    data() {
        return {
            qusitionList: [],
            nameData: "给子组件的内容"
        }
    },
    created() {
        this.$axios.get('/question').then(res => {
            this.qusitionList = res.data
        })
    }
}
</script>

<style scoped>
ul {
    margin-top: 50px;
}
li {
    line-height: 40px;
    font-size: 24px;
}
</style>