import React from 'react';
import { useGLTF } from '@react-three/drei';

interface ModelProps {
    rotationY: number;
}

export function Model({ rotationY }: ModelProps) {
    const { scene } = useGLTF('/crystalytics/wordcloud.glb');
    return <primitive object={scene} rotation={[0, rotationY, 0]} />;
}
