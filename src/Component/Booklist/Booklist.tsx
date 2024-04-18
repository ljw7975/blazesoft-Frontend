import './BookCard'
import BookCard, { BookCardProps } from './BookCard'
import AddOrModifyBook from '../AddOrModifyBook/AddOrModifyBook'
import { useSelector, useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actionCreators } from '../../Action'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { FilePlus, Book, Plus } from 'react-bootstrap-icons'

const Booklist = () => {
  const dispatch = useDispatch()
  const { openPopup } = bindActionCreators(actionCreators, dispatch)
  const state: any = useSelector((state) => state);

  const onAddNewBook = () => {
    openPopup();
  }

  return (
    <div className='Booklist'>
      <Row>
        <Col style={{ display: 'flex', justifyContent: 'flex-end', alignItems: "center" }}>
          {state.book.bookList.length >= 5 && "Scroll right for more books! ->"}
          {state.book.bookList.length !== 0 && <Button style={{marginLeft: "10px"}} onClick={onAddNewBook} variant='light'><Plus /><Book /></Button>}
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

    </div>
  )
}

export default Booklist
