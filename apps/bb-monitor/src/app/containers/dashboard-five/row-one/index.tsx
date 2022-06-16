import { FC } from "react";
import { Row, Col } from "@stevenr/components";
import { conversions } from "@stevenr/shared/data/dashboard-five";
import Conversion from "../../../components/dashboard-five/conversion";

const RowOne: FC = () => {
    return (
        <Row gutters={10}>
            {conversions.map((data) => (
                <Col sm={6} lg={3} mb={10} key={data.id}>
                    <Conversion
                        title={data.title}
                        rate={data.rate}
                        change={data.change}
                        icon={data.icon}
                        color={data.color}
                    />
                </Col>
            ))}
        </Row>
    );
};

export default RowOne;
