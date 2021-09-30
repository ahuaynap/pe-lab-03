import { IonApp, IonRouterOutlet, IonSplitPane } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route } from 'react-router-dom';
import Menu from './components/Menu';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import InicioPage from './pages/InicioPage';
import VisitantePage from './pages/VisitantePage';
import ChequeoPage from './pages/ChequeoPage';
import VisitasPage from './pages/VisitasPage';
import ChequeoFormPage from './pages/ChequeoFormPage';

const App: React.FC = () => {
  return (
    <IonApp>
      <IonReactRouter>
        <IonSplitPane contentId="main">
          <Menu />
          <IonRouterOutlet id="main">
            <Route path="/" exact={true}>
              <Redirect to="/inicio" />
            </Route>
            <Route path="/inicio" exact={true}>
              <InicioPage />
            </Route>
            <Route path="/visitante" exact={true}>
              <VisitantePage />
            </Route>
            <Route path="/chequeo" exact={true}>
              <ChequeoPage />
            </Route>
            <Route path="/chequeo/:id" exact={true} component={ChequeoFormPage}>
            </Route>
            <Route path="/visitas" exact={true}>
              <VisitasPage />
            </Route>
          </IonRouterOutlet>
        </IonSplitPane>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
