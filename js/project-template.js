var projects = [
  {
    name: 'Starship game',
    type: 'javascript',
    description: 'Steer the X-Wing to collect stars and avoid asteroids',
    tags: ['JavaScript', 'HTML Canvas', 'Webpack'],
    link: 'https://vladuma.github.io/starship_game/dist/index.html',
    git: 'https://github.com/vladuma/starship_game',
    img: '',
    hidden: false
  },
  {
    name: 'Link manager app',
    type: 'react',
    description: 'A simple app built with React + Redux and Firease backend',
    tags: ['React', 'Redux', 'Firebase', 'Webpack'],
    link: 'https://vladuma.github.io/link-manager-app/',
    git: 'https://github.com/vladuma/link-manager-app',
    img: '',
    hidden: false
  },
  {
    name: 'sohrani.pro',
    type: 'wordpress',
    description: 'Corporate website with a catalog built on WordPress',
    tags: ['HTML', 'CSS', 'JavaScript', 'jQuery', 'PHP'],
    link: 'http://sohrani.pro/',
    git: null,
    img: '',
    hidden: false
  },
  {
    name: 'LIFT2WORK.nl',
    type: 'wordpress',
    description: 'Corporate WordPress website',
    tags: ['HTML', 'CSS', 'JavaScript', 'jQuery'],
    link: 'http://lift2work.nl/',
    git: null,
    img: null,
    hidden: false
  },
  {
    name: 'Weather app',
    type: 'react',
    description: 'Simple react app to check weather',
    tags: ['React', 'JavaScript'],
    link: 'https://vladuma.github.io/react_app/',
    git: 'https://github.com/vladuma/react_app',
    img: './img/react-weather-app.png',
    hidden: false
  },
  {
    name: 'Combo breaker',
    type: 'javascript',
    description: 'Simple JavaScript game. Guess a number to win.',
    tags: ['JavaScript'],
    link: 'https://vladuma.github.io/combo-cracker/index.html',
    git: 'https://github.com/vladuma/combo-cracker',
    img: '',
    hidden: false
  },
  {
    name: 'Snake game',
    type: 'javascript',
    description: 'My take on iconic cellphone game',
    tags: ['JavaScript', 'p5.js', 'HTML', 'CSS'],
    link: 'https://vladuma.github.io/snake-game/',
    git: 'https://github.com/vladuma/snake-game',
    img: './img/snake.png',
    hidden: false
  },
  {
    name: 'Bootstrap site',
    type: 'bootstrap',
    description: 'Agency website built from scratch with Bootstrap 4.',
    tags: ['HTML', 'CSS', 'JavaScript', 'jQuery', 'Bootstrap 4'],
    link: 'https://vladuma.github.io/bootstrap-site/index.html',
    git: 'https://github.com/vladuma/bootstrap-site',
    img: './img/bootstrap.png',
    hidden: false
  },
  {
    name: 'GA WordPress plugin',
    type: 'php',
    description: 'Very simple Google Analytics plugin for WordPress',
    tags: ['PHP'],
    link: 'https://wordpress.org/plugins/very-simple-google-analytics-tracking/',
    git: 'https://github.com/vladuma/Very-Simple-Google-Analytics-Tracking',
    img: './img/google_analytics.png',
    hidden: false
  },
  {
    name: 'MVC ToDo List',
    type: 'javascript',
    description: 'Basic to-do list built with MVC model',
    tags: ['JavaScript', 'MVC', 'HTML'],
    link: 'https://codepen.io/vladuma/project/editor/ZgzVGv',
    git: '',
    img: '',
    hidden: false
  },
  {
    name: 'Clock',
    type: 'javascript',
    description: 'I heard a portfolio is not complete without a JS clock.',
    tags: ['JavaScript', 'CSS', 'HTML'],
    link: 'https://vladuma.github.io/javascript_clock',
    git: 'https://github.com/vladuma/javascript_clock',
    img: './img/clock.png',
    hidden: true
  }
]

$(document).ready(function(){
  var root = $('#project-grid');

  for (var i = 0; i < projects.length; i++) {
    function hasImg(){
      if (projects[i].img) {
        return `<img src="${projects[i].img}" alt="">`
      } else {
        return `<h4 class="project-name">${projects[i].name}</h4>`
      }
    }
    var projectTags = []
    function outputTags(){
      for (var j = 0; j < projects[i].tags.length; j++) {
        projectTags.push(`<span>${projects[i].tags[j]}</span>`);
      }
      return projectTags.join(' ')
    }
    function ifGit(){
      if (projects[i].git) {
        return ` <span> | </span><a href="${projects[i].git}" target="_blank">GitHub</a>`;
      } else {
        return ``;
      }
    }
    function ifHidden(){
      if (projects[i].hidden) {
        return `data-project-hidden="hidden"`;
      } else {
        return `data-project-hidden="visible"`;
      }
    }

    var project = `
    <div data-project-type="${projects[i].type}" ${ifHidden()} class="project filter-item">
      <div class="flip-card">
        <div class="flip-card-inner">
          <div class="flip-card-front">
            ${hasImg()}
          </div>
          <div class="flip-card-back">
            <p>${projects[i].name}</p>
            <p>${projects[i].description}</p>
            <div class="tags">
              ${outputTags()}
            </div>
            <div class="link-container">
              <a href="${projects[i].link || '#'}" target="_blank">Link</a>
              ${ifGit()}
            </div>
          </div>
        </div>
      </div>
    </div>
    `;

    root.append(project);
  }
  // var availableProjects = $('.project.filter-item');
  //
  // if (availableProjects.length > 8) {
  //   // for (var i = 8; i < projects.length; i++) {
  //   //   $(availableProjects[i]).addClass('hidden');
  //   // }
  //   var hiddenProjects = $('.project.filter-item.hidden');
  //
  //   var moreBtnContainer = `
  //   <div class="more-projects-container">
  //     <div class="button-wb show-more-projects">Show projects</div>
  //   </div>`;
  //   root.append(moreBtnContainer);
  //
  //
  //   $('.show-more-projects').click(function(){
  //     var activeFilter = $(".projects .filters .active").text().toLowerCase();
  //
  //     if (activeFilter.includes('all')  ) {
  //       $(hiddenProjects).toggleClass('hidden');
  //     } else if (activeFilter !== 'all') {
  //       $(hiddenProjects).filter(function() {return $(this).data('project-type', activeFilter)});
  //       // console.log($(hiddenProjects).find($(hiddenProjects).data(activeFilter)));
  //       // console.log($(".projects .filters .active").text().toLowerCase());
  //       // console.log($(hiddenProjects).filter(function() {return $(this).data('project-type', activeFilter)}));
  //     }
  //   });
  // }
});
