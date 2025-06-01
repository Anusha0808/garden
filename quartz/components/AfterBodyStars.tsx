// src/components/AfterBodyStars.tsx

import { QuartzComponentConstructor, QuartzComponentProps } from "./types"

const AfterBodyStars: QuartzComponentConstructor = () => {
    function AfterBodyStarsComponent(_props: QuartzComponentProps) {
    return (
        <div style={{ textAlign: "center", margin: "2rem 0", fontSize: "1.5rem", color: "#888" }}>
        <span>***</span>
        </div>
    )
}

return AfterBodyStarsComponent
}

export default AfterBodyStars
