import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import PropTypes from "prop-types";
import { LogoImg } from "./style";

const LogoWhite = ({ logo, classCName }) => {
    return (
        <LogoImg>
            <Link to="/">
                <StaticImage
                    src="../../data/images/logo/amr-media.png"
                    alt="Pringo Logo Image"
                    title="Logo"
                />
            </Link>
        </LogoImg>
    );
};
LogoWhite.propTypes = {
    logo: PropTypes.string,
    classCName: PropTypes.string,
};
export default LogoWhite;
