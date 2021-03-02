
import './styles/styles.scss';
import Curso from './Curso';

const App = () => (
  <>
    <div className="main-banner img-container l-section" id="main-banner">
      <div className="ed-grid lg-grid-6">
        <div className="lg-cols-4 lg-x-2">
          <img className="main-banner__img" alt="imagen-banner" src="https://images.wallpaperscraft.com/image/road_marking_bridge_123398_300x168.jpg" />
          <div className="main-banner__data s-center">
            <p className="t2 s-mb-0">Curso de EDteam</p>
            <p> Tu futuro te está esperando</p>
            <a href="#" className="button">Suscribirse</a>
          </div>
        </div>
      </div>
    </div>

    <div class="ed-grid m-grid-3">
       <Curso />
       <Curso />
       <Curso />
    </div>
  </>
)

export default App;

// Reglas JSX
// 1: Toda etiqueta debe cerrarse (img siempre se cierra)
// 2: Los componentes deben devolver UN SOLO elemento padre
// 3: Apoyarse de los Fragment cuando se necesita devolver más de un elemento.
//    Fragment === <> </>
// 4: class === className
// 5: for === htmlFor
