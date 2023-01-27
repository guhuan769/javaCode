import React, { Component } from 'react'
import { TabBar } from 'antd-mobile'
import './Tabbar.css'
import {
    AppOutline,
    UnorderedListOutline,
    UserOutline,
} from 'antd-mobile-icons'
import { withRouter } from 'react-router-dom'

class ElonTabbar extends Component {
    tabs = [
        {
            key: '/films',
            title: '电影',
            icon: <AppOutline />,
        },
        {
            key: '/cinemas',
            title: '影院',
            icon: <UnorderedListOutline />,
        },
        {
            key: '/center',
            title: '我的',
            icon: <UserOutline />,
        },
    ]

    render() {
        return (
            <div className='tabbarDiv'>
                <TabBar
                    onChange={(value) => {
                        console.log(this.props)
                        this.props.history.push(value)
                    }}
                    activeKey=
                    {
                        "/" + this.props.location.pathname.split("/")[1]
                    }
                >
                    {this.tabs.map(item => (
                        <TabBar.Item key={item.key} icon={item.icon} title={item.title} />
                    ))}
                </TabBar>
            </div>
        )
    }
}
export default withRouter(ElonTabbar)