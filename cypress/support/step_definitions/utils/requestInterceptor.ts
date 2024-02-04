export default function requestInterceptor(
    url: string,
): {resumeRequest: () => void} {
    let resumeRequest;
    const interceptor = new Promise((resolve) => {
        resumeRequest = resolve
    })

    cy.intercept(url, (request) => {
        return interceptor.then(() => {
            request.reply()
        })
    })

    return {resumeRequest}
}