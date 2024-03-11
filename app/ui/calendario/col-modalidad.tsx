import { Col } from "antd";
import { modalidad_col } from "./col-lengths";
import { ReactElement } from "react";

export default function ColModalidad({ content }: { content: ReactElement }) {
    return (
        <>
            <Col span={modalidad_col}>
                {content}
            </Col>
        </>
    );
};