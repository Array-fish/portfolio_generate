<template>
  <div>
    <header>
      <div class="navbar bg-base-100">
        <NuxtLink to="/" class="btn btn-ghost normal-case text-xl">Home</NuxtLink>
        <NuxtLink to="/about" class="btn btn-ghost normal-case text-xl">About</NuxtLink>
        <NuxtLink to="/works" class="btn btn-ghost normal-case text-xl">works</NuxtLink>
        <NuxtLink to="https://array-fish.hatenablog.com/" class="btn btn-ghost normal-case text-xl">Blog</NuxtLink>
        <NuxtLink to="https://github.com/Array-fish/" class="btn btn-ghost normal-case text-xl">GitHub</NuxtLink>
      </div>
    </header>
    <slot />
  </div>
</template>

<script lang="ts">
export default{
}

</script>