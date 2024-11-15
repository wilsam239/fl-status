<template>
  <div class="row items-center justify-between">
    <div class="row">
      <div class="route-name q-pr-md">
        {{ name }} - v{{ version || '0.0.0' }}
      </div>
      <div class="row justify-center items-center">
        <q-tooltip>{{ route }}</q-tooltip>
        <q-icon name="info" size="xs"> </q-icon>
      </div>
    </div>
    <div class="row items-center">
      <!-- <div
        class="route-info row justify-center items-center q-pa-xs q-mr-sm"
        v-if="health !== 'good' && !!lastError"
      >
        <q-tooltip>{{ lastError }}</q-tooltip>
        <q-icon name="question_mark" size="xs"> </q-icon>
      </div> -->
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
  </div>
  <div class="progress progress-striped active q-mt-md rounded-borders">
    <div
      role="progressbar "
      style="width: 100%"
      class="progress-bar rounded-borders"
      :class="progBarClass"
    ></div>
  </div>
  <div
    v-if="lastAttemptHealth == 'bad' || health == 'bad'"
    class="restart-instructions rounded-borders q-pa-md q-mt-sm"
  >
    <code v-if="id == 'homestead'">
      <div><span class="code-prefix">$ </span>sudo service farmlab restart</div>
      <br />
      <div>
        <span class="code-prefix">
          # If the above hangs, run the following
        </span>
      </div>
      <div><span class="code-prefix">$ </span>sudo pkill -9 java</div>
      <div>
        <span class="code-prefix">$ </span>sudo rm /opt/prod/farmlab/RUNNING_PID
      </div>

      <div><span class="code-prefix">$ </span>sudo service farmlab restart</div>
    </code>
    <code v-else-if="['shepherd', 'silo', 'dropzone'].includes(id)">
      <div>Restart ECS instance in AWS</div>
    </code>
    <code v-else>Restarting {{ id }} is a mystery at this time...</code>
  </div>
</template>

<style lang="scss">
.restart-instructions {
  width: 100%;
  background-color: #404040;
}

.route-name {
  font-size: 1.5em;
  font-weight: 500;
}

.route-info {
  border: 1px solid white;
  border-radius: 10em;
  width: 32px;
  height: 32px;
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

$brand-default: #b0bec5;
$brand-primary: #2196f3;
$brand-secondary: #323a45;
$brand-success: #64dd17;
$brand-warning: #ffd600;
$brand-info: #29b6f6;
$brand-danger: #ef1c1c;
$bg-light-gray: #f5f5f5;
.progress {
  background-color: $bg-light-gray;
  box-shadow: none;
  &.progress-xs {
    height: 5px;
    margin-top: 5px;
  }
  &.progress-sm {
    height: 10px;
    margin-top: 5px;
  }
  &.progress-lg {
    height: 25px;
  }
  &.vertical {
    position: relative;
    width: 20px;
    height: 200px;
    display: inline-block;
    margin-right: 10px;
    > .progress-bar {
      width: 100% !important;
      position: absolute;
      bottom: 0;
    }
    &.progress-xs {
      width: 5px;
      margin-top: 5px;
    }
    &.progress-sm {
      width: 10px;
      margin-top: 5px;
    }
    &.progress-lg {
      width: 30px;
    }
  }
}

.progress-bar {
  height: 18px;
  background-color: $brand-primary;
  box-shadow: none;
  &.text-left {
    text-align: left;
    span {
      margin-left: 10px;
    }
  }
  &.text-right {
    text-align: right;
    span {
      margin-right: 10px;
    }
  }
}
@mixin gradient-striped($color: rgba(255, 255, 255, 0.15), $angle: 45deg) {
  background-image: -webkit-linear-gradient(
    $angle,
    $color 25%,
    transparent 25%,
    transparent 50%,
    $color 50%,
    $color 75%,
    transparent 75%,
    transparent
  );
  background-image: -o-linear-gradient(
    $angle,
    $color 25%,
    transparent 25%,
    transparent 50%,
    $color 50%,
    $color 75%,
    transparent 75%,
    transparent
  );
  background-image: linear-gradient(
    $angle,
    $color 25%,
    transparent 25%,
    transparent 50%,
    $color 50%,
    $color 75%,
    transparent 75%,
    transparent
  );
}

@-webkit-keyframes progress-bar-stripes {
  from {
    background-position: 40px 0;
  }
  to {
    background-position: 0 0;
  }
}

// Spec and IE10+
@keyframes progress-bar-stripes {
  from {
    background-position: 40px 0;
  }
  to {
    background-position: 0 0;
  }
}

@mixin animation($animation) {
  -webkit-animation: $animation;
  -o-animation: $animation;
  animation: $animation;
}
.progress.active .progress-bar,
.progress-bar.active {
  @include animation(progress-bar-stripes 2s linear infinite);
}
.progress-striped .progress-bar,
.progress-bar-striped {
  @include gradient-striped;
  background-size: 40px 40px;
}
@mixin progress-bar-variant($color) {
  background-color: $color;
}

.progress-bar-secondary {
  @include progress-bar-variant($brand-secondary);
}

.progress-bar-default {
  @include progress-bar-variant($brand-default);
}

.progress-bar-success {
  @include progress-bar-variant($brand-success);
}

.progress-bar-info {
  @include progress-bar-variant($brand-info);
}

.progress-bar-warning {
  @include progress-bar-variant($brand-warning);
}

.progress-bar-danger {
  @include progress-bar-variant($brand-danger);
}
</style>

<script setup lang="ts">
import { tap } from 'rxjs/operators';
import { computed, onMounted, onUnmounted, ref } from 'vue';
export interface RouteProps {
  id: string;
  name: string;
  route: string;
  isVasatOne?: boolean;
}
type THealth = 'good' | 'bad' | 'okay';
const props = defineProps<RouteProps>();
const emit = defineEmits(['health']);

const version = ref<string>();
const health = ref<THealth>();
const attempts = ref<number>(0);
const goodAttempts = ref<number>(0);
const lastError = ref<string>('');

const lastAttemptHealth = ref<THealth>();

const progBarClass = computed(
  () =>
    `progress-bar-${
      health.value == 'good'
        ? 'success'
        : health.value == 'okay'
        ? 'warning'
        : 'danger'
    }`
);

let refresher: NodeJS.Timeout | undefined = undefined;

onMounted(() => {
  refresh();
  refresher = setInterval(() => {
    refresh();
  }, 15000);
});

onUnmounted(() => {
  if (refresher) {
    clearInterval(refresher);
  }
});

function refresh() {
  console.log(`Refreshing ${props.name}`);
  const fetchWithTimeout = (url: string, timeout = 5000): Promise<Response> => {
    return Promise.race<Response>([
      fetch(url),
      new Promise((_, reject) =>
        setTimeout(() => reject(new Error('Request timed out')), timeout)
      ),
    ]);
  };

  const healthURL = props.route + (props.isVasatOne ? 'siteInfo' : 'site/info');
  const versionURL = props.route + 'version';
  fetchWithTimeout(healthURL)
    .then(
      (resp) => {
        attempts.value += 1;
        if (resp.ok) {
          goodAttempts.value += 1;
          health.value = 'good';
          lastAttemptHealth.value = 'good';
        } else {
          lastAttemptHealth.value = 'bad';
          health.value =
            goodAttempts.value / attempts.value < 0.5 ? 'bad' : 'okay';
          lastError.value = `${resp.status} - ${resp.statusText}`;
        }
      },
      (err) => {
        attempts.value += 1;
        lastAttemptHealth.value = 'bad';
        if (err.message === 'Request timed out') {
          lastError.value = 'Request timed out';
        } else {
          lastError.value = err.message;
        }
        health.value =
          goodAttempts.value / attempts.value < 0.5 ? 'bad' : 'okay';
      }
    )
    .then(() => {
      emit('health', { health: health.value, id: props.id });
    });

  fetchWithTimeout(versionURL).then((resp) => {
    resp.text().then((r) => {
      version.value = props.isVasatOne ? JSON.parse(r)['payload'] : r;
    });
  });
}
</script>
