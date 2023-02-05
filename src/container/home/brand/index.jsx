import PropTypes from "prop-types";
import { Col, Container, Row } from "react-bootstrap";
import Swiper, { SwiperSlide } from "@components/shared/swiper";
import SingleBrand from "../../../components/brand";
import { BrandSection, BrandBox, BrandTitle } from "./style";
const BrandArea = ({ data }) => {
    return (
        <BrandSection>
            <Container className="container-max">
                <Row>
                    <Col>
                        <BrandBox>
                            {data?.headings?.[0] && (
                                <BrandTitle
                                    dangerouslySetInnerHTML={{
                                        __html: data.headings[0].content,
                                    }}
                                />
                            )}
                        </BrandBox>
                    </Col>
                </Row>
            </Container>
        </BrandSection>
    );
};
BrandArea.propTypes = {
    data: PropTypes.shape({
        headings: PropTypes.arrayOf(
            PropTypes.shape({
                level: PropTypes.string,
                content: PropTypes.string,
            })
        ),
        items: PropTypes.arrayOf(
            PropTypes.shape({
                id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
                fields: PropTypes.shape({
                    slug: PropTypes.string,
                }),
                images: PropTypes.arrayOf(
                    PropTypes.shape({
                        src: PropTypes.oneOfType([
                            PropTypes.string,
                            PropTypes.shape({}),
                        ]).isRequired,
                        alt: PropTypes.string,
                    })
                ),
                alt: PropTypes.string,
            })
        ),
    }),
};
export default BrandArea;
