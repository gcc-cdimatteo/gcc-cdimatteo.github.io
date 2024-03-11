import { Col } from "antd";
import { fecha_col } from "./col-lengths";
import { ReactElement } from "react";
import { Box } from "@mui/material";

export default function ColFecha({ fecha }: { fecha: string }) {
    return (
        <>
            <Col span={fecha_col}>
                {fecha}
            </Col>
        </>
    );
};