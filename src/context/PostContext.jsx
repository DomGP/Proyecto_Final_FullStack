import { createContext, useContext, useEffect, useState } from "react";


export const PostContext = createContext();

const PostProvider = ({ children }) => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
    fetch("/post.json")
        .then((response) => response.json())
        .then((data) => setPosts(data))
        .catch((error) => console.error("Error al obtener publicaciones:", error));
    }, []);

    const addPost = (newPost) => {
    setPosts((prevPosts) => [...prevPosts, newPost]);
    };

    return (
        <PostContext.Provider value={{ posts, addPost }}>
        {children}
        </PostContext.Provider>
  );
};

export const usePost = () => {
  return useContext(PostContext);
};

export default PostProvider;
