<template>
  <div>
    <div>
      <el-button>默认按钮</el-button>
      <div style="border:1px solid #f00;margin-top:10px;">{{mess}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "firstDemo",
  data() {
    return {
      mess: {}
    };
  },
  methods: {
    getList() {
      this.axios
        .get("https://getman.cn/mock/getlist")
        .then(response => {
          this.mess = response;
          console.log(response);
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  },
  mounted() {
    this.getList();
  }
};
</script>
