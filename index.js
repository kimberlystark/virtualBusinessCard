

function Image() {
    return (
        <section className="image-container">
            <div className="image"></div>
        </section>
    )
}

function Main() {
    return (
        <section className="main">
            <h1>Kimberly Stark</h1>
            <h4>Frontend Developer</h4>
            <a className="website-link" href="www.https://kimberlystark.com"><small>kimberlystark.com</small></a>
            <Button />
            <AboutMe />
        </section>
    )
}

function Button() {
    return (
        <a href="mailto:kimstark@protonmail.com" className="button-container">
            <div className="button-contents">
                <i className="fas fa-envelope"></i>
                <p className="button-text">Email</p>
            </div>
        </a>

    )

}

function AboutMe() {
    return (
        <section className="about-me">
            <div className="about">
                <h4>About</h4>
                <p>I am a Frontend Developer with an interest in making creative sites
                    with user-friendly design and clean code. I love working with others to
                    help make their ideas become reality.</p>
            </div>
            <div className="interests">
                <h4>Interests</h4>
                <p>Hiking. Traveling. Learning. Sci-Fi. Cooking. Art.</p>
            </div>
        </section>
    )
}

function SocialMedia() {
    return (
        <div className="icons">
            <a href="https://github.com/kimberlystark"><i className="fab fa-github-square"></i></a>
            <a href="mailto:kimstark@protonmail.com"><i className="fas fa-envelope-square"></i></a>
            <a href="#"><i className="fab fa-linkedin"></i></a>
        </div>
    )
}
function App() {
    return (
        <div className="page">
            < Image />
            < Main />
            < SocialMedia />
        </div>
    )
}

ReactDOM.render(
    <div>
        <App />
    </div>,
    document.getElementById("root")
)