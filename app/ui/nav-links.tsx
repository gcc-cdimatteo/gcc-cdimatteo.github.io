import { AddToPhotosOutlined, AssignmentTurnedInOutlined, BookmarkBorderOutlined, EventOutlined, Group, HomeRounded, WatchLaterOutlined } from '@mui/icons-material';
import { Menu, type MenuProps } from 'antd';
import Link from 'next/link';
import { useState } from 'react';

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
): MenuItem {
    return {
        key,
        icon,
        children,
        label,
    } as MenuItem;
}

const items: MenuItem[] = [
    getItem((<Link href='/inicio'>Inicio</Link>), 'inicio', <HomeRounded />),
    getItem((<Link href='/docentes'>Docentes</Link>), 'docentes', <Group />),
    getItem((<Link href='/programa'>Programa</Link>), 'programa', <AssignmentTurnedInOutlined />),
    getItem((<Link href='/cursada'>Cursada</Link>), 'cursada', <WatchLaterOutlined />),
    getItem((<Link href='/calendario'>Calendario</Link>), 'calendario', <EventOutlined />),
    getItem((<Link href='/bibliografia'>Bibliografía</Link>), 'bibliografia', <BookmarkBorderOutlined />),
    getItem((<Link href='/material-adicional'>Material Adicional</Link>), 'material-adicional', <AddToPhotosOutlined />),
];

export default function NavLinks() {
    const [current, setCurrent] = useState('inicio');

    const onClick: MenuProps['onClick'] = (e) => {
        setCurrent(e.key);
    };

    return (
        <Menu theme="dark" defaultSelectedKeys={['inicio']} mode="inline" items={items} onClick={onClick} />
    );
};