class Profile {
    constructor(name, gpa, University){
        this.name = name;
        this.gpa = gpa;
        this.University = University
    }
    
}
const MyProfile = new Profile('Rakib',3.14,'AIUB')
const FriendsProfile = new Profile('Tamim',3.40)
console.log(MyProfile);
console.log(FriendsProfile);