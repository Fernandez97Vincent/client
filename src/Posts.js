import { useEffect, useState } from "react";
import axios from "axios";
import { Button } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";

function Posts() {
    const navigate = useNavigate();
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios.get("/posts")
        .then(res => {
            console.log(res)
            setPosts(res.data)
            })
        .catch(err => console.log(err))
    }, []);

    const deletePost = (id) => {
        console.log(id)

        axios.delete(`/delete/${id}`)
        .then((res) => console.log(res))
        .then((err) => console.log(err));

        window.location.reload();
    };

    return (
        <div>
            <h1>Hello</h1>
            <Button onClick={() => navigate(-1)}>Back</Button>
            
            {posts ? (
                <>
                    {posts.map(post => {
                        return(
                            <div
                            style={{display:"inline-block", padding:"2rem"}}
                            >
                                <h4>{post.title}</h4>
                                <p>Shift: {post.shift}</p>
                                <h2>Kitchen</h2>
                                <p>George: {post.george}</p>
                                <p>Horacio: {post.horacio}</p>
                                <p>Rafaela: {post.rafaela}</p>
                                <p>Catalina: {post.catalina}</p>
                                <p>Ranulfo: {post.ranulfo}</p>
                                <h2>Sushi Bar</h2>
                                <p>James: {post.james}</p>
                                <p>Bruce: {post.bruce}</p>
                                <p>Gabe: {post.gabe}</p>
                                <p>Freddie: {post.freddie}</p>
                                <h2>FoH</h2>
                                <p>Vincent: {post.vincent}</p>
                                <p>Bam: {post.bam}</p>
                                <p>yoshiko: {post.yoshiko}</p>
                                <p>Josh: {post.josh}</p>
                                <Button>UPDATE</Button>
                                <Button onClick={() => deletePost(post._id)}>DELETE</Button>
                                
                            </div>
                            
                        );
                    })}
                </>
            ) : (
            ""
            )}
        </div>
    )
}

export default Posts;