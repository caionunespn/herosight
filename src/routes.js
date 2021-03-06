import React from 'react';
import {BrowserRouter, Route, Redirect} from 'react-router-dom';
import {spring, AnimatedSwitch} from 'react-router-transition';
import Base from './pages/base';
import Main from './pages/main';
import Equipe from './pages/equipe';
import Contato from './pages/contato';
export default function Routes(){
    function mapStyles(styles) {
        return {
          opacity: styles.opacity,
          transform: `scale(${styles.scale})`,
        };
      }
      
      // wrap the `spring` helper to use a bouncy config
      function bounce(val) {
        return spring(val, {
          stiffness: 330,
          damping: 22,
        });
      }
      
      // child matches will...
      const bounceTransition = {
        // start in a transparent, upscaled state
        atEnter: {
          opacity: 0,
          scale: 1.2,
        },
        // leave in a transparent, downscaled state
        atLeave: {
          opacity: bounce(0),
          scale: bounce(0.8),
        },
        // and rest at an opaque, normally-scaled state
        atActive: {
          opacity: bounce(1),
          scale: bounce(1),
        },
      };
    return(
        <BrowserRouter>
            <Base>
                <AnimatedSwitch
                atEnter={bounceTransition.atEnter}
                atLeave={bounceTransition.atLeave}
                atActive={bounceTransition.atActive}
                mapStyles={mapStyles}
                className="route-wrapper"
                >
                    <Route path='/' exact render={() => (<Redirect to='/herosight' />)} />
                    <Route path='/herosight' component={Main} />
                    <Route path='/equipe' component={Equipe} />
                    <Route path='/contato' component={Contato} />
                </AnimatedSwitch>
            </Base>
        </BrowserRouter>
        
    );
}