<template>
  <div class="row items-center justify-between">
    <div class="row">
      <div class="route-name q-pr-md">{{ name }}</div>
      <div class="route-info row justify-center items-center q-pa-xs">
        <q-icon name="question_mark" size="xs">
          <q-tooltip>{{ route }}</q-tooltip>
        </q-icon>
      </div>
    </div>
    <div :class="'health-' + health">
      {{
        health == 'good'
          ? 'Operational'
          : health == 'okay'
          ? 'Dubious'
          : 'Outage'
      }}
      - {{ goodAttempts }}/{{ attempts }}
    </div>
  </div>
</template>

<style lang="scss">
.route-name {
  font-size: 1.5em;
  font-weight: 500;
}

.route-info {
  border: 1px solid white;
  border-radius: 10em;
}

.health-good {
  color: green;
}

.health-okay {
  color: yellow;
}

.health-bad {
  color: red;
}
</style>

<script setup lang="ts">
import { tap } from 'rxjs/operators';
import { onMounted, ref } from 'vue';
export interface RouteProps {
  name: string;
  route: string;
}
type Health = 'good' | 'bad' | 'okay';
const props = defineProps<RouteProps>();

const health = ref<Health>();
const attempts = ref<number>(0);
const goodAttempts = ref<number>(0);

onMounted(() => {
  refresh();
  setInterval(() => {
    refresh();
  }, 10000);
});

function refresh() {
  console.log(`Refreshing ${props.name}`);
  fetch(props.route).then(
    (resp) => {
      attempts.value = attempts.value += 1;
      if (resp.status < 400) {
        goodAttempts.value = goodAttempts.value += 1;
        health.value = 'good';
      } else {
        health.value =
          goodAttempts.value / attempts.value < 0.5 ? 'bad' : 'okay';
      }
    },
    (err) => {
      attempts.value = attempts.value += 1;
      health.value = goodAttempts.value / attempts.value < 0.5 ? 'bad' : 'okay';
    }
  );
}
</script>
