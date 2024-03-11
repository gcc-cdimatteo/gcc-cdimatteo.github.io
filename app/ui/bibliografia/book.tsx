import Link from "next/link";
import ListItem from "../list-item";
import { AutoStoriesOutlined } from "@mui/icons-material";

export default function Book({ link, title }: { link: string, title: string }) {
    return (
        <>
            <ListItem icon={<AutoStoriesOutlined htmlColor="#006EAF" />} text={<p>{title}</p>} />
            {/* <Link href={link} target='_blank'>
            </Link> */}
            {/* oculto por copyright */}
        </>
    );
}