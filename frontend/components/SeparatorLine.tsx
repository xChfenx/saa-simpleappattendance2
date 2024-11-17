export default function SeparatorLine({height = "0.2rem", backgroundColor = "#dae0df", width="100%"}){
  return (
    <hr style={{
      height: height,
      width: width,
      backgroundColor: backgroundColor,
      border: "none",
    }}/>
  )
}