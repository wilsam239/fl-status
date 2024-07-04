<template>
  <q-layout view="hHh lpR fFf">
    <div>
      <div class="masthead-container row items-center justify-center q-mb-md">
        <div class="masthead-container-overlay"></div>
        <div class="logo-container">
          <a href="https://getfarmlab.com"
            ><img alt="Page logo" src="../assets/logo.png"
          /></a>
        </div>
      </div>
      <div class="column container">
        <div class="row q-mb-md justify-end">
          <q-select
            class="environment-selector"
            standout
            v-model="selectedEnvironment"
            :options="['Production', 'Staging', 'Dev']"
            label="Environment"
          />
        </div>
        <q-banner
          inline-actions
          class="text-white q-mb-md info-banner"
          :class="bannerProps.class"
          rounded
        >
          {{ bannerProps.text }}
        </q-banner>
        <div class="row justify-center">
          <EnvironmentCard
            v-if="selectedEnvironment == 'Production'"
            :routes="prodUrls"
            @health="handleEnvHealth($event)"
          ></EnvironmentCard>
          <EnvironmentCard
            v-if="selectedEnvironment == 'Staging'"
            :routes="stagingUrls"
            @health="handleEnvHealth($event)"
          ></EnvironmentCard>
          <EnvironmentCard
            v-if="selectedEnvironment == 'Dev'"
            :routes="devUrls"
            @health="handleEnvHealth($event)"
          ></EnvironmentCard>
        </div>
      </div>
    </div>
  </q-layout>
</template>
<style lang="scss">
.info-banner {
  z-index: 1;
}
.environment-selector {
  width: 200px;
}
.container {
  width: 75%;
  margin-left: auto;
  margin-right: auto;
}

.masthead-container {
  width: 100% !important;
  max-width: 100% !important;
  height: 250px;
  background: #70bf46;
  background-size: cover;
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
  width: 100%;
  .q-card__section {
    border-bottom: 1px solid rgba(48, 52, 54, 0.28);
  }
}
</style>
<script setup lang="ts">
import { tap } from 'rxjs/operators';
import { computed, onMounted, ref } from 'vue';
import RouteChecker from 'src/components/RouteChecker.vue';
import EnvironmentCard from 'src/components/EnvironmentCard.vue';

interface FLRoute {
  title: string;
  url: string;
}
const devUrls: FLRoute[] = [
  {
    title: 'Homestead Dev',
    url: 'https://dev.farmlab.com.au/vasat/siteInfo',
  },
  {
    title: 'Shepherd Dev',
    url: 'https://accounts-dev.lab.farm/site/info',
  },
  {
    title: 'Dropzone Dev',
    url: 'https://dropzone-dev.lab.farm/site/info',
  },
  {
    title: 'Silo Dev',
    url: 'https://silo-dev.lab.farm/site/info',
  },
  /* {
    title: 'Analytics Dev',
    url: 'https://analytics-dev.lab.farm/assets/config/site.json',
  }, */
  {
    title: 'Harvest Dev',
    url: 'https://harvest-dev.farmlab.com.au/site/info',
  },
  {
    title: 'Harvest 2 Dev',
    url: 'https://harvest2-dev.farmlab.com.au/site/info',
  },
];

const stagingUrls: FLRoute[] = [
  {
    title: 'Homestead Staging',
    url: 'https://staging.lab.farm/siteInfo',
  },
  {
    title: 'Shepherd Staging',
    url: 'https://accounts-staging.lab.farm/site/info',
  },
  {
    title: 'Dropzone Staging',
    url: 'https://dropzone-staging.lab.farm/site/info',
  },
  {
    title: 'Silo Staging',
    url: 'https://silo-stg.lab.farm/site/info',
  },
  /* {
    title: 'Analytics',
    url: 'https://analytics.lab.farm/assets/config/site.json',
  }, */
  {
    title: 'Harvest Prod',
    url: 'https://harvest.farmlab.com.au/site/info',
  },
];

const prodUrls: FLRoute[] = [
  {
    title: 'Homestead',
    url: 'https://my.lab.farm/siteInfo',
  },
  {
    title: 'Shepherd',
    url: 'https://accounts.lab.farm/site/info',
  },
  {
    title: 'Dropzone',
    url: 'https://dropzone.lab.farm/site/info',
  },
  {
    title: 'Silo',
    url: 'https://silo.lab.farm/site/info',
  },
  /* {
    title: 'Analytics',
    url: 'https://analytics.lab.farm/assets/config/site.json',
  }, */
  {
    title: 'Harvest',
    url: 'https://harvest.farmlab.com.au/site/info',
  },
];

const selectedEnvironment = ref('Production');

const allStatus = ref<string | undefined>(undefined);

const bannerProps = computed(() => {
  if (!!allStatus.value) {
    return allStatus.value === 'bad'
      ? {
          class: 'bg-red',
          text: `All Systems Down - ${selectedEnvironment.value}`,
        }
      : allStatus.value === 'okay'
      ? {
          class: 'bg-orange',
          text: `All Systems Dubious - ${selectedEnvironment.value}`,
        }
      : {
          class: 'bg-green',
          text: `All Systems Operational - ${selectedEnvironment.value}`,
        };
  } else {
    return { class: 'hidden', text: '' };
  }
});

function handleEnvHealth(health: string) {
  if (health !== 'mixed') {
    allStatus.value = health;
  } else {
    allStatus.value = undefined;
  }
}
</script>
