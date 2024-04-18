import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import logo from './blazesoftImage.png'
import Badge from 'react-bootstrap/Badge';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useSelector, useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import { openPopup, closePopup, deleteBook, openDescription, closeDescription, setCurrentBook, resetCurrentBook } from '../../Action'
// import * as ActionList from '../../Action'
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
  const Actions: any = bindActionCreators({ openPopup, closePopup, deleteBook, openDescription, closeDescription, setCurrentBook, resetCurrentBook }, dispatch)
  const state: any = useSelector((state) => state);

  const open = () => {
    Actions.setCurrentBook(props)
    Actions.openPopup();
  }

  const deleteCurrentBook = () => {
    Actions.deleteBook({
      name: props.name,
      price: props.price,
      cateogry: props.category,
      description: props.category,
      url: props.url
    })
  }

  const handleShowDescription = () => {
    Actions.setCurrentBook(props)
    Actions.openDescription();
  }

  const handleHideDescription = () => {
    Actions.resetCurrentBook();
    Actions.closeDescription();
  }

  return (
    <div style={{ boxShadow: "12px 12px 2px 1px rgba(0, 0, 255, .2)", margin: '10px' }}>
      <Card className="BookCard" border="light" style={{ width: '17rem' }} >
        <Card.Header>{props.name}</Card.Header>
        <Card.Img variant="top" src={logo} onClick={open} />
        <Card.Body onClick={open}>
          <Card.Subtitle className="mb-2 text-muted">
            ${props.price}
          </Card.Subtitle>
          <Card.Text>
            <Badge bg="dark">{props.category}</Badge>
          </Card.Text>
          <Card.Text style={{ maxHeight: "10vh", minHeight: "10vh", overflowY: "scroll" }}>
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
              <Offcanvas.Title>{state.currentBook.currentBook.name} Description</Offcanvas.Title>
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
