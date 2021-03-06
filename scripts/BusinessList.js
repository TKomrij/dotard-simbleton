import { nycBusinesses, useBusinesses, manufacturingBusinesses, purchasingAgents, findBusiness } from "./BusinessProvider.js"
import { Business, nycBusiness, manufacturingBusiness, purchasingAgent} from "./Business.js"



export const BusinessList = () => {
    const businessArray = useBusinesses()
    const contentTarget = document.querySelector(".activeBusinesses")

    businessArray.forEach(
        (businessObject) => {
            contentTarget.innerHTML += Business(businessObject)
        }
    );
}


export const nycBusinessList = () => { 
    const contentTarget = document.querySelector(".businessList--newYork")

    nycBusinesses.forEach(
        (businessObject) => {
            contentTarget.innerHTML += nycBusiness(businessObject)
        }
    );
}


export const manufacturingBusinessList = () => {
    const contentTarget = document.querySelector(".businessList--manufacturing")

    manufacturingBusinesses.forEach(
        (businessObject) => {
            contentTarget.innerHTML += manufacturingBusiness(businessObject)
        }
    );
}


export const purchasingAgentList = () => {
    const contentTarget = document.querySelector(".agents")

    purchasingAgents.forEach(
        (businessObject) => {
            contentTarget.innerHTML += purchasingAgent(businessObject)
        }
    );
}


export const findTheBusiness = () => {
// Place an article element in your HTML with the class below
const companySearchResultArticle = document.querySelector(".foundCompanies")

document
    .querySelector("#companySearch")
    .addEventListener("keypress", keyPressEvent => {
        let businesses = []
        useBusinesses().forEach(
            (business) => {
                if (keyPressEvent.charCode === 13) {
                    businesses.push(business.companyName.includes(keyPressEvent.target.value)) 
                }

            }
        )
        console.log(businesses)
       
            
                // When user presses enter, find the matching business.
                // You can use the `.includes()` method strings to
                // see if a smaller string is part of a larger string.

                // Example:
                    
        

            const foundBusiness = findBusiness()
        
           

            companySearchResultArticle.innerHTML = `
                <h2>
                ${foundBusiness.companyName}
                </h2>
                <section>
                ${foundBusiness.addressFullStreet}

                </section>
                <section>
                ${foundBusiness.addressCity},
                ${foundBusiness.addressStateCode}
                ${foundBusiness.addressZipCode}
                </section>
            `;
        
        }
    );
    }
    