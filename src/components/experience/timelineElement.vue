<template>
  <div class="timeline-element-wrapper">
      <div class="timeline-calendar">
          <div class="calendar-month">
            {{date.mth}}
          </div>
          <div class="calendar-year">
            {{date.year}}
          </div>
      </div>
      <div class="timeline-company-wrapper"> 
          <div class="timeline-company" v-for="company in data" :company="company" :key="company.startDate">
            <p class="timeline-company-name">
                {{company.jobTitle}} at {{company.company}}
            </p>
            <p class="timeline-company-range">
                from {{company.startDate}} to {{company.endDate !== '-' ? company.endDate : 'present'}}
            </p>
            <ul class="timeline-company-description">
                <li v-for="(line, index) in company.description.split('.')" :line="line" :key="index"> 
                    {{ line }}
                </li>
            </ul>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    name: 'TimelineElement',
    props: {
        data: {
            type: Array,
            required: true
        },
        date: {
            type: Object,
            required: true
        }
    }
}
</script>

<style lang="scss">
.timeline-element-wrapper {
    display: flex;
    width: 100%;
    height: 300px;
    padding: 0 5px;

    .timeline-calendar {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        width: 30%;
        height: 100%;
            border-right: 2px solid black;

        .calendar-month {
            font-size: 9rem;
            font-weight: bold;
        }
        .calendar-year {
            font-size: 6rem;
        }
    }
    .timeline-company-wrapper {
        display: flex;
        flex-direction: column;
        overflow-y: auto;
        padding: 0 15px;

        .timeline-company {
            padding: 10px 0 7px;
            
            &:not(:last-of-type) {
                border-bottom: 1px solid black;
            }

            &-name {
                font-size: 2rem;
            }
            &-range {
                margin: 5px 0;
                font-size: 1rem;
            }
            &-description {
                padding-left: 20px;
                list-style-type: disc;
                
                li {
                    margin: 3px 0;
                }
            }
        }
    }
    @media screen and (max-width: 1024px) {
        .timeline-calendar {
            width: 50%;
        }
        .timeline-company-wrapper { 
            width: 50%;
        }
    }
    @media screen and (max-width: 768px) {
        flex-wrap: wrap;
        height: auto;
        .timeline-calendar {
            width: 100%;
            border: none;
        }
        .timeline-company-wrapper { 
            width: 100%;
        }
    }
}
</style>