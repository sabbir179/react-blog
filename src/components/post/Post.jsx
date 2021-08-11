import "./post.css"

export default function Post() {
    return (
        <div className="post">
            <img 
                className="postImg"
                src="https://mk0flowerglossarlngi.kinstacdn.com/wp-content/uploads/2017/09/types-of-flowers-names-1024x741.jpg" 
                alt="" 
            />

            <div className="postInfo">
                <div className="postCard">
                    <span className="postCad">Music</span>
                    <span className="postCad">Life</span>
                </div>
                <span className="postTitle">
                    Lorem ipsum dolor, sit amet consectetur 
                </span>
                <hr />
                <div className="postDate">1 hour age</div>
            </div>
            <p className="postDesc">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis voluptatum culpa doloribus voluptates facilis soluta cum saepe, quod dolorum a illum pariatur ullam nulla voluptate amet quibusdam voluptas. Illo, minima?
                Culpa optio neque reiciendis suscipit quam pariatur sit, tempore quisquam odit voluptate perferendis quibusdam doloremque labore ea ut amet non in cumque debitis animi iusto nulla provident vitae? Amet, officiis.
                Suscipit voluptas quia soluta sint est eveniet velit? Consectetur consequatur veniam repellat voluptates commodi ipsam nostrum aperiam sunt, earum dolorem cum et iste atque iure qui id error! Assumenda, earum?
            </p>
        </div>
    )
}
