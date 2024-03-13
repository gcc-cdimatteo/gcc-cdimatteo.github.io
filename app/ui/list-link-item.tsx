import Link from "next/link";
import ListItem from "./list-item";
import { AutoStoriesOutlined } from "@mui/icons-material";
import { ReactElement } from "react";

export default function ListLinkItem({ icon, link, title }: { icon: ReactElement, link: string, title: string }) {
    return (
        <>
            <Link href={link} target='_blank'>
                <ListItem icon={icon} text={<p>{title}</p>} />
            </Link>
        </>
    );
}