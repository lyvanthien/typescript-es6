/* var employee = {
    id: 1,
    greet: function(){
        setTimeout(function() {
            console.log('employee has id = '+this.id);
        }, 1000);
        //console.log('employee has id = '+this.id);
    }
} */

var employee = {
    id: 1,
    greet: function(){
        var self = this;
        setTimeout(function() {
            console.log('employee has id = '+self.id);
        }, 1000);
        //console.log('employee has id = '+this.id);
    }
}

// use arrow function
var employee1 = {
    id: 2,
    greet: function(){
        setTimeout(() => console.log('employee1 has id = '+ this.id), 1000);
    }
}

employee.greet();
employee1.greet();
