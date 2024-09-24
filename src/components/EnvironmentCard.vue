<template>
  <q-card class="route-card q-mb-md" flat bordered dark>
    <q-card-section v-for="route in routes" :key="route.title">
      <route-checker
        :id="route.id"
        :name="route.title"
        :route="route.url"
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
}

const props = defineProps<{ routes: FLRoute[] }>();
const emit = defineEmits(['health']);

const envHealth = ref<string | undefined>(undefined);
function healthChecker(health: string) {
  if (!envHealth.value) {
    envHealth.value = health;
  } else {
    if (envHealth.value !== health) {
      envHealth.value = 'mixed';
    }
  }
  emit('health', envHealth.value);
}
</script>
