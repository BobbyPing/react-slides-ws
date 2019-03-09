import React, { Component } from 'react'
import Fullpage, { FullPageSections, FullpageSection } from '@ap.cx/react-fullpage'

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
            padding: '1em',
          }}></FullpageSection>
          <FullpageSection style={{
            backgroundColor: 'firebrick',
            padding: '1em',
          }}>3</FullpageSection>

        </FullPageSections>

      </Fullpage>
    )
  }
}


