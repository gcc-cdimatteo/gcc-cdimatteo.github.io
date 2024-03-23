import { ReactElement } from "react";
import Tab from "./tab";
import { Box } from "@mui/material";
import ListItem from "./list-item";

export default function ({ icon, name }: { icon: ReactElement, name: ReactElement }) {
    return (
        <Box display={'flex'} alignItems={'center'} alignContent={'center'} gridRow={1} >
            <Tab />
            {icon}
            <span> &nbsp; &nbsp;
                {name}
            </span>
        </Box>
    );
}