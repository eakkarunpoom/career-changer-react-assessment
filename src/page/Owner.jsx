import Layout from "../component/Layout";
import './Owner.css';

const Owner = () => {
    return(
        <Layout>
            <h1 className="owner">Moss - Group D - 09</h1>
            <div className="block-img">
                <img src='\src\img.jpg' alt='mosspic' />
            </div>
            <div className="bio">
                <h4>Short Biography</h4>
                <p>My name is Eakkarunpoom</p>
            </div>
        </Layout>
    )
}

export default Owner;