import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";


function CreatePost() {
    const navigate = useNavigate();
    const [post, setPost] = useState({
        title: "",
        description: "",
    });

    const handleChange = (e) => {
        const {name, value} = e.target;

        setPost( (prev) => {
            return {
                ...prev,
                [name]: value,
            };
        });
    };

    const handleClick = (e) => {
        e.preventDefault();

        axios
        .post("/create", post)
        .then(res => console.log(res))
        .catch((err) => console.log(err));

        navigate("/posts")
    }

  

    return (
        <div style={{width: "100%", margin: "auto, auto", textAlign:"center"}}>
            <h1>Create a post</h1>
            <Form>
                <Form.Group>
                    <Form.Control 
                    name="title"
                    value={post.title} 
                    placeholder="title" 
                    style={{ marginBottom:"1rem" }}
                    onChange={handleChange}
                    />

                    <Form.Control 
                    name="description"
                    value={post.description} 
                    placeholder="description"
                    style={{ marginBottom:"1rem" }}
                    onChange={handleChange}
                    />
                </Form.Group>
                <Button 
                onClick={handleClick}>
                    CREATE POST
                </Button>
            </Form>
            <Button onClick={() => navigate(-1)}>BACK</Button>
        </div>
    )
}

export default CreatePost;