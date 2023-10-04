import React from 'react';

interface PayloadItem {
    value: string;
    color: string;
}

interface CustomLegendProps {
    payload: PayloadItem[];
    color?: string;
}

const CustomCaption: React.FC<CustomLegendProps> = ({ payload }) => {
    return (
        <ul style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 0, listStyleType: 'none' }}>
            {payload.map((entry, index) => (
                <li key={`item-${index}`} style={{ display: 'flex', alignItems: 'center', marginRight: '16px' }}>
                    <span style={{ display: 'inline-block', width: '8px', height: '8px', borderRadius: '50%', backgroundColor: entry.color, marginRight: '8px' }}></span>
                    {entry.value}
                </li>
            ))}
        </ul>
    );
};

export default CustomCaption;
