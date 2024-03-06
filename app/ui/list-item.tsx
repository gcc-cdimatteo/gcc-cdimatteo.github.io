import { Box } from "@mui/material";
import Tab from "./tab";
import Space from "./space";
import { ReactElement } from "react";

export default function ListItem({ icon, text }: { icon: ReactElement, text: ReactElement }) {
    return (
        <Box display={'flex'} alignItems={'center'} alignContent={'center'} gridRow={1} >
            <Tab />
            {icon}
            <Space />
            {text}
        </Box>
    );
}