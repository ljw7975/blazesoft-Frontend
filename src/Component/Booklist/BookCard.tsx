import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import logo from './blazesoftImage.png'
import Badge from 'react-bootstrap/Badge';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useSelector, useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actionCreators } from '../../Action';
import { Trash3 } from 'react-bootstrap-icons'

export interface BookCardProps {
  url?: string;
  name: string;
  price: string;
  category: string;
  description: string;
}

const BookCard = (props: BookCardProps) => {
  const dispatch = useDispatch()
  const { openDescription, openPopup, deleteBook, closeDescription, setCurrentBook, resetCurrentBook } = bindActionCreators(actionCreators, dispatch)
  const state: any = useSelector((state) => state);

  const open = () => {
    setCurrentBook(props)
    openPopup();
  }

  const deleteCurrentBook = () => {
    deleteBook({
      name: props.name,
      price: props.price,
      cateogry: props.category,
      description: props.category,
      url: props.url
    })
  }

  const handleShowDescription = () => {
    setCurrentBook(props)
    openDescription();
  }

  const handleHideDescription = () => {
    resetCurrentBook();
    closeDescription();
  }

  return (
    <div className="BookCard">
      <Card border="light" style={{ width: '17rem' }} >
        <Card.Header>{props.name}</Card.Header>
        <Card.Img variant="top" src={logo} onClick={open} />
        <Card.Body onClick={open}>
          <Card.Subtitle className="mb-2 text-muted">
            ${props.price}
          </Card.Subtitle>
          <Card.Text>
            <Badge bg="dark">{props.category}</Badge>
          </Card.Text>
          <Card.Text className="BookCardDescription">
            {props.description}
          </Card.Text>
        </Card.Body>
        <Card.Footer className="text-muted">
          <Button variant="danger" style={{ marginRight: "10px" }} onClick={deleteCurrentBook}><Trash3 /></Button>
          <Button variant="outline-primary" onClick={handleShowDescription}>
            Show Description
          </Button>
          <Offcanvas show={state.description} onHide={handleHideDescription}>
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>{state.currentBook.currentBook.name}</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              {state.currentBook.currentBook.description}
            </Offcanvas.Body>
          </Offcanvas>
        </Card.Footer>
      </Card>
    </div>
  )
}

export default BookCard
