function intersection(a, b) {

    if(a && a.length === 0 || (b && b.length === 0)) {
        return [];
    }

    let setA = new Set(a);
    let setB = new Set(b);

    let interSection = new Set();

    setA.forEach( (element) => {
        if(setB.has(element)) {
            interSection.add(element);
        }
    })

    return [...interSection];
}

module.exports = intersection;
