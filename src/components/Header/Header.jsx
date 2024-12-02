import React from "react";
import { Form, Button, Container, Navbar } from "react-bootstrap"; //importing necessary react-bootstrap components.
import { useForm } from "react-hook-form"; // importing useForm from react-hook-form
import Joi from "joi"; // is it for validation form
import { joiResolver } from "@hookform/resolvers/joi"; // integrated Joi with react-hook-form
import axios from "axios"; //import axios for fetch api or HTTP request
import { useState } from "react";

// Classes and Scripts:
// This function is typically a member of a larger component or service responsible for data fetching in a web application.
// This script is imported where necessary and the environment supports asynchronous functions and axios.

//Members:
// axios: Utilized for making HTTP GET requests.
// formData: Contains the user's input for searching songs.
// onFetch: Callback function that is executed with the response data upon successful fetch.
// setIsError: Function to update the error state of the component.
// setIsLoading: Function to update the loading state of the component.

function Header({ onFetch, title }) {
  const [isLoading, setIsLoading] = useState(false); // state to set isLoading
  const [isError, setIsError] = useState(null); // state to set isError

  // validation Joi search form using Joi
  const schema = Joi.object({
    searchText: Joi.string().required(),
  });

  // useForm hook to handle form submission and validate inputs
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: joiResolver(schema),
  });

  // Methods, fetchSongs(formData), Main method to fetch song data based on user input.

  //Parameters:
  // formData: An object containing the user's search query. Expected to have a 'searchText' key.
  // searchText: A string that is used to query the Deezer API for songs.
  // onFetch: A callback function that is called with the songs data upon successful fetching.
  async function fetchSongs(formData) {
    try {
      const query = formData.searchText;
      // It makes use of axios for HTTP requests and manages the application's state based on the request's outcome.
      const res = await axios.get(
        `https://deezerdevs-deezer.p.rapidapi.com/search`,
        {
          params: { q: query },
          headers: {
            "X-RapidAPI-Key":
              "0b14d2ef2bmsh030e0e8f74eee6bp1d934cjsnb411e4a1c8fb",
            "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
          },
        }
      );
      onFetch(res.data.data);
    } catch (error) {
      console.error("Error fetching songs", error);
      setIsError(error);
    } finally {
      setIsLoading(false);
    }
    // setIsError: A function that takes an error object and sets the error state of the component.
    // setIsLoading: A function that takes a boolean value to set the loading state of the component.
  }

  // render an loading message if there was an error fetching data
  if (isLoading) {
    return <p>Loading...</p>;
  }

  // render an error message if there was an error fetching data
  if (isError) {
    return <p>Error Page - {isError.message}</p>;
  }

  return (
    <div>
      <Navbar expand="lg" className="bg-1" data-testid="pageTitle">
        <Container fluid>
          <Navbar.Brand href="/">Gem-Music💃🏻 {title}</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Form
              onSubmit={handleSubmit((data) => {
                fetchSongs(data);
              })}
              className="d-flex me-2 w-75"
            >
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                {...register("searchText")}
                isInvalid={!!errors.searchText}
              />
              {errors.searchText && <p>{errors.searchText.message}</p>}
              <Button variant="outline-success" type="submit">
                Search
              </Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header; //export the header component for use in other parts of the application.
