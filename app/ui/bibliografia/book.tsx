import Link from "next/link";
import ListItem from "../list-item";
import { AutoStoriesOutlined } from "@mui/icons-material";
import ListLinkItem from "../list-link-item";

export default function Book({ link, title }: { link: string, title: string }) {
    return (
        <>
            <ListLinkItem icon={<AutoStoriesOutlined htmlColor="#006EAF" />} link={link} title={title} />
        </>
    );
}