<template>
  <q-card class="route-card q-mb-md" flat bordered dark>
    <q-card-section v-for="route in routes" :key="route.title">
      <route-checker
        :id="route.id"
        :name="route.title"
        :route="route.url"
        :is-vasat-one="route.isVasatOne"
        @health="healthChecker($event)"
      ></route-checker>
    </q-card-section>
  </q-card>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import RouteChecker from './RouteChecker.vue';
interface FLRoute {
  id: string;
  title: string;
  url: string;
  isVasatOne?: boolean;
}

const props = defineProps<{ routes: FLRoute[] }>();
const emit = defineEmits(['health']);
const emittedRoutes: Set<string> = new Set();

const envHealth = ref<string | undefined>(undefined);
function healthChecker(routeHealth: { health: string; id: string }) {
  const { health, id } = routeHealth;
  if (!envHealth.value) {
    envHealth.value = health;
  } else {
    if (envHealth.value !== health) {
      envHealth.value = 'mixed';
    }
  }
  emittedRoutes.add(id);
  if (emittedRoutes.size === props.routes.length) {
    emit('health', envHealth.value);
  }
}
</script>
