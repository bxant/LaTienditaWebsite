
export class productType {
    public id:String;
    public label:String;
    public isChecked:Boolean;
  
    constructor(id:String,label:String,isChecked:Boolean) {
      this.id = id;
      this.label = label;
      this.isChecked = isChecked;
    }
  }