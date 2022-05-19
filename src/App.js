import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import Header from './components/Header';
import Products from './components/Products';

const dropdownItems = [
  {
    name:'newest',
    label: 'Newest'
  },
  {
    name:'featured',
    label: 'Featured'
  },
  {
    name:'lowToHigh',
    label: 'Price (Low - High)'
  },
  {
    name:'highToLow',
    label: 'Price (High - Low)'
  },
]

function App() {
  const [ selected, setSelected ] = useState(dropdownItems[0])
  const [ products, setProducts ] = useState([])
  const [ sortedProducts, setSortedProducts ] = useState(products);

  const getData = () => {
    fetch('/api/fakeData.json').then(async (resp) => {
      let data = await resp.json()
      setProducts(data.products)
    })
    .catch(err=>{
      console.log("fetch", err)
    })
  }

  useEffect(() => {
    getData()
  },[])

  useEffect(()=>{
    setSortedProducts(products)
  },[products])

  return (
    <div>
      <Header
        selected={selected}
        setSelected={setSelected}
        products={products}
        setSortedProducts={setSortedProducts}
        dropdownItems={dropdownItems}
      />
      <Products 
        sortedProducts={sortedProducts}
      />
    </div>
  );
}

export default App;
