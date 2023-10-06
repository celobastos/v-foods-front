import React from 'react';
import './customCaption.css';

interface PayloadItem {
    value: string;
    color: string;
}

interface CustomLegendProps {
    payload: PayloadItem[];
    color?: string;
}

const CustomCaptionHorizontal: React.FC<CustomLegendProps> = ({ payload }) => {
    return (
        <div className="custom-caption-container">
            {payload.map((entry, index) => (
                <div key={`item-${index}`} className="legend-item">
                    <span className="legend-icon" style={{backgroundColor: entry.color}}></span>
                    {entry.value}
                </div>
            ))}
        </div>
    );
};

export default CustomCaptionHorizontal;
