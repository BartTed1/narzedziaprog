function search(query, data) {
    let result = {
        result: [],
        query: query,
        time: 0
    }
    const start = new Date().getTime();
    data.forEach(e => {
        if (e.keys == query) result.result.push(e.value);
    });
    result.time = new Date().getTime() - start;
    return result;
}

module.exports.search = search;