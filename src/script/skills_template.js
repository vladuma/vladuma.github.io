module.exports = (skill) => {

    this.render = () => {
        this.skill = skill;

        return `<div data-filter-value="${skill.level}" class="skill filter-item ${this.isHidden()}">
                    <i class="${skill.icon}" title="${skill.name}"></i>
                </div>`;
    },
    this.isHidden = () => {
        return this.skill.hidden ? 'hidden' : '';
    }

    return this;
}