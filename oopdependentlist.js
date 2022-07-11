const data = [
    ["lv1a","lv2a","lv3a"],
    ["lv1a","lv2a","lv3a-1"],
    ["lv1a","lv2a-1","lv3a-2"],
    ["lv1b","lv2b","lv3b"],
    ["lv1b","lv2b","lv3b-1"],
    ["lv1b","lv2b-1","lv3b-2"],
    ["lv1c","lv2c","lv3c"],
    ["lv1c","lv2c","lv3c-1"],
]

class DropDown {
    constructor(data){
        this.data = data;
        this.target = [];
    }
    filterArray(value){
        return this.data.filter(element => value.every((item,i)=> item == element[i]));
     }
      unify(list,index){
        const uniqueValue = new Set();
        list.forEach(element => {uniqueValue.add(element[index]);});
        return [...uniqueValue]
    }
    optionCreator (select,list){
        select.innerHTML= '';
        list.forEach(item=>{
            var newOption = document.createElement("option");
            newOption.textContent = item; 
            select.appendChild(newOption);
        });
    }









}
