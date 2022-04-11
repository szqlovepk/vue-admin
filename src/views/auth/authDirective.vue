<template>
  <div>
    <p>演示权限指令</p>
    <p>admin账户可见， visitor账户不可见</p>
    <input v-focus v-auth:authDirective />
  </div>
</template>

<script>
export default {};
</script>

<style></style>
