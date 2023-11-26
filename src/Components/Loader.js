import React from "react"
import { Html, useProgress } from "@react-three/drei"

export default function CanvasLoader() {
    const { progress } = useProgress()
    return (
        <Html as='div' style={{ display: "flex", justifyContent: "center", alignItems: "center", fontWeight: 800 }}>
            <p>{progress.toFixed(0)}%</p>
        </Html>
    )
}