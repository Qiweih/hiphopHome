

export class User {
    id : string;
    name:string;
    description:string;
    profilImage:string;
    listFan: User[];
    listArtWork: ArtWork[];
    listFollowing : User[];
    battlePoint : number;
    weekPoint : number;
    hipCoin : number;

    constructor (){

    }

    get name(){
        return name;
    }
}