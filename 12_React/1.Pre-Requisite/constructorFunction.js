function car(Name , Model , Color){
        this.name = Name;
        this.model = Model;
        this.color = Color;

        this. test = function(){     // bcz iska koi naam ni h 
            console.log(`I am Driving ${this.model}`)
        }
}

let car1 = new car('BMW' , 'X6' , 'White')

let car2 = new car('Audi' , 'Q6' , 'Black')

car1.test()

console.log(car1)

console.log(car2)