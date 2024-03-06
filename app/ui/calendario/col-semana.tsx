import { Col } from "antd";
import { semana_col } from "./col-lengths";
import { ReactElement } from "react";

export default function ColSemana({ content }: { content: ReactElement }) {
    return (
        <>
            <Col span={semana_col}>
                {content}
            </Col>
        </>
    );
};