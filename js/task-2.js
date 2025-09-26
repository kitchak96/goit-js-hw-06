class Storage {
    constructor(items) {
        this.items = items;

    }
    getItems() {
        return this.items;
         
    }
    addItem (newItem){
        
        this.items.push(newItem);
    }
    removeItem (itemToRemove){
        const newItems = this.items.filter((item) => item !== itemToRemove);
        this.items = newItems;
     a
    }

}


const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]

storage.addItem("Droid");
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]

storage.removeItem("Prolonger");
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]

storage.removeItem("Scaner");
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]
