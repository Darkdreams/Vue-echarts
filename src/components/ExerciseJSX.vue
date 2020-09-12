<script>
export default {
    data(){
        return {
            msg: "这里是文字",
            id: "1"
        }
    },
    methods: {
      handleClick(id) {
          console.log(id)
      }  
    },
    render() {
        return (
            <div>
                <div class="box" onClick={() => this.handleClick(this.id)}>{this.msg}</div>
                <ul class="bianli">
                    {
                        [1,2,3,4,5].map((item, index) => {
                            return(
                                <li key={index}>{item}</li>
                            )
                        })
                    }
                </ul>
                <input type="text" v-model={this.msg}/>
                
            </div>
            
        )
    }
}
</script>

<style scoped>
.box {
    background-color: red;
}
</style>