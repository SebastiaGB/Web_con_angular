import { Component, AfterViewInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Character {
  nombre: string;
  titulo: string;
  img: string;
  descripcion: string;
  tipo: 'dios' | 'semidios' | 'humano';
  iconClass: string;
  iconColor: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  hideNavbar = false;
  lastScrollTop = 0;
  selectedCharacter: Character | null = null;

  characters: Character[] = [
    {
      nombre: 'Poseidón',
      titulo: 'Señor de los Mares',
      img: 'assets/images/Poseidon.avif',
      descripcion: 'Dios del mar y de los terremotos, controla corrientes y flujos. En la nube, orquesta océanos de datos, dirige contenedores y mantiene la infraestructura en movimiento constante.',
      tipo: 'dios',
      iconClass: 'fas fa-crown',
      iconColor: '#FFD700'
    },
    {
      nombre: 'Zeus',
      titulo: 'Rey del Olimpo',
      img: 'assets/images/Zeus.avif',
      descripcion: 'Rey de los dioses, maestro de los cielos y los rayos. Controla las tormentas y gobierna la nube con poder y autoridad divina.',
      tipo: 'dios',
      iconClass: 'fas fa-crown',
      iconColor: '#FFD700'
    },
    {
      nombre: 'Hades',
      titulo: 'Señor del Inframundo',
      img: 'assets/images/Hades.avif',
      descripcion: 'Señor del inframundo y guardián de tesoros, dirige los datos más oscuros en la nube y asegura que todo bit cumpla su destino final.',
      tipo: 'dios',
      iconClass: 'fas fa-crown',
      iconColor: '#FFD700'
    },
    {
      nombre: 'Teseo',
      titulo: 'Guía de Laberintos',
      img: 'assets/images/Teseo.avif',
      descripcion: 'Héroe astuto y valiente, capaz de navegar laberintos complejos. En la nube, guía datos perdidos a su destino y despliega soluciones inteligentes en entornos intrincados.',
      tipo: 'semidios',
      iconClass: 'fas fa-shield-alt',
      iconColor: '#1E90FF'
    },
    {
      nombre: 'Hercules',
      titulo: 'Héroe Sobrehumano',
      img: 'assets/images/Hercules.avif',
      descripcion: 'Héroe de fuerza sobrehumana, velocidad y reflejos increíbles. Capaz de levantar cualquier carga en la nube y procesar datos como nadie más.',
      tipo: 'semidios',
      iconClass: 'fas fa-shield-alt',
      iconColor: '#1E90FF'
    },
    {
      nombre: 'Zagreo',
      titulo: 'Renacido Oscuro',
      img: 'assets/images/Zagreo.avif',
      descripcion: 'Dios renacido de los Titanes, maestro del ciclo de vida y muerte, resucita bits y datos en la nube para servir a la humanidad.',
      tipo: 'semidios',
      iconClass: 'fas fa-shield-alt',
      iconColor: '#1E90FF'
    },
    {
      nombre: 'Sebastià Gamundí',
      titulo: 'Humano Ascendido',
      img: 'assets/images/yo.avif',
      descripcion: 'Me embarco en un viaje épico de aprendizaje en Cloud Computing. MitologicCloud es mi templo de proyectos autónomos donde adquiero experiencia práctica para dominar la nube y llevar mi carrera profesional al siguiente nivel.',
      tipo: 'humano',
      iconClass: 'fas fa-rocket',
      iconColor: '#FF4500'
    }
  ];

  /** Scroll smoothly to the top */
  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  ngAfterViewInit() {
    // Mostrar elementos fade-in al cargar
    const elements = document.querySelectorAll('.fade-in');
    elements.forEach(el => el.classList.add('visible'));

    this.checkContactVisibility();
  }

  /** Abrir modal de un personaje */
  openModal(character: Character) {
    this.selectedCharacter = character;
    document.body.style.overflow = 'hidden';
  }

  /** Cerrar modal */
  closeModal() {
    this.selectedCharacter = null;
    document.body.style.overflow = 'auto';
  }

  /** Abrir modal del humano (yo) */
  openHumanModal() {
    const human = this.characters.find(c => c.tipo === 'humano');
    if (human) this.openModal(human);
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    this.hideNavbar = currentScroll !== 0;
    this.lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;

    this.checkContactVisibility();
  }

  @HostListener('window:beforeunload', ['$event'])
  beforeUnloadHandler(event: Event) {
    window.scrollTo(0, 0);
  }

  /** Mostrar animación de los elementos de contacto */
  private checkContactVisibility() {
    const triggerPoint = window.innerHeight * 0.8;
    const elements = document.querySelectorAll('.contact-item');

    elements.forEach((el, index) => {
      const top = el.getBoundingClientRect().top;
      if (top < triggerPoint) {
        setTimeout(() => el.classList.add('visible'), index * 300);
      } else {
        el.classList.remove('visible');
      }
    });
  }
}
