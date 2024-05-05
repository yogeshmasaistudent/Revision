import React, { useEffect, useState } from "react";

function User() {
  const [user, setUser] = useState([]);
  const [formData, setFormData] = useState({ title: "", body: "" });

  async function fetchData() {
    try {
      const res = await fetch(
        "https://jsonplaceholder.typicode.com/posts?_limit=10"
      );
      const data = await res.json();
      setUser(data);
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      setUser([...user, data]);
      setFormData({ title: "", body: "" });
    } catch (error) {
      console.log("Error creating post:", error);
    }
  };

  const handleEdit = async (id, newData) => {
    try {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newData),
        }
      );
      const updatedData = await res.json();
      const updatedUser = user.map((post) =>
        post.id === id ? { ...post, ...updatedData } : post
      );
      setUser(updatedUser);
    } catch (error) {
      console.log("Error updating post:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        method: "DELETE",
      });
      const updatedUser = user.filter((post) => post.id !== id);
      setUser(updatedUser);
    } catch (error) {
      console.log("Error deleting post:", error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleInputChange}
          placeholder="Title"
        />
        <textarea
          name="body"
          value={formData.body}
          onChange={handleInputChange}
          placeholder="Body"
        />
        <button type="submit">Create Post</button>
      </form>
      <div>
        {user.map((ele) => (
          <div key={ele.id}>
            <p>{ele.id}</p>
            <div>{ele.title}</div>
            <div>{ele.body}</div>
            <button
              onClick={() =>
                handleEdit(ele.id, {
                  title: "Updated Title",
                  body: "Updated Body",
                })
              }
            >
              Edit
            </button>
            <button onClick={() => handleDelete(ele.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default User;
