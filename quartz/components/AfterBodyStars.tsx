// src/components/AfterBodyStars.tsx
import { QuartzComponent, QuartzComponentProps } from "./types"

// —— make a *component*, not a constructor ——
const AfterBodyStars: QuartzComponent = (_props: QuartzComponentProps) => (
  <div style={{ textAlign: "center", margin: "2rem 0", fontSize: "1.5rem", color: "#888" }}>
    <span>***</span>
  </div>
)

export default AfterBodyStars // 👈 default export is now the component itself
