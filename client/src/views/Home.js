// Third-party modules
import React from 'react';
import Tabs from '../components/Tabs';

// CSS
import '../App.css';

export default function Home() {
  return (
    <div>
      <body>

        <div className="container">
          <h1>PAC APP</h1>
          <Tabs />

          <div className="tab-content">
            <div id="home" className="tab-pane fade in active">
              <h2>Actividades y Ayuda Inmediata</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div id="menu1" className="tab-pane fade">
              <h2>Educacion y Recursos</h2>
              <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
            <div id="menu2" className="tab-pane fade">
              <h2>Medicamentos</h2>
              <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
            </div>
          </div>
        </div>


      </body>
    </div>

  );
}