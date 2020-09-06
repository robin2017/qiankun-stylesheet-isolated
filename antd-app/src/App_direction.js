import React from 'react'
import {
    Input,
    Col,
    Row,
    ConfigProvider,
    Radio,
    Divider,
} from 'antd';
import './App_direction.css'
const InputGroup = Input.Group;
class Page extends React.Component {
    render() {
        return (
            <div className="direction-components">
                <Row>
                    <Col span={24}>
                        <Divider orientation="left">Input (Input Group) example</Divider>
                        <InputGroup compact>
                            <Input style={{ width: '20%' }} defaultValue="0571" />
                            <Input style={{ width: '30%' }} defaultValue="26888888" />
                        </InputGroup>
                        <Input style={{ width: '20%' }} defaultValue="0571" />
                    </Col>
                </Row>
            </div>
        );
    }
}
/**
 * 1、需要Input组件支持ConfigProvider-direction配置！！！！
 *  */
export default class App extends React.Component {
    state = {
        direction: 'ltr'
    };

    changeDirection = e => {
        const directionValue = e.target.value;
        this.setState({ direction: directionValue });
    };

    render() {
        const { direction } = this.state;
        console.log('direction:', direction)
        return (
            <>
                <div style={{ marginBottom: 16 }}>
                    <span style={{ marginRight: 16 }}>Change direction of components: </span>
                    <Radio.Group defaultValue="ltr" onChange={this.changeDirection}>
                        <Radio.Button key="ltr" value="ltr">
                            LTR
              </Radio.Button>
                        <Radio.Button key="rtl" value="rtl">
                            RTL
              </Radio.Button>
                    </Radio.Group>
                </div>
                <ConfigProvider direction={direction}>
                    <div className='page-wrapper'>
                        <Page />
                    </div>
                </ConfigProvider>
            </>
        );
    }
}
