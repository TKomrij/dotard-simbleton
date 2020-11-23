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