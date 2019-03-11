var projects = [
  {
    name: 'sohrani.pro',
    type: 'wordpress',
    description: 'Corporate website with a catalog built on WordPress',
    tags: ['HTML', 'CSS', 'JavaScript', 'jQuery', 'PHP'],
    link: 'http://sohrani.pro/',
    img: ''
  },
  {
    name: 'LIFT2WORK.nl',
    type: 'wordpress',
    description: 'Corporate WordPress website',
    tags: ['HTML', 'CSS', 'JavaScript', 'jQuery'],
    link: 'http://lift2work.nl/',
    img: null
  },
  // {
  //   name: 'destiltevertelt.nl',
  //   type: 'wordpress',
  //   description: 'Corporate website built on WordPress',
  //   tags: ['HTML', 'CSS', 'JavaScript', 'jQuery', 'PHP'],
  //   link: '',
  //   img: null
  // },
  {
    name: 'Weather app',
    type: 'react',
    description: 'Simple react app to check weather',
    tags: ['React', 'JavaScript'],
    link: 'https://vladuma.github.io/react_app/',
    img: './img/react-weather-app.png'
  },
  {
    name: 'Snake game',
    type: 'javascript',
    description: 'My take on iconic cellphone game',
    tags: ['JavaScript', 'p5.js', 'HTML', 'CSS'],
    link: 'https://vladuma.github.io/snake-game/',
    img: './img/snake.png'
  },
  {
    name: 'Bootstrap site',
    type: 'bootstrap',
    description: 'Agency website built from scratch with Bootstrap 4.',
    tags: ['HTML', 'CSS', 'JavaScript', 'jQuery', 'Bootstrap 4'],
    link: '',
    img: 'http://www.nexi.fr/wp-content/uploads/2015/01/logo-bootstrap.png'
  },
  {
    name: 'GA WordPress plugin',
    type: 'php',
    description: 'Very simple Google Analytics plugin for WordPress',
    tags: ['PHP'],
    link: 'https://wordpress.org/plugins/very-simple-google-analytics-tracking/',
    img: 'http://www.sclance.com/pngs/google-analytics-logo-png/google_analytics_logo_png_592806.png'
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

    var project = `
    <div data-project-type="${projects[i].type}" class="project filter-item">
      <div class="flip-card">
        <div class="flip-card-inner">
          <div class="flip-card-front">
            ${hasImg()}
          </div>
          <div class="flip-card-back">
            <p>${projects[i].description}</p>
            <div class="tags">
              ${outputTags()}
            </div>
            <a href="${projects[i].link || '#'}" target="_blank">Link</a>
          </div>
        </div>
      </div>
    </div>
    `;

    root.append(project);
  }
});
