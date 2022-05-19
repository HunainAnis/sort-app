import { useEffect } from "react";
import { Dropdown, DropdownButton } from "react-bootstrap";

const Header = ({ selected, setSelected, dropdownItems, setSortedProducts, products }) => {

    const sortProducts = (type) => {
        setSelected(type)
        if(type.name==='lowToHigh') {
            let updatedProducts = products.sort((a, b)=>a.price-b.price);
            setSortedProducts(updatedProducts)
        }
        if(type.name==='highToLow') {
            let updatedProducts = products.sort((a, b)=>b.price-a.price);
            setSortedProducts(updatedProducts)
        }
        else if(type.name==='featured') {
            let allFeatured = products.filter(k=>k.featured);
            let allNonFeatured = products.filter(k=>!k.featured);
            let updatedProducts = [...allFeatured, ...allNonFeatured];
            setSortedProducts(updatedProducts)
        }
        else if(type.name==='newest') {
            let updatedProducts = products.sort((a, b)=>new Date(b.added).getTime()-new Date(a.added).getTime());
            setSortedProducts(updatedProducts)
        }
    }

    useEffect(()=>{
        if(selected?.name) {
            sortProducts(selected)
        }
    },[products])

    return(
        <div className="w-100 bg-dark text-white py-5 px-3">
            <h1>
                SORTING APP
            </h1>
            <div className="d-flex justify-content-end">
                <DropdownButton variant='success' title={selected.label}>
                    {
                        dropdownItems.map((item, i)=>(
                            <Dropdown.Item key={i} onClick={()=>sortProducts(item)}>{item.label}</Dropdown.Item>
                        ))
                    }
                </DropdownButton>
            </div>
        </div>
    )
}

export default Header;