import { Button, Form, InputGroup, Modal } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actionCreators } from '../../Action'
import { useState, useEffect } from 'react'
import { BookCardProps } from '../Booklist/BookCard'

interface AddOrModifyBookProps {
  isOpen: boolean;
}

interface StateType {
  currentBook?: any;
  book?: any;
}

const AddOrModifyBook = ({ isOpen }: AddOrModifyBookProps) => {
  const dispatch = useDispatch()
  const { closePopup, addNewBook, modifyBook, resetCurrentBook } = bindActionCreators(actionCreators, dispatch)
  const state: StateType = useSelector((state: StateType) => state);
  const [formValues, setFormValues] = useState({ name: "", price: "", description: "", category: "", url: "" });
  const isModify: boolean = state.book.bookList.find((book: any) => book.name === formValues.name);

  useEffect(() => {
    const bookInfo: BookCardProps = state.currentBook?.currentBook;
    setFormValues({ name: bookInfo.name, price: bookInfo.price, category: bookInfo.category, description: bookInfo.description, url: bookInfo.url ?? "" })
  }, [state.currentBook])

  const onFormChange = (e: any) => {
    const name: string = e.target.name;
    const value: string = e.target.value;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleClose = () => {
    setFormValues({ name: "", price: "", description: "", category: "", url: "" });
    resetCurrentBook();
    closePopup();
  }

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (isModify) {
      modifyBook({
        name: formValues.name,
        price: formValues.price,
        category: formValues.category,
        description: formValues.description,
        url: formValues.url
      })
    } else {
      addNewBook({
        name: formValues.name,
        price: formValues.price,
        category: formValues.category,
        description: formValues.description,
        url: formValues.url
      });
    }
    setFormValues({ name: "", price: "", description: "", category: "", url: "" });
    closePopup();
  }

  const handleClear = () => {
    setFormValues({ name: "", price: "", description: "", category: "", url: "" });
    resetCurrentBook();
  }

  return (
    <Modal show={isOpen} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{isModify ? "Edit a book" : "Add a new Book"}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="bookName">
            <Form.Label>Book Name</Form.Label>
            <Form.Control type="text" placeholder="Title of the book" name='name' onChange={onFormChange} value={formValues.name} disabled={isModify} required />
          </Form.Group>
          <Form.Group className="mb-3" controlId="bookPrice">
            <Form.Label>Price</Form.Label>
            <InputGroup className="mb-3">
              <InputGroup.Text>$</InputGroup.Text>
              <Form.Control type="text" placeholder="Book price in nearest dollar" name='price' onChange={onFormChange} value={formValues.price} required />
              <InputGroup.Text>.00</InputGroup.Text>
            </InputGroup>
          </Form.Group>
          <Form.Group className="mb-3" controlId="bookCategory">
            <Form.Label>Category</Form.Label>
            <Form.Control type="text" placeholder="eg) Kids, Romance, Suspense ..." name='category' onChange={onFormChange} value={formValues.category} required />
          </Form.Group>
          <Form.Group className="mb-3" controlId="imageURL">
            <Form.Label>Image URL</Form.Label>
            <Form.Control type="text" placeholder="For book image but it is disabled for now" name='url' onChange={onFormChange} value={formValues.url} disabled />
          </Form.Group>
          <Form.Group className="mb-3" controlId="bookDescription">
            <Form.Label>Description</Form.Label >
            <Form.Control as="textarea" placeholder="Add a description" rows={3} name='description' onChange={onFormChange} value={formValues.description} />
          </Form.Group>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="secondary" style={{ margin: "10px" }} onClick={handleClear}>
            Clear
          </Button>
          <Button variant="primary" type="submit">
            Save
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  )
}

export default AddOrModifyBook
