// Import Assets
import profile from '../assets/profile.jpeg';

const Header = () => {
    return (
        <section className='header'>
            <img src={profile} alt="John Doe" />

            <div className='header__content'>
                <h1>Hi, I'm Vivian Peng</h1>
                <p>Blockchain Developer</p>
                <a href="mailto:yp2457@columbia.edu" className='button'>Get In Touch</a>
            </div>
        </section>
    );
}

export default Header;