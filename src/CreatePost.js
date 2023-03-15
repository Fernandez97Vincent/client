import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function CreatePost() {
    const navigate = useNavigate();
    const [post, setPost] = useState({
        
    })
    return (
        <div style={{width: "100%", margin: "auto, auto", textAlign:"center"}}>
            <h1>Create a post</h1>
            <Form>
                <Form.Group>
                    <Form.Control name="title" 
                    placeholder="title" 
                    style={{ marginBottom:"1rem" }}
                    />
                    <Form.Control 
                    name="description" 
                    placeholder="description"
                    style={{ marginBottom:"1rem" }}
                    />
                </Form.Group>
            </Form>
            <Button onClick={() => navigate(-1)}>BACK</Button>
        </div>
    )
}

export default CreatePost;