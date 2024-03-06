import { ReactElement } from "react";
import Tab from "./tab";
import { Box } from "@mui/material";

export default function ({ icon, name }: { icon: ReactElement, name: ReactElement }) {
    return (
        <Box display={'flex'} alignItems={'center'} alignContent={'center'} gridRow={1} >
            <Tab />
            <Tab />
            <Tab />
            <Tab />
            {icon}
            <span> &nbsp; &nbsp;
                {name}
            </span>
        </Box>
    );
}