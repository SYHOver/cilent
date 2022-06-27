<template>
  <div class="login">
    <div class="header">
      <img src="src/assets/img/header.png" alt="" />
    </div>
    <div class="main">
      <div class="main-top">
        <div class="main-top-l">
          <span>Mirroring Cast screen</span>
          <br /><span class="m-title">Reao-time srcreen shoring</span>
        </div>
        <div class="main-top_r">
          <div class="main-top_rimg">
            <img src="../../../assets/img/watches.png" alt="" />
          </div>
        </div>
      </div>
      <div class="main-bottom">
        <img src="../../../assets/img/main.png" alt="" />
      </div>
    </div>

    <div class="bottom">
      <div class="bottom-topicon">一</div>
      <div class="bottom-header">
        <div>
          Please choose
          <br />Choose a screenast scene
        </div>
        <div>
          <img src="../../../assets/img/buttom-title.png" alt="" />
        </div>
      </div>
      <div>
        <div class="bottom-main">
          <div class="bottom-main_item">
            <div>
                <img src="../../../assets/img/bottom-icon.png" alt="">
            </div>
            <div class="boottom-main_title">
                Screen mirroring
                <br>Mobile srceen sharing to Tv
            </div>
          </div>
        </div>
      </div>
      <div>
        <div class="bottom-main">
             <div class="bottom-main_item">
            <div>
                <img src="../../../assets/img/bottom-video_icon.png" alt="">
            </div>
            <div class="boottom-main_title">
                Online video
                <br>Cost online videos To
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>




<style scoped>
.bottom-main_item{
    display: flex;
    margin-left:3rem;
}
.boottom-main_title{
    font-size: 1.3rem;
    margin-left:1rem;
}
.bottom-main_item img{
  width: 4rem;
  height: 4rem;
}
.bottom-main{
  background: white;
  border-radius: 1.5rem;
  height: 80%;
  margin-top: 1rem;
  display: flex;
  align-items: center;
}

.bottom-header img {
  width: 3rem;
  height: 3rem;
}
.bottom-header {
  display: flex;
  justify-content: space-between;
  font-size: 1.4rem;
  padding: 1rem;
  color: white;
}
.bottom-topicon {
  text-align: center;
}
.bottom {
  background: #9787ea;
  border-radius: 3.5rem;
  border: 0.1rem solid #e0dff5;
  display: grid;
  grid-template-rows: 0.5fr 1fr 1.5fr 1.5fr;
  padding: 0rem 3rem;
}

.main-bottom img {
  width: 22rem;
  height: 22rem;
}
.main-bottom {
  text-align: center;
}
.m-title {
  font-size: 1.2rem;
  margin-top: 0.5rem;
}

.main-top_rimg {
  position: absolute;
  bottom: 0;
}

.main-top_r {
  position: relative;
}

.main-top_r img {
  width: 3.5rem;
  height: 3.5rem;
}
.main-top {
  color: white;
  font-size: 1.6rem;
  width: 30rem;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 26rem auto;
  padding: 1rem;
}
.login {
  height: 100vh;
  background: #8471fe;
  border-radius: 3.5rem;
  display: grid;
  grid-template-rows: 6rem 28rem auto;
}
.header {
  margin-top: 1.5rem;
  display: flex;
  align-items: center;
  padding-left: 2rem;
}
.header img {
  width: 3rem;
  height: 3rem;
}
.main {
  display: grid;
  grid-template-rows: 8rem auto;
}
</style>