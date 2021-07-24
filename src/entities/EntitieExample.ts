import {v4 as uuid} from "uuid";

class EntitieExample {
    id: string;

    name: string;

    created_at: Date;

    updated_at: Date;

    nameCustom(): string {
        return `#${this.name}`;
    }

    constructor() {
        if (!this.id) {
            this.id = uuid();
        }
    }
}

export {EntitieExample};
