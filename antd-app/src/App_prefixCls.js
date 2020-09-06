import React from 'react'
import {
    ConfigProvider,
    Button
} from 'antd';
import './App_prefixCls.less'
/**
 *  */
const Page = () => {
    return <div><Button type='primary'>prefixCls demo</Button>
        <div className='hello'>hello cls</div>
    </div>
}
export default () => {
    return (
        <ConfigProvider prefixCls='robin' >
            <Page />
        </ConfigProvider>
    )

}