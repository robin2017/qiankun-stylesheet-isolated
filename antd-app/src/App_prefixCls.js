import React from 'react'
import {
    ConfigProvider,
    Button
} from 'antd';
/**
 *  */
const Page = () => {
    return <Button type='primary'>prefixCls demo</Button>
}
export default () => {
    return (
        <ConfigProvider prefixCls='robin' >
            <Page />
        </ConfigProvider>
    )

}