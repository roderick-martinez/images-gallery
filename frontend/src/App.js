import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Search from './components/Search';
import ImageCard from './components/ImageCard';
import { Container, Col, Row } from 'react-bootstrap';

const UNSPLASH_KEY = process.env.REACT_APP_UNSPLASH_KEY;

const App = () => {
  // state handling
  // useState returns 2 variables: a string (word) and a function (setWord)
  // setWord is a function that sets the value of the variable word
  // both are passed as properties to the Search component so that they can be used by that component
  const [word, setWord] = useState('');

  // This holds the values of the images in an array.
  // useState sets a default empty array at first.
  const [images, setImages] = useState([]);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    fetch(
      `https://api.unsplash.com/photos/random/?query=${word}&client_id=${UNSPLASH_KEY}`
    )
      .then((res) => res.json())
      .then((data) => {
        // pull data from array using js spread operator ...
        // it will create a new array of images
        // first: create an object (using brackets) and add data array using spread operator
        // as well as a new  a new field (or is it a variable?) named title that contains the contents of word
        // second: add contents of images using spread operator
        setImages([{ ...data, title: word }, ...images]);
      })
      .catch((err) => {
        console.log(err);
      });
    setWord('');
  };

  /* 
    Function that will be passed to the ImagesCard component.
  */
  const handleDeleteImage = (id) => {
    // Use the filter method to search for provided id.
    // If it matches, then delete it from images array.
    // The Filter method returns a new array.
    setImages(images.filter((image) => image.id !== id));
  };

  return (
    <div>
      <Header title="Images Gallery" />

      {/*  
      Display Search component and pass word prop as well as functions as properties.
      */}
      <Search word={word} setWord={setWord} handleSubmit={handleSearchSubmit} />

      <Container className="mt-4">
        <Row xs={1} md={2} lg={3}>
          {/* 
            Using the JS map method, map each image in the images array and 
            spit out the JSX that displays the image cards.
            Technically it's returning an array of ImageCard.
            The "key" prop provides the JSX code the index of the element in 
            the images array. This is required by JSX.  */}
          {images.map((image, i) => (
            <Col key={i} className="pb-3">
              <ImageCard image={image} deleteImage={handleDeleteImage} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default App;
