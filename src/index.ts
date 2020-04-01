import App from './app';
import db from './database';

class Index { 
    constructor() { 
        this.main();
    }

    databseconenction() { 
        db();
    }

    async main(): Promise<void> {
        this.databseconenction(); 
        const app = new App();
        app.start();
    }
}

new Index();