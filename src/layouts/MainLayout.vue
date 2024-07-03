<template>
  <q-layout view="hHh lpR fFf">
    <div>
      <div class="masthead-container row items-center justify-center">
        <!-- <div class="masthead-container-overlay"></div> -->
        <div class="logo-container">
          <a href="https://getfarmlab.com"
            ><img
              alt="Page logo"
              src="https://my.lab.farm/siteInfo/logo_landscape_white.png"
          /></a>
        </div>
      </div>
      <div class="row justify-center">
        <q-card class="route-card" flat bordered dark>
          <q-card-section>
            <route-checker
              name="Homestead"
              route="https://my.lab.farm/siteInfo"
            ></route-checker>
          </q-card-section>

          <q-card-section>
            <route-checker
              name="Shepherd"
              route="https://accounts.lab.farm/site/info"
            ></route-checker>
          </q-card-section>

          <q-card-section>
            <route-checker
              name="Silo"
              route="https://silo.lab.farm/site/info"
            ></route-checker>
          </q-card-section>

          <q-card-section>
            <route-checker
              name="Dropzone"
              route="https://dropzone.lab.farm/site/info"
            ></route-checker>
          </q-card-section>

          <q-card-section>
            <route-checker
              name="Harvest"
              route="https://harvest.lab.farm/site/info"
            ></route-checker>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </q-layout>
</template>
<style lang="scss">
.masthead-container {
  width: 100% !important;
  max-width: 100% !important;
  height: 300px;
  border-bottom: 1px solid #d7d7d7;
  background: #70bf46;
  background-size: cover;
  margin-bottom: 60px !important;
}

.masthead-container-overlay {
  background-image: url('https://getfarmlab.com/wp-content/uploads/2023/04/Topography-Pattern.png');
  background-repeat: no-repeat;
  background-size: cover;
  opacity: 0.05;
  mix-blend-mode: screen;
  transition: background 0.3s, border-radius 0.3s, opacity 0.3s;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  position: absolute;
}

.logo-container {
  width: 40%;
}

img {
  max-width: 100%;
  max-height: 140px;
}

.route-card {
  width: 75%;

  .q-card__section {
    border-bottom: 1px solid rgba(48, 52, 54, 0.28);
  }
}
</style>
<script setup lang="ts">
import { tap } from 'rxjs/operators';
import { onMounted, ref } from 'vue';
import RouteChecker from 'src/components/RouteChecker.vue';
</script>
