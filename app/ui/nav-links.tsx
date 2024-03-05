import { AddToPhotosOutlined, AssignmentTurnedInOutlined, BookmarkBorderOutlined, EventOutlined, HomeRounded, WatchLaterOutlined } from '@mui/icons-material';
import { Menu, type MenuProps } from 'antd';

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
    getItem('Inicio', 'home', <HomeRounded />),
    getItem('Analítico', '2', <AssignmentTurnedInOutlined />),
    getItem('Cursada', '3', <WatchLaterOutlined />),
    getItem('Calendario', '4', <EventOutlined />),
    // getItem('User', 'sub1', <UserOutlined />, [
    //   getItem('Tom', '3'),
    //   getItem('Bill', '4'),
    //   getItem('Alex', '5'),
    // ]),
    getItem('Bibliografía', '9', <BookmarkBorderOutlined />),
    getItem('Material Adicional', '10', <AddToPhotosOutlined />),
];

export default function NavLinks() {
    return (
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
    );
};