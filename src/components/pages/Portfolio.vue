<template>
  <section class="comonSection portfolioSection">
    <div class="container-fluid">
      <div class="row">
        <div class="col-lg-12">
          <h2 class="sectionTitle">Latest Projects</h2>
        </div>
      </div>
      <div class="row" >
        <div class="col-lg-4 folio_effect">
          <div class="folio_item">
            <router-link to="/Portfolio/Details" class="folio_item_thumbs">
              <div class="folio_stack">
                <div class="folio_decoration"></div>
                <div class="folio_decoration"></div>
                <div class="folio_decoration"></div>
                <div class="folio_decoration"></div>
                <div class="folio_img_holder">
                  <img class="folio_img" :src="'assets/images/folio/1.jpg'" alt="Image">
                </div>
              </div>
            </router-link>
            <div class="folio_content">
              <h3 class="folio_title"><router-link to="/Portfolio/Details">Artwork Design</router-link></h3>
              <p class="folio_cat"><router-link to="/Portfolio">Graphic</router-link></p>
            </div>
          </div>
        </div>
        <div class="col-lg-4 folio_effect">
          <div class="folio_item">
            <router-link to="/Portfolio/Details" class="folio_item_thumbs">
              <div class="folio_stack">
                <div class="folio_decoration"></div>
                <div class="folio_decoration"></div>
                <div class="folio_decoration"></div>
                <div class="folio_decoration"></div>
                <div class="folio_img_holder">
                  <img class="folio_img" :src="'assets/images/folio/2.jpg'" alt="Image">
                </div>
              </div>
            </router-link>
            <div class="folio_content">
              <h3 class="folio_title"><router-link to="/Portfolio/Details">Web App</router-link></h3>
              <p class="folio_cat"><router-link to="/Portfolio">Development</router-link></p>
            </div>
          </div>
        </div>
        <div class="col-lg-4 folio_effect">
          <div class="folio_item">
            <router-link to="/Portfolio/Details" class="folio_item_thumbs">
              <div class="folio_stack">
                <div class="folio_decoration"></div>
                <div class="folio_decoration"></div>
                <div class="folio_decoration"></div>
                <div class="folio_decoration"></div>
                <div class="folio_img_holder">
                  <img class="folio_img" :src="'assets/images/folio/3.jpg'" alt="Image">
                </div>
              </div>
            </router-link>
            <div class="folio_content">
              <h3 class="folio_title"><router-link to="/Portfolio/Details">Pencil Drawing</router-link></h3>
              <p class="folio_cat"><router-link to="/Portfolio">Illustration</router-link></p>
            </div>
          </div>
        </div>
        <div class="col-lg-4 folio_effect">
          <div class="folio_item">
            <router-link to="/Portfolio/Details" class="folio_item_thumbs">
              <div class="folio_stack">
                <div class="folio_decoration"></div>
                <div class="folio_decoration"></div>
                <div class="folio_decoration"></div>
                <div class="folio_decoration"></div>
                <div class="folio_img_holder">
                  <img class="folio_img" :src="'assets/images/folio/4.jpg'" alt="Image">
                </div>
              </div>
            </router-link>
            <div class="folio_content">
              <h3 class="folio_title"><router-link to="/Portfolio/Details">Graphic App</router-link></h3>
              <p class="folio_cat"><router-link to="/Portfolio">App</router-link></p>
            </div>
          </div>
        </div>
        <div class="col-lg-4 folio_effect">
          <div class="folio_item">
            <router-link to="/Portfolio/Details" class="folio_item_thumbs">
              <div class="folio_stack">
                <div class="folio_decoration"></div>
                <div class="folio_decoration"></div>
                <div class="folio_decoration"></div>
                <div class="folio_decoration"></div>
                <div class="folio_img_holder">
                  <img class="folio_img" :src="'assets/images/folio/5.jpg'" alt="Image">
                </div>
              </div>
            </router-link>
            <div class="folio_content">
              <h3 class="folio_title"><router-link to="/Portfolio/Details">Awesome Illustration</router-link></h3>
              <p class="folio_cat"><router-link to="/Portfolio">UI/UX</router-link></p>
            </div>
          </div>
        </div>
        <div class="col-lg-4 folio_effect">
          <div class="folio_item">
            <router-link to="/Portfolio/Details" class="folio_item_thumbs">
              <div class="folio_stack">
                <div class="folio_decoration"></div>
                <div class="folio_decoration"></div>
                <div class="folio_decoration"></div>
                <div class="folio_decoration"></div>
                <div class="folio_img_holder">
                  <img class="folio_img" :src="'assets/images/folio/6.jpg'" alt="Image">
                </div>
              </div>
            </router-link>
            <div class="folio_content">
              <h3 class="folio_title"><router-link to="/Portfolio/Details">Frontend Development</router-link></h3>
              <p class="folio_cat"><router-link to="/Portfolio">Development</router-link></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Portfolio"
}
</script>

<style scoped>

</style>