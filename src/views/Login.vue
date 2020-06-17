<template>
  <div style="width:500px;margin:0 auto">
    <el-form>
      <el-form-item label="用户">
        <el-input type="text" v-model="form.user"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input type="text" v-model="form.pwd"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      form: {
        user: "",
        pwd: ""
      }
    };
  },
  methods: {
    onSubmit() {
      this.$router.push({
        name: "firstDemo"
      });
    }
  }
};
</script>