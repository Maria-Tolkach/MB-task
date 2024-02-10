import Link from "next/link"

export const TheHeader = () => {
  return (
    <header className="container">
      <Link href={"/"}>Home</Link>
      <Link href={"/cars"}>Cars</Link>
      <Link href={"/about"}>About</Link>
    </header>
  )
}
