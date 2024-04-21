export type Book = {
    _id: string
    title: string;
    author: User;
    coverImage: string;
    file: string;
    genre: string;
}

export type User = {
    _id: string;
    name: string;
    email: string;
}

