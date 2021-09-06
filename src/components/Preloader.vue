<template>
  <div id="preloader">
    <div class="preloader_content">
      <div class="preloader_first"></div>
      <div class="preloader_second"></div>
      <div class="preloader_third"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Preloader",
};
</script>

<style scoped>
#preloader {
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: #1d4ed8;
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
}
.preloader_content {
  position: relative;
  width: 200px;
  height: 200px;
}
.preloader_first,
.preloader_second,
.preloader_third {
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  border-radius: 50%;
  animation: 1s linear infinite;
}
.preloader_first {
  border-bottom: 7px solid #ff7473;
  border-right: 7px solid #ff7473;
  transform: rotateX(35deg) rotateY(-45deg) rotateZ(0deg);
  animation-name: first;
}
.preloader_second {
  border-bottom: 7px solid #ffc952;
  border-right: 7px solid #ffc952;
  transform: rotateX(50deg) rotateY(10deg) rotateZ(0deg);
  animation-name: second;
}
.preloader_third {
  border-bottom: 7px solid #47b8e0;
  border-right: 7px solid #47b8e0;
  transform: rotateX(35deg) rotateY(55deg) rotateZ(0deg);
  animation-name: third;
}
@keyframes first {
  0% {
    transform: rotateX(35deg) rotateY(-45deg) rotateZ(0deg);
  }
  100% {
    transform: rotateX(35deg) rotateY(-45deg) rotateZ(360deg);
  }
}
@keyframes second {
  0% {
    transform: rotateX(50deg) rotateY(10deg) rotateZ(0deg);
  }
  100% {
    transform: rotateX(50deg) rotateY(10deg) rotateZ(360deg);
  }
}
@keyframes third {
  0% {
    transform: rotateX(35deg) rotateY(55deg) rotateZ(0deg);
  }
  100% {
    transform: rotateX(35deg) rotateY(55deg) rotateZ(360deg);
  }
}
</style>