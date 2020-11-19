<template>
  <div class="nav-list">
    <el-submenu v-if="!data.isHidden" :index="data.name">
      <template slot="title">
        <span>{{ data.meta.title }}</span>
      </template>
      <template v-for="item in data.children">
        <nav-list
          :key="item.name"
          v-if="item.children && item.children.length != 0 && !data.isHidden"
          :data="item"
        ></nav-list>
        <el-menu-item-group :key="item.name" v-else-if="!item.isHidden">
          <el-menu-item :index="item.name">{{ item.meta.title }}</el-menu-item>
        </el-menu-item-group>
      </template>
    </el-submenu>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
@Component({
  name: 'NavList'
})
export default class NavList extends Vue {
  name: 'NavList'
  @Prop({ type: Object }) data!: any;
}
</script>

<style lang="sass">

</style>