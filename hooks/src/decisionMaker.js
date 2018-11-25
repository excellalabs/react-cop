export function decisionMaker() {
    let status = Math.random() >= .50;
    return status ? 'Accepted' : 'DENIED'
}