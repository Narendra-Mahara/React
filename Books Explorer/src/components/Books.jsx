import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

const BookDetails = () => {
  const { name } = useParams(); // Extract 'name' from the URL
  const [book, setBook] = useState(null); // State to store book details
  const [loading, setLoading] = useState(true); // Loading state

  useEffect(() => {
    // Fetch book details from API using 'name'
    const fetchBookDetails = async () => {
      try {
        const response = await fetch(
          `https://www.googleapis.com/books/v1/volumes?q=${name}`
        );
        const data = await response.json();

        // Check if books are returned and pick the first one
        if (data.items && data.items.length > 0) {
          setBook(data.items[0].volumeInfo);
        } else {
          setBook(null);
        }
      } catch (error) {
        console.error("Error fetching book details:", error);
        setBook(null);
      } finally {
        setLoading(false);
      }
    };

    fetchBookDetails();
  }, [name]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!book) {
    return <p>Book not found!</p>;
  }

  return (
    <div className="p-4 gap-4">
      <h1 className="text-3xl font-serif">{book.title}</h1>
      {book.imageLinks?.thumbnail && (
        <img
          className="object-cover object-center rounded-t-md h-72 bg-gray-500"
          src={book.imageLinks.thumbnail}
          alt={book.title}
        />
      )}
      <p className="text-xl font-serif">
        {book.description || "No description available."}
      </p>
      <Link to="/">
        <button className="p-2 bg-blue-500 text-white rounded-lg">
          Back to Home
        </button>
      </Link>
    </div>
  );
};

export default BookDetails;
