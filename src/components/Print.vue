<template>
  <div id="print">
    <div class="top">
      <div class="intro">
        <p class="name">Vlad Duma</p>
        <p class="title">Full Stack Developer</p>
      </div>
      <div class="contacts">
        <span v-for="contact in contacts" :key="contact.name" class="contact">
          {{contact.name}}: <a v-if="contact.link" :href="contact.link" target="_blank">{{contact.value}}</a> <span v-else>{{contact.value}}</span>
        </span>
      </div>
    </div>
    <main>
      <div class="left">
        <div class="hard-skills-print">
          <p class="hard-skills-title">Hard skills</p>
          <ul>
            <li v-for="hardSkill in skills" :key="hardSkill.name">{{hardSkill.name}}</li>
          </ul>
        </div>
        <div class="soft-skills-print">
          <p class="hard-skills-title">Soft skills</p>
          <SoftSkill v-for="skill in softSkills" :key="skill.name" v-bind:skill="skill" />
        </div>
        <div class="social-media-print">
          <p class="social-media-title">Find me on</p>
          <ul class="social-media-print-wrapper">
            <li v-for="media in social_media" :key="media.link">
                <a :href="media.link" target="_blank" :title="media.name">
                  <i :class="media.icon"></i> {{media.name}}
                </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="right">
        <div class="experince-print">
          <p class="experince-title">Experience</p>
          <div class="experince-print-wrapper">
            <div v-for="job in work_experience.slice(0,5)" :key="job.startDate" class="experince-print-container">
              <div class="title">{{job.jobTitle}}</div>
              <div class="company">{{job.company}}
                <span class="time">
                  (<span>
                    {{job.startDate}}
                  </span>
                  -
                  <span v-if="job.endDate !== '-'">
                    {{job.endDate}}
                  </span>
                  <span v-else>
                    present
                  </span>)
                </span>
              </div>
              <div class="description">
                <p v-for="description in job.description.split('.')" :key="description">
                  {{description}}
                </p>
              </div>
            </div>
            <div v-if="work_experience.length > 5" class="more-experince-disclaimer">
              See more experience on <a href="https://vladuma.github.io/">vladuma.github.io</a>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>
<script>
import SoftSkill from '../components/skills/softSkill';

export default {
  name: "Print",
  props: {
    experience: {
      type: Array,
      required: true,
    },
    hardSkills: {
      type: Array,
      required: true,
    },
    softSkills: {
      type: Array,
      required: true,
    },
    social_media: {
      type: Array,
      required: true,
    },
    contacts: {
      type: Array,
      required: true,
    },
  },
  components: {
    SoftSkill,
  },
  data() {
    return {
      skills: this.hardSkills.sort((a, b) => a.levelNumerical > b.levelNumerical ? -1 : 1),
      work_experience: this.experience.sort((a, b) => a.ranges[0] > b.ranges[0] ? -1 : 1),
    }
  }
};
</script>
<style lang="scss">
@media print {
  @page { margin: 1cm }

  #print {
    display: block;
    margin: 0; 
    float: none;

    .top {
      text-align: center;
      padding: 10pt;
      border-bottom: 1pt solid;

      .intro {
        .name {
          font-size: 28pt;
          line-height: 35pt;
        }
        .title {
          position: relative;
          font-size: 18pt;
          line-height: 24pt;
        }
      }
      .contacts {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0;
        height: 30pt;

        .contact {
          padding: 0 10pt;
        }
      }
    }
    main {
      display: flex;
      
      .left {
        width: 30%;
        padding: 10pt;
        border-right: 1pt solid black;

        & > div {
          padding: 0 0 13pt;

          & > p {
            font-size: 18pt;
            margin-bottom: 7pt;
          }
        }

        .soft-skills-print {
          .progress-container {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            padding: 3pt 0 7pt;
          
            & > div {
              width: 100%;
              padding: 0;
              text-align: left;

              p {
                margin-bottom: 3pt;
              }
            }
          }
          .progress {
            margin: 0 auto;
            width: 100%;
            height: 0;
            background: white;
            border: 1px solid white;
            box-shadow: none;
          }

          .progress-bar {
            height: 0;
            border-bottom: 5px solid black;
            transition: 0.4s linear;
            background-color: black;
            transition-property: width;
          }
        }
        .social-media-print {
          &-wrapper {
            display: flex;
            justify-content: space-between;
            flex-direction: column;
            padding: 0 2pt;
            li {
              padding: 7pt 0;
            }
            a {
              color: black;
              text-decoration: underline;
              i {
                text-decoration: underline;
              }
            }
          }
        }
      }
      .right{
        width: 70%;
        padding: 10pt;

        & > div {
          padding: 0 0 13pt;

          & > p {
            font-size: 18pt;
            margin-bottom: 7pt;
          }
        }

        .experince-print-wrapper {
          .experince-print-container {
            margin: 7pt 0 10pt;
            border-bottom: 1pt solid;
            border-style: inset;
            padding: 3pt 0;

            .title {
              font-size: 16pt;
            }
            .company {
              margin: 4pt 0;
              font-weight: bold;
            }
            .time {
              font-size: 10pt;
              font-style: italic;
            }
            .description {
              font-size:12pt;
              line-height: 15pt;
            }
          }
          .more-experince-disclaimer {
            a {
              color: black;

              &:visited {
                color: black;
              }
            }
          }
        }
      }
    }
  }
  header,
  footer,
  section {
    display: none;
  }
}
@media screen {
  #print {
    display: none;
  }
}
</style>