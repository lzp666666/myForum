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
    <van-field class="input-field" v-model="title" placeholder="请输入标题" />
    <van-divider />
    <div class="type" @click="showPopup = true,openPop=true">选择分类</div>
    <quill-editor v-model="content" :options="editorOption"></quill-editor>

    <van-popup v-model="showPopup" closeable position="bottom">
      <van-radio-group v-model="nowType" direction="horizontal">
        <van-radio v-for="(item,index) in category" :key="index" :name="index">{{item.name}}</van-radio>
      </van-radio-group>
    </van-popup>
  </div>
</template>  

<script>  
import { quillEditor } from 'vue-quill-editor' // 调用富文本编辑器
import 'quill/dist/quill.snow.css' // 富文本编辑器外部引用样式  三种样式三选一引入即可
// import 'quill/dist/quill.core.css'
// import 'quill/dist/quill.bubble.css'
import * as Quill from 'quill'; // 富文本基于quill
//import  "font-awesome/css/font-awesome.css"
export default {
  data() {
    return {
      title: '',
      content: `<p></p><p><br></p><ol></ol>`, // 富文本编辑器默认内容 }
      editorOption: {
        placeholder: "写文章...",
        modules: {
          toolbar: [
            ['bold', 'italic', 'underline', 'strike'],    //加粗，斜体，下划线，删除线
            ['blockquote', 'code-block'],     //引用，代码块
            [{ 'list': 'ordered' }, { 'list': 'bullet' }],     //列表
            [{ 'align': [] }],    //对齐方式
            ['image']    //上传图片、上传视频
          ]
        }
      },
      showPopup: false,
      openPop: false,//只有打开过选择分类，才算选择了分类
      nowType: 0,
      category: [],
    }
  },
  created() {
    this.axios.get('forum/category')
      .then((res) => {
        if (res.status === 200) {
          this.category = res.data.data
        }
      })
  },
  components: {
    quillEditor
  },
  methods: {
    updateData(e = '') {
      this.content = e;
      console.info(e);
    },
    onClickRight() {
      var title = this.title, content = this.content, openPop = this.openPop, category = this.category, nowType = this.nowType;
      if (title.length === 0) {
        this.$notify('标题不能为空')
        return
      }
      if (content.length === 0) {
        this.$notify('内容不能为空')
        return
      }
      if (openPop === false) {
        this.$notify('分类没有选择')
        return
      }
      this.axios.post('forum/publish', { title: title, content: content, categroy: category[nowType].id }).then((res) => {
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
<style>
body {
  background-color: #fff;
}
.ql-toolbar {
  right: 0;
  position: fixed;
  bottom: 0;
  left: 0;
}
.type {
  position: fixed;
  bottom: 45px;
  left: 20px;
  color: #2196f3;
  z-index: 100;
}
.ql-editor {
  height: 78vh;
}
.ql-container {
  padding-bottom: 50px;
}
.ql-container.ql-snow {
  border: 0;
}
.input-field {
  color: #000;
  font-size: 15px;
  font-weight: bolder !important;
}
.van-divider {
  border-color: #3e2c2c;
  margin: 0;
  font-size: 20px;
}
.van-radio-group {
  padding: 30px 0 8rem 20px;
}
</style>  