import { VirtualTimeScheduler } from "rxjs";
import { TestScheduler } from "rxjs/testing";

export class Pokemon{
    name:string;
    img:string;
    type:string;
    height:string;
    health:string;
    attackPower:string;

    constructor(name:string,img:string,type:string,height:string,health:string,attackPower:string){
        this.name=name;
        this.img=img;
        this.type=type;
        this.height=height;
        this.health=health;
        this.attackPower=attackPower;
    }

}