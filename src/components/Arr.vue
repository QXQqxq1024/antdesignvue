<template>
  <div id="arr">
    <!-- 头部 -->
    <h3>数据展示</h3>
    <!-- 添加 -->
    <el-row :gutter="20">
      <el-col :span="8"
        ><el-input v-model="title" placeholder="请输入标题"></el-input
      ></el-col>
      <el-col :span="8"
        ><el-input v-model="content" placeholder="请输入内容"></el-input
      ></el-col>
      <el-col :span="8"
        ><el-button type="primary" @click="add">添加</el-button></el-col
      >
    </el-row>

    <template>
      <el-table
        :data="list"
        style="width: 100%"
      >
        <el-table-column label="图片" width="120">
          <template v-if="list[0]"
            ><img :src="list[0].img_url" width="100" height="100"
          /></template>
        </el-table-column>
        <el-table-column prop="title" label="标题" width="180">
        </el-table-column>
        <el-table-column prop="content" label="内容" width="800">
        </el-table-column>
        <el-table-column prop="add_time" label="时间"> </el-table-column>
        <el-table-column label="操作" width="160">
          <template slot-scope="scope">
            <el-button @click="handleDelete(scope.row.id)" type="danger"
              >删除</el-button
            >
          </template>
        </el-table-column>
      </el-table>
    </template>

    <el-button type="primary" @click="prevPage">上一页</el-button>
    <el-button type="primary" @click="nextPage">下一页</el-button>
  </div>
</template>

<style lang="less" scoped>
</style>

<script>
import { curriculum,apiAddress} from "../api/api";
export default {
  data() {
    return {
      title: "",
      content: "",
      list: [],
      pageindex: 1, //默认显示页
      pagesize: 10, //默认每页显示条数
    };
  },
  methods: {
    getNewsList() {
      const obj = {
        pagesize: this.pagesize,
        pageindex: this.pageindex, 
      };
      curriculum(obj).then((res) => {
        this.list=res.list;
      });
    },
    nextPage() {
      this.pageindex++;
      this.getNewsList();
    },
    prevPage() {
      this.pageindex--;
      this.getNewsList();
    }, 
    
    add(){
      const obj = {
        title:this.title,
        content:this.content,
      };
      apiAddress(obj).then(res=>{
        console.log(res);
      })
    }

  },

  created() {
    this.getNewsList();
    this.add();
  },
};
</script>

