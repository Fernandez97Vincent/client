import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useState, useRef } from "react";
import axios from "axios";



function CreatePost() {

const [file, setFile] = useState()
  const [description, setDescription] = useState("")
  const [imageName, setImageName] = useState()

  const submit = async event => {
    event.preventDefault()

    const formData = new FormData()
    formData.append("image", file)

    const result = await axios.post('/api/images', formData, { headers: {'Content-Type': 'multipart/form-data'}})
    setImageName(result.data.imageName)
  }
    const navigate = useNavigate();
    const [post, setPost] = useState({
        title: "",
        george: "",
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

            <form onSubmit={submit}>
        <input
          filename={file} 
          onChange={e => setFile(e.target.files[0])} 
          type="file" 
          accept="image/*"
        ></input>
        <button type="submit">Submit</button>
      </form>

            <Form>
                <Form.Group>
                    <Form.Control 
                    name="title"
                    value={post.title} 
                    placeholder="title"
                    type="date" 
                    style={{ marginBottom:"1rem" }}
                    onChange={handleChange}
                    />

                    <Form.Control 
                    name="shift"
                    value={post.shift} 
                    placeholder="Lunch or Dinner"
                    style={{ marginBottom:"1rem" }}
                    onChange={handleChange}
                    />

                    <Form.Control 
                    name="george"
                    value={post.george} 
                    placeholder="george"
                    style={{ marginBottom:"1rem" }}
                    onChange={handleChange}
                    />

                    <Form.Control 
                    name="horacio"
                    value={post.horacio} 
                    placeholder="horacio"
                    style={{ marginBottom:"1rem" }}
                    onChange={handleChange}
                    />

                    <Form.Control 
                    name="rafaela"
                    value={post.rafaela} 
                    placeholder="rafaela"
                    style={{ marginBottom:"1rem" }}
                    onChange={handleChange}
                    />

                    <Form.Control 
                    name="catalina"
                    value={post.catalina} 
                    placeholder="catalina"
                    style={{ marginBottom:"1rem" }}
                    onChange={handleChange}
                    />

                    <Form.Control 
                    name="ranulfo"
                    value={post.ranulfo} 
                    placeholder="ranulfo"
                    style={{ marginBottom:"1rem" }}
                    onChange={handleChange}
                    />

                    <Form.Control 
                    name="bruce"
                    value={post.bruce} 
                    placeholder="bruce"
                    style={{ marginBottom:"1rem" }}
                    onChange={handleChange}
                    />

                    <Form.Control 
                    name="james"
                    value={post.james} 
                    placeholder="james"
                    style={{ marginBottom:"1rem" }}
                    onChange={handleChange}
                    />

                    <Form.Control 
                    name="gabe"
                    value={post.gabe} 
                    placeholder="gabe"
                    style={{ marginBottom:"1rem" }}
                    onChange={handleChange}
                    />

                    <Form.Control 
                    name="freddie"
                    value={post.freddie} 
                    placeholder="freddie"
                    style={{ marginBottom:"1rem" }}
                    onChange={handleChange}
                    />

                    <Form.Control 
                    name="vincent"
                    value={post.vincent} 
                    placeholder="vincent"
                    style={{ marginBottom:"1rem" }}
                    onChange={handleChange}
                    />

                    <Form.Control 
                    name="bam"
                    value={post.bam} 
                    placeholder="bam"
                    style={{ marginBottom:"1rem" }}
                    onChange={handleChange}
                    />
                    <Form.Control 
                    name="yoshiko"
                    value={post.yoshiko} 
                    placeholder="yoshiko"
                    style={{ marginBottom:"1rem" }}
                    onChange={handleChange}
                    />
                                        
                    <Form.Control 
                    name="josh"
                    value={post.josh} 
                    placeholder="josh"
                    style={{ marginBottom:"1rem" }}
                    onChange={handleChange}
                    />
                                        
                    <Form.Control 
                    name="vincent"
                    value={post.vincent} 
                    placeholder="vincent"
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