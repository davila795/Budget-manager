export const checkBudget = (budget, rest) => {
    let style

    if ((budget / 4) > rest) {
        style = 'alert alert-danger'
    } else if ((budget / 2) > rest) {
        style = 'alert alert-warning'
    } else {
        style = 'alert alert-success'
    }

    return style
}