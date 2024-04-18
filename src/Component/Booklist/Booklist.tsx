import './Booklist.css'
import './BookCard'
import BookCard, { BookCardProps } from './BookCard'
import AddOrModifyBook from '../AddOrModifyBook/AddOrModifyBook'
import { useSelector, useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import { openPopup, closePopup } from '../../Action'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { FilePlus, Book, Plus } from 'react-bootstrap-icons'

const Booklist = () => {
  const dispatch = useDispatch()
  const Actions = bindActionCreators({ openPopup, closePopup }, dispatch)
  const state: any = useSelector((state) => state);

  const onAddNewBook = () => {
    Actions.openPopup();
  }

  return (
    <div className='Booklist'>
      <Row>
        <Col style={{ display: 'flex', justifyContent: 'flex-end' }}>
          {state.book.bookList.length !== 0 && <Button onClick={onAddNewBook} variant='light'><Plus /><Book /></Button>}
        </Col>
      </Row>
      <div className="Books d-flex flex-row mb-3">
        {state.book.bookList.map((book: BookCardProps) => {
          return <BookCard name={book.name} price={book.price} category={book.category} description={book.description} key={book.name} url={book.url} />
        })}
        {
          state.book.bookList.length === 0 &&
          <Container>
            Book list is empty. Click below to add a new book
            <br />
            <Button variant='link' onClick={onAddNewBook}>
              <FilePlus color='white' size={200} />
            </Button>
          </Container>
        }
        <AddOrModifyBook isOpen={state.popup} />
      </div>
      {state.book.bookList.length >= 5 &&
        <Row style={{ display: 'flex', justifyContent: 'flex-end' }}>
          {"Scroll right for more books! ->"}
        </Row>}
    </div>
  )
}

export default Booklist
