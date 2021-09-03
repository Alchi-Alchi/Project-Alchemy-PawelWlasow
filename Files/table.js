class THashStorage {
  constructor() {
    this.data = {};
  }
  AddValue (Key, Value) {
    this.data [Key] = Value;
  }
}
let table = document.getElementById ('table');