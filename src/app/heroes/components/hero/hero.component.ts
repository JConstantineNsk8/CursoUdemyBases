import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

    public name: string = 'Ironman';
    public age: number = 45;

    get capitalizeName():string{
      return this.name.toUpperCase();
    }

    public getHeroDescription():string{
       return `${this.name} - ${this.age}`
    }

    public changeName():void{
      this.name = "Spiderman";
    }
    public changeAge():void{
      this.age = 30;
    }
    public resetForm():void{

      this.name = "Ironman";
      this.age = 45;

      document.querySelectorAll('h1')!.forEach(element => {
        element.innerHTML = "<h1>Desde Angular</h1>";
      });

    }
}
