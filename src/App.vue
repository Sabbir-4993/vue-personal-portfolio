<template>
  <div id="app">
    <div class="container">
      <div class="row">
        <div class="col-lg-4 profileColumn">
          <ProfileSidebar />
        </div>
        <div class="col-lg-8 contentColumn">

          <HeaderTop />

          <div class="bodyContent">
            <div class="pageCointainer">
              <router-view />
              <Footer />
            </div>

          </div>

        </div>
      </div>
    </div>

    <!-- Bact To Top -->
    <a href="javascript:void(0);" id="backtotop"><i class="icofont-bubble-up"></i></a>
    <!-- Bact To Top -->
  </div>
</template>

<script>

import ProfileSidebar from "./components/ProfileSidebar";
import Footer from "./components/Footer";
import HeaderTop from "./components/HeaderTop";

export default {
  name: 'App',
  components: {
    HeaderTop,
    ProfileSidebar,
    Footer,
  }
}
</script>

<style>

</style>
