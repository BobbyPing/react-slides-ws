import React, { Component } from 'react'
import Fullpage, { FullPageSections, FullpageSection } from '@ap.cx/react-fullpage'
import Fade from 'react-reveal/Fade';

export default class App extends Component {
  render () {
    return (
      <Fullpage>

        <FullPageSections>

          <FullpageSection style={{
            backgroundColor: 'white',
            height: '100vh',
            padding: '1em',
          }}>
          <div class="header">
            <h1> What should I put on this page?</h1>
          </div>
          </FullpageSection>
          <FullpageSection style={{
            backgroundColor: 'black',
            color: 'white',
            padding: '1em',
          }}>
          <div class="header2">
          <Fade><h1>What should I put on this one?</h1></Fade>
          </div>
          </FullpageSection>
          <FullpageSection style={{
            backgroundColor: 'firebrick',
            padding: '1em',
          }}>3</FullpageSection>

        </FullPageSections>

      </Fullpage>
    )
  }
}


