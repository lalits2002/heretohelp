import React from 'react'
import { View, Text } from 'react-native';
import Svg, { G, Path } from 'react-native-svg';

interface ChatIconProps {
    color?: string,
    width?: number,
    height?: number,
}

const ChatIcon = ({ color = "#9d9fa8", width = 199.345, height = 174.92 }: ChatIconProps) => {
    return (
        <Svg width={width} height={height} viewBox="0 0 199.345 174.92">
  <G id="Frame" transform="translate(0 1.765)">
    <Path id="Vector" d="M125.445,0H17.195A17.353,17.353,0,0,0,0,17.413V81.738A17.353,17.353,0,0,0,17.195,99.15h7.647a5.259,5.259,0,0,1,5.216,5.282v20.054a2.058,2.058,0,0,0,3.359,1.611L64.4,100.359a5.3,5.3,0,0,1,3.315-1.209h57.728a17.353,17.353,0,0,0,17.195-17.413V17.413A17.353,17.353,0,0,0,125.445,0Z" transform="translate(0 46.582)" 
    fill={color}
    />
    <Path id="Vector-2" data-name="Vector" d="M17.195,0h108.25a17.353,17.353,0,0,1,17.195,17.413V81.738a17.353,17.353,0,0,1-17.195,17.413H117.8a5.259,5.259,0,0,0-5.216,5.282v11.057a6.239,6.239,0,0,1-10.211,4.879L78.237,100.314a5.3,5.3,0,0,0-3.315-1.209H17.195A17.353,17.353,0,0,1,0,81.693V17.413A17.353,17.353,0,0,1,17.195,0Z" transform="translate(54.206 0.735)" 
    fill={color} stroke="#fdfdfd" stroke-width="5"/>
  </G>
</Svg>
    );
};

export default ChatIcon;