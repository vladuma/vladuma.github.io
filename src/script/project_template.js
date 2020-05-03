module.exports =  (project) => {
    this.render = () => {
        this.project = project;

        return `<div data-filter-value="${project.type}" class="project filter-item ${this.isHidden()}">
                    <div class="flip-card">
                        <div class="flip-card-inner">
                        <div class="flip-card-front">
                            ${this.hasImg()}
                        </div>
                        <div class="flip-card-back">
                            <p>${project.name}</p>
                            <p>${project.description}</p>
                            <div class="tags">
                                ${this.printTags()}
                            </div>
                            <div class="link-container">
                                ${this.hasLink()}
                                ${this.hasGit()}
                            </div>
                        </div>
                        </div>
                    </div>
                </div>`;
    },

    this.hasImg = () => {
        return this.project.img ? `<img src="./${this.project.img}" alt="">` : `<h4 class="project-name">${this.project.name}</h4>`;
    },
    this.printTags = () => {
        var projectTags = '';
        
        _.each(this.project.tags, (tag) => {
            projectTags += `<span>${tag}</span>`
        })

        return projectTags;
    },
    this.hasLink = () => {
        return `<a href="${this.project.link ? this.project.link : '#'}" target="_blank">Link</a>`;
    },
    this.hasGit = () => {
        return this.project.git ? ` <span> | </span><a href="${this.project.git}" target="_blank">GitHub</a>` : ``;
    },
    this.isHidden = () => {
        return this.project.hidden ? "hidden" : '';
    }

    return this;
}