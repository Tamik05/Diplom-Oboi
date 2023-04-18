<template>
  <ul class="pagination content">
    <li class="active">1</li>
    <li>2</li>
    <li>3</li>
  </ul>
</template>

<style lang="scss">
@import '../variables.scss';
.pagination {
    display: flex;
    
    li {
        margin-right: 10px;
        color: $main-color;
        cursor: pointer;
        padding: 2px 8px;
        &.active {
            color: white;
            background: $main-color;
        }
        border: 1px solid $main-color;
    }
}
</style>
