class Allergen {
    constructor(ID, allergenName) {
        this._ID = ID;
        this._allergenName = allergenName;
    }

    get ID() {
        return this._ID;
    }

    set ID(ID) {
        this._ID = ID;
    }

    get allergenName() {
        return this._allergenName;
    }

    set allergenName(allergenName) {
        this._allergenName = allergenName;
    }
}

module.exports = Allergen