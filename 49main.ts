function logHobbies(...hobbies:string[]){
    hobbies.forEach(hobby =>{
        console.log(`I enjoy ${hobby}.`);
    })
}

logHobbies("reading","coding","cycling");