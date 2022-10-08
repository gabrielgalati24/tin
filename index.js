export class tinderPagination {
    personas = [
        {
            id: 1,
            name: 'John',
            age: 25,
        },
        {
            id: 2,
            name: 'Jane',
            age: 26,

        },
        {
            id: 3,
            name: 'Jack1',
        },

        //method
   
    ];
    actualPage = 1;
    IsbackPossible = false;
    next(){
        this.actualPage++;
        this.IsbackPossible = true;
    }
    previous(){
        
        if(this.actualPage > 1){
            if( this.IsbackPossible){
                this.actualPage--;
            }
        }
        this.IsbackPossible = false;
    }
    // newsPerson(personas){
    //     const lastPerson = this.personas[this.personas.length - 1];
    //     const newPersons = personas.unshift(lastPerson);
    //     return this.personas = personasas
    // }
    newsPerson(personas){
        const lastPerson = this.personas[this.personas.length - 1];
         personas.unshift(lastPerson);
        return this.personas = personas
    }
    getPersonas(){
        console.log(this.personas)
        return this.personas;
    }
}


const tinderP = new tinderPagination();
tinderP.previous();
tinderP.next();
tinderP.next();
tinderP.next();
tinderP.previous();

tinderP.previous();
tinderP.previous();
tinderP.previous();
tinderP.previous();
tinderP.newsPerson([
    {
        id: 4,
        name: 'Jhon',
    },
    {
        id: 5,
        name: 'Jhon',
    }
]);
tinderP.getPersonas();



