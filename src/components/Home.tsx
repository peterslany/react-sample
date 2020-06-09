import React, { useState } from 'react';
import { Typography } from 'antd';

export function Home(props : any) {
    const [value, setValue] = useState(0.5)
    return (
        <div>
            <Typography.Title>
                Welcome to my webpage!
            </Typography.Title>
        </div>
    );
}