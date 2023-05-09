import { Link } from "react-router-dom";

function MainPage() {
  return (
    <div>
      <h1>anasayfa</h1>
      <Link to="/books">Ürünler</Link><p>sayfamıza göz atın</p>
    </div>
  )
}

export default MainPage;
