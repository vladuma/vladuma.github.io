<template>
  <div class="timeline-container">
    <TimelineElement :data="currentStep" :date="currentDate" class="timeline"/>
    <input type="range" :min="dateRange[0].rangeIndex" :max="dateRange[dateRange.length - 1].rangeIndex" @input="updateCurrentRange" />
  </div>
</template>

<script>
const _ = require("underscore");

import TimelineElement from "./timelineElement";
import dayjs from "dayjs";

export default {
  name: "Timeline",
  components: {
    TimelineElement
  },
  props: {
    data: {
      type: Array,
      required: true
    },
    minYear: {
      type: Number,
      required: true
    },
    minMth: {
      type: Number,
      required: true
    },
    nowYear: {
      type: Number,
      required: true
    },
    nowMth: {
      type: Number,
      required: true
    }
  },
  data() {
    this.getYearsArray()
    this.datesToRange()
    this.sortData()
    
    return {
      currentStep: this.getCurrentStep(this.lastRangeIndex),
      currentDate: this.getCurrentDate(this.lastRangeIndex),
    };
  },
  methods: {
    getYearsArray() {
        let result = [];

        for (let i = this.minYear; i <= this.nowYear; i++) {
            result.push(i);
        }
        this.yearArray = result;
    },
    sortData() {
      this.sortedData = _.each(this.data.sort((a, b) =>
        dayjs(a.startDate) < dayjs(b.startDate) ? -1 : 1
      ), el => { 
        el.startYear = dayjs(el.startDate).$y; 
        el.startMonth = dayjs(el.startDate).$M;
        el.endYear = el.endDate && el.endDate !== '-' ? dayjs(el.endDate).$y : dayjs().$y;
        el.endMonth = el.endDate && el.endDate !== '-' ? dayjs(el.endDate).$M : dayjs().$M;
        el.ranges = [];

        _.each(this.dateRange, step => {
          if(step.mthIndex === el.startMonth && step.year === el.startYear || step.mthIndex === el.endMonth && step.year === el.endYear) {
            el.ranges.push(step.rangeIndex);
          }
        })
      })
    },
    datesToRange() {
        const yearArray = this.yearArray;
        const monthArray = [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ];
        const rangeSteps = yearArray.length * monthArray.length;

        let result = [],
            yearIndex = 0,
            mthIndex = 0;

        for (let i = 0; i < rangeSteps; i++) {
          yearIndex = i % monthArray.length === 0 && i !== 0 ? yearIndex + 1 : yearIndex;
          mthIndex = mthIndex !== 11 && i !== 0 ? mthIndex + 1 : 0;

          result.push({
            mth: monthArray[mthIndex],
            mthIndex: mthIndex,
            year: yearArray[yearIndex],
            rangeIndex: i
          })
        }
        this.dateRange = result.slice(this.minMth, result.length - (11 - this.nowMth));
        this.lastRangeIndex = this.dateRange.length;
      },
      getCurrentStep(x) {
        return this.sortedData.filter(d => {
          return d.ranges[0] <= x && (d.ranges[1] ? d.ranges[1] >= x : true);
        });
      },
      getCurrentDate(x) {
        return this.dateRange[x - 1];
      },
      updateCurrentRange(e) {
        this.currentStep = this.getCurrentStep(parseInt(e.target.value));
        this.currentDate = this.getCurrentDate(parseInt(e.target.value));
      }
  }
};
</script>

<style lang="scss">
.timeline-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 200px;
    max-height: 100%;

    @media screen and (max-width: 768px) {
      flex-direction: column-reverse;
    }

    .timeline {
        display: flex;
    }
    input[type=range] {
      width: 90%;
      // margin: 21px 0 7px;
      padding-top: 10px;
      background-color: transparent;
      -webkit-appearance: none;
    }
    input[type=range]:focus {
      outline: none;
    }
    input[type=range]::-webkit-slider-runnable-track {
      background: #000000;
      border: 0.2px solid #000000;
      border-radius: 1.3px;
      width: 100%;
      height: 2px;
      cursor: pointer;
    }
    input[type=range]::-webkit-slider-thumb {
      margin-top: -5.5px;
      width: 10px;
      height: 10px;
      background: #000000;
      border: 1px solid #000000;
      border-radius: 100%;
      cursor: pointer;
      -webkit-appearance: none;
    }
    input[type=range]:focus::-webkit-slider-runnable-track {
      background: #0d0d0d;
    }
    input[type=range]::-moz-range-track {
      background: #000000;
      border: 0.2px solid #000000;
      border-radius: 1.3px;
      width: 100%;
      height: 2px;
      cursor: pointer;
    }
    input[type=range]::-moz-range-thumb {
      width: 10px;
      height: 10px;
      background: #000000;
      border: 1px solid #000000;
      border-radius: 100%;
      cursor: pointer;
    }
    input[type=range]::-ms-track {
      background: transparent;
      border-color: transparent;
      border-width: 7.5px 0;
      color: transparent;
      width: 100%;
      height: 2px;
      cursor: pointer;
    }
    input[type=range]::-ms-fill-lower {
      background: #000000;
      border: 0.2px solid #000000;
      border-radius: 2.6px;
    }
    input[type=range]::-ms-fill-upper {
      background: #000000;
      border: 0.2px solid #000000;
      border-radius: 2.6px;
    }
    input[type=range]::-ms-thumb {
      width: 10px;
      height: 10px;
      background: #000000;
      border: 1px solid #000000;
      border-radius: 100%;
      cursor: pointer;
      margin-top: 0px;
      /*Needed to keep the Edge thumb centred*/
    }
    input[type=range]:focus::-ms-fill-lower {
      background: #000000;
    }
    input[type=range]:focus::-ms-fill-upper {
      background: #0d0d0d;
    }
    /*TODO: Use one of the selectors from https://stackoverflow.com/a/20541859/7077589 and figure out
    how to remove the virtical space around the range input in IE*/
    @supports (-ms-ime-align:auto) {
      /* Pre-Chromium Edge only styles, selector taken from hhttps://stackoverflow.com/a/32202953/7077589 */
      input[type=range] {
        margin: 0;
        /*Edge starts the margin from the thumb, not the track as other browsers do*/
      }
    }

}
</style>