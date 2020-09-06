import React from 'react'
import zhCN from 'antd/es/locale/zh_CN';
import {
    ConfigProvider,
    Pagination
} from 'antd';
/**
 * 1、antd目前默认文案是英文
 * 2、本身自带多语言支持
 * 3、国际化配置使用组件:ConfigProvider 
 * 4、需要Pagination组件支持ConfigProvider-locale配置！！！！
 *  */
const Page = () => {
    return <Pagination defaultCurrent={1} total={50} showSizeChanger />
}
export default () => {
    return (
        <ConfigProvider locale={zhCN}>
            <Page />
        </ConfigProvider>
    )

}