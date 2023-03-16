import { useEffect, useState } from "react";
import axios from "axios";
import { Button } from 'react-bootstrap';

function Posts() {
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
            {posts ? (
                <>
                    {posts.map(post => {
                        return(
                            <div>
                                key={post._id}
                                <h4>{post.title}</h4>
                                <p>{post.description}</p>
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