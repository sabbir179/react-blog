import "./singlePost.css"

export default function SinglePost() {
    return (
        <div className="singlePost">
            <div className="singlePostWrapper">
                <img 
                    className="singlePostImg"
                    src="https://mk0flowerglossarlngi.kinstacdn.com/wp-content/uploads/2017/09/types-of-flowers-names-1024x741.jpg" 
                    alt="" 
                />
                <h1 className="singlePostTitle">
                    Lorem ipsum dolor sit amet co
                    <div className="singlePostEdit">
                        <i className="singlePostIcon far fa-edit"></i>
                        <i className="singlePostIcon far fa-trash-alt"></i>
                    </div>
                </h1>
                <div className="singlePostInfo">
                    <span className="singlePostAuthor">Author: <b>Salam </b> </span>
                    <span className="singlePostDate"> 1 hour ago</span>
                </div>
                <p className="singlePostDesc"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil est animi cupiditate ab suscipit aut fuga. Distinctio odio voluptates quos non harum, quis, minus adipisci velit repellendus dolores quam necessitatibus?
                Beatae, consequatur perspiciatis. Asperiores dignissimos deserunt facere, dolorum inventore error eligendi repellat debitis facilis quibusdam odit, laudantium reiciendis odio tenetur. Impedit libero optio consequuntur cumque unde deserunt rem ex debitis.
                Possimus commodi ducimus esse non maiores quae blanditiis eveniet officiis mollitia dolores cum temporibus corporis molestiae, tenetur, modi laboriosam a odio laborum ipsam, atque vel reiciendis ad impedit! Totam, laboriosam?
                Expedita incidunt soluta maxime excepturi consectetur, hic, alias officiis nobis vitae molestiae, nulla nemo vero possimus rem voluptatem esse architecto. Ab quibusdam adipisci rerum iusto odit enim, reprehenderit placeat perspiciatis?
                Eligendi dolorem assumenda ipsam inventore nostrum modi dolor beatae maiores aut ex eveniet rerum, explicabo repudiandae sed? Consequuntur animi delectus ex error possimus dolor, rerum officiis! Nemo officiis magni inventore.</p>
            </div>
        </div>
    )
}
