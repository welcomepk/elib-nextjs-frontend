import React from "react";
import { Book } from "@/types";
import BookCard from "./BookCard";
import Link from "next/link";

export default function BookList({ books }: { books: Book[] }) {
  const renderBooks = () => {
    if (books.length === 0) {
      return <div>No books found</div>;
    }
    return books.map((book) => <BookCard key={book._id} book={book} />);
  };

  return (
    <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4">
      {renderBooks()}
    </div>
  );
}
