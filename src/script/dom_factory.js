export default class domFactory {
    constructor(params) {
        const [model, template, config] = params;

        this.model = model;
        this.template = template;
        this.config = config;
        this.rootEl = $(this.config.rootEl);
        this.wrapperClass = this.config.wrapperClass;
        this.wrapper = $(`<div class="${this.wrapperClass}"></div>`);
        this.filterDiv = $('<div class="filters"></div>');
        this.currentFilter = this.setFilterParam(this.config.defaultFilter);
        
        this.createFilterListener();
    }
    render() {
        this.wipe();

        this.rootEl.append(this.createFilters());
        this.rootEl.append(this.wrapItems())
    }
    wipe() {
        this.rootEl.empty();
        this.filterDiv.empty();
        this.wrapper.empty();
    }
    wrapItems() {
        this.wrapper.append(this.generateDom());

        return this.wrapper;
    }
    generateDom() {
        let itemsHtml = '';

        _.each(this.model, (item) => {
            itemsHtml += this.template(item).render();
        });

        return itemsHtml;
    }
    setFilterParam(param) {
        this.currentFilter = param;
        
        this.filterModel();

        return param;
    }
    filterModel() {
        this.model = _.each(this.model, (item) => { 
            this.currentFilter === item[this.config.filterVal] || this.currentFilter === 'all' ? item.hidden = false : item.hidden = true; 
        });
    }
    getAvailableFiters() {
        return _.uniq( _.map(this.model, (item) => {
            return item[this.config.filterVal];
        }) );
    }
    createFilters() {
        const filters = this.config.extraFilters.concat(this.getAvailableFiters());

        _.each(filters, (filter) => {
            this.filterDiv.append(this.filterTemplate(filter, this.currentFilter));
        });

        return this.filterDiv;
    }
    createFilterListener() {
        $('body').on('click', `${this.config.rootEl} .filters div`, (e) => {
            const filterVal = $(e.currentTarget).data('filter-val');
            
            this.setFilterParam(filterVal);
            
            this.render();
        });
    }
    filterTemplate(filter, defaultFilter) {
        return `<div class="button-wb ${filter === defaultFilter ? 'active' : ''}" data-filter-val="${filter}">${filter}</div>`;
    }
}