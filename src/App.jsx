/* eslint-disable linebreak-style */
import React from 'react'
import Jumbotron from './components/Jumbotron'
import TitleHeader from './components/TitleHeader'
import Container from './components/Container'
import Row from './components/Row'
import Column from './components/Column'
import Form from './components/Form'

const App = () => (
  <div>
    <Jumbotron>
      <TitleHeader className="text-center" title="React Form" />
    </Jumbotron>
    <Container>
      <Row>
        <Column className="col-md-6 offset-md-3">
          <Form />
        </Column>
      </Row>
    </Container>
  </div>
)

// eslint-disable-next-line linebreak-style
export default App
