import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import {
    IonApp,
    IonIcon,
    IonLabel,
    IonRouterOutlet,
    IonTabBar,
    IonTabButton,
    IonTabs,
    setupIonicReact,
} from '@ionic/react'
import { IonReactRouter } from '@ionic/react-router'
import { home, grid } from 'ionicons/icons'

import Tab from './pages/Tab'
import Category from './pages/Category'
import News from './pages/News'
import CategoriesNews from './pages/CategoriesNews'

import '@ionic/react/css/core.css'

import '@ionic/react/css/normalize.css'
import '@ionic/react/css/structure.css'
import '@ionic/react/css/typography.css'

import '@ionic/react/css/padding.css'
import '@ionic/react/css/float-elements.css'
import '@ionic/react/css/text-alignment.css'
import '@ionic/react/css/text-transformation.css'
import '@ionic/react/css/flex-utils.css'
import '@ionic/react/css/display.css'

import './theme/variables.css'

setupIonicReact()

const App: React.FC = () => (
    <IonApp>
        <IonReactRouter>
            <IonTabs>
                <IonRouterOutlet>
                    <Route exact path="/News/:newsId">
                        <News />
                    </Route>
                    <Route exact path="/tab">
                        <Tab />
                    </Route>
                    <Route exact path="/category">
                        <Category />
                    </Route>
                    <Route exact path="/сategoryNews/:id">
                        <CategoriesNews />
                    </Route>
                    <Route exact path="/">
                        <Redirect to="/tab" />
                    </Route>
                </IonRouterOutlet>
                <IonTabBar slot="bottom">
                    <IonTabButton tab="tab" href="/tab">
                        <IonIcon aria-hidden="true" icon={home} />
                        <IonLabel>News</IonLabel>
                    </IonTabButton>
                    <IonTabButton tab="category" href="/category">
                        <IonIcon aria-hidden="true" icon={grid} />
                        <IonLabel>Category</IonLabel>
                    </IonTabButton>
                </IonTabBar>
            </IonTabs>
        </IonReactRouter>
    </IonApp>
)

export default App
