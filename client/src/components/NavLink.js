import { Link } from 'react-router-dom'

const NavLink = ({ allergen, allergenID, onAllergenClick }) => (
    <Link to={`/products/filtered-by/${allergenID}`} onClick={() => onAllergenClick(allergenID)}>
        {allergen}
    </Link>
)

export default NavLink