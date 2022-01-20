var app = new Vue({
    el: '#app',
    data:{
      message: '',
    },
    computed:{
      countSpace(){
        var spaceText = this.message
        //改行空白含まない
        var noSpaceText = spaceText.replace(/\s+/g,'')
        return noSpaceText.length
      }
    }
})