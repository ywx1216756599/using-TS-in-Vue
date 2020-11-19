<template>
  <div class="main">
    <el-container>
      <el-header class="header">Header</el-header>
      <el-container>
        <el-aside class="nav" width="180px">
          <nav-bar :navHeight="myHeight"></nav-bar>
        </el-aside>
        <el-main :style="{ width: myWidth - 200 + 'px' }">
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { State, Getter, Action, Mutation, namespace } from "vuex-class";
import NavBar from "@/components/NavBar";
const someModule = namespace('Default')

@Component({
  name: 'Main',
  components:{
    NavBar
  }
})
export default class Main extends Vue {
  @someModule.State('innerWidth') myWidth: number
  @someModule.State('innerHeight') myHeight: number
  @someModule.Mutation('init') init: Function
  created() {
    this.init();
    console.log(this.myWidth,this.myHeight);
  }
  mounted() {
    window.onresize = () => {
      this.init();
    };
  }
}
</script>

<style lang="scss">
.main {
  color: #fff;
  overflow: hidden;
  .header {
    box-sizing: border-box;
    border-bottom: 1px solid #162035;
    background-color: #1c2842;
  }
  .nav {
    background-color: #1c2842;
  }
  .el-main {
    padding: 10px;
    background-color: #142039;
  }
}
</style>