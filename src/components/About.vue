<template>
  <!-- about
  ==================================================-->
  <section class="s-about target-section">
    <div class="s-about__section s-about__section--profile">
      <div class="right-vert-line"></div>

      <div class="row">
        <div class="column large-6 medium-8 tab-full">
          <div class="section-intro" data-num="01">
            <h3 class="subhead">About Me</h3>
            <h1 class="display-1">I'm the kind of person who isn't afraid of challenges.</h1>
          </div>

          <div class="profile-pic">
            <img src="https://images.unsplash.com/photo-1536148935331-408321065b18" alt>
          </div>

          <h3>Profile</h3>

          <p>Développeur web frontend expérimenté, possédant des connaissances en ergonomie afin de réduire les efforts des utilisateurs pour la navigation au sein de l’application.</p>
          <p>Cela inclut la conception d’interfaces créant les meilleures liaisons possibles entre l’utilisateur et l’application grâce à des fonctions qui optimisent le chemin à parcourir pour atteindre un but.</p>
        </div>
      </div>
    </div>
    <!-- end s-about__section--profile -->
    <div class="s-about__section">
      <div class="row">
        <div class="column">
          <h3>Career</h3>
        </div>
      </div>

      <div class="row block-large-1-2 block-900-full work-positions">
        <div class="column" :key="work.id" v-for="work in positions">
          <div class="position">
            <div class="position__header">
              <h6>
                <span class="position__co">{{work.company}}</span>
                <span class="position__pos">{{work.position}}</span>
              </h6>
              <div class="position__timeframe">{{work.timeframe}}</div>
            </div>

            <div v-show="work.description" v-html="work.description"></div>
            <div class="position__labels">
              <span :key="label.index" v-for="label in work.labels">{{label}}</span>
            </div>
          </div>
        </div>
      </div>
      <!-- work positions -->
    </div>
    <!-- end s-about__section -->
  </section>
  <!-- end s-about -->
</template>

<script>
import { v4 as uuidv4 } from "uuid";

export default {
  name: "About",
  data() {
    return {
      positions: [
        {
          id: uuidv4(),
          clients: ["Louis Vuitton"],
          company: "Valtech",
          place: "Paris, France",
          position: "Frontend Devlopper",
          timeframe: "January 2019 - Present",
          description: `
          <ul>
            <li>Participation à la création (from scratch) de portail interne et externe pour les employés.</li>
            <li>Développement Front et intégration web, responsive design d’un site web sous SharePoint.</li>
          </ul>
          `,
          labels: [
            "Vanilla JS",
            "vue.js",
            "jest",
            "ES6",
            "less",
            "sass/scss",
            "jsp",
            "git",
            "scrum",
            "agile",
            "Zeplin"
          ]
        },
        {
          id: uuidv4(),
          clients: [],
          company: "Arabic Computer Systems",
          place: "Riyadh, Arabie Saoudite",
          position: "Frontend Devlopper",
          timeframe: "Janvier 2017 – Octobre 2018",
          description: `
          <ul>
            <li>Participation à la création (from scratch) de portail interne et externe pour les employés.</li>
            <li>Développement Front et intégration web, responsive design d’un site web sous SharePoint.</li>
          </ul>
          `,
          labels: [
            "Vanilla JS",
            "JQuery",
            "ES6",
            "less",
            "sass/scss",
            "asp",
            "sharepoint",
            "git",
            "svn",
            "scrum",
            "agile",
            "photoshop",
            "invision"
          ]
        },
        {
          id: uuidv4(),
          clients: [],
          company: "Slnee Company",
          place: "Riyadh, Arabie Saoudite",
          position: "Frontend Devlopper",
          timeframe: "Septembre 2014 – Décembre 2016",
          description: `
          <ul>
            <li>Développement Front et intégration web, responsive design des applications web en ASP.NET et sous SharePoint 2010 et SharePoint 2013.</li>
            <li>Participation à l'intégration et au développement d’un produit pour la gestion des projets.</li>
            <li>Participation à la création d’une expérience utilisateur UX/UI.</li>
            <li>Créer des versions en Arabe et en Anglais.</li>
          </ul>
          `,
          labels: [
            "Vanilla JS",
            "JQuery",
            "ES6",
            "less",
            "sass/scss",
            "asp",
            "sharepoint",
            "git",
            "svn",
            "photoshop",
            "invision"
          ]
        },
        {
          id: uuidv4(),
          clients: [],
          company: "Freelance",
          place: "Tunis, Tunisia",
          position: "Frontend Devlopper",
          timeframe: "Septembre 2014 – Décembre 2016",
          description: `
          <ul>
            <li>We worked on: creating responsive websites, e-commerce, graphic identity, digital strategy...</li>
            <li>We used the most popular CMS (as Wordpress, Drupal, Joomla) and the latest languages and frameworks to ensure the satisfaction of our clients.</li>
          </ul>
          `,
          labels: [
            "Vanilla JS",
            "JQuery",
            "less",
            "sass/scss",
            "Wordpress",
            "Drupal",
            "php",
            "git"
          ]
        }
      ]
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
/* ------------------------------------------------------------------- 
 * ## career position
 * ------------------------------------------------------------------- */
.work-positions {
  margin-top: 2rem;
}

.work-positions .column:nth-child(2n + 1) {
  padding-right: 40px;
}

.work-positions .column:nth-child(2n + 2) {
  padding-left: 40px;
}

.position {
  padding-top: 3.6rem;
  padding-bottom: 3.2rem;
  border-top: 1px solid #b3c2c1;
}

.position__header {
  margin-bottom: 4rem;
}

.position__header h6 {
  font-family: "Martel", serif;
  line-height: 2.8rem;
  margin-top: 0;
  margin-bottom: 0.4rem;
}

.position__header h6 .position__co {
  margin-right: 2rem;
}

.position__header h6 .position__pos {
  display: inline-block;
  font-size: 1.8rem;
  text-transform: none;
  letter-spacing: 0;
}

.position__timeframe {
  font-family: "Gothic A1", sans-serif;
  font-size: 1.5rem;
  font-weight: 400;
  line-height: 2rem;
  text-transform: uppercase;
  letter-spacing: 0.3rem;
  color: #7e7e7e;
}

.position__labels {
  span {
    display: inline-block;
    background-color: #eee;
    border: 1px solid;
    padding: 5px 15px;
    margin-right: 10px;
    &:last-child {
      margin-right: 0;
    }
    transition: all 0.1s ease-in-out;
    margin-bottom: 5px;
    font-size: 12px;
    text-transform: capitalize;
    &:hover {
      background-color: #e1e1e1;
    }
  }
}
</style>
