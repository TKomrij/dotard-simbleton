import { useBusinesses} from "./BusinessProvider.js"
import { Business} from "./Business.js"


const contentTarget = document.querySelector(".activeBusinesses")

export const BusinessList = () => {
    const businessArray = useBusinesses()

    businessArray.forEach(
        (businessObject) => {
            contentTarget.innerHTML += Business(businessObject)
        }
    );
}


