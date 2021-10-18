<template>
  <v-carousel
    :show-arrows="false"
    hide-delimiter-background
    class="v-carousel__item  v-delimiter-size--large"
    :interval="interval"
    height="523"
    cycle
    style="border-radius: 0px 0px 0px 0px;"
  >  
      <v-carousel-item
        v-for="(item, i) in items"
        :key="i"
        :src="item.src"
      >
      </v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  name: "loginSlider",
  data() {
    return {
      interval: 4500,
      items: [
        {
          src: "../assets/welcome.png",
          title: "work",
        },
        {
          src: "../assets/manage.png",
          title: "hi",
        },
        {
          src: "../assets/work_together.png",
          title: "bye",
        },
      ],
    };
  },
};
</script>

<style scoped>
.title {
  color: #606060;
  justify-content: center;
  text-align: center;
 
  background: blue;
}
</style>