 <template>
  <div class="content">
    <van-nav-bar
      title="标题"
      left-text="返回"
      left-arrow
      @click-left="$router.go(-1)"
      @click-right="onClickRight"
      right-text="提交"
    />
    <!-- 输入任意文本 -->
    <van-field v-model="title" label="标题" />
    <!-- 输入手机号，调起手机号键盘 -->
    <van-field v-model="content" type="tel" label="地址" />
  </div>
</template>  
<script>
// @ is an alias to /src
export default {
  name: 'publishVideo',
  data() {
    return {
      title: '',
      content: ''
    }
  },
  methods: {
    data() {
      return {
    
      };
    },
    created() {
      console.log(this.utils)
    },
    onClickRight() {
      var title = this.title, content = this.content;
      if (title.length === 0) {
        this.$notify('标题不能为空')
        return
      }
      if (content.length === 0) {
        this.$notify('内容不能为空')
        return
      }
      this.axios.post('forum/publishVideo', { title: title, content: content }).then((res) => {
        if (res.status === 200) {
          this.$toast({
            type: "success", message: '发表成功', onClose: () => {
              this.$router.go('-1')
            }
          });

        }
      })
    },
  }
}
</script>