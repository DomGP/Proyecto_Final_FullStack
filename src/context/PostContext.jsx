import { createContext, useContext, useEffect, useState } from "react";
import { useUser } from "./UserContext";
export const PostContext = createContext();

const PostProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);
  const { user } = useUser();

  useEffect(() => {
    const fetchPosts = async () => {
      if (!user?.token) return;
      try {
        const response = await fetch(
          "https://level-footing-438615-u9.wn.r.appspot.com/api/getpost",
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${user.token}`,
              "Content-Type": "application/json",
            },
          }
        );

        if (!response.ok) {
          throw new Error("Error al obtener publicaciones");
        }

        const data = await response.json();
        setPosts(data);
      } catch (error) {
        setError(error.message);
        console.error("Error al obtener publicaciones:", error);
      }
    };
    fetchPosts();
  }, []);

  const addPost = async (newPost) => {
    try {
      const token = localStorage.getItem("token");
      const response = await fetch(
        "https://level-footing-438615-u9.wn.r.appspot.com/api/createpost",
        {
          method: "POST",
          headers: {
            "Content-type": "application/json",
            Authorization: `Bearer ${user.token}`,
          },
          body: JSON.stringify(newPost),
        }
      );

      if (!response.ok) {
        throw new Error("Error al crear el post");
      }
      const createdPost = await response.json();
      setPosts((prevPosts) => [...prevPosts, createdPost]);
    } catch (error) {
      setError(error.message);
      console.error("Error al crear el post:", error);
    }
  };

  const removePost = async (post_id) => {
    try {
      const token = localStorage.getItem("token");
      const response = await fetch(
        `https://level-footing-438615-u9.wn.r.appspot.com/api/delete/${post_id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error("Error al eliminar el post");
      }
      setPosts((prevPosts) => prevPosts.filter((post) => post.id !== id));
    } catch (error) {
      setError(error.message);
      console.error("Error al eliminar el post:", error);
    }
  };

  return (
    <PostContext.Provider value={{ posts, addPost, removePost, error }}>
      {children}
    </PostContext.Provider>
  );
};

export const usePost = () => {
  return useContext(PostContext);
};

export default PostProvider;
