import { nycBusinesses, useBusinesses, manufacturingBusinesses, purchasingAgents} from "./BusinessProvider.js"
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


