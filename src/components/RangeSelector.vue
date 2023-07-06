<template>
    <div>
        <input type="range" v-model="min" :min="minValue" :max="maxValue" @input="handleRangeChange">
        <input type="range" v-model="max" :min="minValue" :max="maxValue" @input="handleRangeChange">

        <div>
            Min: <input type="number" v-model="min">
        </div>
        <div>
            Max: <input type="number" v-model="max">
        </div>
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            min: 0,
            max: 100,
            minValue: 0,
            maxValue: 100,
        };
    },
    methods: {
        handleRangeChange() {
            // Adjust the min/max values if needed
            if (this.min > this.max) {
                this.min = this.max;
            }
            if (this.max < this.min) {
                this.max = this.min;
            }
        },
    },
};
</script>
  