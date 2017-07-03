"use strict";
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
    greet: function () {
        var self = this;
        setTimeout(function () {
            console.log('employee has id = ' + self.id);
        }, 1000);
        //console.log('employee has id = '+this.id);
    }
};
// use arrow function
var employee1 = {
    id: 2,
    greet: function () {
        var _this = this;
        setTimeout(function () { return console.log('employee1 has id = ' + _this.id); }, 1000);
    }
};
employee.greet();
employee1.greet();
//# sourceMappingURL=lesson9.js.map