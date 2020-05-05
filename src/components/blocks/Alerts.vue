<template>
  <div class="column large-6 tab-full">
    <h3>Alert Boxes</h3>

    <br>
    <div
      :key="alert.id"
      v-for="alert in alerts"
      :class="`alert-box alert-box--${alert.type} hideit`"
      v-show="alert.isHidden"
    >
      <p>{{alert.message}}</p>
      <i
        class="fa fa-times alert-box__close"
        @click="alert.isHidden = !alert.isHidden"
        :aria-hidden="alert.isHidden"
      ></i>
    </div>
  </div>
</template>

<script>
export default {
  name: "Alerts",
  data() {
    return {
      alerts: [
        {
          id: 1,
          isHidden: true,
          message: "Error Message. Your Message Goes Here.",
          type: "error"
        },
        {
          id: 2,
          isHidden: true,
          message: "Success Message. Your Message Goes Here.",
          type: "success"
        },
        {
          id: 3,
          isHidden: true,
          message: "info Message. Your Message Goes Here.",
          type: "info"
        },
        {
          id: 4,
          isHidden: true,
          message: "notice Message. Your Message Goes Here.",
          type: "notice"
        }
      ]
    };
  }
};
</script>

<style scoped>
.alert-box {
  padding: 2.4rem 4rem 2.4rem 3.2rem;
  position: relative;
  margin-bottom: 3.2rem;
  border-radius: 3px;
  font-family: "Gothic A1", sans-serif;
  font-weight: 600;
  font-size: 1.5rem;
  line-height: 1.6;
}

.alert-box__close {
  position: absolute;
  display: block;
  right: 1.6rem;
  top: 1.6rem;
  cursor: pointer;
  width: 12px;
  height: 12px;
}

.alert-box__close::before,
.alert-box__close::after {
  content: "";
  position: absolute;
  display: inline-block;
  width: 2px;
  height: 12px;
  top: 0;
  left: 5px;
}

.alert-box__close::before {
  -webkit-transform: rotate(45deg);
  transform: rotate(45deg);
}

.alert-box__close::after {
  -webkit-transform: rotate(-45deg);
  transform: rotate(-45deg);
}

.alert-box--error {
  background-color: #ffd1d2;
  color: #dd4043;
}

.alert-box--error .alert-box__close::before,
.alert-box--error .alert-box__close::after {
  background-color: #dd4043;
}

.alert-box--success {
  background-color: #c8e675;
  color: #637533;
}

.alert-box--success .alert-box__close::before,
.alert-box--success .alert-box__close::after {
  background-color: #637533;
}

.alert-box--info {
  background-color: #d5ebfb;
  color: #387fb2;
}

.alert-box--info .alert-box__close::before,
.alert-box--info .alert-box__close::after {
  background-color: #387fb2;
}

.alert-box--notice {
  background-color: #fff099;
  color: #827217;
}

.alert-box--notice .alert-box__close::before,
.alert-box--notice .alert-box__close::after {
  background-color: #827217;
}
</style>
