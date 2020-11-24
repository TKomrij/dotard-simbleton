export const Business = (businessObject) => {
    return `
        <section class="business">
            <h2 class="business__companyName">${businessObject.companyName}</h2>
            <div class="business__companyAddressFullStreet">${businessObject.addressFullStreet}
            </div>
            <div class="business__companyAddress">${businessObject.addressCity}, ${businessObject.addressStateCode} ${businessObject.addressZipCode}
            </div>
        </section>
        <hr>
    `
}

export const nycBusiness = (nycBusinessObject) => {
    return `
        <section class="nycBusiness">
            <h2 class="business__companyName">${nycBusinessObject.companyName}</h2>
            <div class="business__companyAddressFullStreet">${nycBusinessObject.addressFullStreet}
            </div>
            <div class="business__companyAddress">${nycBusinessObject.addressCity}, ${nycBusinessObject.addressStateCode} ${nycBusinessObject.addressZipCode}
            </div>
        </section>
        <hr>
    `
}

export const manufacturingBusiness = (manufacturingBusinessObject) => {
    return `
        <section class="manufacturingBusiness">
            <h2 class="business__companyName">${manufacturingBusinessObject.companyName}</h2>
            <div class="business__companyAddressFullStreet">${manufacturingBusinessObject.addressFullStreet}
            </div>
            <div class="business__companyAddress">${manufacturingBusinessObject.addressCity}, ${manufacturingBusinessObject.addressStateCode} ${manufacturingBusinessObject.addressZipCode}
            </div>
        </section>
        <hr>
    `
}


export const purchasingAgent = (purchasingAgentObject) => {
    return `
        <section class="purchasingAgents">
            <h2 class="business__purchasingAgentName">${purchasingAgentObject.fullName}</h2>
            <div class="business__purchasingAgentCompany">${purchasingAgentObject.company}
            </div>
            <div class="business__companyAddress">${purchasingAgentObject.phoneNumber}
            </div>
        </section>
        <hr>
    `
}