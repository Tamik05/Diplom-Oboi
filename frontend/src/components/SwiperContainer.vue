<template>
  <div class="buttons-control">
    <div class="swiper-button-prev" ref="prev"></div>
    <div class="swiper-button-next" ref="next"></div>
  </div>
  <swiper
  :breakpoints="{
    320: {
      slidesPerView: 1
    },
    768: {
      slidesPerView: 2
    },
    1000: {
      slidesPerView: 3
    },
    1348: {
      slidesPerView: 4
    }
  }"
    :modules="modules"
    :navigation="{prevEl: prev, nextEl: next}"
    :slides-per-view="4"
    :space-between="50"
    class="swiper"
  >
    <slot></slot>
  </swiper>
</template>
<script setup>
import { Swiper } from "swiper/vue";
import { Navigation } from "swiper";
import "swiper/css";
import { ref } from "vue";

const next = ref(null);
const prev = ref(null);

const modules = [Navigation];
</script>
