import { Col } from "antd";
import { semana_col } from "./col-lengths";
import { ReactElement } from "react";

export default function ColSemana({ semana_nro }: { semana_nro: string }) {
    return (
        <>
            <Col span={semana_col}>
                {semana_nro}
            </Col>
        </>
    );
};