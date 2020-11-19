<template>
  <div class="login">
    {{ msg }}
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component({
  name: "Login",
})
export default class Login extends Vue {
  public msg: string = "login";
}
</script>

<style lang="sass">
</style>
