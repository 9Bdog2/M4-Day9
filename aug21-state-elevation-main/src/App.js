import { useState } from 'react'
import './App.css'
import MyTable from './components/MyTable'
import { Col, Container, Row } from 'react-bootstrap'
import MyAlert from './components/MyAlert'

// when you want to share a piece of information between two siblings component,
// the only way is elevating this piece of information and store it in their
// nearest common ancestor (parent)
// in this way, they're going to receive it as a prop and they can also be passed
// a way of changing it from inside themselves

function App() {
  const [selected, setSelected] = useState(null)

  return (
    <div className="App">
      <header className="App-header">
        <Container>
          <Row>
            <Col>
              <MyTable selected={selected} setSelected={setSelected} />
            </Col>
            <Col className="my-auto">
              <MyAlert selected={selected} />
            </Col>
          </Row>
        </Container>
      </header>
    </div>
  )
}

export default App
