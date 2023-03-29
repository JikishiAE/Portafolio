import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  anchoPantalla: any;

  constructor(private el: ElementRef){
    
  }

  ngOnInit(){
    this.anchoPantalla = window.innerWidth;
  }

  abrirMenu(){
    const myTag = this.el.nativeElement.querySelector("#menu_movil");
    const myNav = this.el.nativeElement.querySelector("#linksMenu");

    if(!myTag.classList.contains('active'))
    {
      myTag.classList.add('active'); 
      myNav.classList.add('active'); 
    }
    else{
      myTag.classList.remove('active'); 
      myNav.classList.remove('active'); 
    }
  }

  cerrarMenu(){
    if(this.anchoPantalla <= 992){
      this.abrirMenu();
    }
  }
}
