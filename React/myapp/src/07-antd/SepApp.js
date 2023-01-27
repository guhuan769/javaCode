import { Button, message, Steps, theme } from 'antd';
import { useState } from 'react';

const steps = [
    {
        title: 'First',
        content: 'First-content',
    },
    {
        title: 'Second',
        content: 'Second-content',
    },
    {
        title: 'Last',
        content: 'Last-content',
    },
];

const StepApp = () => {
    const { token } = theme.useToken();
    const [current, setCurrent] = useState(0);
    const next = () => {
        setCurrent(current + 1);
    };
    const prev = () => {
        setCurrent(current - 1);
    };
    const items = steps.map((item) => ({
        key: item.title,
        title: item.title,
    }));
    const contentStyle = {
        lineHeight: '260px',
        textAlign: 'center',
        color: token.colorTextTertiary,
        backgroundColor: token.colorFillAlter,
        borderRadius: token.borderRadiusLG,
        border: `1px dashed ${token.colorBorder}`,
        marginTop: 16,
    };
    return (
        <>
            <Steps current={current} items={items} />

            {current === 0 && <div>000</div>}
            {current === 1 && <div>1111</div>}
            {current === 2 && <div>222</div>}

            {current < 2 && <Button type='primary'
                onClick={() => {
                    next()
                }}
            >下一步</Button>}

            {current > 0 && <Button type='primary'
                onClick={() => {
                    prev()
                }}
            >上一步</Button>}

            {current === 2 && <Button type='primary' danger>完成</Button>}

            {/* <div style={contentStyle}>{steps[current].content}</div>
            <div
                style={{
                    marginTop: 24,
                }}
            >
                {current < steps.length - 1 && (
                    <Button type="primary" onClick={() => next()}>
                        Next
                    </Button>
                )}
                {current === steps.length - 1 && (
                    <Button type="primary" onClick={() => message.success('Processing complete!')}>
                        Done
                    </Button>
                )}
                {current > 0 && (
                    <Button
                        style={{
                            margin: '0 8px',
                        }}
                        onClick={() => prev()}
                    >
                        Previous
                    </Button>
                )}
            </div> */}
        </>
    );
};

export default StepApp;