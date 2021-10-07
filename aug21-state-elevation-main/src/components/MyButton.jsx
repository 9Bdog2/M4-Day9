import Button from 'react-bootstrap/Button'

const MyButton = ({ setSelected }) => (
    <Button onClick={() => setSelected('MICKEY MOUSE')}>CHANGE TO MICKEY MOUSE</Button>
)

export default MyButton