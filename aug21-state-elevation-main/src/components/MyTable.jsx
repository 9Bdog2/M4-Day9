import { ListGroup } from 'react-bootstrap'
import MyButton from './MyButton'

const MyTable = (props) => (
    <>
        <ListGroup>
            <ListGroup.Item className="pointer" onClick={(e) => props.setSelected(e.target.innerText)}>
                Browny
            </ListGroup.Item>
            <ListGroup.Item className="pointer" onClick={(e) => props.setSelected(e.target.innerText)}>
                Whitey
            </ListGroup.Item>
            <ListGroup.Item className="pointer" onClick={(e) => props.setSelected(e.target.innerText)}>
                Blacky
            </ListGroup.Item>
            <ListGroup.Item className="pointer" onClick={(e) => props.setSelected(e.target.innerText)}>
                Wolf
            </ListGroup.Item>
        </ListGroup>
        <p className="mt-3">App's state is {props.selected || 'null'}</p>
        <MyButton setSelected={props.setSelected} />
    </>
)

export default MyTable