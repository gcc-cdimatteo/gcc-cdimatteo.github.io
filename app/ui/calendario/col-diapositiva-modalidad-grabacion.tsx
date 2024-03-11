import { Col, Grid, Row } from "antd";
import { diapositiva_col, modalidad_col } from "./col-lengths";
import { ReactElement } from "react";
import Link from "next/link";
import { FilePresentOutlined, VideoLibrary, Visibility, VisibilityOff } from "@mui/icons-material";
import { Box } from "@mui/material";
import Space from "../space";

export default function ColDiapositivaModalidadGrabacion({ url_diapositiva, modalidad, url_grabacion }: { url_diapositiva: string, modalidad: ReactElement, url_grabacion: string }) {
    // Cabecera
    if (url_diapositiva == "") {
        return (<>
            <Col span={diapositiva_col + modalidad_col}>
                <Row justify={'center'} hidden={modalidad != <></>}>
                    {modalidad}
                </Row>
            </Col>
        </>);
    }

    var grabacion_display = "none";
    if (url_grabacion != "") { grabacion_display = "" }

    // Fila Normal
    return (
        <>
            <Col span={diapositiva_col + modalidad_col}>

                <Row justify={'center'}>
                    {modalidad}
                </Row>

                <br />
                <br />

                <Row justify={'center'}>
                    <Link
                        href={url_diapositiva}
                        target='_blank'>
                        <Box display={'flex'} alignItems={'center'} justifyContent={'center'}>
                            <FilePresentOutlined />
                            <Space />
                            Diapositiva
                        </Box>
                    </Link>
                </Row>

                <Box display={grabacion_display}>
                    <br />
                    <Row justify={'center'}>
                        <Link
                            href={url_grabacion}
                            target='_blank'>
                            <Box display={'flex'} alignItems={'center'} justifyContent={'center'}>
                                <VideoLibrary />
                                <Space />
                                Grabacion
                            </Box>
                        </Link>
                    </Row>
                </Box>
            </Col>
        </>
    );
};