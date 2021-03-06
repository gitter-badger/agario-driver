import Base from './base-page';

const WIDTH = 700,
    HEIGHT = 700;

export default class MainPage extends Base {
    constructor(options = {}) {
        super();

        this.width  = options.width || WIDTH;
        this.height = options.height || HEIGHT;
    }

    load() {
        return this.browser.get('http://agar.io');
    }

    close() {
        return this.browser.close();
    }

    resize(width, height) {
        return this.browser.manage().window().setSize(width || this.width, height || this.height);
    }
}
