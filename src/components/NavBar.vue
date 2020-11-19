<template>
  <div class="nav-bar">
    <el-menu
      class="menu"
      background-color="#1c2842"
      :default-active="$route.name"
      text-color="#fff"
      active-text-color="#ffd04b"
      unique-opened
      collapse-transition
      @select="handleRouteName"
      :style="{ height: navHeight - 60 + 'px' }"
    >
      <template v-for="list in routesArr">
        <nav-list :data="list" :key="list.name"></nav-list>
      </template>
    </el-menu>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import routes from "./../router/routes";
import { Router } from "./../router/interfaceList";
import NavList from "./NavList";

@Component({
  name: "NavBar",
  components:{
    NavList
  }
})
export default class NavBar extends Vue {
  @Prop({ type: Number }) navHeight!: Number;
  public routesArr: Router[] = routes;

  handleRouteName(index, indexPath) {
    this.$router.push({ name: index });
  }
}
</script>

<style lang="scss">
.nav-bar {
  .menu {
    overflow: hidden;
  }
}
</style>