// import './header.scss';
import { Menu } from 'antd';
import { SnippetsOutlined, HomeOutlined, UsergroupAddOutlined } from '@ant-design/icons';
import { Link, NavLink } from 'react-router-dom';
import { useState } from 'react';
const Header = () => {
    const items = [
        {
            label: <Link to={"/"}>Home</Link>,
            key: 'home',
            icon: <HomeOutlined />,

        },
        {
            label: <Link to={"/user"}>Users</Link>,
            key: 'users',
            icon: <UsergroupAddOutlined />,
            disabled: false,
        },
        {
            label: <Link to={"/book"}>Book</Link>,
            key: 'book',
            icon: <SnippetsOutlined />,

        },

    ];
    const [current, setCurrent] = useState('mail');
    const onClick = (e) => {
        console.log('click ', e);
        setCurrent(e.key);
    };

    return (
        <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />
    )
}
export default Header;